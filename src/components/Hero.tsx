import React from 'react';
import { Activity, BookOpen, Music, ShieldCheck, ArrowRight, Brain, AlertTriangle, Eye, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: string) => void;
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden py-14 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-gradient-to-b from-[#050508] via-[#090b14] to-[#050508] text-stone-100">
      {/* Background Grid Pattern & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-rose-500/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        
        {/* Top Clinical Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-[#0d0f1a] text-emerald-300 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <Brain className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Forensic Case Study & Interactive Archive</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>June 2025 – Summer 2026</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Autopsy of a Romance: <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
              Nate & Sabrina
            </span>
          </h1>

          <p className="text-base sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto text-stone-300">
            A chronological documentation of a 1-year relationship—tracing the shift from 
            <span className="font-semibold text-emerald-400"> Love-Bombing Idealization </span> 
            to <span className="font-semibold text-amber-400"> Active Devaluation</span>, 
            the <span className="font-semibold text-rose-400"> "Poison Shot by Shot" </span> financial toll, 
            and the ultimate <span className="font-semibold text-cyan-400"> Psychological Paradigm Shift </span> 
            that unlocked freedom from the trauma bond.
          </p>
        </div>

        {/* Highlight Quote Box */}
        <div className="mt-12 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0d0f1a]/90 backdrop-blur-2xl border border-emerald-500/25 shadow-2xl shadow-black/80 hover:border-emerald-500/40 transition-all">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 shrink-0 border border-emerald-500/20">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold block">
                The Central Revelation
              </span>
              <p className="font-serif italic text-sm sm:text-base leading-relaxed text-stone-200">
                "She used to study psychology claiming her ex was a narcissist. But after I dove deep into clinical psychology to help her, I realized <span className="text-amber-300 font-semibold italic">SHE</span> matched every single criterion for a <span className="text-emerald-400 font-bold italic">Malignant Narcissist</span>. Recognizing the forensic reality broke the biological dependency and reclaimed my sanity."
              </p>
              <div className="flex items-center space-x-2 text-xs font-semibold text-stone-400 pt-1">
                <span>— Nate</span>
                <span>•</span>
                <span>A Clinical Case Study of a Malignant Trauma Bond</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Launch Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* Card 1 */}
          <button
            onClick={() => onNavigate('timeline')}
            className="group text-left p-6 rounded-2xl bg-[#0c0e18]/80 backdrop-blur-xl border border-white/10 hover:border-emerald-500/50 hover:bg-[#101322] hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] transition-all duration-300 -translate-y-0 hover:-translate-y-1"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold mb-1.5 text-stone-100 group-hover:text-emerald-300 transition-colors">
              1-Year Timeline
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Chronological 5-phase breakdown from June 2025 love-bombing to Summer 2026 recovery.
            </p>
            <div className="flex items-center text-xs font-mono font-semibold text-emerald-400 group-hover:translate-x-1.5 transition-transform">
              <span>Explore Timeline</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </button>

          {/* Card 2 */}
          <button
            onClick={() => onNavigate('case-study')}
            className="group text-left p-6 rounded-2xl bg-[#0c0e18]/80 backdrop-blur-xl border border-white/10 hover:border-amber-500/50 hover:bg-[#101322] hover:shadow-[0_0_25px_rgba(245,158,11,0.12)] transition-all duration-300 -translate-y-0 hover:-translate-y-1"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold mb-1.5 text-stone-100 group-hover:text-amber-300 transition-colors">
              Clinical Case Study
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              The full 6-chapter forensic report analyzing the "Wounded Bird" & "Communal Mask".
            </p>
            <div className="flex items-center text-xs font-mono font-semibold text-amber-400 group-hover:translate-x-1.5 transition-transform">
              <span>Read Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </button>

          {/* Card 3 */}
          <button
            onClick={() => onNavigate('song-lab')}
            className="group text-left p-6 rounded-2xl bg-[#0c0e18]/80 backdrop-blur-xl border border-white/10 hover:border-rose-500/50 hover:bg-[#101322] hover:shadow-[0_0_25px_rgba(244,63,94,0.12)] transition-all duration-300 -translate-y-0 hover:-translate-y-1"
          >
            <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform">
              <Music className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold mb-1.5 text-stone-100 group-hover:text-rose-300 transition-colors">
              Poison Shot by Shot
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Dual-perspective lyric lab comparing Nate's experience with Sabrina's confession lyrics.
            </p>
            <div className="flex items-center text-xs font-mono font-semibold text-rose-400 group-hover:translate-x-1.5 transition-transform">
              <span>Analyze Lyrics</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </button>

          {/* Card 4 */}
          <button
            onClick={() => onNavigate('healing')}
            className="group text-left p-6 rounded-2xl bg-[#0c0e18]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 hover:bg-[#101322] hover:shadow-[0_0_25px_rgba(6,182,212,0.12)] transition-all duration-300 -translate-y-0 hover:-translate-y-1"
          >
            <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold mb-1.5 text-stone-100 group-hover:text-cyan-300 transition-colors">
              Break the Bond
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Interactive DARVO detector, Gray Rock simulator, and Epistemic Justice exercises.
            </p>
            <div className="flex items-center text-xs font-mono font-semibold text-cyan-400 group-hover:translate-x-1.5 transition-transform">
              <span>Healing Tools</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </button>

        </div>

        {/* Summary Metric Stats */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-[#0a0c14]/60 border border-white/5">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-400">1 Year</div>
            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-stone-400 mt-1">Duration (Jun '25 – Sum '26)</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#0a0c14]/60 border border-white/5">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">4 Pillars</div>
            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-stone-400 mt-1">Malignant Profile</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#0a0c14]/60 border border-white/5">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-rose-400">DARVO</div>
            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-stone-400 mt-1">Inversion Mechanism</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#0a0c14]/60 border border-white/5">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-cyan-400">100%</div>
            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-stone-400 mt-1">Epistemic Freedom</div>
          </div>
        </div>

      </div>
    </section>
  );
};
