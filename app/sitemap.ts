import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://study.ljhboard.cn';
  const now = new Date();

  // 全站所有核心页面与章节课件路径
  const routes: Array<{ path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' }> = [
    // 核心站点页
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/reference/agent-core-architecture', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/mission', priority: 0.8, changeFrequency: 'monthly' },

    // 第 1 章
    { path: '/ch01-fundamentals/01-agent-formula', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch01-fundamentals/02-react-loop-and-ablation', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch01-fundamentals/03-harness-engineering', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch01-fundamentals/04-design-patterns', priority: 0.85, changeFrequency: 'weekly' },

    // 第 2 章
    { path: '/ch02-context/01-context-architecture-and-api', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch02-context/02-kv-cache-optimization', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch02-context/03-prompt-engineering-and-skills', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch02-context/04-agent-status-bar', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch02-context/05-compression-strategies', priority: 0.85, changeFrequency: 'weekly' },

    // 第 3 章
    { path: '/ch03-memory-rag/01-user-memory-system', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch03-memory-rag/02-rag-pipeline-hybrid', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch03-memory-rag/03-structured-indexing', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch03-memory-rag/04-agentic-rag-and-contextual-retrieval', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch03-memory-rag/05-knowledge-updates-and-two-tier-memory', priority: 0.85, changeFrequency: 'weekly' },

    // 第 4 章
    { path: '/ch04-tools/01-tool-taxonomy-and-aci', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch04-tools/02-mcp-protocol-architecture', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch04-tools/03-dynamic-discovery-and-mcp-zero', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch04-tools/04-sidecar-sandbox-and-safety', priority: 0.85, changeFrequency: 'weekly' },

    // 第 5 章
    { path: '/ch05-coding/01-coding-agent-tools', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch05-coding/02-file-editing-algorithms', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch05-coding/03-tdd-closed-loop-and-anti-cheating', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch05-coding/04-code-as-meta-capability', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch05-coding/05-lethal-triad-and-security', priority: 0.85, changeFrequency: 'weekly' },

    // 第 6 章
    { path: '/ch06-interaction/01-gui-agent-and-computer-use', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch06-interaction/02-voice-agent-and-full-duplex', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch06-interaction/03-human-in-the-loop-collaboration', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch06-interaction/04-embodied-agent-and-sim2real', priority: 0.85, changeFrequency: 'weekly' },

    // 第 7 章
    { path: '/ch07-evaluation/01-evaluation-crisis-and-end-state', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch07-evaluation/02-industry-benchmarks-swe-gaia', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch07-evaluation/03-llm-as-a-judge-and-biases', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch07-evaluation/04-observability-and-opentelemetry', priority: 0.85, changeFrequency: 'weekly' },

    // 第 8 章
    { path: '/ch08-post-training/01-why-general-models-fail-agents', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch08-post-training/02-agent-sft-and-trajectory-synthesis', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch08-post-training/03-rlef-and-test-time-compute', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch08-post-training/04-post-training-pitfalls-and-generalization', priority: 0.85, changeFrequency: 'weekly' },

    // 第 9 章
    { path: '/ch09-evolution/01-online-adaptation-and-reflexion', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch09-evolution/02-evolving-rules-and-skills', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch09-evolution/03-tool-self-synthesis', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch09-evolution/04-evolutionary-safety-and-drift', priority: 0.85, changeFrequency: 'weekly' },

    // 第 10 章
    { path: '/ch10-multi-agent/01-multi-agent-topologies', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch10-multi-agent/02-a2a-communication-and-deadlock', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch10-multi-agent/03-software-company-simulation', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/ch10-multi-agent/04-future-and-orchestrator-mindset', priority: 0.85, changeFrequency: 'weekly' },
  ];

  return routes.map((item) => ({
    url: `${baseUrl}${item.path}`,
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
