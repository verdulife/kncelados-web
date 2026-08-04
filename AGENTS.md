# AGENTS.md — kncelados: migración a Astro + rediseño de home

Este archivo define las reglas del proyecto. Se lee automáticamente.
Los otros documentos vivos son `docs/ARCHITECTURE.md` y `docs/ROADMAP.md`: son la única
fuente de verdad entre sesiones. Si un dato no está en estos `.md`, no existe — no se
asume, se pregunta al usuario.

## Regla nº1 (innegociable): no inventar, nunca

Si un dato no está en `docs/ARCHITECTURE.md`, `docs/ROADMAP.md`, en el código del repo,
o en el hito activo — **se para y se pregunta al usuario**. Nunca se asume, nunca se
rellena el hueco con la opción "más probable". Esto aplica en especial a:
- Contenido/URLs de los QR existentes.
- Lista real de URLs indexadas / con autoridad (viene de Search Console, la aporta el usuario).
- Cualquier decisión de diseño visual no especificada explícitamente (color, spacing,
  tipografía, layout) — ver regla nº2.
- Configuración de redirects, DNS, o variables de entorno del hosting actual.

## Regla nº2: no se hacen tareas de diseño

No se toman decisiones de diseño visual/UX por iniciativa propia. El rediseño
de la home ya viene definido por el usuario (mockup, componentes, specs). Si durante
un hito aparece una decisión de diseño no cubierta (ej. "¿qué breakpoint usamos aquí?"),
se para y se pregunta al usuario.
Excepción: implementaciones triviales y explícitamente delimitadas por el usuario
(ej. "ajusta este padding a 16px") sí se ejecutan directamente, no son "diseño".

## Regla nº3: gestor de paquetes

Siempre se usa `bun` como gestor de paquetes. No se usa `npm`, `pnpm` ni `yarn`. Si en el repo existen `pnpm-lock.yaml` o `package-lock.json`, se borran inmediatamente. El único lock file válido es `bun.lock`.
- `bun install` — instalar dependencias
- `bun run <script>` — ejecutar scripts del package.json
- `bun add <paquete>` — añadir dependencia
- `bun add -d <paquete>` — añadir devDependency

## Metodología de trabajo (hitos pequeños)

1. Usuario define un hito pequeño y concreto (ver `docs/ROADMAP.md`).
2. Se investiga el "cómo" del hito: opciones, riesgos, orden de pasos. Si el hito toca
   zonas de riesgo alto (ver abajo), se documenta el plan en `docs/research/<hito-id>.md`.
3. Se presenta el plan al usuario para aprobación explícita antes de ejecutar.
4. Se ejecuta el plan aprobado, sin improvisar alcance fuera de él. Si se necesita
   desviar, se para y se pregunta.
5. Al cerrar un hito: build/lint, resumen de cambios, y se actualiza el estado del
   hito en `docs/ROADMAP.md` (checklist, no prosa larga).
6. Si hay error, se corrige en ese mismo hito antes de continuar (detección temprana,
   no se avanza con deuda).
7. Se actualizan `docs/ARCHITECTURE.md` y `docs/ROADMAP.md` al cerrar el hito.

## Zonas de riesgo alto (requieren doble verificación y plan documentado)

- Upgrade de Tailwind v3 → v4.
- Cualquier cambio en `trailingSlash`, redirects, robots.txt, sitemap.
- Migración de hosting (Netlify → Vercel) y DNS.
- Cualquier URL que aparezca en la lista de QR o en el export de Search Console.
