import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import "../styles/Render.css";
import { config } from "../config/config";

const Model = ({ url }: { url: string }) => {
  const BASE_URL = config.API_URL;
  const { scene } = useGLTF(`${BASE_URL}${url}`);
  return <primitive object={scene} scale={1} />;
};

export const Render3D = ({
  url,
  position
}: {
  url: string;
  position?: [number, number, number]
}) => {
  return (
    <div className="render">
      <Canvas camera={{ position: position ? position : [5, 0, 4], fov: 15 }} className="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <Suspense fallback={null}>
          <Model url={`${url}`} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
