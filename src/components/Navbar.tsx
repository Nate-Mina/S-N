import React, { useState } from 'react';
import { BookOpen, Music, FileText, Activity, ShieldCheck, Search, Image as ImageIcon, Sparkles, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  isDarkMode,
  setIsDarkMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'timeline', label: '1-Year Timeline', icon: Activity },
    { id: 'case-study', label: 'Clinical Case Study', icon: BookOpen },
    { id: 'song-lab', label: 'Song: Poison Shot by Shot', icon: Music },
    { id: 'letters-vault', label: 'Letters & Photo Vault', icon: ImageIcon },
    { id: 'diagnostic', label: 'Malignant Profile', icon: FileText },
    { id: 'healing', label: 'Break the Bond', icon: ShieldCheck }
  ];

  return (
    <nav className={`sticky top-0 z-40 backdrop-blur-2xl border-b transition-all duration-300 ${
      isDarkMode 
        ? 'bg-[#050508]/85 border-white/10 text-stone-200 shadow-2xl shadow-black/80' 
        : 'bg-[#0c0e15]/90 border-stone-800 text-stone-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setActiveTab('timeline')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-amber-500 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-[11px] bg-[#08090e] flex items-center justify-center font-bold font-cinzel text-lg text-emerald-400">
                N&S
              </div>
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight block leading-none text-stone-100 group-hover:text-emerald-300 transition-colors">
                Autopsy of a Romance
              </span>
              <span className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-emerald-400 font-semibold">
                Nate & Sabrina Archive
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] font-bold'
                      : 'text-stone-400 hover:text-stone-100 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-stone-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Action Tools: Search, Theme Toggle, Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-xl text-xs font-medium flex items-center space-x-2 bg-[#0d0f18] hover:bg-[#131625] text-stone-300 border border-white/10 hover:border-emerald-500/40 transition-all shadow-md"
              title="Search Archive (⌘K)"
            >
              <Search className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline text-xs font-mono text-stone-400">⌘K</span>
            </button>

            <button
              onClick={() => setIsDarkMode(prev => !prev)}
              className="p-2.5 rounded-xl transition-all bg-[#0d0f18] text-amber-400 hover:bg-[#131625] border border-white/10 hover:border-amber-500/40 shadow-md"
              title={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#0d0f18] text-stone-300 border border-white/10 hover:text-stone-100"
            >
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 px-4 pt-3 pb-5 space-y-1.5 bg-[#080a10]/95 backdrop-blur-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                    : 'text-stone-300 hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon className="w-4 h-4 text-emerald-400" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};
