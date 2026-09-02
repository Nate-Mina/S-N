import React, { useState } from 'react';
import { CLINICAL_PILLARS } from '../data/relationshipData';
import { ClinicalPillar } from '../types';
import { Brain, ShieldAlert, AlertCircle, CheckCircle2, ChevronRight, HelpCircle, Activity } from 'lucide-react';

interface DiagnosticMatrixProps {
  isDarkMode: boolean;
}

export const DiagnosticMatrix: React.FC<DiagnosticMatrixProps> = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(CLINICAL_PILLARS[0].id);
  const activePillar = CLINICAL_PILLARS.find(p => p.id === selectedPillarId) || CLINICAL_PILLARS[0];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#050508] text-stone-200">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-300 mb-3 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
            <Brain className="w-3.5 h-3.5 text-amber-400" />
            <span>Forensic Diagnostic Profile</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-stone-100">
            The 4 Pillars of Malignant Narcissism
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            The formal clinical diagnosis that unlocked freedom from the trauma bond—moving from the vague descriptor of "toxic" to the textbook markers of Malignant Narcissism ("the quintessence of evil").
          </p>
        </div>

        {/* 4 Pillars Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CLINICAL_PILLARS.map((pillar) => {
            const isActive = pillar.id === selectedPillarId;

            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`p-5.5 rounded-2xl border text-left transition-all duration-300 ${
                  isActive
                    ? 'bg-[#0d0f1a] border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.15)] -translate-y-1 font-bold'
                    : 'bg-[#0c0e18]/80 border-white/10 hover:bg-[#121524] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: pillar.color }} />
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">
                    Severity: {pillar.severityScore}%
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-stone-100 mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-amber-300 font-mono font-semibold line-clamp-1 mb-2">
                  {pillar.clinicalTerm}
                </p>
                <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                  {pillar.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Inspection Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0d0f1a]/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/80">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1">
                <span>Clinical Pillar Analysis</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
                {activePillar.title}: {activePillar.clinicalTerm}
              </h3>
            </div>

            {/* Severity Bar Metric */}
            <div className="p-4 rounded-2xl bg-[#060810] border border-white/10 shrink-0 w-full lg:w-64 space-y-1.5 shadow-inner">
              <div className="flex justify-between text-xs font-mono text-stone-400 font-bold">
                <span>Pathology Match</span>
                <span className="text-amber-400">{activePillar.severityScore}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#141828] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_currentColor]"
                  style={{ width: `${activePillar.severityScore}%`, backgroundColor: activePillar.color }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
            
            {/* Observed Behaviors */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-stone-400 flex items-center space-x-2">
                <Activity className="w-4 h-4 text-amber-400" />
                <span>Observed Behavioral Manifestations</span>
              </h4>

              <div className="space-y-2.5">
                {activePillar.observedBehaviors.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#060810] border border-white/10 flex items-start space-x-3 text-xs sm:text-sm text-stone-200">
                    <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Forensic Case Study Evidence */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-stone-400 flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>Documented Case Study Evidence</span>
              </h4>

              <div className="space-y-3">
                {activePillar.evidenceFromCase.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#060810] border border-white/10 font-serif italic text-xs sm:text-sm text-amber-100 leading-relaxed shadow-inner">
                    "{item}"
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* COMPARISON TABLE: CPTSD vs. MALIGNANT NARCISSISM */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-serif text-2xl font-bold mb-2 text-stone-100">
              The Critical Clinical Distinction
            </h3>
            <p className="text-xs text-stone-400">
              Why Nate originally misdiagnosed her behavior as trauma (CPTSD), and what clinical psychology revealed.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0c0e18]/90 backdrop-blur-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#060810] text-stone-400 font-mono text-[10px] uppercase border-b border-white/10">
                <tr>
                  <th className="p-4">Feature / Behavior</th>
                  <th className="p-4">Trauma Response / CPTSD</th>
                  <th className="p-4 text-rose-400">Malignant Narcissism (Sabrina)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-stone-300">
                <tr>
                  <td className="p-4 font-bold text-stone-200">Empathy & Remorse</td>
                  <td className="p-4">Fears harming others; feels deep guilt and remorse after conflict.</td>
                  <td className="p-4 text-rose-300 font-medium">Total lack of remorse; derives "relief" from target's suffering.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-stone-200">Financial Demands</td>
                  <td className="p-4">Unrelated to trauma responses; seeks emotional safety.</td>
                  <td className="p-4 text-rose-300 font-medium">Antisocial financial exploitation ("pay her", keep wallet open).</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-stone-200">Accountability Reaction</td>
                  <td className="p-4">Can engage in honest self-reflection when calm.</td>
                  <td className="p-4 text-rose-300 font-medium">Deploys DARVO, flips script, accuses target of abuse.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-stone-200">Preemptive Actions</td>
                  <td className="p-4">Withdraws to isolate self.</td>
                  <td className="p-4 text-rose-300 font-medium">Launches preemptive smear campaigns to ruin target's reputation.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
