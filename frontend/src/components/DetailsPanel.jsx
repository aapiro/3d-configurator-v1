import React from 'react';
import { calculatePrice, calculateWeight, calculateProductionTime } from '../utils/pricing';

// Componente del panel de detalles (derecho)
function DetailsPanel({ dimensions, price, selectedMaterial }) {
  // Calcular información dinámica basada en las dimensiones y material
  const calculatedPrice = selectedMaterial ? calculatePrice(dimensions, selectedMaterial) : price;
  const weight = selectedMaterial ? calculateWeight(dimensions, selectedMaterial.category) : 45;
  const productionTime = calculateProductionTime(dimensions);

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
        Detalles del Diseño
      </h3>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Dimensiones</h4>
        <p><strong>Ancho:</strong> {dimensions.width} cm</p>
        <p><strong>Alto:</strong> {dimensions.height} cm</p>
        <p><strong>Profundidad:</strong> {dimensions.depth} cm</p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Especificaciones</h4>
        <p><strong>Precio estimado:</strong> ${calculatedPrice}</p>
        <p><strong>Peso aproximado:</strong> {weight} kg</p>
        <p><strong>Tiempo de fabricación:</strong> {productionTime} días</p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Opciones</h4>
        <button 
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4a90e2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '10px'
          }}
        >
          Generar Planos
        </button>
        <button 
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#50c878',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Solicitar Cotización
        </button>
      </div>
      
      <div style={{ 
        backgroundColor: 'rgba(255,255,255,0.1)', 
        padding: '10px', 
        borderRadius: '4px',
        fontSize: '12px'
      }}>
        <p><strong>Consejo:</strong> Ajusta las dimensiones para optimizar el espacio en tu habitación.</p>
      </div>
    </div>
  );
}

export default DetailsPanel;