'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import styles from './landing.module.css'

export function LandingHero() {
  const [activeTab, setActiveTab] = useState<'react' | 'kv' | 'mcp'>('react')

  return (
    <section className={styles.heroSection}>
      {/* 顶部状态微胶囊 */}
      <div className={styles.statusBadge}>
        <span className={styles.statusDot} />
        <span>《AI Agents in Depth》架构课程 · 李博杰 著</span>
      </div>

      {/* Hero 标题：务实、专业、直接 */}
      <h1 className={styles.heroTitle}>
        生产级 AI Agent <br />
        <span className={styles.gradientText}>架构设计与工程实践</span>
      </h1>

      {/* Hero 副文本：清晰明确，说明具体技术点与目标 */}
      <p className={styles.heroSubtitle}>
        系统掌握 ReAct 循环、KV Cache 优化、MCP 工具协议与 Coding Agent 闭环自愈，从零构建稳定可靠的自主智能体。
      </p>

      {/* 行动组 CTAs */}
      <div className={styles.heroActions}>
        <Link href="/ch01-fundamentals/01-agent-formula" className={styles.btnPrimary}>
          <span>开始学习第 1 课</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
        <Link href="/reference/agent-core-architecture" className={styles.btnSecondary}>
          <span>查阅架构速查手册</span>
        </Link>
        <a
          href="https://github.com/ljh12138164/ai-agent-study"
          target="_blank"
          rel="noreferrer"
          className={styles.btnSecondary}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span>GitHub 开源</span>
        </a>
      </div>

      {/* 架构互动终端 SHOWCASE */}
      <div className={styles.showcaseCard}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalDots}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
          </div>
          <div className={styles.terminalTabs}>
            <button
              onClick={() => setActiveTab('react')}
              className={`${styles.tabBtn} ${activeTab === 'react' ? styles.tabActive : ''}`}
            >
              01. ReAct Loop
            </button>
            <button
              onClick={() => setActiveTab('kv')}
              className={`${styles.tabBtn} ${activeTab === 'kv' ? styles.tabActive : ''}`}
            >
              02. KV Cache
            </button>
            <button
              onClick={() => setActiveTab('mcp')}
              className={`${styles.tabBtn} ${activeTab === 'mcp' ? styles.tabActive : ''}`}
            >
              03. MCP Protocol
            </button>
          </div>
        </div>

        <div className={styles.terminalBody}>
          {activeTab === 'react' && (
            <pre style={{ margin: 0 }}>
              <code style={{ background: 'transparent', padding: 0, border: 'none', color: 'inherit' }}>
                <span style={{ color: '#059669' }}>// [Step 1] Thought (推理与状态分析)</span>{'\n'}
                <span style={{ color: 'var(--muted)' }}>Agent:</span> "需要重构数据库查询以支持分级上下文，先调用 ripgrep 检查相关索引。"{'\n\n'}
                <span style={{ color: '#0284c7' }}>// [Step 2] Action (工具调用)</span>{'\n'}
                <span style={{ color: 'var(--muted)' }}>ToolCall:</span> execute_sql({'{'} query: "EXPLAIN ANALYZE SELECT * FROM kv_cache WHERE prefix_hash = $1" {'}'}){'\n\n'}
                <span style={{ color: '#d97706' }}>// [Step 3] Observation (环境执行反馈)</span>{'\n'}
                <span style={{ color: 'var(--muted)' }}>Output:</span> "Index Scan using idx_prefix_hash on kv_cache (cost=0.15..8.17 rows=1)"{'\n\n'}
                <span style={{ color: '#10b981', fontWeight: 600 }}>✓ Harness Verification Passed:</span> 执行成本下降 94%，未触发状态漂移，进入下一轮迭代。
              </code>
            </pre>
          )}

          {activeTab === 'kv' && (
            <pre style={{ margin: 0 }}>
              <code style={{ background: 'transparent', padding: 0, border: 'none', color: 'inherit' }}>
                <span style={{ color: '#059669' }}>// Context 上下文冻结与静态前缀树缓存优化</span>{'\n'}
                {'{'}{'\n'}
                {'  '}<span style={{ color: '#0284c7' }}>"system_prompt_prefix"</span>: <span style={{ color: '#10b981' }}>"Static Rules & Tools (Frozen) [Hash: 0x8f2a]"</span>,{'\n'}
                {'  '}<span style={{ color: '#0284c7' }}>"prefix_cache_status"</span>: <span style={{ color: '#10b981', fontWeight: 600 }}>"HIT (100% KV-Cache Reused)"</span>,{'\n'}
                {'  '}<span style={{ color: '#0284c7' }}>"cost_reduction"</span>: <span style={{ color: '#10b981' }}>"90.4% Input Tokens Saved"</span>,{'\n'}
                {'  '}<span style={{ color: '#0284c7' }}>"latency_ttft"</span>: <span style={{ color: '#10b981' }}>"120ms (down from 1450ms)"</span>,{'\n'}
                {'  '}<span style={{ color: '#0284c7' }}>"dynamic_tail"</span>: "User Session & Dynamic Scratchpad (Append Only)"{'\n'}
                {'}'}
              </code>
            </pre>
          )}

          {activeTab === 'mcp' && (
            <pre style={{ margin: 0 }}>
              <code style={{ background: 'transparent', padding: 0, border: 'none', color: 'inherit' }}>
                <span style={{ color: '#059669' }}>// Model Context Protocol (MCP) 标准 JSON-RPC 交互</span>{'\n'}
                {'{'}{'\n'}
                {'  '}<span style={{ color: '#0284c7' }}>"jsonrpc"</span>: "2.0",{'\n'}
                {'  '}<span style={{ color: '#0284c7' }}>"method"</span>: "tools/call",{'\n'}
                {'  '}<span style={{ color: '#0284c7' }}>"params"</span>: {'{'}{'\n'}
                {'    '}<span style={{ color: '#0284c7' }}>"name"</span>: "run_sandbox_command",{'\n'}
                {'    '}<span style={{ color: '#0284c7' }}>"arguments"</span>: {'{'} "cmd": "pytest tests/test_harness.py", "timeout_ms": 3000 {'}'}{'\n'}
                {'  '}{'}'},{'\n'}
                {'  '}<span style={{ color: '#0284c7' }}>"security_sandbox"</span>: <span style={{ color: '#10b981' }}>"Isolated Container (Read-Only FS + Ephemeral Temp)"</span>{'\n'}
                {'}'}
              </code>
            </pre>
          )}
        </div>
      </div>
    </section>
  )
}
