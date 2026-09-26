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

## Despliegue en CapRover

Este repositorio incluye `captain-definition`, un Dockerfile de dos etapas (Node para compilar y Nginx para servir los archivos) y `nginx.conf`. No requiere base de datos ni variables secretas.

1. Cree una aplicación en CapRover y establezca **Container HTTP Port: 80**.
2. Configure el despliegue desde el repositorio público `fouronesys/compania-colombiana-3c-sas`, rama `main`. CapRover leerá `captain-definition` en la raíz y construirá el Dockerfile.
3. Asocie su dominio a la aplicación, active HTTPS y después **Force HTTPS**. El contenedor sirve el sitio en `/`, no bajo la ruta `/compania-colombiana-3c/` de la previsualización de Replit.
4. Si va a enviar un archivo en lugar de conectar GitHub, comprima **la raíz de este repositorio**, con `captain-definition`, `Dockerfile`, `package.json`, `src/`, `public/` y `scripts/`.

La imagen publica únicamente la carpeta `dist/` compilada, atiende la página de inicio y los recursos estáticos, y comprueba que Nginx responde en el puerto 80. Si no configura `PUBLIC_SITE_URL`, la página funcionará normalmente, pero el build no generará sitemap ni URL canónica.

**SEO en CapRover:** Cuando tenga el dominio definitivo con HTTPS, cambie el valor predeterminado de `ARG PUBLIC_SITE_URL=` en el Dockerfile a la URL completa de la página de inicio (por ejemplo, `https://su-dominio.com/`), confirme que termina en `/` y vuelva a desplegar desde GitHub. Si su procedimiento de construcción permite pasar argumentos Docker, también puede proporcionar `PUBLIC_SITE_URL` allí en lugar de editar el archivo. Es un dato público, no una contraseña. No basta con añadirlo como variable de entorno del contenedor ya construido: el sitemap y las etiquetas se generan durante la compilación. En CapRover el sitio se sirve desde `/`, la ruta base predeterminada.

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