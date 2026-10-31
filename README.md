# Biblioteca Académica — GitHub Pages

Sitio estático con cuatro páginas: `index.html`, `fisica.html`, `matematicas.html`, `otros.html`.

## Publicar en GitHub

1. Crea un repositorio **público** en GitHub (por ejemplo `biblioteca-academica`).
2. Selecciona **Add file → Upload files** y sube **los archivos y la carpeta `assets` del ZIP**, sin colocar la carpeta contenedora como nivel adicional.
3. Confirma con **Commit changes**.
4. Abre **Settings → Pages**. En **Build and deployment**, selecciona **Deploy from a branch**, rama `main`, carpeta `/(root)`, y pulsa **Save**.
5. Cuando GitHub termine la publicación, visita `https://TU-USUARIO.github.io/biblioteca-academica/` (cambia el usuario y el repositorio si usaste otro nombre).

## Agregar libros

Edita `books.js` y añade objetos a `LIBROS`, por ejemplo:

```js
{
  titulo: 'Introducción a la Física',
  autores: 'Nombre Apellido',
  descripcion: 'Conceptos básicos y ejercicios.',
  categoria: 'fisica',
  portada: 'assets/fisica1.jpg',
  pdf: 'pdfs/fisica1.pdf'
},
```

Para subir portadas, crea o utiliza `assets/`. Para subir PDFs, crea `pdfs/` en el repositorio. También puedes utilizar URL públicas directas de imágenes o documentos. Los PDFs grandes pueden necesitar alojamiento externo. Usa `fisica`, `matematicas` u `otros` como categoría.

**Nota:** GitHub Pages no guarda comentarios de forma nativa. Para permitir comentarios públicos por libro se puede integrar una solución externa (por ejemplo, giscus con GitHub Discussions); requiere configuración adicional. La versión inicial ofrece el catálogo y los enlaces a PDFs, pero no un sistema de comentarios activo.


## Libro agregado en Otros
La entrada «Mi libro» ya está configurada en `books.js`, con el enlace al PDF de Google Drive. La URL exacta de la portada no estaba disponible, por lo que se muestra una portada temporal. Sustituye `portada: ''` por una URL de imagen pública o por `assets/portada-mi-libro.jpg` después de subir la imagen. El título y autor pueden actualizarse cuando confirmes los datos. Asegúrate de que el PDF esté compartido con permiso de lectura para cualquier persona con el enlace.
