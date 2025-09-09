# 3D Furniture Configurator

Professional 3D Design Tool for Custom Furniture

## Características

- Diseño de muebles personalizados en tiempo real con renderizado 3D
- Panel de configuración paramétrica (dimensiones, estructura, componentes)
- Sistema de materiales y acabados avanzado
- Cálculo automático de precios basado en dimensiones y materiales
- Generación de planos técnicos y listas de materiales
- Sistema de usuarios para guardar proyectos

## Estructura del Proyecto

```
3d-configurator-v1/
├── frontend/          # Aplicación React con Three.js
│   ├── src/
│   │   ├── components/    # Componentes UI reutilizables
│   │   ├── utils/         # Funciones de utilidad (cálculo de precios, etc.)
│   │   └── App.jsx        # Componente principal
│   └── package.json
├── backend/           # API Node.js con Express
│   ├── server.js          # Punto de entrada del servidor
│   └── package.json
└── README.md
```

## Requisitos

- Node.js >= 16.x
- npm >= 8.x

## Instalación y Ejecución

### Backend (API)

```bash
cd backend
npm install
npm run dev
```

El servidor correrá en `http://localhost:5000`

### Frontend (Aplicación Web)

```bash
cd frontend
npm install
npm run dev
```

La aplicación web estará disponible en `http://localhost:5173`

## Tecnologías Utilizadas

### Frontend:
- React.js 18+
- Three.js + React Three Fiber para renderizado 3D
- Vite como herramienta de construcción
- CSS Modules para estilos

### Backend:
- Node.js con Express
- CORS, Helmet y Morgan para seguridad y logging
- dotenv para variables de entorno

## API Endpoints

### Materiales
`GET /api/materials` - Obtiene la lista completa de materiales disponibles

### Proyectos
`POST /api/projects` - Guarda un nuevo proyecto
`GET /api/projects/:id` - Carga un proyecto específico

### Cálculo de Precios
`POST /api/calculate-price` - Calcula el precio estimado basado en dimensiones y material

## Desarrollo

Para contribuir al desarrollo:

1. Fork del repositorio
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Hacer commits con mensajes claros
4. Push a la rama
5. Abrir un Pull Request

## Licencia

MIT License
