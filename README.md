# 出海图影工场

一个面向跨境电商团队的静态官网项目，覆盖电商图片生成、电商组图、电商视频生成、出海视频翻译和电商教程介绍。

## 项目结构

```text
.
├── assets/
│   └── hero-commerce-ai.png
├── index.html
├── script.js
├── styles.css
├── wrangler.toml
└── .github/workflows/deploy-cloudflare-pages.yml
```

## 本地预览

可以直接用浏览器打开 `index.html`。如果想用本地静态服务器：

```bash
python -m http.server 8788
```

然后访问 `http://localhost:8788`。

## 发布到 GitHub

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/<your-account>/<your-repo>.git
git push -u origin main
```

当前 Codex 已检测到 GitHub 登录账号为 `yuklay`，但可用工具里没有直接创建新仓库的接口。你可以先在 GitHub 创建一个空仓库，再把远程地址填到上面的 `origin`。

## Cloudflare Pages 部署

推荐方式一：Cloudflare Pages 连接 GitHub 仓库。

1. 在 Cloudflare Dashboard 创建 Pages 项目。
2. 连接 GitHub 仓库。
3. Framework preset 选择 `None`。
4. Build command 留空。
5. Build output directory 填 `/` 或留空。
6. 保存后触发首次部署。

推荐方式二：通过 Wrangler 部署。

```bash
npx wrangler pages deploy . --project-name=ecom-ai-creative-site
```

如果要使用 GitHub Actions 自动部署，需要在 GitHub 仓库 Secrets 中配置：

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## 后续可扩展方向

- 接入用户登录、订单和套餐付费。
- 将 `mailto` 表单替换为 CRM、飞书、多维表格或后端接口。
- 接入图片生成、视频生成、字幕翻译和教程 CMS。
- 按独立站、亚马逊、TikTok Shop 等平台输出不同落地页。
