'use client'

import React from 'react'
import styles from './landing.module.css'

export function LandingFormulas() {
  return (
    <section style={{ marginBottom: '4.5rem' }}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionBadge}>System Modeling · 核心系统建模</span>
        <h2 className={styles.sectionTitle}>Agent 系统建模：概念公式与生产工程公式</h2>
        <p className={styles.sectionSubtitle}>
          从抽象概念拆解到实际工程落地，明确底座大模型与外部运行环境的职责边界。
        </p>
      </div>

      <div className={styles.formulaGrid}>
        {/* 公式 1：概念模型 */}
        <div className={styles.formulaCard}>
          <div className={styles.formulaCardTag}>01 · 概念模型 (Conceptual Mapping)</div>
          <div className={styles.formulaEquation}>
            Agent = LLM (思考决策) + Context (工作状态) + Tools (外部接口)
          </div>
          <p className={styles.formulaDesc}>
            <strong>LLM（大脑）</strong> 负责意图理解与规划；
            <strong>Context（眼睛）</strong> 承载环境感知与即时状态；
            <strong>Tools（手脚）</strong> 提供对文件系统、数据库与 API 的读写执行权限。三者共同构成智能体的逻辑闭环。
          </p>
        </div>

        {/* 公式 2：生产落地工程公式 */}
        <div className={styles.formulaCard}>
          <div className={styles.formulaCardTag}>02 · 生产工程公式 (Production Engineering)</div>
          <div className={styles.formulaEquation}>
            Agent = Model (模型推理) + Harness (环境与约束护栏)
          </div>
          <p className={styles.formulaDesc}>
            <strong>Model</strong> 仅负责单步概率推演；
            而 <strong>Harness（缰绳系统）</strong> 则承担 <em>上下文调度 + MCP 工具沙箱 + 状态契约 + 单元测试验证 + 错误自愈</em>。工程落地的核心壁垒往往在 Harness 系统本身。
          </p>
        </div>
      </div>
    </section>
  )
}
