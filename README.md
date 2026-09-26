# Compañía Colombiana 3C SAS

Sitio corporativo independiente para los servicios de infraestructura eléctrica, energía solar, tecnología y diseño técnico de Compañía Colombiana 3C SAS. Las imágenes proporcionadas para la página conviven con fotografías de referencia de Pexels; la procedencia está documentada en [PHOTO-CREDITS.md](PHOTO-CREDITS.md). Las fotografías de referencia no representan obras realizadas por la empresa.

## Desarrollo

Requiere Node.js 20.19 o superior.

```bash
npm install
npm run dev
```

Para compilar una versión estática (sin dominio público configurado):

```bash
npm run build
```

El contenido generado queda en `dist/`. La ruta base predeterminada es `/`; para publicar bajo una subruta, defina `BASE_PATH=/subruta/` al ejecutar la compilación.

## Publicación e indexación

Cuando conozca la dirección **definitiva** de la página de inicio, configure `PUBLIC_SITE_URL` al compilar. Debe ser una URL HTTPS completa, con barra final, e incluir la subruta si la hay. No use la dirección temporal de desarrollo. Por ejemplo, **sustituya** el dominio de ejemplo por el suyo:

```bash
PUBLIC_SITE_URL=https://ejemplo.com/ npm run build
# Si la publicación se sirve bajo una subruta:
BASE_PATH=/sitio/ PUBLIC_SITE_URL=https://ejemplo.com/sitio/ npm run build
```

El `BASE_PATH` debe coincidir con la ruta de `PUBLIC_SITE_URL`; el build falla si no coinciden. El build configurado añade a `dist/index.html` una URL canónica, `og:url`, `og:image` y `twitter:image` absolutas; genera `dist/sitemap.xml` y escribe la dirección del sitemap en `dist/robots.txt`. El sitemap solo incluye la página de inicio: las secciones `#nosotros`, `#servicios`, etc. son anclas de esa misma página, no páginas independientes. Sin `PUBLIC_SITE_URL`, el build conserva los metadatos básicos, pero **no genera una URL canónica ni sitemap** para evitar publicar direcciones inventadas.

Una vez publicados los archivos, compruebe bajo el dominio definitivo que la página de inicio, `robots.txt`, `sitemap.xml` y `images/logo-simbolo-transparente.png` devuelven 200; confirme que la URL de `<loc>`, la etiqueta canónica y `og:url` coinciden, y que la línea `Sitemap:` apunta al XML publicado. Si cambia el dominio o la subruta, vuelva a compilar y publicar.

El repositorio contiene solo el sitio 3C. No requiere el monorepositorio de Replit ni servicios de backend.