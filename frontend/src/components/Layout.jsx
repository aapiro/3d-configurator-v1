import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Scene from './Scene';

// Main Layout Component
function Layout({ children, dimensions }) {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />
        <Scene dimensions={dimensions} />
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />
      </Canvas>
      
      {/* UI Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;