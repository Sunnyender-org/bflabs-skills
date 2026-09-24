# BF Labs Skills

BF Labs 的 skill 目录站。视觉跟 [bflabs-ui](https://github.com/Sunnyender-org/bflabs-ui) 和 [bflabs.cn](https://bflabs.cn) 同一套。

正式地址：https://skills.bflabs.cn

和 `readiness.bflabs.cn` 一样，走 Cloudflare Worker 自定义域。本地打开 `index.html`。后续更新：

```bash
./scripts/deploy.sh
```

## 建设品牌

目录与 `brand-building.html` 提供独立品牌建设入口。`downloads/` 保存由 brand-building 固定版本源码生成的发行副本，`brand-building.json` 记录来源提交、依赖提交和 SHA-256；不要手改压缩包里的文件。

更新包：在 brand-building 运行 `scripts/package.py all --readiness-checkout <pinned-checkout>`，完成包与消费验收后，将产物复制到 `downloads/` 并更新对应回执。`check-catalog.js` 会核对实际文件哈希，部署前自动运行。

品牌 Skill 源码：https://github.com/Sunnyender-org/brand-building 。版本0.1.1由GitHub Release和此目录分发；第三方市场上架状态独立确认。

## 检查网站

仍使用已发布的 0.6.6 包：

`https://readiness.bflabs.cn/downloads/bflabs-agent-readiness-skillhub-0.6.6.zip`

旧目录锚点 `#geo` 以及子项 `#geo-discover` 等保持有效。不要把未发布的 0.7.0 当成可下载版本。

## 本地检查

```bash
node --check assets/skills-kit.js scripts/check-catalog.js
node scripts/check-catalog.js
```
