import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Model({ modelPath, isMobile }) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef(null);

  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      modelRef.current.position.sub(center);
    }
  }, []);

  const modelScale = isMobile ? 1.4 : 2.2;

  return (
    <group ref={modelRef} scale={modelScale} rotation={[0.4, 0, 0]} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function StaticModel({ modelPath = '/1.glb' }) {
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const canvasElement = canvasRef.current.querySelector('canvas');
      if (canvasElement) {
        canvasElement.style.touchAction = 'none';
      }
    }
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        touchAction: 'auto'
      }}
    >
      <Canvas
        style={{
          pointerEvents: 'none',
          touchAction: 'auto'
        }}
        shadows
        gl={{ antialias: true }}
        camera={{ position: [-5.5, 1, 5], fov: 50 }}
      >
        {/* Lights */}
        <ambientLight intensity={7.5} />
        <directionalLight position={[20, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-21, 10.6, 21.82]} intensity={1} castShadow />
        <directionalLight position={[10, 1.6, 2.82]} intensity={1} castShadow />
        <directionalLight position={[90, 20.6, 56.82]} intensity={1} castShadow />
        
        {/* Orbit Controls - completely disabling touch interactions */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotateSpeed={3}
          autoRotate={true}
        />
        
        <Model modelPath={modelPath} isMobile={isMobile} />
      </Canvas>
    </div>
  );
}