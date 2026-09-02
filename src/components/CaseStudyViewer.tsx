import React, { useState } from 'react';
import { CASE_STUDY_CHAPTERS } from '../data/relationshipData';
import { BookOpen, FileText, CheckCircle2, Search, Download, AlertTriangle, ArrowRight, Shield } from 'lucide-react';

interface CaseStudyViewerProps {
  isDarkMode: boolean;
}

export const CaseStudyViewer: React.FC<CaseStudyViewerProps> = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const activeChapter = CASE_STUDY_CHAPTERS[activeChapterIndex];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#050508] text-stone-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-300 mb-3 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Forensic Psychotherapy Case Study</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-stone-100">
            A Clinical Case Study of a Malignant Trauma Bond
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            The Narrative of Nate & Sabrina — Evaluated from high-value idealization to total clinical degradation and recovery.
          </p>
        </div>

        {/* Search & Layout Control Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0c0e18]/90 border border-white/10 backdrop-blur-xl">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search case study notes (e.g., DARVO, Tommy, Sadism)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#060810] text-xs font-medium text-stone-200 border border-white/10 focus:outline-none focus:border-amber-500/50"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto justify-end text-xs font-mono text-stone-400">
            <span>6 Sections • Forensic Analysis</span>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Chapter Directory Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <span className="text-xs font-mono uppercase font-bold text-stone-400 block px-2 mb-2">
              Case Study Sections
            </span>
            {CASE_STUDY_CHAPTERS.map((chap, idx) => {
              const isActive = idx === activeChapterIndex;
              const matchesSearch = searchTerm && chap.summary.toLowerCase().includes(searchTerm.toLowerCase());

              return (
                <button
                  key={idx}
                  onClick={() => setActiveChapterIndex(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start space-x-3 ${
                    isActive
                      ? 'bg-amber-500/15 border-amber-500/50 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                      : matchesSearch
                        ? 'bg-amber-950/20 border-amber-500/30 text-stone-200'
                        : 'bg-[#0c0e18]/80 border-white/10 text-stone-400 hover:text-stone-200 hover:bg-[#121524]'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 ${
                    isActive ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-[#151828] text-stone-400'
                  }`}>
                    {chap.number}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm leading-snug line-clamp-2 text-stone-100">
                      {chap.title}
                    </h4>
                    <p className="text-[11px] text-stone-400 line-clamp-1 mt-1">
                      {chap.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Chapter Reading Area (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#0d0f1a]/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/80">
              
              {/* Chapter Header */}
              <div className="pb-6 border-b border-white/10 mb-8">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-2">
                  <span>Section {activeChapter.number} of 6</span>
                  <span>•</span>
                  <span>Forensic Psychotherapy Evaluation</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 leading-tight">
                  {activeChapter.title}
                </h3>
              </div>

              {/* Summary Callout */}
              <div className="p-5 sm:p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-8 shadow-inner">
                <span className="text-[10px] font-mono font-bold uppercase text-amber-400 block mb-1">
                  Executive Summary
                </span>
                <p className="font-serif text-sm sm:text-base text-amber-100 italic leading-relaxed">
                  "{activeChapter.summary}"
                </p>
              </div>

              {/* Key Points & Clinical Findings */}
              <div className="space-y-6">
                <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-stone-400 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Clinical Observations & Key Data</span>
                </h4>

                <div className="space-y-3">
                  {activeChapter.keyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#060810] border border-white/10 flex items-start space-x-3 text-xs sm:text-sm text-stone-200 leading-relaxed"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Document Quote Annotation */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="p-4.5 rounded-2xl bg-[#060810] border border-white/10 text-xs text-stone-300 space-y-1">
                  <div className="flex items-center space-x-2 text-emerald-400 font-mono font-bold uppercase text-[10px]">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Clinical Recovery Takeaway</span>
                  </div>
                  <p className="leading-relaxed">
                    Replacing narrative sentimentality with objective diagnostic observation terminates self-blame and restores epistemic justice to the target.
                  </p>
                </div>
              </div>

              {/* Navigation Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  disabled={activeChapterIndex === 0}
                  onClick={() => setActiveChapterIndex(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#141828] text-stone-300 hover:bg-[#1c2238] border border-white/10 disabled:opacity-40 transition-all"
                >
                  Previous Section
                </button>

                <button
                  disabled={activeChapterIndex === CASE_STUDY_CHAPTERS.length - 1}
                  onClick={() => setActiveChapterIndex(prev => Math.min(CASE_STUDY_CHAPTERS.length - 1, prev + 1))}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-amber-500 text-stone-950 hover:bg-amber-400 font-bold shadow-lg shadow-amber-500/20 disabled:opacity-40 transition-all"
                >
                  Next Section
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
