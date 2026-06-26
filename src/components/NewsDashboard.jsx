import React, { useState } from 'react';
import { Search, Globe, X, Clock, BookOpen, ArrowRight, Bell, Menu } from 'lucide-react';

const MOCK_ARTICLES = [
  {
    id: 1,
    title: "AI Agents Are Transforming How We Use Desktop Computers",
    summary: "New software agents can click, type, and complete complex office workflows automatically.",
    content: "The landscape of artificial intelligence is shifting rapidly from passive text generation to active, goal-oriented 'autonomous agents.' Tech companies are releasing models designed to log in to systems, analyze data, and email finished reports directly to teams. While this brings huge productivity boosts, it also raises security and privacy questions for standard IT environments.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    date: "June 27, 2026",
    readTime: "3 min read",
    isHero: true
  },
  {
    id: 2,
    title: "Global Inflation Safely Cools Down to Target Range",
    summary: "Central banks celebrate economic stabilization, triggering talks of early rate cuts.",
    content: "After months of aggressive tightening, central banks report that core inflation metrics have settled back down to the target 2% threshold. Economists suggest this opens the door for interest rate cuts starting as early as next month, bringing immediate relief to small businesses and mortgage holders worldwide.",
    category: "Business",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80",
    date: "June 27, 2026",
    readTime: "4 min read",
    isHero: false
  },
  {
    id: 3,
    title: "F1 Pioneers New Renewable Biofuels for Next Season",
    summary: "Teams successfully test run high-performance 100% sustainable synthetic fuels.",
    content: "Formula 1 has completed its first successful track testing using entirely synthetic bio-fuels derived from carbon capture and municipal waste. This project aims to slash carbon footprints to near-zero while keeping the classic, high-performance sound and feel of hybrid power units alive.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    date: "June 26, 2026",
    readTime: "5 min read",
    isHero: false
  },
  {
    id: 4,
    title: "New Gene Therapy Shows Promise for Autoimmune Conditions",
    summary: "Early trial indicates reprogrammed cells can calm hyperactive immune systems.",
    content: "In a medical milestone, a new gene editing technique has demonstrated absolute remission for severe autoimmune patients. By engineering and re-introducing immune cells, doctors managed to quiet erratic inflammatory responses without leaving the body vulnerable to external infections.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=600&q=80",
    date: "June 25, 2026",
    readTime: "6 min read",
    isHero: false
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const categories = ["All", "Business", "Sports", "Technology", "Health"];

  const filteredArticles = MOCK_ARTICLES.filter(article => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const heroArticle = filteredArticles.find(article => article.isHero) || filteredArticles[0];
  const secondaryArticles = filteredArticles.filter(article => article.id !== (heroArticle ? heroArticle.id : null));

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col justify-between">
      
      {}
      <nav className="sticky top-0 z-40 bg-slate-950 border-b border-slate-850 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
            >
              <Globe className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold font-serif tracking-tight">
                News<span className="text-red-500">App</span>
              </span>
            </div>

            {/* Desktop Categories */}
            <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
              {categories.map((cat) => (
                <li 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer transition-colors pb-1 border-b-2 ${
                    activeCategory === cat 
                      ? 'border-red-500 text-red-400 font-semibold' 
                      : 'border-transparent hover:text-red-400 hover:border-red-500'
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>

            {/* Right Action Icons */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowSearchInput(!showSearchInput)}
                className="p-1 text-slate-300 hover:text-red-400 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button className="p-1 text-slate-300 hover:text-red-400 transition-colors relative" aria-label="Notifications">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* Mobile Menu Toggle Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1 text-slate-300 hover:text-red-400 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {}
        {showSearchInput && (
          <div className="bg-slate-950 border-t border-slate-850 px-4 py-3">
            <div className="max-w-2xl mx-auto relative">
              <input 
                type="text" 
                placeholder="Search headlines, summaries..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 text-white border border-slate-700 pl-10 pr-10 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-slate-400"
                autoFocus
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}

        {}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-t border-slate-850 px-4 py-4 space-y-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat 
                    ? 'bg-red-500/10 text-red-400 font-semibold' 
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </nav>

      {}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-10">
        
        {/* Category Header */}
        <div className="border-b border-slate-800 pb-4 flex justify-between items-center">
          <h2 className="text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2 font-serif">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
            {activeCategory} Feed
          </h2>
          {searchQuery && (
            <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full">
              Query: "{searchQuery}"
            </span>
          )}
        </div>

        {/* Empty Search / Filter States */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-slate-950 border border-slate-850 rounded-2xl max-w-md mx-auto space-y-4">
            <BookOpen className="w-16 h-16 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No articles found</h3>
            <p className="text-sm text-slate-400">Try adjusting your keyword terms or search a different category feed.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            
            {}
            {heroArticle && (
              <div 
                onClick={() => setSelectedArticle(heroArticle)}
                className="group cursor-pointer bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                <div className="lg:col-span-7 h-64 sm:h-96 w-full overflow-hidden">
                  <img 
                    src={heroArticle.image} 
                    alt={heroArticle.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded font-bold uppercase tracking-wider text-[10px]">
                        {heroArticle.category}
                      </span>
                      <span>{heroArticle.date}</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-100 group-hover:text-red-400 transition-colors leading-tight">
                      {heroArticle.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed font-serif">
                      {heroArticle.summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-850 pt-5 mt-6 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400" /> {heroArticle.readTime}
                    </span>
                    <span className="text-red-500 font-bold uppercase tracking-wider flex items-center gap-1">
                      Read Cover Story <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            )}

            {}
            {secondaryArticles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {secondaryArticles.map((article) => (
                  <div 
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className="group bg-slate-950 border border-slate-850 rounded-xl overflow-hidden hover:border-slate-700 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="h-48 w-full overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-[10px] text-slate-400">
                          <span className="bg-slate-900 text-red-400 px-2 py-0.5 rounded font-semibold uppercase">
                            {article.category}
                          </span>
                          <span>{article.date}</span>
                        </div>
                        
                        <h3 className="text-base font-bold text-slate-100 group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
                          {article.title}
                        </h3>

                        <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                          {article.summary}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-850 pt-4 mt-4 text-[11px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" /> {article.readTime}
                        </span>
                        <span className="text-red-500 font-bold uppercase tracking-wider flex items-center gap-0.5">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}
      </main>

      {}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            <div className="relative h-64 w-full">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 bg-slate-950/70 hover:bg-slate-800 rounded-full text-slate-200 transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <span className="bg-red-500/15 text-red-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                {selectedArticle.category}
              </span>

              <h2 className="text-xl sm:text-2xl font-bold text-white font-serif leading-tight">
                {selectedArticle.title}
              </h2>

              <p className="text-xs text-slate-400 flex items-center gap-3">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </p>

              <hr className="border-slate-800" />

              <p className="text-sm text-slate-300 leading-relaxed font-serif italic border-l-2 border-red-500 pl-4">
                "{selectedArticle.summary}"
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {selectedArticle.content}
              </p>
            </div>
          </div>
        </div>
      )}

      {}
      <footer className="bg-slate-950 border-t border-slate-850 text-slate-500 text-xs py-6 text-center">
        <p>© 2026 NewsApp Front-end. All rights reserved.</p>
      </footer>
    </div>
  );
}