# Leo's Constellation Field

Leo 的个人发布页 / 网站导航，收录我自建和部署的各类站点。

![](https://img.shields.io/badge/Base-Vue3-brightgreen.svg)
![](https://img.shields.io/badge/Build-Vite-orange.svg)
![](https://img.shields.io/badge/Installer-Yarn-blue.svg)

[在线访问](https://li.trageek.com/) | [GitHub](https://github.com/continue33) | [更新日志](./CHANGELOG.md)

![](./demo/show.png)

基于 Vue 3 + vite-ssg 的静态导航页，自适应布局兼容桌面与移动端：

- 星空连线背景（Canvas 2D 实时绘制，无外部依赖，随鼠标轻微视差），独立组件见 [continue33/Vibe-UI](https://github.com/continue33/Vibe-UI)
- 站点抽屉：按分类展示，带站点预览图与搜索框
- 欢迎标语随机轮换

# 1. 部署

## 1.1 Vercel 自动部署

Fork 本仓库后在 Vercel 导入即可，推送到 `master` 分支会自动重新部署。

[![](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcontinue33%2FBlog-Index&repository-name=Blog-Index)

## 1.2 修改配置

> 这一节写给维护这个页面的人和 AI agent：按下面的步骤改完、本地构建通过、推送 `master`，Vercel 会在 1～2 分钟内自动上线 https://li.trageek.com/ 。

### 文件一览

| 要改什么 | 文件 |
| --- | --- |
| 分类与站点（抽屉里的全部卡片） | `src/config.ts` 中的 `WEBSITE_SORTS` |
| 站点预览图 | `public/previews/<slug>.webp` |
| 首页标题、标语、GitHub / 博客链接、SEO | `src/config.ts` 中的 `GLOBAL_CONFIG` |
| 类型定义（一般不用动） | `src/types/index.d.ts` |
| 预览图路径规则（一般不用动） | `src/utils/preview.ts` |

`WEBSITE_ITEMS` 已废弃，保持空数组，不要往里加东西。

### 站点字段

```ts
{
  title: "Google-Manager",                       // 必填，卡片标题，沿用现有风格：英文、单词间用连字符
  description: "Gmail 多账户邮件同步与管理",         // 选填，一句中文简介，15 字左右
  url: "https://google-manager.trageek.com",     // 必填，完整地址，带 https://，结尾不加 /
  icon: "https://imgbed-idk.pages.dev/file/favicon/xxx.svg", // 选填，见下方“图标”
  // preview: "/previews/custom.webp",           // 选填，仅当预览图文件名不按规则命名时才写
}
```

### 在已有分类里添加站点

1. 打开 `src/config.ts`，在 `WEBSITE_SORTS` 里找到目标分类（按 `title` 找）。当前分类依次为：`General`、`AI&LLM`、`Web-Tools`、`Multi-Manager`、`Show`、`Webmail`。
2. 在该分类的 `sites` 数组里加一个对象。卡片按数组顺序显示，新站点默认放在末尾；需要和同类站点挨着时，插到对应位置即可（例如 New-API 放在 Done-Hub 之后）。
3. 准备图标和预览图（见下文）。
4. 本地 `yarn build` 通过后提交推送。

### 删除或移动站点

- 删除：从 `sites` 数组里删掉整个对象，并同时删除 `public/previews/` 里对应的 `<slug>.webp`，避免留下无用文件。
- 移动到别的分类：把整个对象剪切到目标分类的 `sites` 里，预览图不用动。
- 改地址：`url` 一变，预览图的 slug 也会变，需要把 webp 改名（或重新截图）。

### 添加、删除或调整分类

分类就是 `WEBSITE_SORTS` 数组里的一项，数组顺序即抽屉里的分类顺序：

```ts
{
  title: "New-Sort",   // 分类名，沿用现有风格：英文
  sites: [
    // 站点对象……
  ],
},
```

- 新增：在数组中想要的位置插入上面这样一项。
- 删除：删掉整项；分类里站点的预览图如果不再使用，一并删除。
- 改名或排序：直接改 `title` 或调整数组顺序。

不要使用旧格式里带 `id` 的分类写法（`WebsiteSortOld`），新分类一律用 `title + sites`。

### 预览图（放在本仓库）

预览图随仓库一起提交，路径由站点 `url` 自动推导，不需要在配置里写：

- 规则：去掉 `https://`，转小写，所有非字母数字字符换成 `-`，首尾的 `-` 去掉，再加 `.webp`。
- 例子：`https://google-manager.trageek.com` → `public/previews/google-manager-trageek-com.webp`；`https://uptimer.trageek.com/status/idkbungle` → `public/previews/uptimer-trageek-com-status-idkbungle.webp`。
- 截图规格：1280×800 视口，截首屏；页面支持切换时用**英文 + 日间（浅色）模式**；保存为 webp，缩放到宽 960（960×600），质量约 80，单张控制在 100 KB 以内。
- 截图时页面要加载完整，不要截到登录弹窗、报错页或空白页；页面上有真实邮箱、账户名、Key 之类的隐私信息时，先打码或换一个不含隐私的页面再截。
- 文件名不符合规则时（比如同一站点要用特殊截图），在站点对象里写 `preview: "/previews/xxx.webp"` 指定。

### 图标（放在图床）

`icon` 填一个可公开访问的图片地址，统一托管在图床 `https://imgbed-idk.pages.dev` 的 `favicon` 目录：

1. **已有链接**：如果 Leo 给了图床链接，直接填进 `icon`。
2. **自己上传**：先取站点自己的图标（优先 `/favicon.svg`，其次 `<link rel="icon">` 指向的文件、`/favicon.ico` 或 `apple-touch-icon`），然后上传到图床的 `favicon` 目录：

   ```sh
   # IMGBED_KEY 由 Leo 单独提供，只放在环境变量里，切勿写进仓库、配置或提交记录
   curl -H "Authorization: Bearer $IMGBED_KEY" \
     -F "file=@google-manager.svg" \
     "https://imgbed-idk.pages.dev/upload?uploadFolder=favicon&uploadNameType=default"
   # 返回 [{"src":"/file/favicon/1794974040305_google-manager.svg"}]
   ```

   把返回的 `src` 拼成完整地址填进 `icon`：`https://imgbed-idk.pages.dev/file/favicon/1794974040305_google-manager.svg`。填之前用浏览器或 `curl -I` 确认能返回 200。
3. 鉴权必须用 `Authorization: Bearer` 请求头，用 `authCode` 查询参数会返回 Unauthorized。
4. 站点没有图标时 `icon` 可以留空，卡片会显示标题首字母。

部分老站点的图标在 `favicons` 目录（多一个 s），保持原样即可，新上传的统一放 `favicon`。

### 其他全局配置（`GLOBAL_CONFIG`）

- `BLOG_NAME`、`TKD`：页面标题与 SEO 信息。
- `BLOG_URL`、`GITHUB_URL`：首页底部的博客、GitHub 图标链接，当前 GitHub 为 `https://github.com/continue33`。
- `SLOGANS`：欢迎标语，随机轮换，第一句为主标语，出现概率更高。
- `ICP`、`ICP_URL`、`FOOTER_INFO`：页脚备案信息。

### 改完后的检查清单

- [ ] `yarn build`（或 `npx vite-ssg build`）无报错
- [ ] 新站点的 `url`、`icon` 都能打开，`public/previews/` 里有对应的 webp
- [ ] 删除的站点没有留下孤立的预览图
- [ ] 提交里没有任何密钥、密码或 Token
- [ ] 推送 `master` 后，在 https://li.trageek.com/ 打开抽屉确认卡片、图标、预览图都正常

## 1.3 手动部署

环境要求：

- node >= 18
- yarn 1.22.19

```sh
git clone https://github.com/continue33/Blog-Index.git
cd ./Blog-Index
yarn install
yarn build
```

将 `dist` 目录下的文件部署到任意静态服务器即可。

# 2. 开发

```sh
yarn install
yarn dev
```

# 3. 致谢

本项目 Fork 自 [EsunR/Blog-Index](https://github.com/EsunR/Blog-Index)，感谢原作者的开源。
