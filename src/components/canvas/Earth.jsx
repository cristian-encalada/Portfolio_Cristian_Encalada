import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./star_wars/scene.gltf");

  return <primitive object={earth.scene} scale={0.3} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {/* Directional light for general illumination */}
      <directionalLight position={[5, 10, 0]} intensity={1} />

      {/* Hemisphere light for ambient lighting */}
      <hemisphereLight skyColor="#ffffff" groundColor="#a0a0a0" intensity={0.8} />

      {/* Point light for additional illumination */}
      <pointLight position={[0, 0, 5]} intensity={0.5} />

      {/* Spot light for highlighting specific areas */}
      <spotLight position={[5, 10, 10]} angle={0.2} penumbra={0.2} intensity={2} />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
