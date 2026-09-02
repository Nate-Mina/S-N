import React, { useState } from 'react';
import { TIMELINE_PHASES } from '../data/relationshipData';
import { TimelinePhase, PhaseId } from '../types';
import { Calendar, ChevronRight, Quote, ShieldAlert, CheckCircle2, FileText, ArrowRight, Sparkles } from 'lucide-react';

interface ChronologicalTimelineProps {
  isDarkMode: boolean;
  onSelectLetter?: (letterId: string) => void;
}

export const ChronologicalTimeline: React.FC<ChronologicalTimelineProps> = () => {
  const [selectedPhaseId, setSelectedPhaseId] = useState<PhaseId>('idealization');
  const selectedPhase = TIMELINE_PHASES.find(p => p.id === selectedPhaseId) || TIMELINE_PHASES[0];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#050508] text-stone-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-emerald-500/10 text-emerald-300 mb-3 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Chronological Narrative Arc</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-stone-100">
            The 1-Year Cycle of Abuse & Awakening
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Trace the chronological evolution from the initial June 2025 love-bombing through the active devaluation, financial extortion, smear campaign, and final psychological recovery in Summer 2026.
          </p>
        </div>

        {/* Phase Selector Stepper Bar */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 p-3 rounded-2xl bg-[#0c0e18]/90 border border-white/10 backdrop-blur-xl">
            {TIMELINE_PHASES.map((phase, index) => {
              const isActive = phase.id === selectedPhaseId;
              return (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhaseId(phase.id)}
                  className={`relative p-3.5 rounded-xl text-left transition-all duration-200 flex flex-col justify-between ${
                    isActive
                      ? 'bg-gradient-to-br from-emerald-500/20 via-teal-600/20 to-[#0c0e18] text-emerald-300 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] font-bold'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase font-mono font-bold text-stone-400">
                      Phase 0{index + 1}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold ${
                      isActive ? 'bg-emerald-500 text-stone-950 font-bold' : 'bg-[#151928] text-stone-400'
                    }`}>
                      {phase.timeframe.split(' ')[0]}
                    </span>
                  </div>
                  <div className="font-serif text-xs sm:text-sm font-bold truncate">
                    {phase.title.split(':')[1] || phase.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0d0f1a]/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/80">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {selectedPhase.timeframe}
                </span>
                <span className="text-xs uppercase font-mono tracking-wider text-stone-400 font-semibold">
                  Chronological Milestone
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-emerald-400">
                {selectedPhase.title}
              </h3>
              <p className="text-stone-300 font-medium text-sm sm:text-base mt-1">
                {selectedPhase.subtitle}
              </p>
            </div>

            {/* Tagline Callout */}
            <div className="p-4 rounded-2xl bg-[#060810] border border-emerald-500/20 lg:max-w-xs shrink-0 shadow-inner">
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-1">
                Phase Tagline
              </span>
              <p className="font-serif italic text-xs sm:text-sm text-stone-200">
                {selectedPhase.tagline}
              </p>
            </div>
          </div>

          {/* Body Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
            
            {/* Column 1 & 2: Narrative & Key Events */}
            <div className="lg:col-span-2 space-y-6">
              
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-stone-400 mb-2.5 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Clinical Narrative</span>
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-stone-300">
                  {selectedPhase.description}
                </p>
              </div>

              {/* Key Events List */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#070912] border border-white/10">
                <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-stone-400 mb-4 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Documented Key Events</span>
                </h4>
                <ul className="space-y-3">
                  {selectedPhase.keyEvents.map((event, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-stone-200">
                      <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Psychological Mechanisms Badges */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-stone-400 mb-3 flex items-center space-x-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <span>Psychological Dynamics</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPhase.psychologicalMechanisms.map((mech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#131726] text-amber-300 border border-amber-500/30 shadow-md"
                    >
                      {mech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Column 3: Forensic Evidence Quotes */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-stone-400 flex items-center space-x-2">
                <Quote className="w-4 h-4 text-emerald-400" />
                <span>Forensic Evidence</span>
              </h4>

              {selectedPhase.evidenceQuotes.map((quote, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#060810] border border-white/10 space-y-2 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                      Source: {quote.source}
                    </span>
                  </div>
                  <p className="font-serif italic text-xs sm:text-sm text-stone-200 leading-relaxed">
                    "{quote.text}"
                  </p>
                  <p className="text-[11px] text-stone-400">
                    {quote.context}
                  </p>
                </div>
              ))}

              {/* Media Tags */}
              <div className="pt-2">
                <span className="text-[10px] font-mono text-stone-400 uppercase block mb-2 font-bold">
                  Associated Artifacts
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPhase.mediaTags.map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-[#141828] text-stone-300 border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Stepper Footer Controls */}
          <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
            <button
              disabled={TIMELINE_PHASES.findIndex(p => p.id === selectedPhaseId) === 0}
              onClick={() => {
                const currIndex = TIMELINE_PHASES.findIndex(p => p.id === selectedPhaseId);
                if (currIndex > 0) setSelectedPhaseId(TIMELINE_PHASES[currIndex - 1].id);
              }}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#141828] text-stone-300 hover:bg-[#1c2238] border border-white/10 disabled:opacity-40 disabled:pointer-events-none transition-all"
            >
              Previous Phase
            </button>

            <div className="text-xs font-mono text-stone-400">
              Phase {TIMELINE_PHASES.findIndex(p => p.id === selectedPhaseId) + 1} of {TIMELINE_PHASES.length}
            </div>

            <button
              disabled={TIMELINE_PHASES.findIndex(p => p.id === selectedPhaseId) === TIMELINE_PHASES.length - 1}
              onClick={() => {
                const currIndex = TIMELINE_PHASES.findIndex(p => p.id === selectedPhaseId);
                if (currIndex < TIMELINE_PHASES.length - 1) setSelectedPhaseId(TIMELINE_PHASES[currIndex + 1].id);
              }}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-emerald-500 text-stone-950 hover:bg-emerald-400 disabled:opacity-40 disabled:pointer-events-none font-bold shadow-lg shadow-emerald-500/20 transition-all"
            >
              Next Phase
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
