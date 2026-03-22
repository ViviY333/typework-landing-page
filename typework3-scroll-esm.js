/**
 * typework3-scroll-esm.js — ESM 版本滚动驱动位移/旋转
 * 通过 esm.sh 处理 three / GLTFLoader 依赖解析问题。
 */

import * as THREE from "https://esm.sh/three@0.160.0";
import { GLTFLoader } from "https://esm.sh/three@0.160.0/examples/jsm/loaders/GLTFLoader.js";

const GLB_URL = new URL("./download/typework/typework3.glb", import.meta.url).href;

function clamp01(x) {
  return Math.max(0, Math.min(1, x));
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function injectStyles() {
  if (document.getElementById("tw3-scroll-styles")) return;
  const el = document.createElement("style");
  el.id = "tw3-scroll-styles";
  el.textContent = `
    #tw3-scroll {
      position: fixed;
      inset: 0;
      z-index: 5;
      pointer-events: none;
      overflow: hidden;
    }
    #tw3-canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  `;
  document.head.appendChild(el);
}

function fitModelToScene(root, targetSize = 2.4) {
  root.updateMatrixWorld(true);

  const box = new THREE.Box3().setFromObject(root);
  const center = new THREE.Vector3();
  const size = new THREE.Vector3();
  box.getCenter(center);
  box.getSize(size);
  const maxDim = Math.max(size.x, size.y, size.z, 1e-6);
  const s = targetSize / maxDim;

  root.scale.setScalar(s);
  // worldCenter ≈ s * localCenter + position -> position = -s * localCenter
  root.position.copy(center).multiplyScalar(-s);
}

const canvas = document.getElementById("tw3-canvas");
if (!canvas) {
  console.warn("[typework3-scroll-esm] 未找到 #tw3-canvas");
} else {
  injectStyles();

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  // 某些版本里可能不存在该字段：做兜底，避免报错影响渲染
  if (renderer.outputColorSpace !== undefined) {
    renderer.outputColorSpace = THREE.SRGBColorSpace;
  }
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.08, 200);

  scene.add(new THREE.AmbientLight(0xffffff, 0.72));
  const dir = new THREE.DirectionalLight(0xffffff, 0.95);
  dir.position.set(2.5, 4, 3);
  scene.add(dir);
  const fill = new THREE.DirectionalLight(0xe8f0ff, 0.35);
  fill.position.set(-3, 1, -2);
  scene.add(fill);

  let model = null;
  const loader = new GLTFLoader();
  loader.load(
    GLB_URL,
    (gltf) => {
      model = gltf.scene;
      fitModelToScene(model, 2.4);
      scene.add(model);
      renderFrame();
    },
    undefined,
    (err) => {
      console.error("[typework3-scroll-esm] GLB 加载失败，请确认文件存在:", GLB_URL, err);
    }
  );

  function applyScrollTransform(t) {
    if (!model) return;
    const e = easeInOutCubic(t);

    const posStart = { x: 0.35, y: 0.15, z: 0.1 };
    const posEnd = { x: -0.45, y: -0.55, z: -0.85 };
    model.position.x = lerp(posStart.x, posEnd.x, e);
    model.position.y = lerp(posStart.y, posEnd.y, e);
    model.position.z = lerp(posStart.z, posEnd.z, e);

    const rotX0 = 0.08;
    const rotX1 = 0.28;
    const rotY0 = -0.55;
    const rotY1 = 0.75;
    model.rotation.x = lerp(rotX0, rotX1, e);
    model.rotation.y = lerp(rotY0, rotY1, e);
    model.rotation.z = lerp(0, 0.06, e);
  }

  function scrollT() {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    return clamp01(window.scrollY / maxScroll);
  }

  function renderFrame() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    camera.position.set(0, 0.35, 4.2);
    camera.lookAt(0, 0.05, 0);

    if (model && !prefersReducedMotion()) {
      applyScrollTransform(scrollT());
    } else if (model) {
      applyScrollTransform(0);
    }

    renderer.render(scene, camera);
  }

  let ticking = false;
  function onScroll() {
    if (prefersReducedMotion()) return;
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      renderFrame();
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    renderFrame();
  });

  renderFrame();
}

