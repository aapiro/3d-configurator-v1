import React, { useState } from 'react';

// Lista de materiales disponibles (simulación)
const materials = [
  {
    id: 'wood-rob',
    name: 'Roble Natural',
    category: 'madera',
    color: '#D2691E',
    texture: 'natural',
    pricePerM2: 80
  },
  {
    id: 'wood-nog',
    name: 'Nogal Lacado',
    category: 'madera',
    color: '#5C4033',
    texture: 'lacado',
    pricePerM2: 120
  },
  {
    id: 'wood-pino',
    name: 'Pino Texturizado',
    category: 'madera',
    color: '#F5DEB3',
    texture: 'texturizado',
    pricePerM2: 60
  },
  {
    id: 'mdf-nat',
    name: 'MDF Natural',
    category: 'otros',
    color: '#E6E6FA',
    texture: 'natural',
    pricePerM2: 45
  }
];

// Componente de selección de material
function MaterialSelector({ selectedMaterial, onMaterialChange }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <h4>Seleccionar Material</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {materials.map(material => (
          <div 
            key={material.id}
            onClick={() => onMaterialChange(material)}
            style={{
              padding: '10px',
              backgroundColor: selectedMaterial?.id === material.id ? '#4a90e2' : 'rgba(255,255,255,0.1)',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <div 
              style={{
                width: '30px',
                height: '30px',
                backgroundColor: material.color,
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
            />
            <div>
              <div style={{ fontWeight: 'bold' }}>{material.name}</div>
              <div style={{ fontSize: '12px', color: '#aaa' }}>{material.texture} • ${material.pricePerM2}/m²</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente de panel de materiales
function MaterialsPanel({ selectedMaterial, onMaterialChange }) {
  return (
    <div style={{ 
      position: 'absolute', 
      right: '20px', 
      top: '100px', 
      width: '300px', 
      backgroundColor: 'rgba(0,0,0,0.7)', 
      color: 'white', 
      padding: '20px',
      borderRadius: '8px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)'
    }}>
      <h3 style={{ margin: '0 0 15px 0', padding: '0 0 10px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
        Materiales y Acabados
      </h3>
      
      <MaterialSelector 
        selectedMaterial={selectedMaterial} 
        onMaterialChange={onMaterialChange}
      />
      
      <div style={{ marginTop: '15px' }}>
        <h4>Acabados</h4>
        <select 
          style={{ width: '100%', padding: '8px', backgroundColor: '#333', color: 'white', border: '1px solid #555', borderRadius: '4px' }}
        >
          <option>Natural</option>
          <option>Lacado</option>
          <option>Barnizado</option>
          <option>Texturizado</option>
        </select>
      </div>
      
      <div style={{ marginTop: '15px' }}>
        <h4>Vista Previa del Material</h4>
        <div 
          style={{
            width: '100%',
            height: '120px',
            backgroundColor: selectedMaterial ? selectedMaterial.color : '#333',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          <span style={{ color: selectedMaterial ? '#fff' : '#aaa', fontSize: '14px' }}>
            {selectedMaterial ? 'Vista Previa del Material Seleccionado' : 'Selecciona un material'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MaterialsPanel;