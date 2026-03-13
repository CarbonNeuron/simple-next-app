#!/usr/bin/env bash
URL="${1:-http://localhost:3000}"
RPS="${2:-5}"
DELAY=$(awk "BEGIN {printf \"%.3f\", 1/$RPS}")

echo "Generating ~${RPS} req/s to ${URL} (Ctrl+C to stop)"

while true; do
  curl -s -o /dev/null -w "%{http_code} %{time_total}s\n" "$URL" &
  sleep "$DELAY"
done
