import React from 'react';
import { Brain, Heart, ShieldCheck, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#030407] text-stone-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-amber-500 p-[1px] shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <div className="w-full h-full rounded-[11px] bg-[#060810] flex items-center justify-center font-bold font-serif text-sm text-emerald-400">
                N&S
              </div>
            </div>
            <div>
              <span className="font-serif font-bold text-base text-stone-100 block tracking-tight">
                Autopsy of a Romance
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-semibold">
                Nate & Sabrina Case Study & Archive
              </span>
            </div>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
            <button onClick={() => onNavigate('timeline')} className="hover:text-emerald-400 transition-colors">Timeline</button>
            <button onClick={() => onNavigate('case-study')} className="hover:text-amber-400 transition-colors">Case Study</button>
            <button onClick={() => onNavigate('song-lab')} className="hover:text-rose-400 transition-colors">Poison Song</button>
            <button onClick={() => onNavigate('letters-vault')} className="hover:text-emerald-400 transition-colors">Letters & Vault</button>
            <button onClick={() => onNavigate('diagnostic')} className="hover:text-amber-400 transition-colors">Malignant Profile</button>
            <button onClick={() => onNavigate('healing')} className="hover:text-cyan-400 transition-colors">Break the Bond</button>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p className="italic font-serif text-center sm:text-left">
            "By trusting clinical data over manufactured drama, the target reclaims the right to his own truth and his own life."
          </p>
          <p className="font-mono text-[10px] shrink-0">
            © 2026 Autopsy of a Romance Archive • All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};
