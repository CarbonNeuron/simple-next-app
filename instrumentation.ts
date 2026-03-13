import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-http";
import {
  MeterProvider,
  PeriodicExportingMetricReader,
} from "@opentelemetry/sdk-metrics";
import { resourceFromAttributes } from "@opentelemetry/resources";
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
} from "@opentelemetry/semantic-conventions";

export async function register() {
  const resource = resourceFromAttributes({
    [ATTR_SERVICE_NAME]: process.env.OTEL_SERVICE_NAME ?? "simple-next-app",
    [ATTR_SERVICE_VERSION]: "0.1.0",
  });

  const endpoint =
    process.env.OTEL_EXPORTER_OTLP_ENDPOINT ?? "http://localhost:4318";

  // Traces
  const traceExporter = new OTLPTraceExporter({
    url: `${endpoint}/v1/traces`,
  });

  const tracerProvider = new NodeTracerProvider({
    resource,
    spanProcessors: [
      new BatchSpanProcessor(traceExporter, {
        scheduledDelayMillis: 1000,
        maxExportBatchSize: 512,
      }),
    ],
  });

  tracerProvider.register();

  // Metrics
  const metricExporter = new OTLPMetricExporter({
    url: `${endpoint}/v1/metrics`,
  });

  new MeterProvider({
    resource,
    readers: [
      new PeriodicExportingMetricReader({
        exporter: metricExporter,
        exportIntervalMillis: 5000,
      }),
    ],
  });
}
