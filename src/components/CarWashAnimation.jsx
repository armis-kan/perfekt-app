import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei';
import { motion } from 'framer-motion';
import WaterSpray from './WaterSpray';

const RotatingMesh = ({ model }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      <motion.mesh
        ref={meshRef}
        scale={[3, 3, 3]}
        position={[0, -1, 0]}
      >
        <primitive object={model.scene} />
      </motion.mesh>
      <mesh
        position={[0, -1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[5.5, 5.5]} />
        <meshStandardMaterial color="black" opacity={0.2} transparent />
      </mesh>
    </>
  );
};

const LightIndicator = ({ position }) => (
  <SpotLight
    position={position}
    angle={Math.PI / 6}
    penumbra={1}
    intensity={1.5}
    color="white"
    castShadow
    shadow-mapSize-width={2048}
    shadow-mapSize-height={2048}
    shadow-camera-near={1}
    shadow-camera-far={100}
    shadow-camera-left={-10}
    shadow-camera-right={10}
    shadow-camera-top={10}
    shadow-camera-bottom={-10}
  />
);

const CarWashAnimation = () => {
  const [model, setModel] = useState(null);
  const gltf = useLoader(GLTFLoader, '/assets/models/model.glb');

  useEffect(() => {
    if (gltf) {
      setModel(gltf);
    }
    return () => {
    };
  }, [gltf]);

  if (!model) {
    return null;
  }

  return (
    <Canvas>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={1}
        castShadow
      />
      <directionalLight
        position={[-10, 10, 10]}
        intensity={1}
        castShadow
      />
      {/* White Spot Lights */}
      <LightIndicator position={[5, 5, 5]} />
      <LightIndicator position={[-5, 5, 5]} />
      <LightIndicator position={[5, 5, -5]} />
      <LightIndicator position={[-5, 5, -5]} />
      <PerspectiveCamera makeDefault position={[8, 3, 8]} rotation={[-Math.PI / 4, Math.PI / 4, 0]} />
      <OrbitControls />
      <WaterSpray targetPosition={[0, -1, 1]} gunPosition={[6, 3, 4]} />
      <WaterSpray targetPosition={[0, 1, 1]} gunPosition={[-6, 3, 4]} color='red' />
      <RotatingMesh model={model} />
    </Canvas>
  );
};

export default CarWashAnimation;
