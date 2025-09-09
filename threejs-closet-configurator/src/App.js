import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import './App.css';

// Componente para el mueble de estantería
function Shelf({ dimensions, position, color }) {
  const meshRef = useRef();
  
  // Desestructuramos las dimensiones
  const [width, height, depth] = dimensions;
  
  return (
    <mesh ref={meshRef} position={position}>
      {/* Cuerpo del mueble */}
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} />
      
      {/* Soportes laterales */}
      <mesh position={[0, height/2, -depth/2 + 0.1]}>
        <boxGeometry args={[width, 0.1, 0.2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Soporte inferior */}
      <mesh position={[0, -height/2 + 0.1, 0]}>
        <boxGeometry args={[width, 0.2, depth]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
    </mesh>
  );
}

// Componente para las estanterías
function ShelfLevels({ levels, dimensions, position, color }) {
  const [width, height, depth] = dimensions;
  
  return (
    <>
      {Array.from({ length: levels }).map((_, i) => {
        const levelPosition = [
          0,
          -height/2 + (i * (height / (levels + 1))) + (height / (levels + 1)),
          0
        ];
        
        return (
          <mesh key={i} position={[...position, ...levelPosition]}>
            <boxGeometry args={[width - 0.2, 0.1, depth]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
        );
      })}
    </>
  );
}

// Componente principal del configurador
function ClosetConfigurator() {
  const [dimensions, setDimensions] = useState([2, 3, 0.5]); // Ancho, alto, profundidad (en metros)
  const [levels, setLevels] = useState(4); // Número de estanterías
  const [color, setColor] = useState('#8B4513'); // Color del mueble
  
  return (
    <div className="configurator-container">
      <div className="controls-panel">
        <h2>Configurador de Armario</h2>
        
        <div className="control-group">
          <label>Ancho (m): {dimensions[0]}</label>
          <input 
            type="range" 
            min="1" 
            max="5" 
            step="0.1"
            value={dimensions[0]}
            onChange={(e) => setDimensions([parseFloat(e.target.value), dimensions[1], dimensions[2]])}
          />
        </div>
        
        <div className="control-group">
          <label>Alto (m): {dimensions[1]}</label>
          <input 
            type="range" 
            min="2" 
            max="6" 
            step="0.1"
            value={dimensions[1]}
            onChange={(e) => setDimensions([dimensions[0], parseFloat(e.target.value), dimensions[2]])}
          />
        </div>
        
        <div className="control-group">
          <label>Profundidad (m): {dimensions[2]}</label>
          <input 
            type="range" 
            min="0.3" 
            max="1" 
            step="0.1"
            value={dimensions[2]}
            onChange={(e) => setDimensions([dimensions[0], dimensions[1], parseFloat(e.target.value)])}
          />
        </div>
        
        <div className="control-group">
          <label>Número de estanterías: {levels}</label>
          <input 
            type="range" 
            min="2" 
            max="8" 
            step="1"
            value={levels}
            onChange={(e) => setLevels(parseInt(e.target.value))}
          />
        </div>
        
        <div className="control-group">
          <label>Color:</label>
          <input 
            type="color" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
      
      <div className="scene-container">
        <Canvas>
          <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          
          {/* Luz ambiente */}
          <ambientLight intensity={0.5} />
          
          {/* Luz direccional */}
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          {/* Mueble principal */}
          <Shelf 
            dimensions={dimensions}
            position={[0, 0, 0]}
            color={color}
          />
          
          {/* Estanterías internas */}
          <ShelfLevels 
            levels={levels}
            dimensions={dimensions}
            position={[0, 0, 0]}
            color={color}
          />
          
          {/* Suelo */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color="#f0f0f0" />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ClosetConfigurator />
    </div>
  );
}

export default App;