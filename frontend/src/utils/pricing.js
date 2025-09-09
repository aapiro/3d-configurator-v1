// Función para calcular el precio del mueble basado en dimensiones y materiales

/**
 * Calcula el precio estimado de un mueble según sus dimensiones y material
 * @param {Object} dimensions - Dimensiones del mueble (width, height, depth en cm)
 * @param {Object} material - Material seleccionado
 * @returns {number} Precio estimado en USD
 */
export function calculatePrice(dimensions, material) {
  // Convertir dimensiones a metros para cálculo de área
  const width = dimensions.width / 100;   // cm to meters
  const height = dimensions.height / 100;
  const depth = dimensions.depth / 100;

  // Calcular el área superficial (en m²)
  // Área total del mueble: base + frente + laterales + fondo
  const areaFrontal = width * height;        // Frente
  const areaLateral = depth * height;        // Lados
  const areaBase = width * depth;            // Base y tapa
  
  // Aproximación del área total (simplificada)
  const totalArea = 
    (areaFrontal * 2) +     // Frente y parte trasera
    (areaLateral * 2) +     // Lados izquierdo y derecho  
    areaBase;               // Base

  // Calcular precio basado en área y material
  const basePrice = totalArea * material.pricePerM2;
  
  // Factores de complejidad:
  // - Número de secciones horizontales (más secciones = más trabajo)
  // - Número de divisiones verticales (más divisiones = más trabajo) 
  const complexityFactor = 1.0; // Para este ejemplo, factor base
  
  // Factores adicionales:
  // - Puertas
  // - Cajones
  // - Repisas
  const additionalFeaturesFactor = 1.0; // Para este ejemplo, factor base

  // Calcular precio final con factores de complejidad y características
  const totalPrice = basePrice * complexityFactor * additionalFeaturesFactor;
  
  return Math.round(totalPrice);
}

/**
 * Calcula el peso estimado del mueble basado en dimensiones y material
 * @param {Object} dimensions - Dimensiones del mueble (width, height, depth en cm)
 * @param {string} materialType - Tipo de material usado
 * @returns {number} Peso estimado en kg
 */
export function calculateWeight(dimensions, materialType) {
  // Convertir dimensiones a metros para cálculo de volumen
  const width = dimensions.width / 100;   // cm to meters
  const height = dimensions.height / 100;
  const depth = dimensions.depth / 100;

  // Calcular volumen en m³
  const volume = width * height * depth;
  
  // Densidad promedio por tipo de material (kg/m³)
  const densityMap = {
    'wood': 700,      // Madera común
    'mdf': 800,       // MDF
    'particle': 600,  // Aglomerado
    'metal': 7850     // Acero
  };
  
  const density = densityMap[materialType] || 700;
  
  return Math.round(volume * density);
}

/**
 * Calcula el tiempo estimado de fabricación
 * @param {Object} dimensions - Dimensiones del mueble (width, height, depth en cm)
 * @returns {number} Tiempo estimado en días
 */
export function calculateProductionTime(dimensions) {
  // Convertir dimensiones a metros para cálculo
  const width = dimensions.width / 100;
  const height = dimensions.height / 100;
  
  // Área total del mueble (en m²)
  const area = width * height;
  
  // Tiempo base en días por área (simplificado)
  let timeInDays = Math.max(2, area * 0.5);
  
  // Ajustar según dimensiones
  if (dimensions.width > 300 || dimensions.height > 250) {
    timeInDays += 2; // Más tiempo para muebles grandes
  }
  
  return Math.ceil(timeInDays);
}