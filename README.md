# 2026 FIFA World Cup — 赛前预测分析平台

每日自动更新的世界杯赛前深度预测，基于 Elo 评级、xG 期望进球与蒙特卡洛模拟。

**在线地址：** https://x3bepresent.github.io/worldcup2026

---

## 一次性部署步骤（约 10 分钟）

### 第一步：在 GitHub 创建仓库

1. 打开 https://github.com/new
2. Repository name 填写：`worldcup2026`
3. 选择 **Public**（必须公开，才能使用免费 Pages）
4. 不要勾选 Initialize README
5. 点击 **Create repository**

### 第二步：在电脑上推送代码

打开命令提示符（Win+R 输入 cmd），运行以下命令：

```cmd
cd D:\worldcup2026
git init
git add .
git commit -m "🌍 初始化2026世界杯预测平台"
git branch -M main
git remote add origin https://github.com/x3bepresent/worldcup2026.git
git push -u origin main
```

### 第三步：开启 GitHub Pages

1. 打开 https://github.com/x3bepresent/worldcup2026/settings/pages
2. Source 选择 **Deploy from a branch**
3. Branch 选择 **main**，文件夹选 **/ (root)**
4. 点击 Save
5. 等约 2 分钟，网站就上线了

**访问地址：** https://x3bepresent.github.io/worldcup2026

### 第四步（可选）：开启自动更新

不需要任何额外操作！GitHub Actions 已配置好，每天北京时间 08:00 自动运行。

查看运行记录：https://github.com/x3bepresent/worldcup2026/actions

---

## 可选：接入 API-Football 获取更详细数据

1. 注册免费账号：https://dashboard.api-football.com/register（每天100次免费调用）
2. 复制你的 API Key
3. 打开 https://github.com/x3bepresent/worldcup2026/settings/secrets/actions
4. 点击 **New repository secret**
5. Name 填 `API_FOOTBALL_KEY`，Value 填你的 Key
6. 保存后下次自动更新时生效

---

## 手动触发更新

打开 https://github.com/x3bepresent/worldcup2026/actions/workflows/daily-update.yml
点击 **Run workflow** → **Run workflow**

---

## 项目文件结构

```
worldcup2026/
├── index.html              主预测页面
├── matches.html            今日赛事深度分析
├── css/style.css           全局样式
├── js/
│   ├── data.js             48队赛前数据
│   ├── app.js              主页渲染逻辑
│   ├── matches-data.js     ← 每日自动更新的文件
│   └── matches-app.js      今日赛事渲染逻辑
├── scripts/
│   └── fetch-matches.js    自动更新脚本
├── .github/workflows/
│   └── daily-update.yml    GitHub Actions 定时任务
└── package.json
```

---

*数据来源：TheSportsDB / API-Football / Google News RSS · 预测仅供参考娱乐*
