import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import "../styles/Render.css";

const Model = () => {
  const { scene } = useGLTF("/doPlanta.glb");
  return <primitive object={scene} scale={1} />;
};

export const Render3D = () => {
  return (
    <div className="render">
      <div className="blur" onClick={() => console.log("click outside")} />
      <Canvas camera={{ position: [25, 10, -24], fov: 15 }} className="canvas">
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} />
            <Suspense fallback={null}>
            <Model />
            <Environment preset="sunset" />
            </Suspense>
            <OrbitControls />
      </Canvas>
    </div>
  );
};