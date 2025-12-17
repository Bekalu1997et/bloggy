// User Data
export const mockUsers = [
  {
    id: '1',
    username: 'johndoe',
    email: 'john@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Full-stack developer passionate about React and Node.js',
    followersCount: 1250,
    followingCount: 340,
    postsCount: 45,
    coverImage: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1600&h=400&fit=crop',
    joinedAt: '2022-03-15T10:30:00Z',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev',
    twitter: 'johndoe_dev',
    github: 'johndoe',
    skills: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'AWS'],
  },
  {
    id: '2',
    username: 'sarahtech',
    email: 'sarah@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'UI/UX Designer & Frontend Developer',
    followersCount: 890,
    followingCount: 210,
    postsCount: 32,
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&h=400&fit=crop',
    joinedAt: '2022-05-22T14:20:00Z',
    location: 'New York, NY',
    website: 'https://sarah.design',
    twitter: 'sarah_ux',
    github: 'sarahdesigns',
    skills: ['Figma', 'React', 'CSS-in-JS', 'UI/UX', 'Accessibility'],
  },
  {
    id: '3',
    username: 'devmike',
    email: 'mike@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    bio: 'Backend Engineer | Python & Go enthusiast',
    followersCount: 2100,
    followingCount: 150,
    postsCount: 67,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=400&fit=crop',
    joinedAt: '2021-11-05T09:15:00Z',
    location: 'Austin, TX',
    website: 'https://mikecodes.dev',
    twitter: 'mikecodes',
    github: 'mikecodes',
    skills: ['Go', 'Python', 'Kubernetes', 'Docker', 'Microservices'],
  },
  {
    id: '4',
    username: 'alex_ui',
    email: 'alex@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    bio: 'Product Designer | Creating beautiful digital experiences',
    followersCount: 3400,
    followingCount: 420,
    postsCount: 89,
    coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&h=400&fit=crop',
    joinedAt: '2021-08-14T11:20:00Z',
    location: 'Seattle, WA',
    website: 'https://alexdesigns.co',
    twitter: 'alexdesigns',
    dribbble: 'alexdesigns',
    skills: ['UI Design', 'UX Research', 'Figma', 'Prototyping', 'Design Systems'],
  },
]

// Blog Posts
export const mockBlogs = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14 App Router',
    content: `# Getting Started with Next.js 14 App Router

The new App Router in Next.js 14 brings powerful features like server components, streaming, and improved performance. In this post, I'll walk you through the key concepts and show you how to build a modern web application.

## Key Features

- **Server Components**: Write components that render on the server by default
- **Nested Layouts**: Create complex UI with nested layouts that share state
- **Streaming**: Send UI from the server to the client in chunks
- **Suspense**: Show loading states for specific parts of your app

## Getting Started

To create a new Next.js project with the App Router, run:

\`\`\`bash
npx create-next-app@latest my-app --typescript --eslint
\`\`\`

Then, you can start developing your application with the latest features!`,
    excerpt: 'Learn how to use the new App Router in Next.js 14 to build modern web applications with server components, streaming, and more.',
    slug: 'getting-started-nextjs-14',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&h=900&fit=crop',
    author: mockUsers[0],
    likesCount: 42,
    commentsCount: 8,
    isLiked: false,
    isBookmarked: false,
    isPublished: true,
    readTime: '5 min read',
    tags: ['Next.js', 'React', 'JavaScript', 'Web Development'],
    metaTitle: 'Next.js 14 App Router: A Complete Guide',
    metaDesc: 'Learn how to use the new App Router in Next.js 14 to build modern web applications with server components and streaming.',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    title: 'Design Systems: Building Consistent UI Components',
    content: `# Design Systems: Building Consistent UI Components

Creating a design system is crucial for maintaining consistency across your application. Here's how to build reusable components that scale with your team and product.

## Why Design Systems Matter

- **Consistency**: Ensure a cohesive look and feel
- **Efficiency**: Reuse components across projects
- **Accessibility**: Build accessible components by default
- **Documentation**: Provide clear usage guidelines

## Getting Started

1. Audit your existing components
2. Define design tokens (colors, typography, spacing)
3. Build a component library
4. Document usage and best practices

## Example Button Component

\`\`\`tsx
import { Button as MuiButton, ButtonProps } from '@mui/material';

export const Button = ({
  variant = 'contained',
  size = 'medium',
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      size={size}
      {...props}
    />
  );
};
\`\`\``,
    excerpt: 'Learn how to create a design system that ensures consistency and efficiency in your UI development workflow.',
    slug: 'design-systems-ui-components',
    coverImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&h=900&fit=crop',
    author: mockUsers[1],
    likesCount: 67,
    commentsCount: 12,
    isLiked: true,
    isBookmarked: true,
    isPublished: true,
    readTime: '7 min read',
    tags: ['Design Systems', 'UI/UX', 'Frontend', 'React'],
    metaTitle: 'Building Scalable Design Systems for Modern Web Apps',
    metaDesc: 'A comprehensive guide to creating and maintaining design systems that scale with your team and product.',
    createdAt: '2024-01-14T14:20:00Z',
    updatedAt: '2024-01-14T14:20:00Z',
  },
  {
    id: '3',
    title: 'Microservices Architecture: Lessons Learned',
    content: `# Microservices Architecture: Lessons Learned

After 3 years of working with microservices, here are the key lessons I've learned about when to use them, common pitfalls, and best practices for implementation.

## When to Use Microservices

- Complex applications with multiple bounded contexts
- Teams that need independent deployment cycles
- Systems requiring different scaling needs per component
- Organizations with multiple teams working on the same product

## Common Pitfalls

1. **Distributed Monolith**: Services are too coupled
2. **Network Latency**: Too many service calls
3. **Data Consistency**: Maintaining consistency across services
4. **Operational Complexity**: More services = more infrastructure

## Best Practices

- Start with a monolith, extract services when needed
- Use API gateways for client communication
- Implement circuit breakers and retries
- Invest in observability and monitoring
- Use event-driven architecture for better decoupling`,
    excerpt: 'Key lessons from 3 years of working with microservices architecture, including when to use them and common pitfalls to avoid.',
    slug: 'microservices-lessons-learned',
    author: mockUsers[2],
    likesCount: 89,
    commentsCount: 15,
    isLiked: false,
    isBookmarked: false,
    isPublished: true,
    readTime: '10 min read',
    tags: ['Microservices', 'Architecture', 'Backend', 'DevOps'],
    metaTitle: 'Microservices Architecture: Key Lessons from Production',
    metaDesc: 'Practical insights and best practices for implementing microservices based on real-world experience.',
    createdAt: '2024-01-13T09:15:00Z',
    updatedAt: '2024-01-13T09:15:00Z',
  },
  {
    id: '4',
    title: 'The Future of Web Development in 2024',
    content: `# The Future of Web Development in 2024

As we move further into 2024, several trends are shaping the future of web development. Here's what you need to know to stay ahead.

## Key Trends

1. **AI-Powered Development**
   - AI-assisted coding with tools like GitHub Copilot
   - Automated testing and debugging
   - AI-generated UI components

2. **Edge Computing**
   - Faster content delivery with edge functions
   - Reduced server costs
   - Improved performance for global users

3. **WebAssembly**
   - Near-native performance in the browser
   - New possibilities for web applications
   - Integration with existing JavaScript code

4. **Progressive Web Apps (PWAs)**
   - Offline capabilities
   - Improved performance
   - App-like experience

## Getting Started

To stay ahead in 2024, consider learning:

- WebAssembly and Rust/Go for performance-critical code
- Edge computing platforms like Vercel Edge Functions
- AI tools for development workflows
- Advanced PWA features`,
    excerpt: 'Explore the latest trends and technologies shaping the future of web development in 2024.',
    slug: 'future-of-web-dev-2024',
    coverImage: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=1600&h=900&fit=crop',
    author: mockUsers[3],
    likesCount: 124,
    commentsCount: 28,
    isLiked: true,
    isBookmarked: true,
    isPublished: true,
    readTime: '8 min read',
    tags: ['Web Development', 'Trends', 'JavaScript', 'AI'],
    metaTitle: 'Web Development Trends to Watch in 2024',
    metaDesc: 'Discover the key technologies and trends that will shape web development in 2024 and beyond.',
    createdAt: '2024-01-10T11:45:00Z',
    updatedAt: '2024-01-10T11:45:00Z',
  },
];

// Draft Blog Posts
export const mockDrafts = [
  {
    id: 'd1',
    title: 'Building a Scalable API with NestJS',
    content: 'In this post, I\'ll show you how to build a scalable API using NestJS, TypeORM, and PostgreSQL...',
    excerpt: 'Learn how to build a production-ready API with NestJS and best practices for scalability.',
    slug: 'nestjs-scalable-api',
    author: mockUsers[0],
    isPublished: false,
    updatedAt: '2024-01-14T16:30:00Z',
  },
  {
    id: 'd2',
    title: 'The Complete Guide to CSS Grid',
    content: 'CSS Grid has revolutionized how we create layouts on the web. In this comprehensive guide...',
    excerpt: 'Master CSS Grid with practical examples and real-world use cases.',
    slug: 'complete-guide-css-grid',
    author: mockUsers[1],
    isPublished: false,
    updatedAt: '2024-01-12T09:15:00Z',
  },
];

// Forum Threads
export const mockThreads = [
  {
    id: 't1',
    title: 'What\'s your favorite React state management solution?',
    content: 'I\'ve been using Redux for years, but I\'m curious about newer solutions like Zustand and Jotai. What do you recommend for a medium-sized application?',
    author: mockUsers[0],
    community: { 
      id: 'c1',
      name: 'React', 
      slug: 'react',
      icon: '⚛️',
      membersCount: 12450,
      isJoined: true,
    },
    repliesCount: 23,
    viewsCount: 450,
    votesCount: 15,
    userVote: 'up' as const,
    upvotes: 18,
    downvotes: 3,
    isPinned: true,
    isLocked: false,
    lastActivityAt: '2024-01-15T18:30:00Z',
    lastActivityBy: mockUsers[1],
    tags: ['React', 'State Management', 'Frontend'],
    createdAt: '2024-01-15T16:45:00Z',
  },
  {
    id: 't2',
    title: 'Best practices for API design in 2024',
    content: 'Looking for modern API design patterns. Should I go with REST, GraphQL, or tRPC for my new project? What are the trade-offs?',
    author: mockUsers[1],
    community: { 
      id: 'c2',
      name: 'WebDev', 
      slug: 'webdev',
      icon: '🌐',
      membersCount: 8920,
      isJoined: false,
    },
    repliesCount: 31,
    viewsCount: 780,
    votesCount: 22,
    userVote: null,
    upvotes: 25,
    downvotes: 3,
    isPinned: false,
    isLocked: false,
    lastActivityAt: '2024-01-15T17:45:00Z',
    lastActivityBy: mockUsers[2],
    tags: ['API', 'Backend', 'Architecture'],
    createdAt: '2024-01-14T11:30:00Z',
  },
  {
    id: 't3',
    title: 'How do you handle authentication in your Next.js apps?',
    content: 'I\'m building a Next.js app and need to implement authentication. What are the best options in 2024? Considering NextAuth, Clerk, or Auth0.',
    author: mockUsers[2],
    community: { 
      id: 'c1',
      name: 'React', 
      slug: 'react',
      icon: '⚛️',
      membersCount: 12450,
      isJoined: true,
    },
    repliesCount: 17,
    viewsCount: 320,
    votesCount: 12,
    userVote: null,
    upvotes: 15,
    downvotes: 3,
    isPinned: false,
    isLocked: false,
    lastActivityAt: '2024-01-15T16:20:00Z',
    lastActivityBy: mockUsers[0],
    tags: ['Next.js', 'Authentication', 'Security'],
    createdAt: '2024-01-13T09:15:00Z',
  },
];

// Forum Replies
export const mockReplies = [
  {
    id: 'r1',
    content: 'I\'ve been using Zustand for about a year now and it\'s been a game changer. Much less boilerplate than Redux and the API is very intuitive.',
    author: mockUsers[1],
    threadId: 't1',
    votesCount: 8,
    userVote: null,
    isSolution: true,
    createdAt: '2024-01-15T17:10:00Z',
  },
  {
    id: 'r2',
    content: 'Jotai is my personal favorite. The atomic model makes it super flexible and it works great with React 18 concurrent features.',
    author: mockUsers[3],
    threadId: 't1',
    votesCount: 5,
    userVote: 'up',
    isSolution: false,
    createdAt: '2024-01-15T17:30:00Z',
  },
  {
    id: 'r3',
    content: 'For REST vs GraphQL vs tRPC, it really depends on your use case. REST is still great for simple APIs, GraphQL for complex data requirements, and tRPC for end-to-end type safety with TypeScript.',
    author: mockUsers[2],
    threadId: 't2',
    votesCount: 12,
    userVote: 'up',
    isSolution: true,
    createdAt: '2024-01-14T15:20:00Z',
  },
];

// Notifications
export const mockNotifications = [
  {
    id: 'n1',
    type: 'LIKE_POST',
    actor: mockUsers[1],
    targetType: 'post',
    targetId: '1',
    targetTitle: 'Getting Started with Next.js 14 App Router',
    content: 'liked your blog post',
    isRead: false,
    createdAt: '2024-01-15T18:30:00Z',
  },
  {
    id: 'n2',
    type: 'COMMENT',
    actor: mockUsers[2],
    targetType: 'post',
    targetId: '2',
    targetTitle: 'Design Systems: Building Consistent UI Components',
    content: 'commented on your blog post',
    isRead: false,
    createdAt: '2024-01-15T17:15:00Z',
  },
  {
    id: 'n3',
    type: 'FOLLOW',
    actor: mockUsers[0],
    targetType: 'user',
    targetId: mockUsers[0].id,
    content: 'started following you',
    isRead: true,
    createdAt: '2024-01-15T16:00:00Z',
  },
  {
    id: 'n4',
    type: 'LIKE_THREAD',
    actor: mockUsers[2],
    targetType: 'thread',
    targetId: 't1',
    targetTitle: 'What\'s your favorite React state management solution?',
    content: 'liked your thread',
    isRead: true,
    createdAt: '2024-01-15T15:30:00Z',
  },
  {
    id: 'n5',
    type: 'MENTION',
    actor: mockUsers[3],
    targetType: 'comment',
    targetId: 'c1',
    targetTitle: 'Check out this article on state management',
    content: 'mentioned you in a comment',
    isRead: false,
    createdAt: '2024-01-15T14:45:00Z',
  },
  {
    id: 'n6',
    type: 'REPLY',
    actor: mockUsers[1],
    targetType: 'thread',
    targetId: 't1',
    targetTitle: 'What\'s your favorite React state management solution?',
    content: 'replied to your thread',
    isRead: true,
    createdAt: '2024-01-15T13:20:00Z',
  },
];

// Messages and Conversations
export const mockConversations = [
  {
    id: 'conv1',
    participants: [mockUsers[1], mockUsers[0]],
    lastMessage: {
      id: 'msg1',
      content: 'Hey! I saw your post about Next.js 14. Great insights!',
      sender: mockUsers[1],
      sentAt: '2024-01-15T19:30:00Z',
      isRead: false,
    },
    unreadCount: 2,
    isGroup: false,
    updatedAt: '2024-01-15T19:30:00Z',
  },
  {
    id: 'conv2',
    participants: [mockUsers[2], mockUsers[0]],
    lastMessage: {
      id: 'msg4',
      content: 'Thanks for the feedback on my microservices post. Would love to discuss more.',
      sender: mockUsers[2],
      sentAt: '2024-01-15T18:45:00Z',
      isRead: true,
    },
    unreadCount: 0,
    isGroup: false,
    updatedAt: '2024-01-15T18:45:00Z',
  },
  {
    id: 'conv3',
    participants: [mockUsers[3], mockUsers[0]],
    lastMessage: {
      id: 'msg5',
      content: 'Are you available for a quick call tomorrow?',
      sender: mockUsers[3],
      sentAt: '2024-01-15T17:20:00Z',
      isRead: true,
    },
    unreadCount: 0,
    isGroup: false,
    updatedAt: '2024-01-15T17:20:00Z',
  },
  {
    id: 'conv4',
    name: 'React Team',
    participants: [mockUsers[0], mockUsers[1], mockUsers[2], mockUsers[3]],
    lastMessage: {
      id: 'msg6',
      content: 'Let\'s discuss the new React features in our next meeting',
      sender: mockUsers[1],
      sentAt: '2024-01-15T16:10:00Z',
      isRead: false,
    },
    unreadCount: 5,
    isGroup: true,
    updatedAt: '2024-01-15T16:10:00Z',
  },
];

export const mockMessages = {
  conv1: [
    {
      id: 'msg1',
      content: 'Hey! I saw your post about Next.js 14. Great insights!',
      sender: mockUsers[1],
      sentAt: '2024-01-15T19:30:00Z',
      isRead: false,
    },
    {
      id: 'msg2',
      content: 'Thanks! I\'m glad you found it helpful. What part did you like the most?',
      sender: mockUsers[0],
      sentAt: '2024-01-15T19:32:00Z',
      isRead: true,
    },
    {
      id: 'msg3',
      content: 'The section about server components was particularly interesting. Do you have any examples of when to use them?',
      sender: mockUsers[1],
      sentAt: '2024-01-15T19:35:00Z',
      isRead: false,
    },
  ],
  conv2: [
    {
      id: 'msg4',
      content: 'Thanks for the feedback on my microservices post. Would love to discuss more.',
      sender: mockUsers[2],
      sentAt: '2024-01-15T18:45:00Z',
      isRead: true,
    },
  ],
  conv3: [
    {
      id: 'msg5',
      content: 'Are you available for a quick call tomorrow?',
      sender: mockUsers[3],
      sentAt: '2024-01-15T17:20:00Z',
      isRead: true,
    },
  ],
  conv4: [
    {
      id: 'msg6',
      content: 'Let\'s discuss the new React features in our next meeting',
      sender: mockUsers[1],
      sentAt: '2024-01-15T16:10:00Z',
      isRead: false,
    },
    {
      id: 'msg7',
      content: 'I\'ve been exploring the new useOptimistic hook. It looks promising!',
      sender: mockUsers[2],
      sentAt: '2024-01-15T15:30:00Z',
      isRead: false,
    },
  ],
};

// Feed Items
type FeedItemType = 'post' | 'thread';

interface FeedItem<T extends FeedItemType> {
  type: T;
  data: T extends 'post' ? typeof mockBlogs[number] : typeof mockThreads[number];
}

export const mockFeedItems: FeedItem<FeedItemType>[] = [
  {
    type: 'post',
    data: mockBlogs[0],
  },
  {
    type: 'thread',
    data: mockThreads[0],
  },
  {
    type: 'post',
    data: mockBlogs[1],
  },
  {
    type: 'thread',
    data: mockThreads[1],
  },
  {
    type: 'post',
    data: mockBlogs[2],
  },
  {
    type: 'thread',
    data: mockThreads[2],
  },
  {
    type: 'post',
    data: mockBlogs[3],
  },
  {
    type: 'thread',
    data: mockThreads[0],
  },
];

// Communities
export const mockCommunities = [
  {
    id: 'c1',
    name: 'React',
    slug: 'react',
    description: 'Everything about React.js - hooks, components, state management, and more',
    icon: '⚛️',
    bannerImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&h=400&fit=crop',
    membersCount: 12450,
    isJoined: true,
    threadsCount: 1247,
    postsCount: 5678,
    createdAt: '2022-01-15T00:00:00Z',
    rules: [
      'Be respectful and kind to others',
      'No spam or self-promotion',
      'Keep discussions React-related',
      'Follow the code of conduct',
    ],
    moderators: [mockUsers[0], mockUsers[1]],
  },
  {
    id: 'c2',
    name: 'Web Development',
    slug: 'webdev',
    description: 'All things web development - frontend, backend, and everything in between',
    icon: '🌐',
    bannerImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&h=400&fit=crop',
    membersCount: 28930,
    isJoined: true,
    threadsCount: 2893,
    postsCount: 12567,
    createdAt: '2021-11-20T00:00:00Z',
    rules: [
      'Keep discussions web development related',
      'No spam or self-promotion',
      'Be respectful to others',
    ],
    moderators: [mockUsers[2]],
  },
  {
    id: 'c3',
    name: 'JavaScript',
    slug: 'javascript',
    description: 'The language of the web - ES6+, TypeScript, and more',
    icon: '📜',
    bannerImage: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=1600&h=400&fit=crop',
    membersCount: 18760,
    isJoined: false,
    threadsCount: 1876,
    postsCount: 8456,
    createdAt: '2022-02-10T00:00:00Z',
    rules: [
      'JavaScript discussions only',
      'No framework wars',
      'Be kind and constructive',
    ],
    moderators: [mockUsers[0], mockUsers[3]],
  },
  {
    id: 'c4',
    name: 'UI/UX Design',
    slug: 'design',
    description: 'User interface and experience design discussions and resources',
    icon: '🎨',
    bannerImage: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=1600&h=400&fit=crop',
    membersCount: 9560,
    isJoined: false,
    threadsCount: 956,
    postsCount: 4231,
    createdAt: '2022-03-05T00:00:00Z',
    rules: [
      'Keep discussions design-related',
      'Share your work for feedback',
      'Be constructive in critiques',
    ],
    moderators: [mockUsers[1], mockUsers[3]],
  },
  {
    id: 'c5',
    name: 'DevOps & Cloud',
    slug: 'devops',
    description: 'DevOps practices, CI/CD, cloud platforms, and infrastructure as code',
    icon: '☁️',
    bannerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=400&fit=crop',
    membersCount: 8765,
    isJoined: true,
    threadsCount: 765,
    postsCount: 3456,
    createdAt: '2022-04-12T00:00:00Z',
    rules: [
      'Keep discussions on-topic',
      'No promotion of specific cloud providers',
      'Be helpful and professional',
    ],
    moderators: [mockUsers[2]],
  },
];
