'use client'

import React, { useState } from 'react'
import styles from './Quiz.module.css'

interface OptionObj {
  text: string
  isCorrect?: boolean
  explanation?: string
}

interface QuizProps {
  question: string
  options: (string | OptionObj)[]
  correctIndex?: number
  explanation?: string
}

export function Quiz({ question, options, correctIndex = 0, explanation = '' }: QuizProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  // 统一标准化 options 数组，同时兼容 string[] 与 OptionObj[] 两种传参形态
  const normalizedOptions = (options || []).map((opt, i) => {
    if (typeof opt === 'string') {
      return {
        text: opt,
        isCorrect: i === correctIndex,
        explanation: explanation,
      }
    }
    return {
      text: opt.text || '',
      isCorrect: opt.isCorrect !== undefined ? opt.isCorrect : i === correctIndex,
      explanation: opt.explanation || explanation,
    }
  })

  const handleSelect = (idx: number) => {
    if (selectedIdx !== null) return
    setSelectedIdx(idx)
  }

  const selectedOption = selectedIdx !== null ? normalizedOptions[selectedIdx] : null
  const isCorrect = selectedOption?.isCorrect ?? false

  return (
    <div className={styles.container}>
      <div className={styles.badge}>
        <span>Interactive Practice</span>
        <span>·</span>
        <span>概念巩固自测</span>
      </div>
      <div className={styles.question}>
        {question}
      </div>
      <div className={styles.optionsList}>
        {normalizedOptions.map((opt, i) => {
          let optionClass = styles.optionBtn
          if (selectedIdx !== null) {
            if (opt.isCorrect) {
              optionClass += ` ${styles.optionCorrect}`
            } else if (i === selectedIdx && !opt.isCorrect) {
              optionClass += ` ${styles.optionIncorrect}`
            } else {
              optionClass += ` ${styles.optionDimmed}`
            }
          }

          // 自动检测是否自带 A. B. C. 前缀，若无则智能补全
          const prefix = String.fromCharCode(65 + i)
          const hasPrefix = /^[A-Z][.、\s]/.test(opt.text.trim())
          const displayText = hasPrefix ? opt.text : `${prefix}. ${opt.text}`

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selectedIdx !== null}
              className={optionClass}
            >
              {displayText}
            </button>
          )
        })}
      </div>
      {selectedOption && (
        <div
          className={`${styles.explanationBox} ${
            isCorrect ? styles.explanationCorrect : styles.explanationIncorrect
          }`}
        >
          <div style={{ fontWeight: 700, marginBottom: '0.35rem' }}>
            {isCorrect ? '✓ 回答正确！' : '✗ 选项有误，解析如下：'}
          </div>
          <div style={{ lineHeight: 1.6 }}>
            {selectedOption.explanation || explanation || '暂无详细解析。'}
          </div>
        </div>
      )}
    </div>
  )
}
