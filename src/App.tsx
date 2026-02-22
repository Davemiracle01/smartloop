/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  MessageSquare, 
  Gamepad2, 
  Smartphone, 
  Layers, 
  Github, 
  Instagram, 
  ShoppingBag, 
  Mail,
  Menu,
  X,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Code2,
  ExternalLink
} from "lucide-react";
import { useState, useEffect, MouseEvent, FormEvent } from "react";

const SERVICES = [
  {
    id: "01",
    title: "WhatsApp Automation Bots",
    description: "Intelligent conversational agents that sell, serve, and scale — automating the African hustle through WhatsApp's billion-strong network.",
    tags: ["Node.js", "WhatsApp API", "Automation"],
    icon: <MessageSquare className="w-6 h-6" />,
    link: "https://wa.me/254769279076"
  },
  {
    id: "02",
    title: "AI Content Architect",
    description: "Custom Gemini-powered agents that generate localized content, automate social media, and handle complex reasoning for African businesses.",
    tags: ["Gemini API", "NLP", "Python"],
    icon: <Zap className="w-6 h-6" />,
    link: "https://wa.me/254769279076"
  },
  {
    id: "03",
    title: "Universal Media Downloader",
    description: "High-speed media extraction tools for social platforms, optimized for low-bandwidth environments and mobile-first users.",
    tags: ["Node.js", "FFmpeg", "Web Scraping"],
    icon: <ShoppingBag className="w-6 h-6" />,
    link: "https://wa.me/254769279076"
  },
  {
    id: "04",
    title: "M-Pesa Integrations",
    description: "Safaricom Daraja API woven seamlessly into web applications — because Africa's economy moves through mobile money.",
    tags: ["M-Pesa", "Daraja API", "Node.js"],
    icon: <Smartphone className="w-6 h-6" />,
    link: "https://wa.me/254769279076"
  }
];

const MiniYouTube = () => {
  const [query, setQuery] = useState("");
  const [activeVideo, setActiveVideo] = useState("jfKfPfyJRdk"); // Default Lofi Girl
  const [searchHistory, setSearchHistory] = useState<string[]>(["Lofi Hip Hop", "African Afrobeat 2024", "Anime Openings"]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchHistory(prev => [query, ...prev.slice(0, 4)]);
      // We use the search list type for the embed
      setActiveVideo(`search/${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="bg-white/5 border border-border rounded-xl overflow-hidden flex flex-col h-[600px]">
      <div className="p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold tracking-tighter uppercase">Mini Tube</span>
        </div>
        
        <form onSubmit={handleSearch} className="relative flex-1 max-w-md">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for any song or playlist..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-2 px-6 text-sm focus:outline-none focus:border-accent transition-colors"
          />
          <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:text-accent transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </form>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 bg-black relative group">
          <iframe 
            src={activeVideo.startsWith("search/") 
              ? `https://www.youtube.com/embed?listType=search&list=${activeVideo.split("/")[1]}&autoplay=1`
              : `https://www.youtube.com/embed/${activeVideo}?autoplay=1`
            }
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full lg:w-80 border-l border-border bg-bg p-6 overflow-y-auto">
          <h4 className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-6">Recent Searches</h4>
          <div className="space-y-4">
            {searchHistory.map((item, i) => (
              <button 
                key={i}
                onClick={() => {
                  setQuery(item);
                  setActiveVideo(`search/${encodeURIComponent(item)}`);
                }}
                className="w-full text-left group flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent opacity-20 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-sm truncate max-w-[150px]">{item}</span>
                </div>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
              </button>
            ))}
          </div>

          <div className="mt-12 p-4 bg-accent/5 border border-accent/10 rounded-lg">
            <div className="flex items-center gap-2 text-accent mb-2">
              <Zap className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Playlist Theme</span>
            </div>
            <p className="text-[10px] opacity-50 leading-relaxed">
              Searching automatically generates a dynamic playlist based on your query. Perfect for coding sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PRODUCTS = [
  {
    id: "prod-01",
    name: "WhatsApp Automation Bot",
    price: "Custom Pricing",
    description: "Fully automated WhatsApp bots for business, customer service, or personal utility. Integrated with your existing systems.",
    features: ["24/7 Availability", "Custom Workflows", "Database Integration"],
    icon: <MessageSquare className="w-8 h-8" />,
    cta: "Order Bot",
    link: "https://wa.me/254769279076?text=I%20Need%20Whatsapp%20Bot"
  },
  {
    id: "prod-02",
    name: "Pterodactyl Game Panel",
    price: "From $10/mo",
    description: "High-performance game server management panels. Optimized for African latency and affordable hosting.",
    features: ["One-click Installs", "Resource Monitoring", "Multi-game Support"],
    icon: <Gamepad2 className="w-8 h-8" />,
    cta: "DM for Pricing",
    link: "https://wa.me/254769279076?text=I%20Need%20a%20Panel"
  },
  {
    id: "prod-03",
    name: "Custom Dev Tools",
    price: "Varies",
    description: "Tailored scripts, CLI tools, and automation workflows to speed up your development process.",
    features: ["Clean Code", "Documentation", "Support"],
    icon: <Code2 className="w-8 h-8" />,
    cta: "Request Tool",
    link: "https://wa.me/254769279076?text=I%20Need%20a%20Custom%20Tool"
  }
];

const SOCIALS = [
  {
    name: "WhatsApp",
    value: "+254 769 279 076",
    link: "https://wa.me/254769279076",
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    name: "Instagram",
    value: "@_kiamadavid",
    link: "https://instagram.com/_kiamadavid",
    icon: <Instagram className="w-5 h-5" />
  },
  {
    name: "The Store",
    value: "Templates & tools",
    link: "store",
    icon: <ShoppingBag className="w-5 h-5" />
  },
  {
    name: "GitHub",
    value: "Open source",
    link: "https://github.com/Davemiracle01",
    icon: <Github className="w-5 h-5" />
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState<"home" | "store">("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavClick = (e: MouseEvent, target: string) => {
    if (target === "store") {
      e.preventDefault();
      setView("store");
      setIsMenuOpen(false);
    } else if (view === "store" && target !== "store") {
      // If in store and clicking a home link
      setView("home");
      // Small delay to allow home to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen selection:bg-accent selection:text-black bg-bg text-white font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setView("home")}
          >
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold text-xl rounded-sm group-hover:bg-accent transition-colors">
              DK
            </div>
            <span className="font-mono text-sm tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity hidden sm:block">
              {view === "home" ? "DAVID KIAMA" : "A.S.T.A.™ TECH STORE"}
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {view === "home" ? (
              <>
                {["about", "arsenal", "lab", "works", "contact"].map((item) => (
                  <a 
                    key={item}
                    href={`#${item}`}
                    className="font-mono text-xs uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {item}
                  </a>
                ))}
                <button 
                  onClick={() => setView("store")}
                  className="px-4 py-2 bg-white/5 border border-white/10 font-mono text-xs uppercase tracking-widest hover:bg-accent hover:text-black transition-all rounded-sm"
                >
                  Store
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => setView("home")}
                  className="font-mono text-xs uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-accent transition-all flex items-center gap-2"
                >
                  <ArrowLeft className="w-3 h-3" /> Portfolio
                </button>
                <a 
                  href="https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-accent text-black font-mono text-xs uppercase tracking-widest hover:bg-white transition-all rounded-sm"
                >
                  Follow Channel
                </a>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {view === "home" ? (
                <>
                  {["about", "arsenal", "lab", "works", "contact"].map((item) => (
                    <a 
                      key={item}
                      href={`#${item}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-4xl font-bold uppercase tracking-tighter hover:text-accent"
                    >
                      {item}
                    </a>
                  ))}
                  <button 
                    onClick={() => { setView("store"); setIsMenuOpen(false); }}
                    className="text-4xl font-bold uppercase tracking-tighter text-accent text-left"
                  >
                    Store
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => { setView("home"); setIsMenuOpen(false); }}
                    className="text-4xl font-bold uppercase tracking-tighter hover:text-accent text-left flex items-center gap-4"
                  >
                    <ArrowLeft className="w-8 h-8" /> Portfolio
                  </button>
                  <a 
                    href="https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v"
                    className="text-4xl font-bold uppercase tracking-tighter text-accent"
                  >
                    Follow Channel
                  </a>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <AnimatePresence mode="wait">
          {view === "home" ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <section id="about" className="max-w-7xl mx-auto px-6 py-24 md:py-40 border-b border-border">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                  <div className="lg:col-span-8">
                    <motion.h1 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] uppercase"
                    >
                      David Kiama <br />
                      <span className="text-accent italic font-serif lowercase font-normal">Full-Stack</span> <br />
                      Developer
                    </motion.h1>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-12 text-xl md:text-2xl max-w-2xl opacity-70 leading-relaxed"
                    >
                      Builder of African Tools. I watch anime a lot — I bring your 
                      <span className="text-white font-medium"> ideas into life </span> 
                      with precision and intent. Every line of code a deliberate move.
                    </motion.p>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mt-12 flex flex-wrap gap-4"
                    >
                      <a 
                        href="https://wa.me/254769279076"
                        className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-accent transition-colors flex items-center gap-2"
                      >
                        Request Audience <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <button 
                        onClick={() => setView("store")}
                        className="px-8 py-4 border border-white/20 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2"
                      >
                        The Store <ShoppingBag className="w-4 h-4" />
                      </button>
                    </motion.div>
                  </div>
                  
                  <div className="lg:col-span-4 hidden lg:block">
                    <div className="border-l border-border pl-8 py-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Location</div>
                      <div className="text-lg">Nairobi, Kenya</div>
                      <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Current Focus</div>
                      <div className="text-lg">WhatsApp Automation & Fintech</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Services Section */}
              <section id="works" className="border-b border-border">
                <div className="max-w-7xl mx-auto px-6 py-24">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                      <h2 className="font-mono text-xs uppercase tracking-[0.5em] text-accent mb-4">Selected Works</h2>
                      <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Building for the <br /> African Market</h3>
                    </div>
                    <p className="max-w-md opacity-50 text-sm leading-relaxed">
                      Specialized tools designed to solve local challenges with global standards. 
                      From mobile money to mass communication.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
                    {SERVICES.map((service, index) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={(e) => {
                          if (service.link === "store") {
                            setView("store");
                          } else {
                            window.open(service.link, "_blank");
                          }
                        }}
                        className="group bg-bg p-12 hover:bg-white/5 transition-colors relative overflow-hidden cursor-pointer"
                      >
                        <div className="relative z-10">
                          <div className="flex justify-between items-start mb-12">
                            <span className="font-mono text-4xl opacity-10 group-hover:opacity-30 transition-opacity">{service.id}</span>
                            <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent group-hover:text-black transition-colors">
                              {service.icon}
                            </div>
                          </div>
                          
                          <h4 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h4>
                          <p className="opacity-50 mb-8 leading-relaxed text-sm">
                            {service.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map(tag => (
                              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <ArrowUpRight className="absolute bottom-8 right-8 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 text-accent" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Arsenal Section */}
              <section id="arsenal" className="max-w-7xl mx-auto px-6 py-24 border-b border-border">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div>
                    <h2 className="font-mono text-xs uppercase tracking-[0.5em] text-accent mb-4">Arsenal</h2>
                    <h3 className="text-4xl font-bold tracking-tighter uppercase mb-8">What I think I know</h3>
                    <p className="opacity-60 leading-relaxed mb-12">
                      A curated stack of technologies I use to build robust, scalable solutions. 
                      Constantly evolving, always learning.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">Frontend</h4>
                        <ul className="space-y-2 opacity-50 text-sm font-mono">
                          <li>React / Next.js</li>
                          <li>Tailwind CSS</li>
                          <li>Framer Motion</li>
                          <li>TypeScript</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">Backend</h4>
                        <ul className="space-y-2 opacity-50 text-sm font-mono">
                          <li>Node.js / Express</li>
                          <li>PHP / Laravel</li>
                          <li>PostgreSQL / Redis</li>
                          <li>Docker / Linux</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-12 border border-border rounded-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Layers className="w-32 h-32" />
                    </div>
                    <h4 className="text-2xl font-bold mb-6 italic font-serif">"Precision is not an accident. It is the result of high intention, sincere effort, and intelligent execution."</h4>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-1px bg-accent"></div>
                      <span className="font-mono text-xs uppercase tracking-widest opacity-50">Philosophy</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* The Lab Section */}
              <section id="lab" className="max-w-7xl mx-auto px-6 py-24 border-b border-border">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                  <div>
                    <h2 className="font-mono text-xs uppercase tracking-[0.5em] text-accent mb-4">The Lab</h2>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Experimental <br /> Tools & Toys</h3>
                  </div>
                  <p className="max-w-md opacity-50 text-sm leading-relaxed">
                    Where I test new ideas and build interactive experiments. 
                    Check out the Mini Tube — a focused music player for deep work.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <MiniYouTube />
                </motion.div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-24">
                  <h2 className="font-mono text-xs uppercase tracking-[0.5em] text-accent mb-4">Connect</h2>
                  <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">Let's build something <br /> meaningful</h3>
                  <a 
                    href="mailto:hello@astatech.me" 
                    className="text-2xl md:text-4xl font-mono hover:text-accent transition-colors underline underline-offset-8 decoration-white/20 hover:decoration-accent"
                  >
                    hello@astatech.me
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {SOCIALS.map((social) => (
                    <button 
                      key={social.name}
                      onClick={(e) => {
                        if (social.link === "store") {
                          setView("store");
                        } else {
                          window.open(social.link, "_blank");
                        }
                      }}
                      className="group p-8 border border-border hover:border-accent transition-all flex flex-col justify-between h-48 text-left w-full"
                    >
                      <div className="flex justify-between items-start">
                        <div className="p-2 bg-white/5 group-hover:bg-accent group-hover:text-black transition-colors rounded">
                          {social.icon}
                        </div>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-1">{social.name}</div>
                        <div className="font-bold truncate">{social.value}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="store"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-6 py-24"
            >
              {/* Store Hero */}
              <div className="mb-24">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <button 
                    onClick={() => setView("home")}
                    className="p-3 bg-white/5 hover:bg-accent hover:text-black transition-colors rounded-full"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <span className="font-mono text-xs uppercase tracking-[0.5em] text-accent">A.S.T.A.™ TECH Store</span>
                </motion.div>
                
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] mb-8">
                  Premium <br />
                  <span className="text-accent italic font-serif lowercase font-normal">Digital</span> <br />
                  Assets
                </h1>
                
                <p className="max-w-2xl text-xl opacity-60 leading-relaxed">
                  WhatsApp bots. Pterodactyl panels. Dev tools. 
                  Pay after service — because trust goes both ways in the African tech ecosystem.
                </p>
              </div>

              {/* Products Grid */}
              <div id="products" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
                {PRODUCTS.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 border border-border p-10 flex flex-col justify-between group hover:border-accent transition-colors"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-12">
                        <div className="p-4 bg-white/5 rounded-xl group-hover:bg-accent group-hover:text-black transition-colors">
                          {product.icon}
                        </div>
                        <span className="font-mono text-xs text-accent">{product.price}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                      <p className="opacity-50 text-sm mb-8 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <ul className="space-y-3 mb-12">
                        {product.features.map(feature => (
                          <li key={feature} className="flex items-center gap-3 text-xs opacity-70">
                            <Zap className="w-3 h-3 text-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs text-center hover:bg-accent transition-colors flex items-center justify-center gap-2"
                    >
                      {product.cta} <ExternalLink className="w-3 h-3" />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Trust Section */}
              <div id="guarantee" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-y border-border py-24 mb-32">
                <div>
                  <h2 className="text-4xl font-bold tracking-tighter uppercase mb-6">The A.S.T.A.™ <br /> Guarantee</h2>
                  <p className="opacity-60 leading-relaxed mb-8">
                    We believe in the quality of our work. That's why we offer a "Pay After Service" model for most of our digital products. 
                    We build, you test, you pay.
                  </p>
                  <div className="flex items-center gap-4 p-6 bg-accent/10 border border-accent/20 rounded-lg">
                    <ShieldCheck className="w-10 h-10 text-accent" />
                    <div>
                      <div className="font-bold text-accent uppercase text-xs tracking-widest">Zero Risk</div>
                      <div className="text-sm opacity-80">Payment only after successful deployment.</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-white/5 rounded-full flex items-center justify-center border border-border">
                    <div className="text-center">
                      <div className="text-8xl font-bold text-accent">0%</div>
                      <div className="font-mono text-xs uppercase tracking-widest opacity-40">Upfront Cost</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Channel CTA */}
              <div className="bg-accent text-black p-12 md:p-24 rounded-sm text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-10 left-10"><MessageSquare className="w-24 h-24" /></div>
                  <div className="absolute bottom-10 right-10"><Zap className="w-32 h-32" /></div>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 relative z-10">Follow the Channel</h2>
                <p className="max-w-2xl mx-auto text-lg font-medium mb-12 relative z-10">
                  A.S.T.A.™ TECH on WhatsApp — latest drops, tech tips, new products and updates straight to your phone.
                </p>
                <div className="flex flex-wrap justify-center gap-4 relative z-10">
                  <a 
                    href="https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2"
                  >
                    Follow Channel <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://wa.me/254769279076"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 border border-black font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all"
                  >
                    WhatsApp David
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-[10px] font-mono uppercase tracking-[0.3em]">
          <div>© 2024 David Kiama — Astatech</div>
          <div className="flex gap-8">
            <button onClick={() => setView("home")} className="hover:text-white transition-colors">Portfolio</button>
            <button onClick={() => setView("store")} className="hover:text-white transition-colors">Store</button>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <div>Built with precision in Nairobi</div>
        </div>
      </footer>
    </div>
  );
}
