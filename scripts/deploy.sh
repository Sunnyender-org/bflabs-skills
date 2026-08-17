#!/bin/zsh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STAGE="${TMPDIR:-/tmp}/bflabs-skills-dist"
ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-ae2e9fc7cd28528a178c6fb4ce9debb9}"

rm -rf "$STAGE"
mkdir -p "$STAGE"
cp "$ROOT/index.html" "$ROOT/catalog.html" "$ROOT/404.html" "$ROOT/_headers" "$ROOT/robots.txt" "$ROOT/sitemap.xml" "$STAGE/"
cp -R "$ROOT/assets" "$STAGE/assets"

CLOUDFLARE_ACCOUNT_ID="$ACCOUNT_ID" npx wrangler pages deploy "$STAGE" \
  --project-name=bflabs-skills \
  --branch=main \
  --commit-dirty=true \
  --commit-message="${1:-Update BF Labs Skills}"
