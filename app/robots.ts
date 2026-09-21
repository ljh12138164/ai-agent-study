import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://study.ljhboard.cn';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // 专为 GEO（生成式引擎优化）放行主流 AI 搜索与知识抓取智能体
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-SearchBot',
          'Claude-User',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'Baiduspider',
          'YisouSpider',
        ],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
