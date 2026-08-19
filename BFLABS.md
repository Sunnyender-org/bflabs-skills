# BF Labs Skills Catalog Repository Rules

## Scope

This repository owns the static catalog presented at `skills.bflabs.cn`. It is a catalog and distribution surface, not the implementation source for every listed Skill.

## Source and presentation

- `index.html` and `catalog.html` own the primary catalog surfaces.
- `assets/` owns published static assets.
- `robots.txt`, `sitemap.xml`, `_headers`, and `wrangler.jsonc` own discovery, headers, and Worker configuration.
- Visual language should remain aligned with `Sunnyender-org/bflabs-ui` and `bflabs.cn`.
- Do not claim a Skill is installable, released, or verified unless its owning repository and published artifact support that claim.

## Local verification

Open the static pages locally and verify links, assets, responsive layout, metadata, robots, and sitemap behavior. Run any checks supplied by the changed script or asset pipeline.

## Deployment boundary

`./scripts/deploy.sh` publishes the site through Cloudflare Worker infrastructure. Running it, changing the custom domain, or modifying Cloudflare configuration requires explicit authorization and a post-deploy readback.

