'use client'

import React from 'react'
import Link from 'next/link'
import styles from './landing.module.css'

export function LandingFooterCTA() {
  return (
    <section>
      <div className={styles.bottomCtaBanner}>
        <span className={styles.sectionBadge}>Get Started · 开启工程实战</span>
        <h2 className={styles.bannerTitle}>系统掌握生产级 AI Agent 架构体系</h2>
        <p className={styles.bannerDesc}>
          涵盖系统原理剖析、架构工程推导、可运行实验代码与随堂评测，建立完备的自主系统研发能力。
        </p>
        <div className={styles.bannerLinks}>
          <Link href="/ch01-fundamentals/01-agent-formula" className={styles.btnPrimary}>
            <span>进入第 1 课 (从 ReAct 到 Harness)</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/reference/agent-core-architecture" className={styles.btnSecondary}>
            <span>查阅架构速查手册</span>
          </Link>
          <Link href="/mission" className={styles.btnSecondary}>
            <span>查看研学使命契约</span>
          </Link>
          <a
            href="https://github.com/ljh12138164/ai-agent-study/discussions"
            target="_blank"
            rel="noreferrer"
            className={styles.btnSecondary}
          >
            <span>GitHub 社区讨论</span>
          </a>
        </div>
      </div>
    </section>
  )
}
