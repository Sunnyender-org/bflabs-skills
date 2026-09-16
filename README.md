# BF Labs Skills

BF Labs 的 skill 目录站。视觉跟 [bflabs-ui](https://github.com/Sunnyender-org/bflabs-ui) 和 [bflabs.cn](https://bflabs.cn) 同一套。

正式地址：https://skills.bflabs.cn

和 `readiness.bflabs.cn` 一样，走 Cloudflare Worker 自定义域。本地打开 `index.html`。后续更新：

```bash
./scripts/deploy.sh
```

## 建设品牌

公开页是 `brand-building.html`。目录里的「建设品牌」只链到这一页，不链 GitHub，也不放下载。

`Sunnyender-org/brand-building` 远程仓库还没建。本地候选版本是 0.1.0。主仓建好远程、并确认可安装产物之后，再把 GitHub、下载或 SkillHub 写进目录。在那之前不要把未审核的安装链接发到站点上。

## 检查网站

仍使用已发布的 0.6.6 包：

`https://readiness.bflabs.cn/downloads/bflabs-agent-readiness-skillhub-0.6.6.zip`

旧目录锚点 `#geo` 以及子项 `#geo-discover` 等保持有效。不要把未发布的 0.7.0 当成可下载版本。

## 本地检查

```bash
node --check assets/skills-kit.js scripts/check-catalog.js
node scripts/check-catalog.js
```
