import React, { useState } from 'react';
import { DARVO_SCENARIOS } from '../data/relationshipData';
import { ShieldCheck, AlertOctagon, CheckCircle2, RefreshCw, MessageSquare, Sparkles, Lock } from 'lucide-react';

interface TraumaBondBreakProps {
  isDarkMode: boolean;
}

export const TraumaBondBreak: React.FC<TraumaBondBreakProps> = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(DARVO_SCENARIOS[0].id);
  const [userTruthNote, setUserTruthNote] = useState<string>('');
  const [savedTruths, setSavedTruths] = useState<string[]>([
    "Her abuse was not my failure to heal her; it was her rigid pathology.",
    "Paying a toll for basic respect was financial extortion, not love.",
    "My empathy is a strength, but I must guard it with clear boundaries."
  ]);

  const activeScenario = DARVO_SCENARIOS.find(s => s.id === selectedScenarioId) || DARVO_SCENARIOS[0];

  const handleAddTruth = () => {
    if (userTruthNote.trim()) {
      setSavedTruths([userTruthNote.trim(), ...savedTruths]);
      setUserTruthNote('');
    }
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#050508] text-stone-200">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-cyan-500/10 text-cyan-300 mb-3 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Trauma Bond Decoupling & Recovery</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-stone-100">
            Break the Trauma Bond
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Tools to deconstruct biological addiction, spot DARVO manipulation in real-time, practice Forensic Neutrality ("Gray Rock"), and restore Epistemic Justice.
          </p>
        </div>

        {/* TOOL 1: DARVO DETECTOR & GRAY ROCK SIMULATOR */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0d0f1a]/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/80">
          
          <div className="pb-6 border-b border-white/10 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                Interactive Tool #1
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
                DARVO Detector & Gray Rock Simulator
              </h3>
            </div>

            {/* Scenario Selector */}
            <div className="flex items-center space-x-2">
              {DARVO_SCENARIOS.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => setSelectedScenarioId(sc.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 ${
                    sc.id === selectedScenarioId
                      ? 'bg-cyan-500 text-stone-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'bg-[#060810] text-stone-400 border border-white/10 hover:text-stone-200 hover:bg-[#121524]'
                  }`}
                >
                  Scenario 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left: Abuser Prompt & Victim Trap */}
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-2 shadow-inner">
                <span className="text-[10px] font-mono font-bold text-rose-400 uppercase block">
                  Provocative Abuser Statement
                </span>
                <p className="font-serif italic text-sm sm:text-base text-rose-100 leading-relaxed">
                  "{activeScenario.abuserStatement}"
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2 shadow-inner">
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase block">
                  The Old Victim Trap (Self-Blame & Pleading)
                </span>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {activeScenario.victimTrap}
                </p>
              </div>
            </div>

            {/* Right: Forensic DARVO Breakdown & Gray Rock Answer */}
            <div className="space-y-6">
              
              <div className="p-5 sm:p-6 rounded-2xl bg-[#060810] border border-white/10 space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-cyan-400 block">
                  DARVO Mechanics Breakdown
                </span>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-[#0d0f1a] border border-white/5">
                    <span className="font-mono font-bold text-rose-400">D - Deny: </span>
                    <span className="text-stone-300">{activeScenario.darvoBreakdown.deny}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0d0f1a] border border-white/5">
                    <span className="font-mono font-bold text-amber-400">A - Attack: </span>
                    <span className="text-stone-300">{activeScenario.darvoBreakdown.attack}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0d0f1a] border border-white/5">
                    <span className="font-mono font-bold text-cyan-400">RVO - Reverse Victim/Offender: </span>
                    <span className="text-stone-300">{activeScenario.darvoBreakdown.reverseVictimOffender}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-2 shadow-inner">
                <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase block">
                  Forensic Neutrality / Gray Rock Response
                </span>
                <p className="font-mono text-xs sm:text-sm font-semibold text-cyan-200 leading-relaxed">
                  "{activeScenario.grayRockResponse}"
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* TOOL 2: EPISTEMIC JUSTICE & TRUTH JOURNAL */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0d0f1a]/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/80">
          
          <div className="pb-6 border-b border-white/10 mb-8">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
              Interactive Tool #2
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
              Epistemic Justice & Truth Affirmations
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              Restoring certainty to your memory and experience after gaslighting and smear campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Input Column */}
            <div className="lg:col-span-5 space-y-4">
              <label className="text-xs font-mono font-bold text-stone-300 uppercase block">
                Write a Reclaimed Truth
              </label>
              <textarea
                rows={4}
                value={userTruthNote}
                onChange={(e) => setUserTruthNote(e.target.value)}
                placeholder="e.g., I trust my memory. Her accusations were projections of her own actions..."
                className="w-full p-4 rounded-2xl bg-[#060810] text-xs sm:text-sm text-stone-200 border border-white/10 focus:outline-none focus:border-cyan-500/50 font-serif italic shadow-inner"
              />
              <button
                onClick={handleAddTruth}
                className="w-full py-3.5 rounded-xl bg-cyan-500 text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Anchor Truth to Reality</span>
              </button>
            </div>

            {/* Saved Truths Feed */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono font-bold text-stone-400 uppercase block">
                Anchored Epistemic Truths ({savedTruths.length})
              </span>

              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {savedTruths.map((truth, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#060810] border border-white/10 flex items-start space-x-3 shadow-inner"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="font-serif italic text-xs sm:text-sm text-stone-200 leading-relaxed">
                      "{truth}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
