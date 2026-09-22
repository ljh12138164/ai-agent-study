'use client'

import React from 'react'

export function BrandLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', userSelect: 'none' }}>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
          borderRadius: '7px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.25) 100%)',
          border: '1px solid rgba(16, 185, 129, 0.35)',
          boxShadow: '0 0 12px rgba(16, 185, 129, 0.2)',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* 精致的 Agent 自主收敛拓扑 SVG 标识 */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'rotate(-45deg)' }}
        >
          {/* 外层感知与工具动作环 */}
          <path
            d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12"
            stroke="url(#agent-gradient)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeDasharray="4 2"
          />
          {/* 内层 LLM 推理策略核心 (Diamond Policy Core) */}
          <rect
            x="8.5"
            y="8.5"
            width="7"
            height="7"
            rx="1.5"
            fill="currentColor"
            style={{ color: '#10b981' }}
          />
          <circle cx="19" cy="8" r="2.2" fill="#06b6d4" />
          <defs>
            <linearGradient id="agent-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span
            style={{
              fontWeight: 700,
              fontSize: '0.975rem',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
            }}
          >
            AI Agent <span style={{ color: '#10b981' }}>开发实战</span>
          </span>
          <span
            style={{
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '0.1rem 0.35rem',
              borderRadius: '4px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              color: '#059669',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              lineHeight: 1.2,
            }}
            className="dark:text-emerald-400"
          >
            v2.0
          </span>
        </div>
        <span
          style={{
            fontSize: '0.6875rem',
            color: 'var(--muted)',
            letterSpacing: '0.01em',
            lineHeight: 1,
            marginTop: '2px',
          }}
        >
          AI Agents in Depth · 架构工程
        </span>
      </div>
    </div>
  )
}
