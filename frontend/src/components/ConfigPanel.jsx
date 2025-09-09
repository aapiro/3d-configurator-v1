import React, { useState } from 'react';

// Dimensiones del mueble (en cm)
const initialDimensions = {
  width: 80,
  height: 200,
  depth: 30
};

// Componente de control deslizante parametrizado
function SliderControl({ label, min, max, value, onChange, unit = 'cm' }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
        {label}: {value} {unit}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: '100%' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666' }}>
        <span>{min} {unit}</span>
        <span>{max} {unit}</span>
      </div>
    </div>
  );
}

// Componente principal del panel de configuración
function ConfigPanel({ dimensions, onDimensionsChange }) {
  const [activeTab, setActiveTab] = useState('dimensions');

  return (
    <div style={{ 
      position: 'absolute', 
      left: '20px', 
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
        Configuración del Mueble
      </h3>
      
      {/* Pestañas de navegación */}
      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <button 
          onClick={() => setActiveTab('dimensions')}
          style={{
            flex: 1,
            padding: '8px',
            backgroundColor: activeTab === 'dimensions' ? '#4a90e2' : 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Dimensiones
        </button>
        <button 
          onClick={() => setActiveTab('structure')}
          style={{
            flex: 1,
            padding: '8px',
            backgroundColor: activeTab === 'structure' ? '#4a90e2' : 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Estructura
        </button>
        <button 
          onClick={() => setActiveTab('components')}
          style={{
            flex: 1,
            padding: '8px',
            backgroundColor: activeTab === 'components' ? '#4a90e2' : 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Componentes
        </button>
      </div>

      {/* Contenido de las pestañas */}
      {activeTab === 'dimensions' && (
        <div>
          <h4>Dimensiones</h4>
          <SliderControl 
            label="Ancho" 
            min={30} 
            max={500} 
            value={dimensions.width}
            onChange={(value) => onDimensionsChange({ ...dimensions, width: value })}
            unit="cm"
          />
          <SliderControl 
            label="Alto" 
            min={30} 
            max={300} 
            value={dimensions.height}
            onChange={(value) => onDimensionsChange({ ...dimensions, height: value })}
            unit="cm"
          />
          <SliderControl 
            label="Profundidad" 
            min={15} 
            max={100} 
            value={dimensions.depth}
            onChange={(value) => onDimensionsChange({ ...dimensions, depth: value })}
            unit="cm"
          />
        </div>
      )}

      {activeTab === 'structure' && (
        <div>
          <h4>Estructura</h4>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Secciones Horizontales
            </label>
            <input 
              type="number" 
              min="1"
              max="10"
              value={2}
              style={{ width: '100%', padding: '8px', backgroundColor: '#333', color: 'white', border: '1px solid #555' }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Divisiones Verticales
            </label>
            <input 
              type="number" 
              min="0"
              max="10"
              value={2}
              style={{ width: '100%', padding: '8px', backgroundColor: '#333', color: 'white', border: '1px solid #555' }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Grosor de Materiales
            </label>
            <select 
              style={{ width: '100%', padding: '8px', backgroundColor: '#333', color: 'white', border: '1px solid #555' }}
            >
              <option>12 mm</option>
              <option>15 mm</option>
              <option>18 mm</option>
              <option selected>25 mm</option>
            </select>
          </div>
        </div>
      )}

      {activeTab === 'components' && (
        <div>
          <h4>Componentes Modulares</h4>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Cajones
            </label>
            <input 
              type="number" 
              min="0"
              max="20"
              value={2}
              style={{ width: '100%', padding: '8px', backgroundColor: '#333', color: 'white', border: '1px solid #555' }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Puertas
            </label>
            <select 
              style={{ width: '100%', padding: '8px', backgroundColor: '#333', color: 'white', border: '1px solid #555' }}
            >
              <option>Ninguna</option>
              <option>Batiente</option>
              <option>Corrediza</option>
              <option>Plegable</option>
            </select>
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Repisas
            </label>
            <input 
              type="number" 
              min="0"
              max="20"
              value={3}
              style={{ width: '100%', padding: '8px', backgroundColor: '#333', color: 'white', border: '1px solid #555' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ConfigPanel;