# 在独立 Next.js + shadcn 项目中集成 `AnimatedCardStack`

## 当前仓库说明

**`typework` 根目录是静态站点**（`typework.html`、CSS、无 `package.json`），**不包含** React、Tailwind、TypeScript 或 shadcn。  
组件源码已放在便于复制的路径：

- `components/ui/animate-card-animation.tsx` — 主组件（默认导出 `AnimatedCardStack`）
- `components/demo-animated-card.tsx` — 示例页面用法（需 `@/` 别名）

若要在产品中真正运行该组件，请**新建** Next.js 项目（或在你已有的 React + Tailwind + TS 应用中）按下面步骤操作。

---

## 为什么建议使用 `/components/ui`

shadcn/ui 约定把可复用、偏底层的 UI 放在 **`components/ui`**，便于：

- 与 `npx shadcn@latest add …` 生成的组件路径一致  
- 与文档、示例中的 `@/components/ui/...` 导入路径一致  
- 与 `demo-animated-card.tsx` 中的 `import … from "@/components/ui/animate-card-animation"` 一致  

若你使用其它目录，只需同步修改 **tsconfig `paths`** 与 **import 路径**。

---

## 0. 新建 Next.js（TypeScript + Tailwind + App Router）

在项目**外层**目录执行（不要在仅含静态文件的 `typework` 里强行混用，除非你已改为 monorepo）：

```bash
npx create-next-app@latest typework-app --typescript --tailwind --eslint --app --src-dir=false
cd typework-app
```

（根据提示选择包管理器；**不要**在此文档步骤里要求你运行 `yarn dev` / `npm run dev`，本地预览请自行执行。）

---

## 1. 初始化 shadcn/ui

```bash
npx shadcn@latest init
```

按交互选择样式（如 New York）、基础色、CSS 变量等。完成后会生成 `components.json`，并配置 `tailwind.config`、全局 CSS 变量（`bg-card`、`border-border`、`text-foreground` 等 —— **本组件依赖这些语义类名**）。

---

## 2. 安装 framer-motion

```bash
npm install framer-motion
# 或: pnpm add framer-motion / yarn add framer-motion
```

**依赖说明：**

| 依赖 | 用途 |
|------|------|
| `react` / `react-dom` | Next 已带 |
| `framer-motion` | `motion`、`AnimatePresence` |
| Tailwind + shadcn 主题 | `bg-card`、`border-border`、`text-foreground`、`text-muted-foreground` 等 |

无需额外 Context；组件为客户端组件，已带 `"use client"`。

---

## 3. 配置路径别名 `@/`

若 `create-next-app` 未生成，在 **`tsconfig.json`** 的 `compilerOptions.paths` 中确保有：

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

（若使用 `src/` 目录，改为 `"@/*": ["./src/*"]` 并相应把 `components` 放在 `src/components`。）

---

## 4. 复制组件文件

将本仓库中的文件复制到 Next 项目：

| 源（本仓库） | 目标（Next 项目） |
|----------------|-------------------|
| `components/ui/animate-card-animation.tsx` | `components/ui/animate-card-animation.tsx` |

可选：将 `components/demo-animated-card.tsx` 改为 **`app/demo/page.tsx`**（或 `app/page.tsx`）中直接：

```tsx
import AnimatedCardStack from "@/components/ui/animate-card-animation";

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <AnimatedCardStack />
    </main>
  );
}
```

---

## 5. 图片资源

`cardData` 内已使用 **Unsplash** 静态图（见组件内 URL）。生产环境建议：

- 换为你自己的资源或 Next `<Image>`（需配置 `remotePatterns`）；或  
- 继续用外链，注意 Unsplash 使用条款与性能（体积、CDN）。

---

## 6. 组件 API 与扩展（设计问题简答）

| 问题 | 建议 |
|------|------|
| 会传入什么 props？ | 当前为 **无 props**；可把 `cardData` / `initialCards` 改为 props 或从 CMS 拉取。 |
| 状态管理？ | 仅用 **useState**；无需 Redux/Zustand，除非多页面共享同一栈状态。 |
| 资源？ | 三张图在 `cardData`；按钮内为内联 SVG，可按需换成 `lucide-react` 的 `ChevronRight`。 |
| 响应式？ | 已有 `sm:` 断点；小屏卡片宽度 `324px`，大屏 `512px`，容器 `sm:w-[644px]`。 |
| 放在应用的哪里？ | 适合营销页 / 落地页 **Hero 旁**、作品集区块或 **独立 `/demo` 页** 展示。 |

---

## 7. `handleAnimate` 与 `isAnimating` 说明

示例里 `setIsAnimating(true)` 后立刻 `setIsAnimating(false)`，退出动画若需与 `isAnimating` 联动，可在 `requestAnimationFrame` 或 `setTimeout` 中与 `AnimatePresence` 的 `onExitComplete` 对齐后再复位（可按需自行加强）。

---

集成完成后，在 Next 项目根目录执行构建验证：

```bash
npm run build
```

（开发服务器启动请自行按需运行，此处不代为执行。）
