import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber"; // for 3D rendering
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // for 3D components and GLTF loader
import CanvasLoader from '../Loader'; // Custom loading spinner

// Optimized Earth component
const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf', true); // Set to true to cache model and reduce re-renders
  
  // Memoize the Earth scene to prevent unnecessary re-renders
  const earthScene = useMemo(() => earth.scene, [earth]);

  return (
    <primitive object={earthScene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {/* Suspense for lazy-loaded components */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth /> {/* Earth component that loads the GLTF model */}
      </Suspense>

      {/* Preload all assets to ensure they're available when needed */}
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
