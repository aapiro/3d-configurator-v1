# Configurador 3D de Armarios y Muebles de Estantería

Este es un configurador interactivo de armarios/muebles de estantería creado con React y Three.js. Permite a los usuarios diseñar sus propios muebles personalizados en tiempo real.

## Características

- Configuración de dimensiones (ancho, alto, profundidad)
- Personalización del número de estanterías
- Selección de color para el mueble
- Vista 3D interactiva con controles de cámara
- Interfaz intuitiva y responsive

## Tecnologías Utilizadas

- React.js
- Three.js (con @react-three/fiber)
- @react-three/drei
- CSS3

## Instalación

1. Clona este repositorio:
```bash
git clone <url-del-repositorio>
```

2. Navega al directorio del proyecto:
```bash
cd threejs-closet-configurator
```

3. Instala las dependencias:
```bash
npm install
```

4. Inicia la aplicación:
```bash
npm start
```

## Uso

1. Usa los controles deslizantes para ajustar las dimensiones del mueble
2. Selecciona el número de estanterías que deseas incluir
3. Elige un color para tu mueble
4. Interactúa con la vista 3D:
   - Haz clic y arrastra para rotar la cámara
   - Usa la rueda del mouse para acercar/alejar
   - Haz clic derecho y arrastra para mover la cámara

## Estructura del Proyecto

- `src/App.js`: Componente principal con el configurador 3D
- `src/index.js`: Punto de entrada de la aplicación
- `src/App.css`: Estilos CSS
- `public/index.html`: HTML base

## Personalización

Puedes personalizar fácilmente este configurador añadiendo:
- Más tipos de muebles (puertas, cajones)
- Texturas y materiales más realistas
- Funcionalidad para guardar/exportar diseños
- Soporte para múltiples componentes en el diseño