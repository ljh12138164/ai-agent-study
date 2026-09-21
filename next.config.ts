import nextra from 'nextra'
import type { NextConfig } from 'next'

const withNextra = nextra({
  // Nextra configuration options
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/stats/:match*',
        destination: 'https://analytics.ljhboard.cn/:match*',
      },
    ]
  },
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.tsx',
      '@theguild/remark-mermaid/mermaid': '@theguild/remark-mermaid/dist/mermaid.js',
    },
  },
}

export default withNextra(nextConfig)
