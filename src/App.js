import React, { useState } from 'react';
import './App.css';

const aiTools = [
  // Text & Writing
  {
    name: "ChatGPT",
    category: "Text & Writing",
    description: "Advanced language model for conversation and text generation",
    icon: "🤖",
    url: "https://chat.openai.com",
    featured: true
  },
  {
    name: "Claude",
    category: "Text & Writing",
    description: "Anthropic's AI assistant for writing and analysis",
    icon: "🧠",
    url: "https://claude.ai",
    featured: true
  },
  {
    name: "Jasper",
    category: "Text & Writing",
    description: "AI writing assistant for marketing and content creation",
    icon: "✍️",
    url: "https://jasper.ai"
  },
  {
    name: "Copy.ai",
    category: "Text & Writing",
    description: "AI-powered copywriting tool for businesses",
    icon: "📝",
    url: "https://copy.ai"
  },
  {
    name: "Grammarly",
    category: "Text & Writing",
    description: "AI writing assistant for grammar and style improvement",
    icon: "📚",
    url: "https://grammarly.com"
  },

  // Image Generation
  {
    name: "Midjourney",
    category: "Image Generation",
    description: "AI art generation through Discord",
    icon: "🎨",
    url: "https://midjourney.com",
    featured: true
  },
  {
    name: "DALL-E3",
    category: "Image Generation",
    description: "OpenAI's advanced image generation model",
    icon: "🖼️",
    url: "https://openai.com/dall-e-2",
    featured: true
  },
  {
    name: "Stable Diffusion",
    category: "Image Generation",
    description: "Open-source image generation model",
    icon: "🎭",
    url: "https://stability.ai"
  },
  {
    name: "Canva AI",
    category: "Image Generation",
    description: "AI-powered design and image creation",
    icon: "🎯",
    url: "https://canva.com"
  },
  {
    name: "Leonardo.ai",
    category: "Image Generation",
    description: "AI art generation platform",
    icon: "🦁",
    url: "https://leonardo.ai"
  },
  // Video Creation
  {
    name: "Runway",
    category: "Video Creation",
    description: "AI-powered video editing and generation",
    icon: "🎬",
    url: "https://runwayml.com",
    featured: true
  },
  {
    name: "Synthesia",
    category: "Video Creation",
    description: "AI video generation with virtual avatars",
    icon: "👤",
    url: "https://synthesia.io"
  },
  {
    name: "Pictory",
    category: "Video Creation",
    description: "Automated video creation from long-form content",
    icon: "📹",
    url: "https://pictory.ai"
  },
  {
    name: "Lumen5",
    category: "Video Creation",
    description: "AI video maker for social media",
    icon: "💡",
    url: "https://lumen5.com"
  },

  // Audio & Music
  {
    name: "Mubert",
    category: "Audio & Music",
    description: "AI music generation platform",
    icon: "🎵",
    url: "https://mubert.com",
    featured: true
  },
  {
    name: "Suno",
    category: "Audio & Music",
    description: "AI music creation from text prompts",
    icon: "🎼",
    url: "https://suno.ai"
  },
  {
    name: "Descript",
    category: "Audio & Music",
    description: "AI-powered audio and video editing",
    icon: "🎙️",
    url: "https://descript.com"
  },
  {
    name: "ElevenLabs",
    category: "Audio & Music",
    description: "AI voice generation and cloning",
    icon: "🗣️",
    url: "https://elevenlabs.io"
  },

  // Code & Development
  {
    name: "GitHub Copilot",
    category: "Code & Development",
    description: "AI pair programmer for developers",
    icon: "💻",
    url: "https://github.com/features/copilot",
    featured: true
  },
  {
    name: "Replit",
    category: "Code & Development",
    description: "AI-powered coding platform",
    icon: "🔧",
    url: "https://replit.com"
  },
  {
    name: "Tabnine",
    category: "Code & Development",
    description: "AI code completion tool",
    icon: "⚡",
    url: "https://tabnine.com"
  },
  {
    name: "CodeWhisperer",
    category: "Code & Development",
    description: "Amazon's AI code generator",
    icon: "🔮",
    url: "https://aws.amazon.com/codewhisperer/"
  },

  // Productivity
  {
    name: "Notion AI",
    category: "Productivity",
    description: "AI-powered workspace and note-taking",
    icon: "📋",
    url: "https://notion.so",
    featured: true
  },
  {
    name: "Otter.ai",
    category: "Productivity",
    description: "AI meeting transcription and notes",
    icon: "🦦",
    url: "https://otter.ai"
  },
  {
    name: "Tome",
    category: "Productivity",
    description: "AI-powered presentation generator",
    icon: "📊",
    url: "https://tome.app"
  },
  {
    name: "Beautiful.ai",
    category: "Productivity",
    description: "AI presentation design tool",
    icon: "✨",
    url: "https://beautiful.ai"
  },

  // More AI Tools
  {
    name: "Writesonic",
    category: "Text & Writing",
    description: "AI-powered content creation platform for blogs, ads, and more",
    icon: "📝",
    url: "https://writesonic.com"
  },
  {
    name: "QuillBot",
    category: "Text & Writing",
    description: "AI paraphrasing and grammar checking tool",
    icon: "🔄",
    url: "https://quillbot.com"
  },
  {
    name: "Wordtune",
    category: "Text & Writing",
    description: "AI writing companion for rewriting and improving text",
    icon: "🖊️",
    url: "https://wordtune.com"
  },
  {
    name: "CopySmith",
    category: "Text & Writing",
    description: "AI copywriting for e-commerce, ads, and more",
    icon: "🛒",
    url: "https://copysmith.ai"
  },
  {
    name: "DeepL Write",
    category: "Text & Writing",
    description: "AI writing assistant for clarity and style",
    icon: "📝",
    url: "https://www.deepl.com/write"
  },
  {
    name: "NightCafe",
    category: "Image Generation",
    description: "AI art generator using neural style transfer and VQGAN+CLIP",
    icon: "🌃",
    url: "https://nightcafe.studio"
  },
  {
    name: "Dream by WOMBO",
    category: "Image Generation",
    description: "AI-powered art creation from text prompts",
    icon: "💭",
    url: "https://www.wombo.art"
  },
  {
    name: "Fotor GoArt",
    category: "Image Generation",
    description: "AI photo effects and artistic filters",
    icon: "🖌️",
    url: "https://goart.fotor.com"
  },
  {
    name: "Playground AI",
    category: "Image Generation",
    description: "Create and edit images with AI",
    icon: "🎠",
    url: "https://playgroundai.com"
  },
  {
    name: "Synthesys",
    category: "Video Creation",
    description: "AI video and voiceover generation platform",
    icon: "🎤",
    url: "https://synthesys.io"
  },
  {
    name: "InVideo",
    category: "Video Creation",
    description: "AI-powered video creation for marketing and social media",
    icon: "🎞️",
    url: "https://invideo.io"
  },
  {
    name: "Veed.io",
    category: "Video Creation",
    description: "Online video editing with AI features",
    icon: "✂️",
    url: "https://veed.io"
  },
  {
    name: "AIVA",
    category: "Audio & Music",
    description: "AI music composition assistant",
    icon: "🎼",
    url: "https://aiva.ai"
  },
  {
    name: "Boomy",
    category: "Audio & Music",
    description: "Create original music with AI in seconds",
    icon: "🎹",
    url: "https://boomy.com"
  },
  {
    name: "Soundraw",
    category: "Audio & Music",
    description: "AI music generator for creators",
    icon: "🎧",
    url: "https://soundraw.io"
  },
  {
    name: "LALAL.AI",
    category: "Audio & Music",
    description: "AI vocal and instrumental tracks remover",
    icon: "🎚️",
    url: "https://www.lalal.ai"
  },
  {
    name: "Blackbox AI",
    category: "Code & Development",
    description: "AI code search and code generation assistant",
    icon: "🖥️",
    url: "https://www.useblackbox.io"
  },
  {
    name: "AskCodi",
    category: "Code & Development",
    description: "AI coding assistant for developers",
    icon: "👨‍💻",
    url: "https://www.askcodi.com"
  },
  {
    name: "Mutable AI",
    category: "Code & Development",
    description: "AI-powered code completion and refactoring",
    icon: "🔄",
    url: "https://mutable.ai"
  },
  {
    name: "TabbyML",
    category: "Code & Development",
    description: "Open-source AI coding assistant",
    icon: "🐱",
    url: "https://tabbyml.com"
  },
  {
    name: "ClickUp AI",
    category: "Productivity",
    description: "AI-powered productivity and project management",
    icon: "✅",
    url: "https://clickup.com/ai"
  },
  {
    name: "Motion",
    category: "Productivity",
    description: "AI calendar and task automation",
    icon: "📆",
    url: "https://usemotion.com"
  },
  {
    name: "Supernormal",
    category: "Productivity",
    description: "AI meeting notes and summaries",
    icon: "📝",
    url: "https://supernormal.com"
  },
  {
    name: "Fireflies.ai",
    category: "Productivity",
    description: "AI meeting assistant for transcription and search",
    icon: "🔥",
    url: "https://fireflies.ai"
  },

  // Second Batch - More AI Tools
  {
    name: "Rytr",
    category: "Text & Writing",
    description: "AI writing assistant for content creation",
    icon: "✍️",
    url: "https://rytr.me"
  },
  {
    name: "HyperWrite",
    category: "Text & Writing",
    description: "AI writing assistant for emails, documents, and more",
    icon: "⚡",
    url: "https://hyperwrite.ai"
  },
  {
    name: "Sudowrite",
    category: "Text & Writing",
    description: "AI writing assistant for fiction and creative writing",
    icon: "📚",
    url: "https://sudowrite.com"
  },
  {
    name: "ContentBot",
    category: "Text & Writing",
    description: "AI content generation for blogs and marketing",
    icon: "🤖",
    url: "https://contentbot.ai"
  },
  {
    name: "Anyword",
    category: "Text & Writing",
    description: "AI copywriting platform for marketing teams",
    icon: "📢",
    url: "https://anyword.com"
  },
  {
    name: "Artbreeder",
    category: "Image Generation",
    description: "AI art creation through genetic algorithms",
    icon: "🧬",
    url: "https://artbreeder.com"
  },
  {
    name: "BigSleep",
    category: "Image Generation",
    description: "AI image generation from text descriptions",
    icon: "😴",
    url: "https://github.com/lucidrains/big-sleep"
  },
  {
    name: "Craiyon",
    category: "Image Generation",
    description: "AI art generator (formerly DALL-E mini)",
    icon: "🎨",
    url: "https://www.craiyon.com"
  },
  {
    name: "Stable Diffusion WebUI",
    category: "Image Generation",
    description: "Web interface for Stable Diffusion",
    icon: "🌐",
    url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
  },
  {
    name: "Kapwing",
    category: "Video Creation",
    description: "Online video editor with AI features",
    icon: "🎬",
    url: "https://www.kapwing.com"
  },
  {
    name: "Synthesia STUDIO",
    category: "Video Creation",
    description: "AI video creation platform with virtual avatars",
    icon: "🎭",
    url: "https://www.synthesia.io/studio"
  },
  {
    name: "HeyGen",
    category: "Video Creation",
    description: "AI video generation with talking avatars",
    icon: "👥",
    url: "https://www.heygen.com"
  },
  {
    name: "D-ID",
    category: "Video Creation",
    description: "AI-powered talking avatar platform",
    icon: "🗣️",
    url: "https://www.d-id.com"
  },
  {
    name: "Amper Music",
    category: "Audio & Music",
    description: "AI music composition platform",
    icon: "🎵",
    url: "https://www.ampermusic.com"
  },
  {
    name: "Ecrett Music",
    category: "Audio & Music",
    description: "AI music creation tool",
    icon: "🎼",
    url: "https://ecrettmusic.com"
  },
  {
    name: "Amadeus Code",
    category: "Audio & Music",
    description: "AI-powered music composition",
    icon: "🎹",
    url: "https://amadeuscode.com"
  },
  {
    name: "Humtap",
    category: "Audio & Music",
    description: "Create music by tapping on your phone",
    icon: "👆",
    url: "https://humtap.com"
  },
  {
    name: "Cursor",
    category: "Code & Development",
    description: "AI-first code editor",
    icon: "⌨️",
    url: "https://cursor.sh"
  },
  {
    name: "Codeium",
    category: "Code & Development",
    description: "Free AI code completion and chat",
    icon: "💎",
    url: "https://codeium.com"
  },
  {
    name: "Roam Research",
    category: "Productivity",
    description: "AI-powered note-taking and knowledge management",
    icon: "🧠",
    url: "https://roamresearch.com"
  },
  {
    name: "Obsidian",
    category: "Productivity",
    description: "Knowledge base with AI plugins",
    icon: "💎",
    url: "https://obsidian.md"
  },
  {
    name: "Mem",
    category: "Productivity",
    description: "AI-powered note-taking app",
    icon: "🧠",
    url: "https://mem.ai"
  },
  {
    name: "ChatGPT for Google",
    category: "Productivity",
    description: "Chrome extension for ChatGPT integration",
    icon: "🔍",
    url: "https://chatgpt4google.com"
  },
  {
    name: "Jasper Chat",
    category: "Productivity",
    description: "AI chat assistant for business",
    icon: "💬",
    url: "https://chat.jasper.ai"
  },

  // Third Batch - More AI Tools
  {
    name: "Perplexity AI",
    category: "Productivity",
    description: "AI-powered search and research assistant",
    icon: "🔍",
    url: "https://www.perplexity.ai"
  },
  {
    name: "You.com",
    category: "Productivity",
    description: "AI search engine with chat capabilities",
    icon: "🌐",
    url: "https://you.com"
  },
  {
    name: "Bard",
    category: "Productivity",
    description: "Google's AI chatbot and assistant",
    icon: "🤖",
    url: "https://bard.google.com"
  },
  {
    name: "Poe",
    category: "Productivity",
    description: "AI chat platform with multiple models",
    icon: "📱",
    url: "https://poe.com"
  },
  {
    name: "Character.AI",
    category: "Productivity",
    description: "AI character chat and roleplay platform",
    icon: "🎭",
    url: "https://character.ai"
  },
  {
    name: "Pi",
    category: "Productivity",
    description: "Personal AI assistant by Inflection",
    icon: "🥧",
    url: "https://pi.ai"
  },
  {
    name: "HuggingChat",
    category: "Productivity",
    description: "Open-source AI chat interface",
    icon: "🤗",
    url: "https://huggingface.co/chat"
  },
  {
    name: "ClaudePro",
    category: "Text & Writing",
    description: "Advanced AI assistant for complex tasks",
    icon: "🧠",
    url: "https://claude.ai"
  },
  {
    name: "ChatGPT Plus",
    category: "Text & Writing",
    description: "Enhanced ChatGPT with GPT-4 access",
    icon: "✨",
    url: "https://chat.openai.com"
  },
  {
    name: "Bing Chat",
    category: "Text & Writing",
    description: "Microsoft's AI-powered search chat",
    icon: "🔎",
    url: "https://www.bing.com/chat"
  },
  {
    name: "Notion AI",
    category: "Text & Writing",
    description: "AI writing assistant integrated with Notion",
    icon: "📝",
    url: "https://notion.so"
  },
  {
    name: "Lex",
    category: "Text & Writing",
    description: "AI writing app for creative writing",
    icon: "✍️",
    url: "https://lex.page"
  },
  {
    name: "Compose AI",
    category: "Text & Writing",
    description: "AI writing assistant for emails and documents",
    icon: "📧",
    url: "https://compose.ai"
  },
  {
    name: "TextCortex",
    category: "Text & Writing",
    description: "AI content creation platform",
    icon: "🧠",
    url: "https://textcortex.com"
  },
  {
    name: "Peppertype",
    category: "Text & Writing",
    description: "AI content generation for marketing",
    icon: "🌶️",
    url: "https://peppertype.ai"
  },
  {
    name: "Copy.ai",
    category: "Text & Writing",
    description: "AI copywriting for businesses",
    icon: "📄",
    url: "https://copy.ai"
  },
  {
    name: "Jasper",
    category: "Text & Writing",
    description: "AI content creation for marketing teams",
    icon: "🎯",
    url: "https://jasper.ai"
  },
  {
    name: "Writesonic",
    category: "Text & Writing",
    description: "AI writing platform for content creators",
    icon: "✍️",
    url: "https://writesonic.com"
  },
  {
    name: "ContentBot",
    category: "Text & Writing",
    description: "AI content generation for blogs and social media",
    icon: "🤖",
    url: "https://contentbot.ai"
  },
  {
    name: "Anyword",
    category: "Text & Writing",
    description: "AI copywriting platform for marketing",
    icon: "📢",
    url: "https://anyword.com"
  },
  {
    name: "Phrasee",
    category: "Text & Writing",
    description: "AI copywriting for email marketing",
    icon: "📧",
    url: "https://phrasee.co"
  },
  {
    name: "Persado",
    category: "Text & Writing",
    description: "AI marketing language generation",
    icon: "🎯",
    url: "https://persado.com"
  },
  {
    name: "Conversion.ai",
    category: "Text & Writing",
    description: "AI copywriting for conversions",
    icon: "💰",
    url: "https://conversion.ai"
  },
  {
    name: "CopySmith",
    category: "Text & Writing",
    description: "AI copywriting for e-commerce",
    icon: "🛒",
    url: "https://copysmith.ai"
  },
  {
    name: "Hypotenuse AI",
    category: "Text & Writing",
    description: "AI content creation for e-commerce",
    icon: "📐",
    url: "https://hypotenuse.ai"
  },
  {
    name: "Frase",
    category: "Text & Writing",
    description: "AI content optimization for SEO",
    icon: "🎯",
    url: "https://frase.io"
  },
  {
    name: "Clearscope",
    category: "Text & Writing",
    description: "AI content research and optimization",
    icon: "🔍",
    url: "https://clearscope.io"
  },
  {
    name: "MarketMuse",
    category: "Text & Writing",
    description: "AI content intelligence platform",
    icon: "📊",
    url: "https://marketmuse.com"
  },
  {
    name: "SurferSEO",
    category: "Text & Writing",
    description: "AI-powered SEO content optimization",
    icon: "🏄",
    url: "https://surferseo.com"
  },
  {
    name: "Topic",
    category: "Text & Writing",
    description: "AI content research and writing",
    icon: "📝",
    url: "https://topic.com"
  },
  {
    name: "WordLift",
    category: "Text & Writing",
    description: "AI-powered SEO and content optimization",
    icon: "📈",
    url: "https://wordlift.io"
  },
  {
    name: "Grammarly Business",
    category: "Text & Writing",
    description: "AI writing assistant for teams",
    icon: "📚",
    url: "https://grammarly.com"
  },
  {
    name: "ProWritingAid",
    category: "Text & Writing",
    description: "AI writing improvement tool",
    icon: "✏️",
    url: "https://prowritingaid.com"
  },
  {
    name: "Hemingway Editor",
    category: "Text & Writing",
    description: "AI writing clarity improvement",
    icon: "📖",
    url: "https://hemingwayapp.com"
  },
  {
    name: "Ginger",
    category: "Text & Writing",
    description: "AI grammar and spell checker",
    icon: "🧂",
    url: "https://gingersoftware.com"
  },
  {
    name: "LanguageTool",
    category: "Text & Writing",
    description: "AI grammar and style checker",
    icon: "🔧",
    url: "https://languagetool.org"
  },
  {
    name: "WhiteSmoke",
    category: "Text & Writing",
    description: "AI writing enhancement tool",
    icon: "💨",
    url: "https://whitesmoke.com"
  },
  {
    name: "Scribens",
    category: "Text & Writing",
    description: "AI grammar checker and proofreader",
    icon: "✍️",
    url: "https://scribens.com"
  },
  {
    name: "PaperRater",
    category: "Text & Writing",
    description: "AI writing assessment tool",
    icon: "📊",
    url: "https://paperrater.com"
  },
  {
    name: "Slick Write",
    category: "Text & Writing",
    description: "AI writing analysis and improvement",
    icon: "✨",
    url: "https://slickwrite.com"
  },
  {
    name: "After the Deadline",
    category: "Text & Writing",
    description: "AI writing style and grammar checker",
    icon: "⏰",
    url: "https://afterthedeadline.com"
  },
  {
    name: "Sapling",
    category: "Text & Writing",
    description: "AI writing assistant for customer service",
    icon: "🌱",
    url: "https://sapling.ai"
  },
  {
    name: "TextExpander",
    category: "Text & Writing",
    description: "AI-powered text expansion and automation",
    icon: "⚡",
    url: "https://textexpander.com"
  },
  {
    name: "PhraseExpress",
    category: "Text & Writing",
    description: "AI text expansion and automation",
    icon: "🚀",
    url: "https://phraseexpress.com"
  },
  {
    name: "Breevy",
    category: "Text & Writing",
    description: "AI text expansion for productivity",
    icon: "💨",
    url: "https://breevy.com"
  },
  {
    name: "TypeIt4Me",
    category: "Text & Writing",
    description: "AI text expansion for Mac",
    icon: "⌨️",
    url: "https://typeit4.com"
  },
  {
    name: "AutoHotkey",
    category: "Text & Writing",
    description: "AI automation and text expansion for Windows",
    icon: "🔧",
    url: "https://autohotkey.com"
  },
  {
    name: "PhraseOMatic",
    category: "Text & Writing",
    description: "AI text expansion and automation",
    icon: "📝",
    url: "https://phraseomatic.com"
  },
  {
    name: "TextBlaze",
    category: "Text & Writing",
    description: "AI text expansion and automation",
    icon: "🔥",
    url: "https://blaze.today"
  },
  {
    name: "Shortkeys",
    category: "Text & Writing",
    description: "AI text expansion for Chrome",
    icon: "🔑",
    url: "https://shortkeys.com"
  },
  {
    name: "TextExpander for Teams",
    category: "Text & Writing",
    description: "AI text expansion for business teams",
    icon: "👥",
    url: "https://textexpander.com"
  },
  {
    name: "PhraseExpress for Teams",
    category: "Text & Writing",
    description: "AI text expansion for enterprise",
    icon: "🏢",
    url: "https://phraseexpress.com"
  },
  {
    name: "Breevy for Teams",
    category: "Text & Writing",
    description: "AI text expansion for business",
    icon: "💼",
    url: "https://breevy.com"
  },
  {
    name: "TypeIt4Me for Teams",
    category: "Text & Writing",
    description: "AI text expansion for Mac teams",
    icon: "🍎",
    url: "https://typeit4.com"
  },
  {
    name: "AutoHotkey for Teams",
    category: "Text & Writing",
    description: "AI automation for Windows teams",
    icon: "🪟",
    url: "https://autohotkey.com"
  },
  {
    name: "PhraseOMatic for Teams",
    category: "Text & Writing",
    description: "AI text expansion for business",
    icon: "📊",
    url: "https://phraseomatic.com"
  },
  {
    name: "TextBlaze for Teams",
    category: "Text & Writing",
    description: "AI text expansion for teams",
    icon: "🔥",
    url: "https://blaze.today"
  },
  {
    name: "Shortkeys for Teams",
    category: "Text & Writing",
    description: "AI text expansion for Chrome teams",
    icon: "🔑",
    url: "https://shortkeys.com"
  }
];

const categories = [
  { name: "All", icon: "✨" },
  { name: "Text & Writing", icon: "💬" },
  { name: "Image Generation", icon: "📷" },
  { name: "Video Creation", icon: "🎨" },
  { name: "Audio & Music", icon: "🎵" },
  { name: "Code & Development", icon: "💻" },
  { name: "Productivity", icon: "⚡" }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredTools = aiTools.filter(tool => tool.featured);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>AI Tools Hub</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Transform Your Workflow with AI</h2>
            <p>Explore hundreds of cutting-edge AI tools for every need. From writing and design to coding and productivity.</p>
            <div className="search-container">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search AI tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="container">
          <div className="categories-grid">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`category-btn ${selectedCategory === category.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <span className="category-icon">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      {selectedCategory === "All" && searchTerm === "" && (
        <section className="featured">
          <div className="container">
            <h3>Featured Tools</h3>
            <div className="tools-grid featured-grid">
              {featuredTools.map((tool) => (
                <div key={tool.name} className="tool-card featured">
                  <div className="tool-header">
                    <span className="tool-icon">{tool.icon}</span>
                    <span className="featured-badge">Featured</span>
                  </div>
                  <h4>{tool.name}</h4>
                  <p>{tool.description}</p>
                  <span className="tool-category">{tool.category}</span>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-link">
                    Visit Tool →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Tools */}
      <section className="all-tools">
        <div className="container">
          <h3>{selectedCategory === "All" ? "All AI Tools" : `${selectedCategory} Tools`}</h3>
          <div className="tools-grid">
            {filteredTools.map((tool) => (
              <div key={tool.name} className="tool-card">
                <div className="tool-header">
                  <span className="tool-icon">{tool.icon}</span>
                </div>
                <h4>{tool.name}</h4>
                <p>{tool.description}</p>
                <span className="tool-category">{tool.category}</span>
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-link">
                  Visit Tool →
                </a>
              </div>
            ))}
          </div>
          {filteredTools.length === 0 && (
            <div className="no-results">
              <p>No tools found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 AI Tools Hub</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
