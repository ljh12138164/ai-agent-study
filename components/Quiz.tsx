'use client'

import React, { useState } from 'react'

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
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '1.25rem',
      margin: '1.5rem 0',
      background: 'rgba(0, 0, 0, 0.02)'
    }}>
      <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0284c7', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        Interactive Practice · 概念巩固
      </div>
      <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '1rem' }}>
        {question}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {options.map((opt, i) => {
          let bg = '#ffffff'
          let border = '#e5e7eb'
          let color = 'inherit'
          if (selectedIdx !== null) {
            if (opt.isCorrect) {
              bg = '#ecfdf5'
              border = '#10b981'
              color = '#047857'
            } else if (i === selectedIdx && !opt.isCorrect) {
              bg = '#fef2f2'
              border = '#ef4444'
              color = '#b91c1c'
            }
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selectedIdx !== null}
              style={{
                textAlign: 'left',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                border: `1px solid ${border}`,
                backgroundColor: bg,
                color: color,
                cursor: selectedIdx === null ? 'pointer' : 'default',
                transition: 'all 0.15s ease',
                fontSize: '0.92rem'
              }}
            >
              {opt.text}
            </button>
          )
        })}
      </div>
      {selectedOption && (
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem 1rem',
          borderRadius: '6px',
          background: selectedOption.isCorrect ? '#ecfdf5' : '#fef2f2',
          border: `1px solid ${selectedOption.isCorrect ? '#10b981' : '#ef4444'}`,
          color: selectedOption.isCorrect ? '#047857' : '#b91c1c',
          fontSize: '0.9rem'
        }}>
          <strong>{selectedOption.isCorrect ? '✓ 回答正确！' : '✗ 选项有误：'}</strong> {selectedOption.explanation}
        </div>
      )}
    </div>
  )
}
