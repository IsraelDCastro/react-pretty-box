# Next Steps por Fases — react-pretty-box

Documento de ruta para: publicación de la librería, migración de Sass a CSS, accesibilidad y calidad. Incluye objetivos, tareas, criterios de aceptación y comandos de verificación por fase.

Estado actual (ya aplicado):
- `.scss` renombrados a `.css` sin cambiar contenido ni ubicación original.
- Dependencia `sass` y preprocesador SCSS removidos del build.
- Importaciones actualizadas a `.css` y copia de estilos al `dist` mediante Vite.

Limitación temporal: mientras existan directivas Sass (`@use`, `variables.$x`) dentro de `.css`, esas reglas no se aplicarán. La Fase 2 resuelve esto.

---

## Fase 1 — Publicación mínima (build y empaquetado)
Objetivo: que el paquete publicado incluya solo lo necesario para consumir la librería.

Tareas
- [√] Build solo de la librería desde `src/components` y copia de estilos desde `src/assets`.
- [√] Publicar únicamente: `dist/` (bundles ES/UMD + tipos + css).
- `package.json`:
  - [√] Eliminar export del `.scss` (hecho). Mantener export de `./dist/react-pretty-box.css`.
  - [√] Añadir `sideEffects`: `["**/*.css"]` para preservar imports de CSS.
  - [√] Mover `react`, `react-dom` y `framer-motion` a `peerDependencies` y marcarlas `external` en el bundle.
  - [√] Mantener `files`: `["dist"]` (añadir `README.md` y `LICENSE` si se desea).
- Vite/Rollup:
  - [√] `external: ["react", "react-dom", "framer-motion"]`.
  - [√] Gatear plugins de análisis (visualizer/analyzer) vía variable de entorno para no ejecutarlos en build por defecto.

Criterios de aceptación
- `npm pack` muestra únicamente `dist/` (más README/LICENSE si se incluyen).
- `dist/react-pretty-box.es.js`, `dist/react-pretty-box.umd.js` y `dist/react-pretty-box.css` existen.
- Ningún archivo de `src/pages`, `src/router`, `src/layouts`, `src/examples` se publica.

Comandos útiles
- Ver contenido a publicar: `npm pack --dry-run`
- Build: `npm run build` o `bun run build`

---

## Fase 2 — CSS operativo (sin Sass)
Objetivo: que el CSS funcione en el navegador sin preprocesamiento Sass, manteniendo el contenido visual.

Tareas (opción rápida sin cambiar semántica)
- [√] Reemplazar `@use` por `@import` CSS en `src/assets/react-pretty-box.css`, importando los parciales `.css` en orden.
- [√] En cada parcial de `src/assets/scss/*.css`, eliminar la primera línea `@use "variables";` (no válida en CSS).
- [√] Sustituir referencias `variables.$color` por Custom Properties.

Tareas (opción robusta, recomendada)
- [√] Variables: crear Custom Properties en `:root` y reemplazar su uso por `var(--...)`.
- [√] Nesting: usar `postcss-nested` para mantener la estructura anidada existente.
- [√] Imports: mantener un único `react-pretty-box.css` final con `@import` CSS.

Herramientas (opcionales)
- [√] PostCSS: `postcss-import` (para resolver `@import`) y `postcss-nesting` (si se conserva nesting).
- [√] Script/bundle actual procesado por PostCSS sin necesidad de concatenación manual.

Criterios de aceptación
- La demo renderiza estilos sin errores de CSS desconocido en consola.
- `dist/react-pretty-box.css` no contiene directivas Sass (`@use`, `$var`, `variables.$var`).

---

## Fase 3 — Accesibilidad (a11y) y UX del modal
Objetivo: mejorar navegación por teclado, foco y semántica del lightbox/galerías.

Tareas
- [√] Contenedor modal: `role="dialog"`, `aria-modal="true"`, `aria-label` o `aria-labelledby`.
- [√] Gestión de foco: al abrir, foco al contenedor; trampa de foco dentro; al cerrar, devolver foco al disparador.
- [√] Teclado: `Escape` (cerrar), `ArrowLeft`/`ArrowRight` (navegar), `Enter/Space` (activar botones).
- [√] Scroll lock: deshabilitar `document.body` scroll mientras el modal esté abierto.
- [√] Botones: `type="button"`, `aria-label` descriptivo para cerrar/anterior/siguiente.
- [√] `figcaption`: lectura accesible con `aria-live="polite"`.
- [√] Focus visible: asegurar estados de foco y contraste.

Puntos de entrada
- [√] `src/components/singleImage.tsx`, `imageGallery.tsx`, `imageGalleryMasonry.tsx`, `productGallery.tsx`, `imageCarouselGallery.tsx`, `sliderGallery.tsx`.

Criterios de aceptación
- Navegación completa por teclado sin ratón.
- Foco nunca se fuga del modal mientras está abierto.
- Pruebas básicas con `@testing-library/react` + `jest-axe` sin violaciones críticas.

---

## Fase 4 — Calidad, DX y pruebas
Objetivo: elevar mantenibilidad y calidad automática.

Tareas
- [√] Lint a11y: `eslint-plugin-jsx-a11y`.
- [√] Lint estilos: `stylelint` + `stylelint-config-standard`.
- [√] Tests: `vitest` + `@testing-library/react` + `jest-axe` (setup y pruebas básicas añadidas).
- [√] Scripts: `lint`, `test`, `typecheck`, `build` y `prepack` (validar antes de publicar).

Criterios de aceptación
- `npm run lint` y `npm test` pasan en CI.
- Al menos tests de humo por componente principal y uno de a11y para el modal.

---

## Fase 5 — Bundle y publicación
Objetivo: distribución optimizada y sin dependencias duplicadas.

Tareas
- [√] `peerDependencies`: `react`, `react-dom` y `framer-motion` declaradas; copias locales en `devDependencies` solo para desarrollo.
- [√] `external` en Rollup para peer deps.
- [√] `sideEffects`: `["**/*.css"]` para preservar estilos.
- [√] Gatear visualizer/analyzer: ejecutarlos solo con `ANALYZE=true npm run build`.
- [√] Validar `types`: apuntar a `dist/index.d.ts` mediante nuevo entry `src/index.ts`.

Criterios de aceptación
- `npm pack --dry-run` refleja solo artefactos esperados.
- Consumidores no instalan copias adicionales de `react`/`react-dom`.

---

## Fase 6 — Demo/Playground y estructura del repo
Objetivo: aislar la librería de la app de ejemplo.

Tareas
- [√] Mover demo a `playground/` con `App`, `main`, `pages`, `layouts`, `router` y ejemplos.
- [•] Librería en `packages/react-pretty-box` (opcional). Mantener build aislado.

Criterios de aceptación
- Build de la librería no recorre rutas de la demo.
- La demo consume la librería como dependencia local (link workspaces o `npm link`).

---

## Fase 7 — Dependencias y mantenimiento
Objetivo: mantener la base al día y estable.

Tareas
- [√] Configurar pipeline de CI (lint, typecheck, test, build) en GitHub Actions.
- [√] Scripts para control de dependencias (`npm run deps:check`, `npm run deps:update`).
- [•] Versionado semántico y publicación automatizada (`changesets` o `npm version` + `prepack`).

Criterios de aceptación
- [√] CI con jobs de `lint`, `test`, `build` en ramas principales.
- Publicación segura con release notes.

---

Fases 5 y 6 completadas; en Fase 7 queda pendiente definir el flujo de releases automáticas (p.ej. `changesets`).
