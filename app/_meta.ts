import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
  index: {
    title: '课程导读 (Overview)',
    type: 'page',
    theme: {
      layout: 'full',
      sidebar: false,
      toc: false,
      pagination: false,
      copyPage: false,
      timestamp: false,
    },
  },
  'ch01-fundamentals': '第 1 章：Agent 基础与架构',
  'ch02-context': '第 2 章：Context 上下文工程',
  'ch03-memory-rag': '第 3 章：用户记忆与知识库',
  'ch04-tools': '第 4 章：工具工程与 MCP',
  'ch05-coding': '第 5 章：编程智能体 Coding Agent',
  'ch06-interaction': '第 6 章：多模态与交互工程',
  'ch07-evaluation': '第 7 章：评测与可观测性体系',
  'ch08-post-training': '第 8 章：智能体模型后训练',
  'ch09-evolution': '第 9 章：持续演进与自进化',
  'ch10-multi-agent': '第 10 章：多智能体与终局展望',
  reference: '核心速查 (Reference)',
  mission: '学习使命 (Mission)'
}

export default meta
