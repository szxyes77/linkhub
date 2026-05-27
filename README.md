# 双子星 · 个人链接聚合页

极简风格的个人链接展示页，类似 Linktree，使用 Vite + React + Tailwind CSS 构建。

## 快速开始

```bash
npm install
npm run dev
```

浏览器访问终端中显示的本地地址（通常为 `http://localhost:5173`）。

## 修改个人信息

编辑 `src/data/links.js` 即可更新头像、昵称、签名和链接列表，无需改动组件代码。

## 构建部署

```bash
npm run build
npm run preview
```

构建产物位于 `dist/` 目录，可部署至任意静态托管服务。

## 项目结构

```
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── links.js          # 个人信息配置
    └── components/
        ├── LinkButton.jsx    # 链接按钮
        └── LinkIcon.jsx      # SVG 图标
```
