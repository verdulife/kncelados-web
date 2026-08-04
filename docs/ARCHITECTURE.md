# ARCHITECTURE.md

> Fuente de verdad del estado técnico real del proyecto. Se actualiza al cerrar cada
> hito (ver AGENTS.md). Si un dato no está aquí, no se asume — se pregunta.

## Stack — estado actual (proyecto viejo, a migrar)

- Astro: `<completar versión actual>`
- Vite: `<completar versión actual>`
- Tailwind: `<completar versión actual>`
- Hosting actual: Netlify
- Gestor de paquetes: bun
- Repo actual: `<url del repo viejo>`

## Stack — estado destino

- Astro: última estable (objetivo del hito de upgrade)
- Vite: la que traiga el upgrade de Astro
- Tailwind: v4 (ver nota de riesgo abajo)
- Hosting destino: Vercel
- Repo destino: `<url del nuevo repo GitHub>`

## Elementos que NO se pueden romper

> Rellenar antes de empezar cualquier hito de upgrade/migración. Mientras esta sección
> esté vacía, no se debe modificar ninguno de estos puntos sin aprobación explícita.

- **URLs con QR impresos**: `<pendiente — listar cada URL y dónde está el QR físico>`
- **URLs indexadas con autoridad (export de Search Console)**: `<pendiente — adjuntar/enlazar el export>`
- **Redirects actuales** (de `_redirects` / `netlify.toml`): `<pendiente>`
- **`trailingSlash` actual**: `<pendiente — con o sin barra final>`

## Decisiones tomadas (log, no se re-discuten sin motivo)

| Fecha | Decisión | Motivo |
|---|---|---|
| | | |

## Estado del upgrade

- [ ] Astro actualizado a última versión (rama separada, sin merge a main)
- [ ] Vite actualizado (viene con Astro)
- [ ] Tailwind v3 → v4 migrado y validado visualmente
- [ ] Home rediseñada portada al proyecto actualizado
- [ ] Deploy de prueba en Vercel (preview) validado contra checklist de URLs
- [ ] Redirects/robots/sitemap replicados en `vercel.json`
- [ ] Corte de DNS realizado
