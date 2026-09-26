# Compañía Colombiana 3C SAS

Sitio corporativo independiente para los servicios de infraestructura eléctrica, energía solar, tecnología y diseño técnico de Compañía Colombiana 3C SAS. Las imágenes proporcionadas para la página conviven con fotografías de referencia de Pexels; la procedencia está documentada en [PHOTO-CREDITS.md](PHOTO-CREDITS.md). Las fotografías de referencia no representan obras realizadas por la empresa.

## Desarrollo

Requiere Node.js 20.19 o superior.

```bash
npm install
npm run dev
```

Para compilar una versión estática:

```bash
npm run build
```

El contenido generado queda en `dist/`. La ruta base predeterminada es `/`; para publicar bajo una subruta, defina `BASE_PATH=/subruta/` al ejecutar la compilación.

El repositorio contiene solo el sitio 3C. No requiere el monorepositorio de Replit ni servicios de backend. Las etiquetas SEO incluyen título, descripción y datos para compartir; configure un dominio definitivo antes de añadir una URL canónica y un sitemap.