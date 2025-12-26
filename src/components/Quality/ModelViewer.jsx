import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls, Stage } from "@react-three/drei";
import { Leva, useControls } from "leva";


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
  const {
    fov,
    scale,
    rotationSpeed,
    intensity,
  } = useControls("3D Controls", {
    fov: { value: 35, min: 20, max: 70 },
    scale: { value: 0.8, min:0.2, max: 1.6, step: 0.01 },
    rotationSpeed: { value: 0.02, min: 0, max: 0.03 },
    intensity: { value: 1, min: 0.2, max: 3 },
  });

  return (
    <>
      {/* <Leva collapsed={false} /> */}

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

