import { NewsArticle } from '@/types/news';

export const mockNewsData: NewsArticle[] = [
  {
    id: '1',
    title: 'OpenAI Announces GPT-5 with Multimodal Reasoning Capabilities',
    summary: 'OpenAI unveils their next-generation language model featuring enhanced reasoning, visual understanding, and code generation capabilities.',
    url: 'https://example.com/gpt5',
    source: 'TechCrunch',
    category: 'research',
    publishedAt: '2024-01-15T10:30:00Z',
    upvotes: 342,
    comments: 89,
    author: 'Sarah Chen',
    imageUrl: '/api/placeholder/400/200'
  },
  {
    id: '2',
    title: 'YC-Backed Startup Raises $50M Series A for AI-Powered DevTools',
    summary: 'The company aims to revolutionize software development with intelligent code completion and automated testing tools.',
    url: 'https://example.com/devtools',
    source: 'Hacker News',
    category: 'startups',
    publishedAt: '2024-01-14T15:45:00Z',
    upvotes: 256,
    comments: 67,
    author: 'Mike Rodriguez'
  },
  {
    id: '3',
    title: 'New VS Code Extension Makes Remote Development 10x Faster',
    summary: 'This lightweight extension optimizes remote connections and provides intelligent caching for better developer experience.',
    url: 'https://example.com/vscode',
    source: 'Reddit',
    category: 'tools',
    publishedAt: '2024-01-14T09:20:00Z',
    upvotes: 189,
    comments: 45,
    author: 'DevCommunity'
  },
  {
    id: '4',
    title: 'Breakthrough in Quantum Computing: IBM Achieves Error-Free Operations',
    summary: 'IBM researchers demonstrate quantum error correction at scale, marking a significant milestone toward practical quantum computing.',
    url: 'https://example.com/quantum',
    source: 'The Verge',
    category: 'research',
    publishedAt: '2024-01-13T14:15:00Z',
    upvotes: 445,
    comments: 123,
    author: 'Emma Thompson'
  },
  {
    id: '5',
    title: 'Linear Competitor Raises $25M Seed to Reinvent Project Management',
    summary: 'New startup promises to eliminate project management overhead with AI-driven task organization and team coordination.',
    url: 'https://example.com/linear-competitor',
    source: 'Twitter',
    category: 'startups',
    publishedAt: '2024-01-13T11:30:00Z',
    upvotes: 167,
    comments: 34,
    author: 'VCInsider'
  },
  {
    id: '6',
    title: 'GitHub Copilot Chat Now Available for All Developers',
    summary: 'Microsoft announces the general availability of Copilot Chat, bringing conversational AI to every GitHub user.',
    url: 'https://example.com/copilot-chat',
    source: 'Wired',
    category: 'tools',
    publishedAt: '2024-01-12T16:00:00Z',
    upvotes: 298,
    comments: 78,
    author: 'GitHub Team'
  },
  {
    id: '7',
    title: 'Stanford Researchers Create AI That Understands Physics',
    summary: 'New neural network architecture can predict physical phenomena and solve complex engineering problems with remarkable accuracy.',
    url: 'https://example.com/physics-ai',
    source: 'TechCrunch',
    category: 'research',
    publishedAt: '2024-01-12T08:45:00Z',
    upvotes: 389,
    comments: 156,
    author: 'Dr. Lisa Wang'
  },
  {
    id: '8',
    title: 'Figma Alternative Secures $15M to Challenge Adobe Monopoly',
    summary: 'Open-source design tool gains significant funding to build collaborative features and enterprise integrations.',
    url: 'https://example.com/figma-alternative',
    source: 'Hacker News',
    category: 'startups',
    publishedAt: '2024-01-11T13:20:00Z',
    upvotes: 234,
    comments: 92,
    author: 'DesignTools'
  }
];