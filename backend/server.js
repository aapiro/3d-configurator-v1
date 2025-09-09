const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: '3D Furniture Configurator API',
    version: '1.0.0'
  });
});

// Rutas para materiales
app.get('/api/materials', (req, res) => {
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
  
  res.json(materials);
});

// Rutas para proyectos (guardar/cargar)
app.post('/api/projects', (req, res) => {
  // Simulación de guardado de proyecto
  const project = req.body;
  res.status(201).json({
    ...project,
    id: 'proj-' + Date.now(),
    createdAt: new Date().toISOString()
  });
});

app.get('/api/projects/:id', (req, res) => {
  // Simulación de carga de proyecto
  const projectId = req.params.id;
  res.json({
    id: projectId,
    name: 'Mi Closet Personalizado',
    configuration: {
      dimensions: { width: 80, height: 200, depth: 30 },
      material: 'wood-rob'
    },
    createdAt: new Date().toISOString()
  });
});

// Rutas para cálculo de precios
app.post('/api/calculate-price', (req, res) => {
  const { dimensions, materialId } = req.body;
  
  // Simulación del cálculo de precio
  const materials = [
    { id: 'wood-rob', pricePerM2: 80 },
    { id: 'wood-nog', pricePerM2: 120 },
    { id: 'wood-pino', pricePerM2: 60 },
    { id: 'mdf-nat', pricePerM2: 45 }
  ];
  
  const material = materials.find(m => m.id === materialId);
  
  if (!material) {
    return res.status(400).json({ error: 'Material no válido' });
  }

  // Cálculo simplificado
  const width = dimensions.width / 100;
  const height = dimensions.height / 100;
  const depth = dimensions.depth / 100;

  const areaFrontal = width * height;        // Frente
  const areaLateral = depth * height;        // Lados
  const areaBase = width * depth;            // Base y tapa
  
  const totalArea = 
    (areaFrontal * 2) +     // Frente y parte trasera
    (areaLateral * 2) +     // Lados izquierdo y derecho  
    areaBase;               // Base

  const basePrice = totalArea * material.pricePerM2;
  const totalPrice = Math.round(basePrice);

  res.json({
    price: totalPrice,
    weight: Math.round(width * height * depth * 700),
    productionTime: Math.ceil(totalArea * 0.5)
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});