#!/bin/zsh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-ae2e9fc7cd28528a178c6fb4ce9debb9}"
PUBLISH="$ROOT/.publish"

rm -rf "$PUBLISH"
mkdir -p "$PUBLISH"
cp "$ROOT/index.html" "$ROOT/catalog.html" "$ROOT/hosts.html" "$ROOT/tiers.html" "$ROOT/install.html" "$ROOT/404.html" "$ROOT/_headers" "$ROOT/robots.txt" "$ROOT/sitemap.xml" "$PUBLISH/"
cp -R "$ROOT/assets" "$PUBLISH/assets"

CLOUDFLARE_ACCOUNT_ID="$ACCOUNT_ID" npx wrangler deploy --config "$ROOT/wrangler.jsonc"
