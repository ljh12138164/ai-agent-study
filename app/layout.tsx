import type { Metadata } from 'next'
import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

const baseUrl = 'https://study.ljhboard.cn'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'AI Agent 深度研发与工程实践课程 | AI Agents in Depth',
    template: '%s | AI Agent 开发实战 (study.ljhboard.cn)',
  },
  description:
    '基于李博杰《AI Agents in Depth》v2.0 打造的生产级大模型智能体深度实战课程。涵盖 ReAct 循环、Context 上下文工程、KV Cache 优化、MCP 协议、Coding Agent、多模态交互与多智能体系统协同，打造具备物理世界行动力的智能体工程。',
  keywords: [
    'AI Agent',
    '大模型智能体',
    'Agent开发',
    'AI Agent实战课程',
    'ReAct架构',
    'Context工程',
    'KV Cache',
    'MCP协议',
    'Model Context Protocol',
    'Coding Agent',
    'SWE-bench',
    'RAG系统',
    '多智能体系统',
    'Multi-Agent',
    '李博杰',
    'study.ljhboard.cn',
  ],
  authors: [{ name: '李博杰 (Bojie Li)', url: baseUrl }],
  creator: 'AI Agent Study Team',
  publisher: 'study.ljhboard.cn',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: baseUrl,
    siteName: 'AI Agent 深度研发与工程实践',
    title: 'AI Agent 深度研发与工程实践课程 | 大模型智能体工程实战',
    description:
      '系统掌握生产级 AI Agent 架构设计、MCP 协议、Coding Agent 与多模态多智能体协同研发。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Agent 开发实战课程 - study.ljhboard.cn',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent 深度研发与工程实践课程 | study.ljhboard.cn',
    description: '基于《AI Agents in Depth》的生产级大模型智能体深度实战体系。',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap()

  const navbar = (
    <Navbar
      logo={
        <span>
          🤖 <b>AI Agent 开发实战</b>
        </span>
      }
      projectLink="https://github.com/ljh12138164/ai-agent-study"
    >
      <ThemeSwitch />
    </Navbar>
  )

  const footer = (
    <Footer>
      AI Agents in Depth © {new Date().getFullYear()} ·{' '}
      <a href="https://study.ljhboard.cn" target="_blank" rel="noreferrer">
        study.ljhboard.cn
      </a>{' '}
      · Design Principles and Engineering Practice
    </Footer>
  )

  // JSON-LD 结构化数据：面向 Google 丰富网页摘要与 GEO（生成式 AI 搜索引擎权威知识锚定）
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'AI Agent 深度研发与工程实践课程',
        description: '基于《AI Agents in Depth》的生产级大模型智能体架构与全栈开发实战教学平台',
        inLanguage: 'zh-CN',
        publisher: {
          '@id': `${baseUrl}/#organization`,
        },
      },
      {
        '@type': 'EducationalOrganization',
        '@id': `${baseUrl}/#organization`,
        name: 'AI Agent 深度研学社',
        url: baseUrl,
        logo: `${baseUrl}/og-image.png`,
      },
      {
        '@type': 'Course',
        '@id': `${baseUrl}/#course`,
        name: '大模型智能体深度研发与工程实践 (AI Agents in Depth)',
        description:
          '系统讲解现代 AI Agent 核心公式、ReAct 循环、Context 上下文工程、KV Cache、MCP 协议、Coding Agent、多模态交互与多智能体系统协同。',
        provider: {
          '@id': `${baseUrl}/#organization`,
        },
        inLanguage: 'zh-CN',
        educationalLevel: 'Intermediate to Advanced',
        teaches: [
          'AI Agent 核心架构设计与公式推导',
          'ReAct 循环与环境执行自愈闭环',
          'KV Cache 优化与缓存友好设计',
          'Model Context Protocol (MCP) 协议全解析',
          '第四代精确锚点代码编辑算法',
          'TDD 测试驱动闭环与防作弊测试护栏',
          '多智能体协作网络拓扑与 A2A 信封通信规范',
        ],
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'Online',
          courseWorkload: 'PT40H',
        },
      },
    ],
  }

  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/ljh12138164/ai-agent-study"
          themeSwitch={{
            dark: '深色模式',
            light: '浅色模式',
            system: '跟随系统',
          }}
          search={
            <Search
              placeholder="搜索课程、知识库与代码 (按 Ctrl+K)..."
              emptyResult="未找到匹配的课程内容"
              loading="正在搜索知识库..."
              errorText="加载搜索索引失败"
            />
          }
        >
          {children ?? <></>}
        </Layout>
      </body>
    </html>
  )
}
