'use client'

import React from 'react'
import Link from 'next/link'
import styles from './landing.module.css'

interface ChapterItem {
  code: string
  title: string
  summary: string
  breakthrough: string
  techs: string[]
  href: string
}

interface Phase {
  phaseNum: string
  title: string
  chapters: ChapterItem[]
}

const phases: Phase[] = [
  {
    phaseNum: '01',
    title: '第一阶段：基础架构篇 (Architecture & Context)',
    chapters: [
      {
        code: 'CH 01',
        title: 'Agent 核心基础与架构',
        summary: '剖析 ReAct 循环心智模型、无状态 LLM 与环境交互闭环、消融实验与 Harness 生产级架构基石。',
        breakthrough: '心智模型建立',
        techs: ['ReAct', 'State Machine', 'Harness', 'Ablation'],
        href: '/ch01-fundamentals/01-agent-formula',
      },
      {
        code: 'CH 02',
        title: 'Context 上下文工程',
        summary: 'KV Cache 优化深度实践、静态前缀冻结、分级上下文压缩策略，实现降本 90% 并杜绝上下文腐烂。',
        breakthrough: '降本 90% / 低延迟',
        techs: ['KV Cache', 'Static Prefix', 'Compression', 'TTFT'],
        href: '/ch02-context/01-context-architecture-and-api',
      },
    ],
  },
  {
    phaseNum: '02',
    title: '第二阶段：核心能力篇 (Memory, Tools & Code)',
    chapters: [
      {
        code: 'CH 03',
        title: '用户记忆与知识库系统',
        summary: '轻量化 JSON Cards、Agentic RAG、跨会话长期记忆持久化、上下文检索与主动式个性化服务。',
        breakthrough: '跨会话记忆闭环',
        techs: ['JSON Cards', 'Agentic RAG', 'Hybrid Search', 'Vector'],
        href: '/ch03-memory-rag/01-user-memory-system',
      },
      {
        code: 'CH 04',
        title: '工具系统与 MCP 协议',
        summary: 'Model Context Protocol (MCP) 深度解析、动态披露机制、工具描述工程与 Sidecar 隔离沙箱。',
        breakthrough: '工业级手脚延伸',
        techs: ['MCP Protocol', 'JSON-RPC', 'Sandbox', 'ACI'],
        href: '/ch04-tools/01-tool-taxonomy-and-aci',
      },
      {
        code: 'CH 05',
        title: '编程智能体 Coding Agent',
        summary: '7 大核心文件编辑工具、精确锚点差异替换、TDD 测试驱动闭环与防作弊测试护栏设计。',
        breakthrough: '打造自主代码引擎',
        techs: ['SWE-bench', 'TDD', 'Lethal Triad', 'Diff Patch'],
        href: '/ch05-coding/01-coding-agent-tools',
      },
    ],
  },
  {
    phaseNum: '03',
    title: '第三阶段：交互与评测篇 (Interaction & Eval)',
    chapters: [
      {
        code: 'CH 06',
        title: '交互拓展与多模态工程',
        summary: '异步事件驱动、Voice 全双工实时音频流、Computer Use 屏幕像素自动化操作与人机协作。',
        breakthrough: '打破单轮模态限制',
        techs: ['Computer Use', 'Voice Full-Duplex', 'Event-Driven'],
        href: '/ch06-interaction/01-gui-agent-and-computer-use',
      },
      {
        code: 'CH 07',
        title: '科学评测与可观测性体系',
        summary: 'Pass@k 与 Pass^k 严谨数学指标、LLM-as-a-Judge 偏差校准、失败归因分析与 OpenTelemetry。',
        breakthrough: '数据驱动摆脱玄学',
        techs: ['Pass@k', 'LLM-as-a-Judge', 'OpenTelemetry', 'Tracing'],
        href: '/ch07-evaluation/01-evaluation-crisis-and-end-state',
      },
    ],
  },
  {
    phaseNum: '04',
    title: '第四阶段：进阶演进篇 (Post-Training, Evolution & Swarm)',
    chapters: [
      {
        code: 'CH 08',
        title: '智能体模型后训练',
        summary: 'SFT 固化工具调用协议、RL (PPO/GRPO) 强化探索策略、RLVP 路径惩罚将能力注入权重。',
        breakthrough: '能力内化进模型',
        techs: ['SFT', 'GRPO / RL', 'RLVP', 'Trajectory Synthesis'],
        href: '/ch08-post-training/01-why-general-models-fail-agents',
      },
      {
        code: 'CH 09',
        title: '持续演进与自进化系统',
        summary: '经验知识库在线积累、动态 Prompt 规则学习、工具自合成 (Self-Synthesis) 与自愈防护。',
        breakthrough: '越练越熟的自愈体',
        techs: ['Reflexion', 'Rule Evolution', 'Self-Synthesis'],
        href: '/ch09-evolution/01-online-adaptation-and-reflexion',
      },
      {
        code: 'CH 10',
        title: '多智能体网络与终局协同',
        summary: '共享/隔离上下文拓扑、Manager-Worker 分层模式、Decentralized 对等网与 A2A 信封通信。',
        breakthrough: '群体智慧拓扑涌现',
        techs: ['A2A Envelope', 'Topologies', 'Deadlock Resolve'],
        href: '/ch10-multi-agent/01-multi-agent-topologies',
      },
    ],
  },
]

export function LandingCurriculum() {
  return (
    <section style={{ marginBottom: '4.5rem' }}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionBadge}>Curriculum Map · 课程全景大纲</span>
        <h2 className={styles.sectionTitle}>十阶段系统化工程进阶知识图谱</h2>
        <p className={styles.sectionSubtitle}>
          从底层运行机理、上下文工程与工具协议，到代码生成自愈、科学评测与多智能体系统。
        </p>
      </div>

      {phases.map((phase) => (
        <div key={phase.phaseNum} style={{ marginBottom: '2.5rem' }}>
          <div className={styles.curriculumPhaseHeader}>
            <span className={styles.phaseNumber}>{phase.phaseNum}</span>
            <h3 className={styles.phaseTitle}>{phase.title}</h3>
          </div>

          <div className={styles.bentoGrid}>
            {phase.chapters.map((ch) => (
              <Link key={ch.code} href={ch.href} className={styles.chapterCard}>
                <div>
                  <div className={styles.cardTopRow}>
                    <span className={styles.chCode}>{ch.code}</span>
                    <span className={styles.breakthroughTag}>{ch.breakthrough}</span>
                  </div>
                  <h4 className={styles.chTitle} style={{ marginTop: '0.625rem', marginBottom: '0.45rem' }}>
                    {ch.title}
                  </h4>
                  <p className={styles.chSummary}>{ch.summary}</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.techPills}>
                    {ch.techs.map((t) => (
                      <span key={t} className={styles.techPill}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className={styles.enterLink}>
                    阅读
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
