# 🤖 AI Agents in Depth: Design Principles and Engineering Practice
### 大模型智能体深度研发与工程实践

本项目是基于《AI Agents in Depth》（李博杰 / v2.0）打造的交互式全栈体系化学习平台，使用 **Nextra 4 + Next.js App Router + MDX + Mermaid** 构建，系统梳理现代 AI Agent 从单体核心、上下文工程、工具 MCP、代码自进化到多智能体组织的完整工程图谱。

---

## 📚 课程目录导航 (10 大核心章节)

| 章节 | 名称 | 核心要点 |
| :--- | :--- | :--- |
| **第 1 章** | [Agent 基础与架构](./app/ch01-fundamentals) | 核心公式 $\text{Agent} = \text{LLM} + \text{Context} + \text{Tools} + \text{Memory} + \text{Harness}$、ReAct 循环、消融实验、缰绳工程、Proposer-Reviewer 模式 |
| **第 2 章** | [Context 上下文工程](./app/ch02-context) | API 消息层级、KV Cache 机制与 5 大反模式、Agent Skills 渐进披露、状态栏蒸馏、分层上下文压缩 |
| **第 3 章** | [用户记忆与知识库](./app/ch03-memory-rag) | 轨迹 vs 长期记忆、混合检索（BM25 + 向量 + RRF）、RAPTOR 递归树、Anthropic Contextual Retrieval、知识 PR 更新与双层记忆架构 |
| **第 4 章** | [工具工程与 MCP](./app/ch04-tools) | 三级风险分类学、ACI 界面设计五法则、Model Context Protocol (MCP) 深度解析、分层检索与 MCP-Zero、Sidecar 容器沙箱 |
| **第 5 章** | [编程智能体 Coding Agent](./app/ch05-coding) | 7 大基石工具、文件编辑算法进化（从 Diff 到精确锚点替换）、TDD 闭环与防篡改影子测试、代码 6 维元能力、致命三元组安全防御 |
| **第 6 章** | [多模态与交互工程](./app/ch06-interaction) | GUI 自动化（DOM vs 纯视觉像素）、Set-of-Marks (SoM)、300ms 全双工流式语音、VAD 智能打断、混合主动协同与 Generative UI、具身智能与 Sim-to-Real |
| **第 7 章** | [评测与可观测性体系](./app/ch07-evaluation) | 终态物理断言、SWE-bench、WebArena、GAIA 基准、LLM-as-a-Judge 三大偏差双向校准、OpenInference 树状追踪与四大黄金指标 |
| **第 8 章** | [智能体模型后训练](./app/ch08-post-training) | 通用模型行动缺陷、拒绝采样（Rejection Sampling）黄金数据工程、GRPO 强化学习、推理算力扩展（Long CoT）、80/20 混合回放防遗忘 |
| **第 9 章** | [持续演进与自进化](./app/ch09-evolution) | Reflexion 语言反思、`.agentrules` 规则自进化流水线、Tool-Making 工具自合成、迷信规则根除与规则回归测试 |
| **第 10 章** | [多智能体与终局展望](./app/ch10-multi-agent) | 4 大协同拓扑（集中式/流水线/黑板/对抗辩论）、A2A 结构化信封通信、Git Worktree 状态隔离、数字化软件公司仿真、十大工程铁律与 AGI 阶梯 |

---

## 🛠️ 技术栈与特性

- **框架底座**：Next.js 16 (App Router) + React 19 + TypeScript
- **文档引擎**：Nextra 4 (`nextra-theme-docs`)
- **交互与渲染**：
  - **MDX** 驱动的富交互课件
  - **Mermaid** 矢量流转图与序列图原生支持
  - **`<Quiz />`** 原生客户端交互式选择题自测组件（带解析与防套路选项设计）
  - **Turbopack** 极速编译支持

---

## 🚀 快速启动

### 1. 安装依赖
```bash
pnpm install
```

### 2. 启动本地开发服务
```bash
pnpm dev
```
打开浏览器访问 [http://localhost:3000](http://localhost:3000) 即可开始学习。

### 3. 生产构建与静态生成
```bash
pnpm build
```

---

## 📄 License
MIT License.
