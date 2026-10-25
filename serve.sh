#!/usr/bin/env bash
# Sirve el portal en local. Uso: ./serve.sh [puerto]
set -euo pipefail
PORT="${1:-8080}"
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "Norsk Kjekt → http://localhost:${PORT}"
echo "Ctrl+C para parar."
cd "$DIR"
python3 -m http.server "$PORT"
