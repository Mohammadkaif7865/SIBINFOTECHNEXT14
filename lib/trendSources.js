// lib/trendSources.js
// Pulls real, current items from named authoritative RSS/Atom feeds and
// turns them into scored "trend" candidates for the /admin/trends
// dashboard. A feed that fails is skipped and reported — never backfilled
// with invented data.

import { XMLParser } from "fast-xml-parser";

export const SOURCES = [
  // ==========================================
  // 1. FRONTIER AI, LLMs & BREAKTHROUGHS (22)
  // ==========================================
  { name: "Next-Gen AI & Model Launches", url: "https://news.google.com/rss/search?q=%22Project+Astra%22+OR+%22GPT-6%22+OR+%22GPT-5%22+OR+SearchGPT+OR+DeepSeek+OR+Claude+when:7d&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 1.0 },
  { name: "Google News AI Wire", url: "https://news.google.com/rss/search?q=Artificial+Intelligence+OR+OpenAI+OR+ChatGPT+OR+Gemini+OR+Astra&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.98 },
  { name: "TechCrunch AI", url: "https://techcrunch.com/category/artificial-intelligence/feed/", category: "AI", weight: 0.95 },
  { name: "The Verge AI", url: "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml", category: "AI", weight: 0.95 },
  { name: "OpenAI Official News", url: "https://openai.com/news/rss.xml", category: "AI", weight: 0.98 },
  { name: "Google AI Official Blog", url: "https://blog.google/technology/ai/rss/", category: "AI", weight: 0.95 },
  { name: "Anthropic Claude Wire", url: "https://news.google.com/rss/search?q=Anthropic+Claude+AI+when:7d&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.95 },
  { name: "DeepSeek AI Research Wire", url: "https://news.google.com/rss/search?q=DeepSeek+AI+LLM+when:7d&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.95 },
  { name: "Meta AI & Llama Models Wire", url: "https://news.google.com/rss/search?q=%22Meta+AI%22+OR+%22Llama+3%22+OR+%22Llama+4%22+when:7d&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.92 },
  { name: "Microsoft Copilot & Azure AI Wire", url: "https://news.google.com/rss/search?q=%22Microsoft+Copilot%22+OR+%22Azure+AI%22+when:7d&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.9 },
  { name: "Ars Technica AI & Machine Learning", url: "https://feeds.arstechnica.com/arstechnica/technology-lab", category: "AI", weight: 0.9 },
  { name: "MIT Technology Review AI Wire", url: "https://news.google.com/rss/search?q=site:technologyreview.com+AI+OR+%22artificial+intelligence%22&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.9 },
  { name: "MarkTechPost AI Wire", url: "https://news.google.com/rss/search?q=site:marktechpost.com+AI&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.88 },
  { name: "AI Agents & Agentic Workflows Wire", url: "https://news.google.com/rss/search?q=%22AI+agents%22+OR+%22agentic+workflows%22+when:7d&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.92 },
  { name: "Multimodal Video & Vision AI (Sora/Veo/Runway)", url: "https://news.google.com/rss/search?q=OpenAI+Sora+OR+%22Google+Veo%22+OR+Runway+Gen-3+when:7d&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.9 },
  { name: "Hugging Face Open Source AI Wire", url: "https://news.google.com/rss/search?q=%22Hugging+Face%22+AI+models+when:7d&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.88 },
  { name: "Mistral AI Releases Wire", url: "https://news.google.com/rss/search?q=%22Mistral+AI%22+OR+%22Le+Chat%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.88 },
  { name: "NVIDIA AI & Hardware Wire", url: "https://news.google.com/rss/search?q=NVIDIA+AI+OR+Blackwell+OR+%22NVIDIA+NIM%22+when:7d&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.88 },
  { name: "AI Coding Assistants (Cursor/Copilot/Devin) Wire", url: "https://news.google.com/rss/search?q=%22Cursor+AI%22+OR+%22GitHub+Copilot%22+OR+%22Devin+AI%22+when:7d&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.88 },
  { name: "Enterprise AI & GenAI Deployment Wire", url: "https://news.google.com/rss/search?q=%22Enterprise+Generative+AI%22+OR+%22Enterprise+LLM%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.85 },
  { name: "AI Ethics, Governance & Safety Wire", url: "https://news.google.com/rss/search?q=%22AI+safety%22+OR+%22AI+regulations%22+OR+%22AI+Act%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.82 },
  { name: "Generative AI In Marketing Wire", url: "https://news.google.com/rss/search?q=%22generative+ai+in+marketing%22+OR+%22AI+marketing+tools%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "AI", weight: 0.9 },

  // ==========================================
  // 2. AI SEARCH, GEO & ANSWER ENGINES (15)
  // ==========================================
  { name: "AI Search & GEO Wire", url: "https://news.google.com/rss/search?q=%22AI+Overviews%22+OR+%22Generative+Engine+Optimization%22+OR+Perplexity+when:7d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.98 },
  { name: "SearchGPT & OpenAI Search Wire", url: "https://news.google.com/rss/search?q=SearchGPT+OR+%22ChatGPT+Search%22+when:7d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.98 },
  { name: "Perplexity AI & Comet Search Wire", url: "https://news.google.com/rss/search?q=%22Perplexity+AI%22+OR+%22Perplexity+Pages%22+when:7d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.95 },
  { name: "Google AI Overviews Updates Wire", url: "https://news.google.com/rss/search?q=%22Google+AI+Overviews%22+OR+%22AI+in+SERPs%22+when:7d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.98 },
  { name: "Answer Engine Optimization (AEO) Wire", url: "https://news.google.com/rss/search?q=%22Answer+Engine+Optimization%22+OR+%22AEO+strategy%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.92 },
  { name: "Generative Engine Optimization (GEO) Strategy Wire", url: "https://news.google.com/rss/search?q=%22Generative+Engine+Optimization%22+OR+%22GEO+framework%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.95 },
  { name: "LLM Brand Citations & Entity Visibility Wire", url: "https://news.google.com/rss/search?q=%22LLM+citations%22+OR+%22brand+visibility+in+ChatGPT%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.9 },
  { name: "Bing Copilot Search Wire", url: "https://news.google.com/rss/search?q=%22Bing+Copilot%22+OR+%22Microsoft+Copilot+Search%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.88 },
  { name: "Zero-Click AI Search Impacts Wire", url: "https://news.google.com/rss/search?q=%22zero-click+search%22+OR+%22AI+overview+traffic+drop%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.9 },
  { name: "Conversational Search UX Wire", url: "https://news.google.com/rss/search?q=%22conversational+search%22+OR+%22voice+search+AI%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.82 },
  { name: "Semantic Search & Knowledge Graphs Wire", url: "https://news.google.com/rss/search?q=%22knowledge+graph%22+OR+%22semantic+search+optimization%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.88 },
  { name: "AI Search Monetization & Ads Wire", url: "https://news.google.com/rss/search?q=%22ads+in+AI+Overviews%22+OR+%22Perplexity+ads%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.9 },
  { name: "Future of Organic Traffic & AI Search Wire", url: "https://news.google.com/rss/search?q=%22future+of+search%22+OR+%22search+disruption%22+AI+when:14d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.88 },
  { name: "AI Query Intent & Discovery Wire", url: "https://news.google.com/rss/search?q=%22search+intent%22+OR+%22query+fan-out%22+LLM+when:14d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.85 },
  { name: "Publisher vs AI Search Content Wars Wire", url: "https://news.google.com/rss/search?q=%22robots.txt%22+OR+%22AI+bot+blocking%22+publishers+when:14d&hl=en-US&gl=US&ceid=US:en", category: "GEO", weight: 0.88 },

  // ==========================================
  // 3. GOOGLE UPDATES & CORE ALGORITHMS (16)
  // ==========================================
  { name: "Google Search Central Blog", url: "https://developers.google.com/search/blog/feed.xml", category: "Google", weight: 1.0 },
  { name: "Google Search Algorithm Updates Wire", url: "https://news.google.com/rss/search?q=%22Google+Core+Update%22+OR+%22Google+Search+Algorithm%22+when:7d&hl=en-US&gl=US&ceid=US:en", category: "Google", weight: 0.98 },
  { name: "Search Engine Roundtable", url: "https://www.seroundtable.com/index.xml", category: "Google", weight: 0.92 },
  { name: "Google Ads & Commerce Official Blog", url: "https://blog.google/products/ads-commerce/rss/", category: "Paid Advertising", weight: 0.92 },
  { name: "Google Keyword Official Blog", url: "https://blog.google/rss/", category: "Google", weight: 0.85 },
  { name: "Bing Official Blogs", url: "https://blogs.bing.com/feed", category: "Google", weight: 0.7 },
  { name: "Google Helpful Content & Quality Systems Wire", url: "https://news.google.com/rss/search?q=%22Helpful+Content+System%22+OR+%22site+reputation+abuse%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Google", weight: 0.95 },
  { name: "Google Spam & Policy Updates Wire", url: "https://news.google.com/rss/search?q=%22Google+Spam+Update%22+OR+%22scaled+content+abuse%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Google", weight: 0.92 },
  { name: "Google Search Console Features Wire", url: "https://news.google.com/rss/search?q=%22Google+Search+Console%22+update+OR+feature+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Google", weight: 0.9 },
  { name: "Google Discover & Top Stories Algorithm Wire", url: "https://news.google.com/rss/search?q=%22Google+Discover%22+algorithm+OR+traffic+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Google", weight: 0.88 },
  { name: "Google Merchant Center & Product SERPs Wire", url: "https://news.google.com/rss/search?q=%22Google+Merchant+Center%22+OR+%22Shopping+Graph%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Google", weight: 0.85 },
  { name: "Google Local Search & Maps Update Wire", url: "https://news.google.com/rss/search?q=%22Google+Business+Profile%22+OR+%22Google+Maps+ranking%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Google", weight: 0.88 },
  { name: "Google Page Experience & CWV Wire", url: "https://news.google.com/rss/search?q=%22Interaction+to+Next+Paint%22+OR+%22INP%22+Google+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Google", weight: 0.85 },
  { name: "Google SGE & Search Labs Wire", url: "https://news.google.com/rss/search?q=%22Search+Labs%22+Google+Search+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Google", weight: 0.88 },
  { name: "Google Search Volatility & Weather Wire", url: "https://news.google.com/rss/search?q=%22SERP+volatility%22+OR+%22Google+ranking+shakeup%22+when:7d&hl=en-US&gl=US&ceid=US:en", category: "Google", weight: 0.9 },
  { name: "Google Indexing & Crawling Wire", url: "https://news.google.com/rss/search?q=%22Googlebot%22+OR+%22indexing+issue%22+Google+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Google", weight: 0.85 },

  // ==========================================
  // 4. ORGANIC SEO & TECHNICAL STRATEGY (18)
  // ==========================================
  { name: "Moz Official SEO Blog", url: "https://moz.com/blog/feed", category: "SEO", weight: 0.88 },
  { name: "Ahrefs SEO Research Wire", url: "https://news.google.com/rss/search?q=site:ahrefs.com/blog+SEO&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.9 },
  { name: "Semrush Industry Research Wire", url: "https://news.google.com/rss/search?q=site:semrush.com/blog+SEO&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.9 },
  { name: "Backlinko SEO Strategy Wire", url: "https://news.google.com/rss/search?q=site:backlinko.com+SEO&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.85 },
  { name: "Yoast SEO Blog", url: "https://yoast.com/feed/", category: "SEO", weight: 0.82 },
  { name: "Technical SEO & Schema Markup Wire", url: "https://news.google.com/rss/search?q=%22technical+seo%22+OR+%22schema.org%22+OR+%22structured+data%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.88 },
  { name: "Enterprise SEO & Architecture Wire", url: "https://news.google.com/rss/search?q=%22enterprise+seo%22+OR+%22programmatic+seo%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.85 },
  { name: "Link Building & Digital PR Wire", url: "https://news.google.com/rss/search?q=%22digital+pr%22+OR+%22backlink+strategy%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.85 },
  { name: "Core Web Vitals & Page Speed SEO Wire", url: "https://news.google.com/rss/search?q=%22core+web+vitals%22+OR+%22page+speed+seo%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.82 },
  { name: "International SEO & Hreflang Wire", url: "https://news.google.com/rss/search?q=%22international+seo%22+OR+%22hreflang%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.8 },
  { name: "E-Commerce SEO & Category Optimization Wire", url: "https://news.google.com/rss/search?q=%22ecommerce+seo%22+OR+%22product+page+seo%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.85 },
  { name: "Local SEO & Multi-Location Strategy Wire", url: "https://news.google.com/rss/search?q=%22local+seo%22+OR+%22local+pack%22+ranking+when:14d&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.85 },
  { name: "SaaS SEO & Product-Led Growth Wire", url: "https://news.google.com/rss/search?q=%22SaaS+SEO%22+OR+%22B2B+SEO%22+strategy+when:14d&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.85 },
  { name: "Search Engine Watch Wire", url: "https://news.google.com/rss/search?q=site:searchenginewatch.com&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.8 },
  { name: "SEO Keyword Strategy & Clustering Wire", url: "https://news.google.com/rss/search?q=%22keyword+clustering%22+OR+%22topical+authority%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.88 },
  { name: "JavaScript SEO & Rendering Wire", url: "https://news.google.com/rss/search?q=%22JavaScript+SEO%22+OR+%22SSR+SEO%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.82 },
  { name: "Mobile SEO & App Indexing Wire", url: "https://news.google.com/rss/search?q=%22mobile+first+indexing%22+OR+%22ASO%22+app+store+when:14d&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.8 },
  { name: "Cannibalization & Site Architecture Wire", url: "https://news.google.com/rss/search?q=%22keyword+cannibalization%22+OR+%22internal+linking+structure%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "SEO", weight: 0.85 },

  // ==========================================
  // 5. PAID ADVERTISING, PPC & PERFORMANCE (16)
  // ==========================================
  { name: "Google Ads & Performance Max Wire", url: "https://news.google.com/rss/search?q=%22Performance+Max%22+OR+%22Google+Ads+Update%22+when:7d&hl=en-US&gl=US&ceid=US:en", category: "Paid Advertising", weight: 0.95 },
  { name: "PPC Hero Industry Blog", url: "https://www.ppchero.com/feed/", category: "Paid Advertising", weight: 0.88 },
  { name: "WordStream Advertising Strategy Wire", url: "https://news.google.com/rss/search?q=site:wordstream.com/blog+PPC+OR+Ads&hl=en-US&gl=US&ceid=US:en", category: "Paid Advertising", weight: 0.85 },
  { name: "Meta Ads & Advantage+ Updates Wire", url: "https://news.google.com/rss/search?q=%22Meta+Ads%22+OR+%22Advantage%2B%22+campaigns+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Paid Advertising", weight: 0.9 },
  { name: "TikTok Ads & Shopping Campaigns Wire", url: "https://news.google.com/rss/search?q=%22TikTok+Ads%22+OR+%22TikTok+Shop+Ads%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Paid Advertising", weight: 0.88 },
  { name: "Amazon Sponsored Ads & DSP Wire", url: "https://news.google.com/rss/search?q=%22Amazon+PPC%22+OR+%22Amazon+DSP%22+ads+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Paid Advertising", weight: 0.88 },
  { name: "AdExchanger Digital Media News", url: "https://www.adexchanger.com/feed/", category: "Paid Advertising", weight: 0.85 },
  { name: "Programmatic Advertising & CTV Wire", url: "https://news.google.com/rss/search?q=%22programmatic+advertising%22+OR+%22connected+tv+advertising%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Paid Advertising", weight: 0.82 },
  { name: "Microsoft Advertising & Copilot Ads Wire", url: "https://news.google.com/rss/search?q=%22Microsoft+Advertising%22+update+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Paid Advertising", weight: 0.85 },
  { name: "LinkedIn B2B Advertising Wire", url: "https://news.google.com/rss/search?q=%22LinkedIn+Ads%22+OR+%22B2B+paid+acquisition%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Paid Advertising", weight: 0.85 },
  { name: "Paid Search Automation & Smart Bidding Wire", url: "https://news.google.com/rss/search?q=%22smart+bidding%22+OR+%22target+roas%22+Google+Ads+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Paid Advertising", weight: 0.88 },
  { name: "Retail Media Networks & In-Store Ads Wire", url: "https://news.google.com/rss/search?q=%22retail+media+networks%22+OR+%22Walmart+Connect%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Paid Advertising", weight: 0.82 },
  { name: "Ad Creative & Video Hook Strategy Wire", url: "https://news.google.com/rss/search?q=%22creative+fatigue%22+OR+%22UGC+video+ads%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Paid Advertising", weight: 0.82 },
  { name: "Paid Social CAC & ROAS Benchmarks Wire", url: "https://news.google.com/rss/search?q=%22CAC+benchmarks%22+OR+%22ROAS+trends%22+paid+media+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Paid Advertising", weight: 0.85 },
  { name: "First-Party Data & Ad Tracking Wire", url: "https://news.google.com/rss/search?q=%22server+side+tracking%22+OR+%22Enhanced+Conversions%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Paid Advertising", weight: 0.88 },
  { name: "App Install Campaigns (ASA & UAC) Wire", url: "https://news.google.com/rss/search?q=%22Apple+Search+Ads%22+OR+%22Google+App+Campaigns%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Paid Advertising", weight: 0.8 },

  // ==========================================
  // 6. CONTENT MARKETING, EEAT & BRAND (14)
  // ==========================================
  { name: "HubSpot Marketing Official Blog", url: "https://blog.hubspot.com/marketing/rss.xml", category: "Content Marketing", weight: 0.9 },
  { name: "Content Marketing Institute", url: "https://contentmarketinginstitute.com/feed/", category: "Content Marketing", weight: 0.88 },
  { name: "Copyblogger Content Strategy", url: "https://copyblogger.com/feed/", category: "Content Marketing", weight: 0.82 },
  { name: "Neil Patel Marketing Wire", url: "https://news.google.com/rss/search?q=site:neilpatel.com/blog&hl=en-US&gl=US&ceid=US:en", category: "Content Marketing", weight: 0.85 },
  { name: "MarketingProfs B2B Wire", url: "https://news.google.com/rss/search?q=site:marketingprofs.com&hl=en-US&gl=US&ceid=US:en", category: "Content Marketing", weight: 0.8 },
  { name: "EEAT & Thought Leadership Content Wire", url: "https://news.google.com/rss/search?q=%22EEAT%22+OR+%22author+authority%22+Google+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Content Marketing", weight: 0.9 },
  { name: "B2B Content Strategy & Demand Gen Wire", url: "https://news.google.com/rss/search?q=%22B2B+content+marketing%22+OR+%22demand+generation%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Content Marketing", weight: 0.85 },
  { name: "AI Content Governance & Human-in-the-Loop Wire", url: "https://news.google.com/rss/search?q=%22AI+content+detection%22+OR+%22human+edited+AI%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Content Marketing", weight: 0.85 },
  { name: "Brand Positioning & Narrative Strategy Wire", url: "https://news.google.com/rss/search?q=%22brand+positioning%22+OR+%22brand+strategy%22+marketing+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Content Marketing", weight: 0.8 },
  { name: "Organic Conversion & Content Lead Gen Wire", url: "https://news.google.com/rss/search?q=%22content+ROI%22+OR+%22inbound+lead+generation%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Content Marketing", weight: 0.82 },
  { name: "Podcasting & Audio Content Strategy Wire", url: "https://news.google.com/rss/search?q=%22branded+podcast%22+OR+%22audio+marketing%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Content Marketing", weight: 0.78 },
  { name: "Interactive & Visual Content Marketing Wire", url: "https://news.google.com/rss/search?q=%22interactive+content%22+OR+%22data+storytelling%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Content Marketing", weight: 0.8 },
  { name: "Content Repurposing & Multi-Channel Syndication", url: "https://news.google.com/rss/search?q=%22content+repurposing%22+OR+%22omnichannel+content%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Content Marketing", weight: 0.8 },
  { name: "Content Pruning & Refresh Strategy Wire", url: "https://news.google.com/rss/search?q=%22content+audit%22+OR+%22content+decay%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Content Marketing", weight: 0.85 },

  // ==========================================
  // 7. SOCIAL MEDIA & CREATOR ECONOMY (12)
  // ==========================================
  { name: "Social Media Examiner Official Feed", url: "https://www.socialmediaexaminer.com/feed/", category: "Social Media", weight: 0.9 },
  { name: "Social Media Today Wire", url: "https://news.google.com/rss/search?q=site:socialmediatoday.com&hl=en-US&gl=US&ceid=US:en", category: "Social Media", weight: 0.88 },
  { name: "Sprout Social Strategy Insights Wire", url: "https://news.google.com/rss/search?q=site:sproutsocial.com/insights&hl=en-US&gl=US&ceid=US:en", category: "Social Media", weight: 0.85 },
  { name: "Buffer Social Media Strategy", url: "https://buffer.com/resources/rss/", category: "Social Media", weight: 0.82 },
  { name: "Hootsuite Social Trends Wire", url: "https://news.google.com/rss/search?q=site:blog.hootsuite.com&hl=en-US&gl=US&ceid=US:en", category: "Social Media", weight: 0.8 },
  { name: "Creator Economy & Influencer Deals Wire", url: "https://news.google.com/rss/search?q=%22creator+economy%22+OR+%22influencer+marketing%22+when:7d&hl=en-US&gl=US&ceid=US:en", category: "Social Media", weight: 0.88 },
  { name: "LinkedIn Algorithm & Thought Leadership Wire", url: "https://news.google.com/rss/search?q=%22LinkedIn+algorithm%22+OR+%22LinkedIn+newsletter%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Social Media", weight: 0.88 },
  { name: "YouTube Shorts & Long-Form Video Strategy Wire", url: "https://news.google.com/rss/search?q=%22YouTube+algorithm%22+OR+%22YouTube+Shorts+monetization%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Social Media", weight: 0.88 },
  { name: "Instagram Reels & Algorithm Updates Wire", url: "https://news.google.com/rss/search?q=%22Instagram+algorithm%22+OR+%22Instagram+Reels%22+update+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Social Media", weight: 0.88 },
  { name: "Threads & X (Twitter) Algorithm Changes Wire", url: "https://news.google.com/rss/search?q=%22Threads+app%22+OR+%22X+algorithm%22+marketing+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Social Media", weight: 0.8 },
  { name: "Community Building & Brand Advocacy Wire", url: "https://news.google.com/rss/search?q=%22brand+community%22+OR+%22Discord+marketing%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Social Media", weight: 0.78 },
  { name: "Social Search & In-App Discovery Wire", url: "https://news.google.com/rss/search?q=%22TikTok+SEO%22+OR+%22Instagram+search%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Social Media", weight: 0.88 },

  // ==========================================
  // 8. MARTECH, CRO & DATA ANALYTICS (10)
  // ==========================================
  { name: "MarTech Today Wire", url: "https://news.google.com/rss/search?q=site:martech.org&hl=en-US&gl=US&ceid=US:en", category: "Marketing Technology", weight: 0.9 },
  { name: "Conversion Rate Optimization (CRO) Wire", url: "https://news.google.com/rss/search?q=%22conversion+rate+optimization%22+OR+%22A/B+testing%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Marketing Technology", weight: 0.88 },
  { name: "Google Analytics 4 & BigQuery Marketing Wire", url: "https://news.google.com/rss/search?q=%22GA4%22+OR+%22Google+Analytics+4%22+reporting+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Analytics", weight: 0.88 },
  { name: "Marketing Attribution & MMM Models Wire", url: "https://news.google.com/rss/search?q=%22Marketing+Mix+Modeling%22+OR+%22multi-touch+attribution%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Analytics", weight: 0.85 },
  { name: "ChiefMartec Marketing Operations Wire", url: "https://news.google.com/rss/search?q=site:chiefmartec.com&hl=en-US&gl=US&ceid=US:en", category: "Marketing Technology", weight: 0.82 },
  { name: "Marketing Automation & AI Workflows Wire", url: "https://news.google.com/rss/search?q=%22marketing+automation%22+OR+%22Zapier+AI%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Marketing Technology", weight: 0.85 },
  { name: "Customer Data Platforms (CDP) Strategy Wire", url: "https://news.google.com/rss/search?q=%22Customer+Data+Platform%22+OR+%22Segment+CDP%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Marketing Technology", weight: 0.82 },
  { name: "Privacy Sandbox & Cookie Deprecation Wire", url: "https://news.google.com/rss/search?q=%22Privacy+Sandbox%22+OR+%22third-party+cookies%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Marketing Technology", weight: 0.88 },
  { name: "Landing Page Speed & Mobile Conversion Wire", url: "https://news.google.com/rss/search?q=%22landing+page+conversion%22+OR+%22mobile+checkout+UX%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Marketing Technology", weight: 0.85 },
  { name: "AI Chatbots & Conversational Sales Wire", url: "https://news.google.com/rss/search?q=%22AI+sales+chatbot%22+OR+%22conversational+commerce%22+when:14d&hl=en-US&gl=US&ceid=US:en", category: "Marketing Technology", weight: 0.85 },
];

const FETCH_TIMEOUT_MS = 9000;
const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });

function textOf(node) {
  if (node == null) return "";
  if (typeof node === "string") return node;
  if (typeof node === "object") return node["#text"] || node["@_href"] || "";
  return String(node);
}

function linkOf(node) {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) {
    const alt = node.find((l) => !l["@_rel"] || l["@_rel"] === "alternate");
    return alt ? textOf(alt) : textOf(node[0]);
  }
  return textOf(node);
}

function stripHtml(str) {
  return String(str || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&apos;/gi, "'")
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#8216;/gi, "‘")
    .replace(/&#8217;/gi, "’")
    .replace(/&#8220;/gi, "“")
    .replace(/&#8221;/gi, "”")
    .replace(/&#8211;/gi, "–")
    .replace(/&#8212;/gi, "—")
    .replace(/&#8230;/gi, "…")
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)))
    .replace(/\s+/g, " ")
    .trim();
}

function formatSimpleSummary(rawDesc, title) {
  let text = stripHtml(rawDesc);

  // Remove common RSS boilerplate patterns & Google News wrappers
  text = text
    .replace(/The post .* appeared first on .*/gi, "")
    .replace(/Read more\.\.\.?/gi, "")
    .replace(/Continue reading\.\.\.?/gi, "")
    .replace(/\[\.\.\.\]/gi, "")
    .replace(/Click here to read more\./gi, "")
    .replace(/Source:\s*.*$/gi, "")
    .replace(/View Full Coverage on Google News/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  // If text is too short or empty, provide a clean plain-English summary from the title
  if (!text || text.length < 25) {
    return `Latest industry developments, market impact, and strategic insights regarding ${title}.`;
  }

  // Pick the first 1-2 complete sentences
  const sentenceMatches = text.match(/[^.!?]+[.!?]+/g);
  if (sentenceMatches && sentenceMatches.length > 0) {
    let summary = sentenceMatches[0].trim();
    if (summary.length < 90 && sentenceMatches[1]) {
      summary += " " + sentenceMatches[1].trim();
    }
    if (summary.length <= 220) {
      return summary;
    }
  }

  // Fallback: trim cleanly at word boundary
  if (text.length > 180) {
    const trimmed = text.slice(0, 180);
    const lastSpace = trimmed.lastIndexOf(" ");
    return (lastSpace > 100 ? trimmed.slice(0, lastSpace) : trimmed).trim() + "...";
  }

  return text;
}

function detectItemCategory(title, desc, defaultCategory) {
  const combined = `${title} ${desc}`.toLowerCase();
  if (/\b(geo|aeo|generative engine optimization|answer engine optimization|ai overview|ai overviews|searchgpt|perplexity)\b/i.test(combined)) {
    return "GEO";
  }
  if (/\b(astra|project astra|gpt-6|gpt-5|gpt-4|gpt|chatgpt|openai|gemini|claude|anthropic|deepseek|mistral|sora|copilot|reasoning model|llm|multimodal|artificial intelligence|generative ai|ai agent|ai agents)\b/i.test(combined)) {
    return "AI";
  }
  if (/\b(google core update|search console|algorithm update|indexing|serp|crawling)\b/i.test(combined)) {
    return "Google";
  }
  if (/\b(seo|backlink|rankings|technical seo|schema markup)\b/i.test(combined)) {
    return "SEO";
  }
  if (/\b(google ads|ppc|performance max|ad copy|facebook ads)\b/i.test(combined)) {
    return "Paid Advertising";
  }
  return defaultCategory;
}

async function fetchFeed(source) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(source.url, {
      signal: controller.signal,
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" },
    });
    clearTimeout(timer);
    if (!res.ok) return { source, ok: false, error: `HTTP ${res.status}`, items: [] };

    const xml = await res.text();
    const parsed = parser.parse(xml);

    let rawItems = [];
    if (parsed?.rss?.channel?.item) {
      rawItems = [].concat(parsed.rss.channel.item);
    } else if (parsed?.feed?.entry) {
      rawItems = [].concat(parsed.feed.entry);
    } else if (parsed?.["rdf:RDF"]?.item) {
      rawItems = [].concat(parsed["rdf:RDF"].item);
    }

    const items = rawItems
      .slice(0, 30)
      .map((raw) => {
        const title = stripHtml(textOf(raw.title));
        const link = linkOf(raw.link) || textOf(raw.guid);
        const dateStr = raw.pubDate || raw.published || raw.updated || raw["dc:date"];
        const publishedDate = dateStr ? new Date(dateStr) : null;
        const rawDesc = textOf(raw.description) || textOf(raw.summary) || textOf(raw["content:encoded"]) || textOf(raw.content);
        const description = formatSimpleSummary(rawDesc, title);
        const category = detectItemCategory(title, rawDesc, source.category);

        if (!title || !link) return null;
        return {
          title,
          link,
          publishedDate: publishedDate && !isNaN(publishedDate) ? publishedDate.toISOString() : null,
          description,
          source: source.name,
          sourceUrl: source.url,
          category,
          sourceWeight: source.weight,
        };
      })
      .filter(Boolean);

    return { source, ok: true, error: null, items };
  } catch (err) {
    clearTimeout(timer);
    return {
      source,
      ok: false,
      error: err.name === "AbortError" ? "Timed out" : err.message,
      items: [],
    };
  }
}

const KEYWORD_WEIGHTS = {
  astra: 5.0, "project astra": 5.0, "gpt-6": 5.0, "gpt 6": 5.0, "gpt-5": 4.5, "gpt 5": 4.5, "gpt-4": 3.5,
  chatgpt: 4.0, openai: 4.0, gemini: 4.0, claude: 4.0, anthropic: 3.5,
  deepseek: 4.0, searchgpt: 4.5, perplexity: 4.0, "ai overview": 4.0, "ai overviews": 4.0,
  "generative engine": 4.0, geo: 3.5, aeo: 3.5, "reasoning model": 4.0, multimodal: 3.5,
  "ai agent": 3.5, "ai agents": 3.5, agentic: 3.5, copilot: 3.0, sora: 4.0,
  "core update": 4.0, "algorithm update": 4.0, "algorithm": 3.0, "ranking": 2.5,
  "search console": 3.0, "google ads": 2.5, "performance max": 3.0, automation: 2.0,
  "large language model": 3.0, llm: 3.0, "answer engine": 3.0, sge: 3.0,
};

function keywordScore(text) {
  const lower = text.toLowerCase();
  let score = 0;
  for (const [kw, weight] of Object.entries(KEYWORD_WEIGHTS)) {
    if (lower.includes(kw)) score += weight;
  }
  return score;
}

function recencyScore(publishedDate) {
  if (!publishedDate) return 0.5;
  const hours = (Date.now() - new Date(publishedDate).getTime()) / 36e5;
  if (hours < 0) return 1;
  if (hours <= 24) return 1;
  if (hours <= 72) return 0.85;
  if (hours <= 168) return 0.65;
  if (hours <= 720) return 0.35;
  return 0.1;
}

function classify(item, opportunityScore) {
  const text = `${item.title} ${item.description}`.toLowerCase();
  const ageHours = item.publishedDate
    ? (Date.now() - new Date(item.publishedDate).getTime()) / 36e5
    : 999;

  if (ageHours <= 24 && item.sourceWeight >= 0.85) return "Breaking";
  if (/(astra|gpt-6|gpt-5|chatgpt|openai|gemini|claude|deepseek|searchgpt|perplexity|sora|multimodal|reasoning model)/.test(text)) return "AI Breakthrough";
  if (/(core update|algorithm update|search console|indexing)/.test(text)) return "Google Update";
  if (/(ai overview|generative engine|geo|aeo|answer engine)/.test(text)) return "GEO & AI Search";
  if (/(seo|backlink|ranking|serp|keyword)/.test(text)) return "SEO Update";
  if (ageHours <= 72 && opportunityScore >= 65) return "High Priority";
  if (opportunityScore >= 55) return "Trending";
  if (/(strategy|guide|how to|best practices)/.test(text)) return "Marketing Strategy";
  if (ageHours > 168) return "Evergreen Opportunity";
  return "Industry Update";
}

function freshnessLabel(publishedDate) {
  if (!publishedDate) return "Recent";
  const hours = (Date.now() - new Date(publishedDate).getTime()) / 36e5;
  if (hours <= 24) return "Today";
  if (hours <= 72) return "Last 3 Days";
  if (hours <= 168) return "Last 7 Days";
  if (hours <= 720) return "Last 30 Days";
  return "Last 3 Months";
}

function dedupe(items) {
  const seen = new Map();
  for (const item of items) {
    const key = item.link || item.title.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!seen.has(key)) seen.set(key, item);
  }
  return [...seen.values()];
}

/**
 * Fetches all configured sources in parallel and returns scored, deduped,
 * sorted trend candidates strictly from the last 3 months (90 days max).
 */
export async function aggregateTrends() {
  const results = await Promise.all(SOURCES.map(fetchFeed));

  const sourceStatus = results.map((r) => ({
    name: r.source.name,
    url: r.source.url,
    ok: r.ok,
    error: r.error,
    itemCount: r.items.length,
  }));

  let items = dedupe(results.flatMap((r) => r.items));

  // Strict 3-month (90 days) cutoff filter
  const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
  const now = Date.now();
  items = items.filter((item) => {
    if (!item.publishedDate) return true;
    const ageMs = now - new Date(item.publishedDate).getTime();
    return ageMs >= -36e5 && ageMs <= MAX_AGE_MS; // No future spam and maximum 90 days old
  });

  items = items.map((item) => {
    const kwScore = keywordScore(`${item.title} ${item.description}`);
    const recency = recencyScore(item.publishedDate);
    const raw = recency * 45 + Math.min(kwScore, 10) * 5 + item.sourceWeight * 25;
    const opportunityScore = Math.max(1, Math.min(100, Math.round(raw)));
    return {
      ...item,
      seoOpportunityScore: opportunityScore,
      freshness: freshnessLabel(item.publishedDate),
      opportunityClass: classify(item, opportunityScore),
    };
  });

  items.sort((a, b) => b.seoOpportunityScore - a.seoOpportunityScore);

  const MAX_ITEMS = 200;

  return { items: items.slice(0, MAX_ITEMS), sourceStatus, fetchedAt: new Date().toISOString() };
}
