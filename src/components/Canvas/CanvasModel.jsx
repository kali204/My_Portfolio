import React, { useEffect, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useAnimations } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({ animationIndex }) => {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, "/model2.glb");
  const { animations } = gltf;
  const { actions } = useAnimations(animations, group);

  // Play the selected animation
  useEffect(() => {
    if (actions && animations[animationIndex]) {
      const animationName = animations[animationIndex].name;
      actions[animationName].reset().fadeIn(0.5).play();
    }
  }, [actions, animations, animationIndex]);

  return (
    <group ref={group}>
      <primitive object={gltf.scene} scale={1.5} />
    </group>
  );
};

const CanvasModel = () => {
  const [animationIndex, setAnimationIndex] = useState(0);

  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="h-96">
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Model animationIndex={animationIndex} />
        <OrbitControls />
      </Canvas>
      
    </>
  );
};

export default CanvasModel;