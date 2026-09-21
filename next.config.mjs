import nextra from 'nextra'

const withNextra = nextra({
  // Nextra configuration options
})

export default withNextra({
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.tsx',
      '@theguild/remark-mermaid/mermaid': '@theguild/remark-mermaid/dist/mermaid.js'
    }
  }
})
