import React, { useState } from 'react'
import Layout from './components/Layout'
import ConfigPanel from './components/ConfigPanel'
import DetailsPanel from './components/DetailsPanel'
import MaterialsPanel from './components/MaterialsPanel'

function App() {
  const [dimensions, setDimensions] = useState({
    width: 80,
    height: 200,
    depth: 30
  });
  
  const [price, setPrice] = useState(850);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  return (
    <Layout dimensions={dimensions}>
      <ConfigPanel 
        dimensions={dimensions} 
        onDimensionsChange={setDimensions}
      />
      <MaterialsPanel 
        selectedMaterial={selectedMaterial}
        onMaterialChange={setSelectedMaterial}
      />
      <DetailsPanel 
        dimensions={dimensions} 
        price={price}
        selectedMaterial={selectedMaterial}
      />
      
      {/* Barra de herramientas inferior */}
      <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0,0,0,0.7)', 
        color: 'white', 
        padding: '10px 20px',
        borderRadius: '30px',
        display: 'flex',
        gap: '15px'
      }}>
        <button style={{ padding: '8px 15px', backgroundColor: '#4a90e2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Deshacer</button>
        <button style={{ padding: '8px 15px', backgroundColor: '#4a90e2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Rehacer</button>
        <button style={{ padding: '8px 15px', backgroundColor: '#4a90e2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Vista</button>
        <button style={{ padding: '8px 15px', backgroundColor: '#50c878', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Compartir</button>
        <button style={{ padding: '8px 15px', backgroundColor: '#ff6b6b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Exportar</button>
      </div>
    </Layout>
  )
}

export default App