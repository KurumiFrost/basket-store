"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

function createBasketballTexture(): THREE.CanvasTexture {
  const size = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  // Base orange color
  ctx.fillStyle = "#C84B11";
  ctx.fillRect(0, 0, size, size);

  // Add subtle grain/roughness
  for (let i = 0; i < 8000; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = Math.random() * 1.5;
    const alpha = Math.random() * 0.15;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,0,0,${alpha})`;
    ctx.fill();
  }

  // Seam line style
  ctx.strokeStyle = "#111111";
  ctx.lineWidth = 10;
  ctx.lineCap = "round";

  // Horizontal center seam
  ctx.beginPath();
  ctx.moveTo(0, size / 2);
  ctx.lineTo(size, size / 2);
  ctx.stroke();

  // Vertical center line
  ctx.beginPath();
  ctx.moveTo(size / 2, 0);
  ctx.lineTo(size / 2, size);
  ctx.stroke();

  // Left curved seam
  ctx.beginPath();
  ctx.moveTo(size * 0.25, 0);
  ctx.bezierCurveTo(
    size * 0.05, size * 0.25,
    size * 0.05, size * 0.75,
    size * 0.25, size
  );
  ctx.stroke();

  // Right curved seam
  ctx.beginPath();
  ctx.moveTo(size * 0.75, 0);
  ctx.bezierCurveTo(
    size * 0.95, size * 0.25,
    size * 0.95, size * 0.75,
    size * 0.75, size
  );
  ctx.stroke();

  return new THREE.CanvasTexture(canvas);
}

function Ball() {
  const meshRef = useRef<THREE.Mesh>(null);

  const texture = useMemo(() => createBasketballTexture(), []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.6;
      meshRef.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.6, 64, 64]}>
      <meshStandardMaterial
        map={texture}
        roughness={0.85}
        metalness={0.05}
      />
    </Sphere>
  );
}

export default function Basketball3D() {
  return (
    <div className="ball-float" style={{ width: "340px", height: "340px" }}>
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
        <pointLight position={[-4, -4, -4]} intensity={0.4} color="#ff6633" />
        <Ball />
      </Canvas>
    </div>
  );
}
