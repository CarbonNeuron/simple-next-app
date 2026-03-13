# simple-next-app

A Next.js app with MUI v9, OpenTelemetry observability, and a full local monitoring stack.

## Stack

- **Runtime**: Bun
- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI**: MUI v9 alpha with CSS theme variables (flicker-free light/dark mode)
- **Observability**: OpenTelemetry → Collector → Tempo + Prometheus → Grafana

## Getting Started

### Dev

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production (Docker)

```bash
docker compose up -d
```

| Service        | URL                       |
|----------------|---------------------------|
| App            | http://localhost:3000     |
| Grafana        | http://localhost:3001     |
| Prometheus     | http://localhost:9090     |
| OTEL Collector | http://localhost:4318     |

Grafana credentials: `admin` / `admin`. The dashboard auto-provisions at `/d/nextjs-otel`.

## Observability

Traces and metrics are exported via OTLP HTTP to the OpenTelemetry Collector, then forwarded to Tempo (traces) and Prometheus (metrics), and visualized in Grafana.

To generate traffic:

```bash
./traffic.sh http://localhost:3000 10  # 10 req/s
```

## Project Structure

```
src/
  app/
    layout.tsx         — Root layout (MUI providers)
    page.tsx           — Home page
    _components/       — Shared UI components
    components/        — /components route (MUI showcase)
    docs/              — /docs route (introduction, installation, quick-start, theming)
  theme.tsx            — MUI theme (CSS variables, light/dark, Roboto, NextLink)
instrumentation.ts     — OpenTelemetry setup
Dockerfile             — Multi-stage bun build, standalone output
docker-compose.yaml    — App + observability stack
```
