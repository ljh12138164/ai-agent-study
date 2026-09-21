'use client'

import React, { useState } from 'react'
import styles from './Quiz.module.css'

interface Option {
  text: string
  isCorrect: boolean
  explanation: string
}

interface QuizProps {
  question: string
  options: Option[]
}

export function Quiz({ question, options }: QuizProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const handleSelect = (idx: number) => {
    if (selectedIdx !== null) return
    setSelectedIdx(idx)
  }

  const selectedOption = selectedIdx !== null ? options[selectedIdx] : null

  return (
    <div className={styles.container}>
      <div className={styles.badge}>
        Interactive Practice · 概念巩固
      </div>
      <div className={styles.question}>
        {question}
      </div>
      <div className={styles.optionsList}>
        {options.map((opt, i) => {
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

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selectedIdx !== null}
              className={optionClass}
            >
              {opt.text}
            </button>
          )
        })}
      </div>
      {selectedOption && (
        <div
          className={`${styles.explanationBox} ${
            selectedOption.isCorrect ? styles.explanationCorrect : styles.explanationIncorrect
          }`}
        >
          <strong>{selectedOption.isCorrect ? '✓ 回答正确！' : '✗ 选项有误：'}</strong> {selectedOption.explanation}
        </div>
      )}
    </div>
  )
}
