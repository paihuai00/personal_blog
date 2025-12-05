import { BlogPost, Project, Skill } from '../types';

export const SKILLS: Skill[] = [
  { subject: 'Kotlin', A: 95, fullMark: 100 },
  { subject: 'Jetpack Compose', A: 90, fullMark: 100 },
  { subject: 'Java', A: 85, fullMark: 100 },
  { subject: 'Android SDK', A: 92, fullMark: 100 },
  { subject: 'Coroutines/Flow', A: 88, fullMark: 100 },
  { subject: 'DI (Hilt/Koin)', A: 80, fullMark: 100 },
  { subject: 'CI/CD', A: 70, fullMark: 100 },
  { subject: 'System Design', A: 75, fullMark: 100 },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'HealthTrack Pro',
    description: 'A comprehensive fitness tracking application utilizing Jetpack Compose, Room Database, and Health Connect API. Features real-time step counting and heart rate monitoring.',
    techStack: ['Kotlin', 'Compose', 'Room', 'Health Connect'],
    link: '#'
  },
  {
    id: '2',
    title: 'CryptoWatch',
    description: 'Real-time cryptocurrency tracker using Retrofit for networking and WebSocket for live price updates. Implements MVVM architecture with Clean Architecture principles.',
    techStack: ['Kotlin', 'Retrofit', 'WebSocket', 'Hilt'],
    link: '#'
  },
  {
    id: '3',
    title: 'ChatGenius',
    description: 'An AI-powered chat application integrating the Gemini API on Android. Supports multi-modal input including images and voice.',
    techStack: ['Android', 'Gemini API', 'Material 3'],
    link: '#'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'deep-dive-coroutines',
    title: 'Deep Dive into Kotlin Coroutines: Flows vs Channels',
    excerpt: 'Understanding when to use Hot streams vs Cold streams is crucial for modern Android development. This article breaks down the differences.',
    date: '2023-10-15',
    category: 'Kotlin',
    readTime: '8 min read',
    content: `
Kotlin Coroutines have revolutionized asynchronous programming on Android.

### The Core Difference

**Flows** are cold streams. They don't start producing values until someone collects them. This makes them perfect for representing data sources that are created on demand, like database queries or network requests.

**Channels**, on the other hand, are hot streams. They produce values regardless of whether there are subscribers. This is useful for event handling where events shouldn't be missed.

### Practical Example

When building a UI with Jetpack Compose, you often want to observe state. \`StateFlow\` is the go-to solution here because it retains the latest value and is lifecycle-aware when collected properly.

\`\`\`kotlin
val uiState = viewModel.state.collectAsStateWithLifecycle()
\`\`\`

Always prefer \`StateFlow\` over \`LiveData\` in modern Kotlin-first codebases.
    `
  },
  {
    id: 'compose-performance',
    title: 'Optimizing Jetpack Compose Performance',
    excerpt: 'Is your UI janky? Learn how to debug recompositions and use derivedStateOf effectively to boost your app frame rate.',
    date: '2023-11-02',
    category: 'Performance',
    readTime: '12 min read',
    content: `
Jetpack Compose is fast, but it's easy to shoot yourself in the foot if you don't understand recomposition.

### The Recomposition Trap

Every time a state changes, Compose re-executes the functions that read that state. If you have expensive calculations inside a Composable, they will run on every frame.

### Solutions

1. **remember**: Cache expensive objects.
2. **derivedStateOf**: Use this when a state changes frequently (like scroll position) but your UI only cares about a threshold.
3. **Stability**: Ensure your data classes are stable so Compose can skip recomposition for unchanged inputs.
    `
  },
  {
    id: 'gemini-integration',
    title: 'Integrating Gemini AI into Android Apps',
    excerpt: 'A step-by-step guide to using the Google GenAI SDK to add intelligence to your mobile applications.',
    date: '2024-01-20',
    category: 'AI',
    readTime: '10 min read',
    content: `
The Gemini API provides a powerful way to add generative AI capabilities to your apps.

### Getting Started

First, add the dependency to your \`build.gradle.kts\`:

\`\`\`kotlin
implementation("com.google.ai.client.generativeai:generativeai:0.1.0")
\`\`\`

### Making a Request

Initialize the generative model with your API key. Remember to never commit your API key to version control! Use \`local.properties\` or BuildConfig.

The \`generateContent\` suspend function makes it incredibly easy to get text responses off the main thread.
    `
  }
];

export const OWNER_PROFILE = `
Name: Alex Dev
Role: Senior Android Developer
Experience: 6+ years
Core Skills: Kotlin, Java, Jetpack Compose, Android SDK, System Architecture.
Interests: Mobile AI, Performance Optimization, Open Source.
Location: San Francisco, CA (Remote capable).
Bio: I build high-performance, accessible, and beautiful Android applications. I have a passion for clean code and teaching others through my technical writing.
`;