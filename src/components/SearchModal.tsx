import React, { useState } from 'react';
import { TIMELINE_PHASES, CASE_STUDY_CHAPTERS, SONG_VERSES, NATES_LETTERS, CLINICAL_PILLARS } from '../data/relationshipData';
import { Search, X, ArrowRight, BookOpen, Music, Mail, Activity, Brain } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectTab }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Search matching
  const matchingPhases = trimmed
    ? TIMELINE_PHASES.filter(
        p => p.title.toLowerCase().includes(trimmed) || p.description.toLowerCase().includes(trimmed) || p.tagline.toLowerCase().includes(trimmed)
      )
    : [];

  const matchingChapters = trimmed
    ? CASE_STUDY_CHAPTERS.filter(
        c => c.title.toLowerCase().includes(trimmed) || c.summary.toLowerCase().includes(trimmed)
      )
    : [];

  const matchingLyrics = trimmed
    ? SONG_VERSES.filter(
        v => v.sectionName.toLowerCase().includes(trimmed) || v.lyrics.some(l => l.toLowerCase().includes(trimmed))
      )
    : [];

  const matchingLetters = trimmed
    ? NATES_LETTERS.filter(
        l => l.title.toLowerCase().includes(trimmed) || l.fullText.toLowerCase().includes(trimmed)
      )
    : [];

  const matchingPillars = trimmed
    ? CLINICAL_PILLARS.filter(
        p => p.title.toLowerCase().includes(trimmed) || p.clinicalTerm.toLowerCase().includes(trimmed) || p.description.toLowerCase().includes(trimmed)
      )
    : [];

  const totalResults = matchingPhases.length + matchingChapters.length + matchingLyrics.length + matchingLetters.length + matchingPillars.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-start justify-center pt-16 sm:pt-24 px-4">
      <div className="bg-[#0d0f1a] border border-white/20 max-w-2xl w-full rounded-3xl p-6 space-y-6 shadow-2xl relative">
        
        {/* Header Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-emerald-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            autoFocus
            placeholder="Search timeline, lyrics, letters, DARVO, Tommy, case study..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-[#060810] text-sm font-medium text-stone-100 border border-white/10 focus:outline-none focus:border-emerald-500/50 shadow-inner"
          />
          <button
            onClick={onClose}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full text-stone-400 hover:text-stone-100 hover:bg-black/40 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-1">
          
          {!trimmed && (
            <div className="text-center py-12 text-stone-400 text-xs font-mono">
              Type keywords above to search across the entire Nate & Sabrina archive.
            </div>
          )}

          {trimmed && totalResults === 0 && (
            <div className="text-center py-12 text-stone-400 text-xs font-mono">
              No matching records found for "{query}". Try searching "Tommy", "toll", "DARVO", or "sadism".
            </div>
          )}

          {/* Timeline Results */}
          {matchingPhases.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 block">
                Timeline Phases ({matchingPhases.length})
              </span>
              {matchingPhases.map(p => (
                <div
                  key={p.id}
                  onClick={() => { onSelectTab('timeline'); onClose(); }}
                  className="p-3.5 rounded-xl bg-[#060810] border border-white/10 hover:border-emerald-500/50 hover:bg-[#121524] transition-all cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-serif font-bold text-xs text-stone-200">{p.title}</h4>
                    <p className="text-[11px] text-stone-400 line-clamp-1">{p.subtitle}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
              ))}
            </div>
          )}

          {/* Lyrics Results */}
          {matchingLyrics.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-rose-400 block">
                Song Lyrics ({matchingLyrics.length})
              </span>
              {matchingLyrics.map(v => (
                <div
                  key={v.id}
                  onClick={() => { onSelectTab('song-lab'); onClose(); }}
                  className="p-3.5 rounded-xl bg-[#060810] border border-white/10 hover:border-rose-500/50 hover:bg-[#121524] transition-all cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-serif font-bold text-xs text-stone-200">{v.sectionName} ({v.speaker})</h4>
                    <p className="text-[11px] text-stone-400 line-clamp-1 italic font-serif">"{v.lyrics[0]}"</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-rose-400 shrink-0" />
                </div>
              ))}
            </div>
          )}

          {/* Letters Results */}
          {matchingLetters.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 block">
                Nate's Letters ({matchingLetters.length})
              </span>
              {matchingLetters.map(l => (
                <div
                  key={l.id}
                  onClick={() => { onSelectTab('letters-vault'); onClose(); }}
                  className="p-3.5 rounded-xl bg-[#060810] border border-white/10 hover:border-emerald-500/50 hover:bg-[#121524] transition-all cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-serif font-bold text-xs text-stone-200">{l.title} ({l.date})</h4>
                    <p className="text-[11px] text-stone-400 line-clamp-1 italic font-serif">"{l.excerpt}"</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
              ))}
            </div>
          )}

          {/* Case Study Results */}
          {matchingChapters.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-amber-400 block">
                Case Study Sections ({matchingChapters.length})
              </span>
              {matchingChapters.map((c, i) => (
                <div
                  key={i}
                  onClick={() => { onSelectTab('case-study'); onClose(); }}
                  className="p-3.5 rounded-xl bg-[#060810] border border-white/10 hover:border-amber-500/50 hover:bg-[#121524] transition-all cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-serif font-bold text-xs text-stone-200">{c.title}</h4>
                    <p className="text-[11px] text-stone-400 line-clamp-1">{c.summary}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
