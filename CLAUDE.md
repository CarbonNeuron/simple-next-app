# simple-next-app

## Stack

- **Runtime**: Bun
- **Framework**: Next.js 16.1.6 (Turbopack, App Router, `src/` directory)
- **Language**: TypeScript
- **UI**: MUI (Material UI) v9 alpha with CSS theme variables (no flicker)
- **Styling**: Vanilla CSS + Emotion (via MUI)
- **Font**: Roboto via `next/font/google`, loaded in `src/theme.tsx`
- **Linting**: ESLint + eslint-config-prettier
- **Formatting**: Prettier

## Project Structure

```
src/
  app/
    layout.tsx         — Root layout with MUI providers (AppRouterCacheProvider, ThemeProvider, InitColorSchemeScript)
    page.tsx           — Home page
    globals.css        — Global styles
    _components/       — Shared UI components (Shell, MuiProviders, section components)
    components/        — /components route (MUI component showcase)
    docs/              — /docs route with sidebar layout and pages:
                         introduction, installation, quick-start, theming
      _components/     — Docs-specific components (CodeBlock, CopyButton, DocsSidebar)
  theme.tsx            — MUI theme config (CSS variables, color schemes, Roboto font, NextLink integration)
instrumentation.ts     — OpenTelemetry setup (trace + metric exporters)
Dockerfile             — Multi-stage bun build, standalone output
docker-compose.yaml    — Full app + observability stack
```

## MUI Setup

- CSS theme variables enabled via `cssVariables: { colorSchemeSelector: "class" }` — prevents flash of wrong theme
- `InitColorSchemeScript` with `attribute="class"` injects a blocking script before paint
- `AppRouterCacheProvider` with `enableCssLayer: true` for proper CSS ordering
- Light/dark mode supported via `colorSchemes: { light: true, dark: true }`
- MUI `Link` and `ButtonBase` globally configured to use Next.js `Link` for client-side navigation

## OpenTelemetry

The app exports traces and metrics via OTLP HTTP to an OpenTelemetry Collector.

Pipeline: `Next.js App → OTEL Collector → Tempo (traces) + Prometheus (metrics) → Grafana`

- `instrumentation.ts` uses `NodeTracerProvider` + `BatchSpanProcessor` (1s delay) and `PeriodicExportingMetricReader` (5s interval)
- Lighter OTEL packages used (`sdk-trace-node`, `sdk-trace-base`) instead of `sdk-node` + `auto-instrumentations-node` because Turbopack cannot bundle the latter for standalone output
- OTEL env vars are set in `docker-compose.yaml` on the app service

## Docker

- **Dockerfile**: Multi-stage build on `oven/bun:1-alpine`. Copies standalone output + full `.next/server` directory (needed for instrumentation chunks). Runs as non-root `nextjs` user.
- **docker-compose.yaml**: 5 services:
  - `app` — Next.js on port 3000
  - `otel-collector` — OpenTelemetry Collector Contrib on port 4318
  - `tempo` — Grafana Tempo v2.7.2 (pinned; v2.10+ requires partition ring config)
  - `prometheus` — Prometheus on port 9090 (5s scrape interval, remote-write receiver enabled)
  - `grafana` — Grafana on port 3001 (admin/admin, anonymous view enabled)

## Grafana Dashboard

Auto-provisioned at `localhost:3001/d/nextjs-otel` with:

- Request rate (total + by route)
- Error rate
- Latency percentiles (p50/p90/p99) and by route (p95)
- Request rate by status code and HTTP method
- Service request rate table (client → server)
- Service graph latency (p99)
- Recent traces (TraceQL)

All PromQL queries use 30s range windows for low latency. Dashboard refreshes every 5s.

## Useful Commands

```bash
bun dev                              # Dev server with hot reload
bun run build                        # Production build
docker compose up -d                 # Start full stack
docker compose build app             # Rebuild app image
docker compose logs -f app           # Follow app logs
./traffic.sh http://localhost:3000 10 # Generate 10 req/s traffic
```

## Ports

| Service    | Port |
|------------|------|
| Next.js    | 3000 |
| Grafana    | 3001 |
| Prometheus | 9090 |
| OTEL Collector | 4318 |
