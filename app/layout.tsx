import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'AI Agent 开发实战课程',
  description: '基于《AI Agents in Depth》的生产级 Agent 架构与开发教学系统'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap()

  const navbar = (
    <Navbar
      logo={<span>🤖 <b>AI Agent 开发实战</b></span>}
      projectLink="https://github.com/bojieli/ai-agent-book"
    />
  )

  const footer = (
    <Footer>
      AI Agents in Depth © {new Date().getFullYear()} · Design Principles and Engineering Practice
    </Footer>
  )

  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/bojieli/ai-agent-book"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
