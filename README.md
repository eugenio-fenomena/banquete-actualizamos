# Actualizamos las legumbres — Banquete

Landing de campaña para el lanzamiento de la nueva línea de legumbres Banquete.

## ⚠️ Pendiente antes de publicar

Este repo **no incluye la carpeta `img/`** con los assets finales (fotos de producto,
íconos, logotipo). Esos archivos viven solo en el computador de quien diseñó la landing
porque nunca se subieron a este chat — hay que agregarlos manualmente:

```
img/
  logo-actualizamos.webp
  hero-lineup.webp
  flechas.png
  pasta-mix.png
  cajas.png
  galletones.png
  perlitas.png
  icono-pasta.png
  icono-conserva.png
  icono-galleta.png
  icono-perlitas.png
```

Sin esa carpeta, la landing se ve pero con imágenes rotas.

## Stack

- HTML/CSS/JS puro, sin build (GSAP + ScrollTrigger vía CDN).
- `index.html` es el único archivo que Vercel necesita servir — no requiere
  configuración de build, solo desplegar como sitio estático.

## Formulario de suscripción

El formulario envía los datos a un Google Apps Script propio (`google-apps-script.gs`,
en este mismo repo, para referencia — el código que corre de verdad vive en
script.google.com, no aquí). Instrucciones de instalación dentro del archivo.

La URL del Apps Script ya está pegada en `index.html`, en la constante `SCRIPT_URL`.

## Deploy en Vercel

1. En vercel.com > "Add New..." > "Project".
2. Importa este repositorio de GitHub (`banquete-actualizacion-legumbres`).
3. Framework Preset: "Other" (no hay build step).
4. Deploy.

Cada push a `main` genera un nuevo deploy de producción; los pushes a otras ramas
generan preview deployments — útil para mandar a aprobación antes de mergear a main.
