import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChronologicalTimeline } from './components/ChronologicalTimeline';
import { CaseStudyViewer } from './components/CaseStudyViewer';
import { PoisonSongLab } from './components/PoisonSongLab';
import { LettersAndVault } from './components/LettersAndVault';
import { DiagnosticMatrix } from './components/DiagnosticMatrix';
import { TraumaBondBreak } from './components/TraumaBondBreak';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';

const VALID_TABS = ['timeline', 'case-study', 'song-lab', 'letters-vault', 'diagnostic', 'healing'];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace(/^#/, '');
      if (VALID_TABS.includes(hash)) {
        return hash;
      }
    }
    return 'timeline';
  });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Sync activeTab with URL hash for deep linking on GitHub Pages
  useEffect(() => {
    const currentHash = window.location.hash.replace(/^#/, '');
    if (currentHash !== activeTab) {
      window.history.replaceState(null, '', `#${activeTab}`);
    }
  }, [activeTab]);

  // Listen for hashchange events (browser back/forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (VALID_TABS.includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard shortcut listener for Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col font-sans relative overflow-x-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#050508] text-stone-100 selection:bg-emerald-500/30 selection:text-emerald-300' 
        : 'bg-stone-900 text-stone-100 selection:bg-emerald-500/30 selection:text-emerald-300'
    }`}>
      
      {/* Immersive Atmospheric Ambient Glows */}
      <div className="fixed top-0 left 1/4 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/8 via-teal-500/5 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-tr from-rose-500/8 via-amber-500/5 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-1/2 left-10 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Sticky Immersive Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Hero Banner */}
      <Hero
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 500, behavior: 'smooth' });
        }}
        isDarkMode={isDarkMode}
      />

      {/* Main Tab Area */}
      <main className="flex-1 relative z-10">
        {activeTab === 'timeline' && (
          <ChronologicalTimeline isDarkMode={isDarkMode} />
        )}

        {activeTab === 'case-study' && (
          <CaseStudyViewer isDarkMode={isDarkMode} />
        )}

        {activeTab === 'song-lab' && (
          <PoisonSongLab isDarkMode={isDarkMode} />
        )}

        {activeTab === 'letters-vault' && (
          <LettersAndVault isDarkMode={isDarkMode} />
        )}

        {activeTab === 'diagnostic' && (
          <DiagnosticMatrix isDarkMode={isDarkMode} />
        )}

        {activeTab === 'healing' && (
          <TraumaBondBreak isDarkMode={isDarkMode} />
        )}
      </main>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 500, behavior: 'smooth' });
        }}
      />

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isDarkMode={isDarkMode}
      />

    </div>
  );
}
