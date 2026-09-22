'use client'

import React from 'react'
import styles from './landing.module.css'

export function LandingPillars() {
  const pillars = [
    {
      title: '拒绝简单 API 拼接',
      desc: '超越玩具 Demo 级别，建立严格的状态机、异常恢复与环境死锁防护机制，应对复杂业务场景。',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: '深入底层协议与性能调优',
      desc: '系统解析 MCP 协议规范、KV Cache 静态前缀树缓存（降低 90% 输入 Token 成本与时延）与无状态 API 运行机理。',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="10" />
          <path d="m10 15 5-3-5-3v6Z" />
        </svg>
      ),
    },
    {
      title: '严格的闭环测试与自愈护栏',
      desc: '对齐 SWE-bench 工业界严苛标准，构建 TDD 测试驱动执行、防模型作弊机制与防恶意命令执行沙箱。',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: '多智能体拓扑与协议通信',
      desc: '掌握 Manager-Worker、对等去中心化拓扑与 A2A 信封通信规范，设计超越个体智力边界的群集协作系统。',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
    },
  ]

  return (
    <section style={{ marginBottom: '4.5rem' }}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionBadge}>Engineering Principles · 生产级工程准则</span>
        <h2 className={styles.sectionTitle}>面向生产环境的工程设计</h2>
        <p className={styles.sectionSubtitle}>
          以高规格系统软件标准雕琢每一个模块，为工程师构建能够长期迁移复用的智能体心智模型。
        </p>
      </div>

      <div className={styles.pillarsGrid}>
        {pillars.map((p, idx) => (
          <div key={idx} className={styles.pillarCard}>
            <div className={styles.pillarIcon}>{p.icon}</div>
            <h3 className={styles.pillarTitle}>{p.title}</h3>
            <p className={styles.pillarDesc}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
