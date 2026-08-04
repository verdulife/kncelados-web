# ROADMAP.md

> Lista de hitos pequeños. Se actualiza al cerrar cada hito (ver AGENTS.md).
> Estado: `pendiente` / `en progreso` / `bloqueado` / `hecho`.

| ID | Hito | Estado | Depende de | Riesgo | Criterio de aceptación |
|---|---|---|---|---|---|---|
| H0 | Rellenar `ARCHITECTURE.md`: versiones actuales, QR, export GSC, redirects | pendiente | — | — | Secciones "estado actual" y "no se puede romper" completas |
| H1 | Upgrade Astro 5.14.6 → 7.1.6 + adapter swap Netlify → Vercel + Tailwind 4.0.3 → 4.3.3 | hecho | — | medio | Build pasa, todas las páginas responden 200, 0 errores astro check |
| H2 | Migrar Tailwind v3 → v4 (config CSS-first) | hecho | H1 | **alto** | Ya estaba v4.0.3 antes del upgrade; el proyecto nunca usó v3. Actualizado a 4.3.3 como parte de H1 |
| H3 | Portar componentes de la home rediseñada al proyecto actualizado | pendiente | H2 | bajo | Home nueva renderiza igual que en el proyecto de rediseño aislado |
| H4 | Exportar checklist de QA desde Search Console (URLs indexadas + QR) | pendiente | H0 | — | Checklist en `docs/` con lista completa de URLs a verificar |
| H5 | Deploy preview en Vercel + validar checklist H4 contra el preview | pendiente | H3, H4 | **alto** | Todas las URLs del checklist responden 200 y con el contenido esperado |
| H6 | Replicar redirects/robots/sitemap/trailingSlash en config de Vercel | pendiente | H4 | **alto** | Comparación 1:1 con reglas actuales de Netlify, sin huecos |
| H7 | Corte de DNS a Vercel (Netlify se mantiene activo como respaldo) | pendiente | H5, H6 | **alto** | Sitio en producción sirviendo desde Vercel, Netlify sin tráfico pero disponible |
| H8 | Monitorizar 404s / cobertura en Search Console post-corte | pendiente | H7 | medio | Sin 404 inesperados en 7 días |
