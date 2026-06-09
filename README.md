# 2026 FIFA World Cup — 赛前预测分析平台

每日自动更新的世界杯赛前深度预测，基于 Elo 评级、xG 期望进球与蒙特卡洛模拟。

**在线地址：** https://x3bepresent.github.io/worldcup2026

---

## 网站定位与合规说明

本站为 **体育数据分析与娱乐交流网站**，面向体育爱好者展示公开赛事信息与模型推算结果。

- 仅作信息展示，不涉及任何金钱交易、场外竞猜或有奖竞猜活动
- 不引导、不鼓励用户参与任何违法或不当行为，与任何博彩或赌博平台无任何关联
- 所有模型推算结果仅供交流娱乐，不对准确性作任何保证

完整合规声明见各页面底部「重要声明」板块。付费订阅用户另见 **[用户服务协议](terms.html)** 及 `docs/用户服务协议.md`。

### 付费用户开通流程（建议）

1. 发送 `terms.html` 链接或 `docs/用户服务协议.md` 给用户阅读  
2. 用户回复确认语：「本人已阅读并同意《用户服务协议》……」  
3. 完成付款后开通推送  
4. 群内禁止讨论场外竞猜、违法相关内容，发现可依据协议终止服务  

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

## 升级路线图（维护者参考，不对外展示）

### Level 1 · 当前版本（已完成）

手动更新 `js/matches-data.js` 文件即可刷新全部内容。每天约 5 分钟维护，适合个人使用。

### Level 2 · 半自动（免费 API）

接入 **API-Football**（每日 100 次免费调用）或 **TheSportsDB**（完全免费）。用 Node.js 脚本每天拉取阵容、赛果数据，自动更新 JSON 文件。

- 脚本：`scripts/update-data.js`
- 定时任务：`.github/workflows/daily-update.yml`（每天北京时间 08:00）
- 输出文件：`js/live-data.js`（赛果、积分榜、伤病）

### Level 3 · 全自动（带新闻）

增加 **Google News RSS** 爬虫（通过 CORS 代理），自动抓取伤病、更衣室新闻。结合 AI 摘要生成预测调整理由。可按需将 cron 改为每小时执行，实现准实时更新。

### 数据来源说明

| 数据类型 | 来源 |
|---|---|
| 赛程 / 分组 | FIFA 官方公告 |
| 赛果 / 积分榜 | API-Football（接入后） |
| 伤病 / 阵容 | API-Football + 公开新闻 |
| 裁判统计 | FIFA 官网 + RSSSF 存档 + Opta |
| 预测模型 | Elo + xG + 蒙特卡洛模拟 |

### 概率动态调整机制

当检测到伤病/停赛消息时，系统可按 Elo 影响系数自动调整胜率，例如：

- 主力前锋缺席 → 对应队胜率 -5% 至 -12%
- 主力后卫缺席 → 对应队胜率 -3% 至 -8%

实现逻辑见 `scripts/fetch-matches.js`。

### 最简自动化方案

一个 Node.js 脚本 + 免费 API Key + GitHub Actions 定时执行，无需独立服务器，数据直接写回仓库并自动部署到 GitHub Pages。

---

## 项目文件结构

```
worldcup2026/
├── index.html              主预测页面
├── matches.html            今日赛事深度分析
├── schedule.html           完整赛程总表（104场）
├── terms.html              用户服务协议（付费订阅用）
├── docs/
│   └── 用户服务协议.md     协议 Markdown 版（可发给用户）
├── css/style.css           全局样式（含合规声明样式）
├── flags/                  本地国旗图片（48队）
├── js/
│   ├── data.js             48队赛前数据
│   ├── app.js              主页渲染逻辑
│   ├── matches-data.js     今日赛事数据（可手动/API更新）
│   ├── matches-app.js      今日赛事渲染逻辑
│   └── live-data.js        每日自动生成的赛果数据
├── scripts/
│   ├── update-data.js      API-Football 自动更新脚本
│   ├── download-flags.js   下载国旗到本地
│   └── fetch-matches.js    高级数据抓取（含概率调整）
├── .github/workflows/
│   └── daily-update.yml    GitHub Actions 定时任务
└── package.json
```

---

*本站为体育数据分析与娱乐交流网站 · 内容仅供交流娱乐 · 不对模型推算结果负责*
