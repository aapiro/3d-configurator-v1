import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Componente del mueble 3D basado en dimensiones
function Furniture({ dimensions }) {
  const meshRef = useRef();
  
  // Ajustar el tamaño del mueble según las dimensiones
  const width = dimensions.width / 100;   // Convertir cm a metros
  const height = dimensions.height / 100;
  const depth = dimensions.depth / 100;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      {/* Base del mueble */}
      <mesh position={[0, height/2, 0]} ref={meshRef}>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color="#8B4513" metalness={0.2} roughness={0.7} />
      </mesh>
      
      {/* Lados del mueble */}
      <mesh position={[0, 0, -depth/2]}>
        <boxGeometry args={[width, height, 0.02]} />
        <meshStandardMaterial color="#A0522D" metalness={0.1} roughness={0.8} />
      </mesh>
      
      <mesh position={[0, 0, depth/2]}>
        <boxGeometry args={[width, height, 0.02]} />
        <meshStandardMaterial color="#A0522D" metalness={0.1} roughness={0.8} />
      </mesh>
      
      {/* Frente del mueble */}
      <mesh position={[0, 0, depth/2 + 0.01]}>
        <boxGeometry args={[width, height, 0.02]} />
        <meshStandardMaterial color="#CD853F" metalness={0.1} roughness={0.7} />
      </mesh>
    </group>
  );
}

// Componente de la escena principal
function Scene({ dimensions }) {
  return (
    <>
      {/* Luces */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Mueble */}
      <Furniture dimensions={dimensions} />
      
      {/* Suelo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#333" metalness={0.1} roughness={0.8} />
      </mesh>
    </>
  );
}

export default Scene;