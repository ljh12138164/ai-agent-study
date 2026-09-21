'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'nextra-theme-docs'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function Comments() {
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 首页不展示评论区
  if (pathname === '/') {
    return null
  }

  const repo = (process.env.NEXT_PUBLIC_GISCUS_REPO || 'ljh12138164/ai-agent-study') as `${string}/${string}`
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ''
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY || 'General'
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || ''

  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'

  if (!mounted) {
    return <div className="x:mt-12 x:pt-8 x:min-h-[160px]" />
  }

  const isConfigured = Boolean(repoId && categoryId)

  return (
    <section aria-label="课程评论与互动讨论" className="x:mt-14 x:pt-8 x:border-t x:border-gray-200 x:dark:border-neutral-800">
      <div className="x:flex x:items-center x:justify-between x:mb-6">
        <h3 className="x:text-lg x:font-semibold x:tracking-tight x:text-gray-900 x:dark:text-gray-100 x:flex x:items-center x:gap-2">
          <span>💬 课程答疑与互动讨论</span>
          <span className="x:text-xs x:font-normal x:px-2 x:py-0.5 x:rounded-full x:bg-blue-50 x:text-blue-600 x:dark:bg-blue-950/60 x:dark:text-blue-400 x:border x:border-blue-200/60 x:dark:border-blue-800/60">
            Powered by GitHub Discussions
          </span>
        </h3>
        <a
          href={`https://github.com/${repo}/discussions`}
          target="_blank"
          rel="noreferrer"
          className="x:text-xs x:text-gray-500 hover:x:text-blue-600 x:dark:text-gray-400 x:dark:hover:text-blue-400 x:transition-colors"
        >
          在 GitHub 上查看全部讨论 →
        </a>
      </div>

      {isConfigured ? (
        <Giscus
          id="comments"
          repo={repo}
          repoId={repoId}
          category={category}
          categoryId={categoryId}
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={theme}
          lang="zh-CN"
          loading="lazy"
        />
      ) : (
        <div className="x:rounded-xl x:border x:border-dashed x:border-amber-400/70 x:bg-amber-50/40 x:p-5 x:dark:border-amber-500/30 x:dark:bg-amber-950/20">
          <div className="x:flex x:items-center x:gap-2 x:font-semibold x:text-amber-900 x:dark:text-amber-200 x:text-sm">
            <span>⚙️ GitHub Discussions 评论系统已就绪，等待关联</span>
          </div>
          <p className="x:mt-2 x:text-xs x:leading-relaxed x:text-gray-600 x:dark:text-gray-400">
            本课程已接入 <strong>Giscus</strong> 开源评论架构，评论数据直接存储在 GitHub 仓库的 Discussions 模块中，支持 Markdown、代码高亮、Emoji 互动与 GitHub 账号授权。
          </p>
          <div className="x:mt-3 x:text-xs x:space-y-1.5 x:text-gray-700 x:dark:text-gray-300">
            <p className="x:font-semibold">激活配置步骤：</p>
            <ol className="x:list-decimal x:list-inside x:space-y-1 x:text-gray-600 x:dark:text-gray-400">
              <li>确保 GitHub 仓库 <code>{repo}</code> 处于 <strong>Public (公开)</strong> 状态。</li>
              <li>在仓库 <strong>Settings → General → Features</strong> 中勾选启用 <strong>Discussions</strong>。</li>
              <li>安装并授权 <a href="https://github.com/apps/giscus" target="_blank" rel="noreferrer" className="x:text-blue-600 x:underline">Giscus App</a> 访问该仓库。</li>
              <li>访问 <a href="https://giscus.app/zh-CN" target="_blank" rel="noreferrer" className="x:text-blue-600 x:underline">giscus.app</a> 获取 <code>repoId</code> 与 <code>categoryId</code> 并写入 <code>.env.local</code>：</li>
            </ol>
            <pre className="x:mt-2.5 x:overflow-x-auto x:rounded-md x:bg-black/5 x:p-3 x:text-[11px] x:font-mono x:text-gray-800 x:dark:bg-black/40 x:dark:text-gray-200">
{`NEXT_PUBLIC_GISCUS_REPO=${repo}
NEXT_PUBLIC_GISCUS_REPO_ID=R_kgDOXXXXXXXXXX
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDOXXXXXXXXXX`}
            </pre>
          </div>
        </div>
      )}
    </section>
  )
}
