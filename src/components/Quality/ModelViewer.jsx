import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls, Stage } from "@react-three/drei";


function Model({ rotationSpeed = 0.01 }) {
  const group = useRef();
  const { scene } = useGLTF("/3m.gltf");

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <Center>
      <group ref={group}>
        <primitive object={scene} />
      </group>
    </Center>
  );
}

useGLTF.preload("/3m.gltf");

function ModelViewer() {
  // Static values instead of leva controls
  const fov = 35;
  const scale = 0.6;
  const rotationSpeed = 0.02;
  const intensity = 1;

  return (
    <>
      <Canvas
        camera={{ fov, position: [0, 0, 5] }}
        dpr={[1, 2]}
      >
        {/* Lighting + Environment */}
        <Stage
          intensity={intensity}
          environment="city"
          adjustCamera={false}
        >
          {/* Auto camera fit */}
          <Bounds clip observe margin={1.5}>
            <group scale={scale}>
              <Model rotationSpeed={rotationSpeed} />
            </group>
          </Bounds>
        </Stage>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={false}
          enableRotate={false}
        />
      </Canvas>
    </>
  );
}

export default ModelViewer;

