import React, { useState } from 'react';
import { NATES_LETTERS, PHOTO_VAULT } from '../data/relationshipData';
import { LetterItem, PhotoArtifact } from '../types';
import { Mail, Image as ImageIcon, Calendar, Eye, Sparkles, X, Type, Heart } from 'lucide-react';

interface LettersAndVaultProps {
  isDarkMode: boolean;
}

export const LettersAndVault: React.FC<LettersAndVaultProps> = () => {
  const [selectedLetterId, setSelectedLetterId] = useState<string>(NATES_LETTERS[0].id);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoArtifact | null>(null);
  const [useTypewriterFont, setUseTypewriterFont] = useState<boolean>(true);

  const activeLetter = NATES_LETTERS.find(l => l.id === selectedLetterId) || NATES_LETTERS[0];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#050508] text-stone-200">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* PART 1: NATE'S LETTERS READER */}
        <div>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-emerald-500/10 text-emerald-300 mb-3 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>Personal Documents & Vows</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-stone-100">
              Nate's Letters: From Fortress to Autopsy
            </h2>
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              Read the authentic written correspondence documenting the emotional trajectory from devotion and self-blame to radical acceptance and recovery.
            </p>
          </div>

          {/* Letter Directory & Reader Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Directory Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono uppercase font-bold text-stone-400 block px-1">
                Letters Chronology
              </span>

              {NATES_LETTERS.map((letter) => {
                const isActive = letter.id === selectedLetterId;

                return (
                  <button
                    key={letter.id}
                    onClick={() => setSelectedLetterId(letter.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                      isActive
                        ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.15)] font-bold'
                        : 'bg-[#0c0e18]/80 border-white/10 text-stone-400 hover:text-stone-200 hover:bg-[#121524]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase text-stone-400">
                        {letter.date}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#060810] text-emerald-300 border border-emerald-500/30">
                        {letter.theme}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-sm text-stone-100">
                      {letter.title}
                    </h4>

                    <p className="text-xs text-stone-400 line-clamp-2 mt-1 italic font-serif">
                      "{letter.excerpt}"
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Reading Canvas (8 Cols) */}
            <div className="lg:col-span-8">
              <div className="p-6 sm:p-10 rounded-3xl bg-[#0d0f1a]/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/80 relative">
                
                {/* Letter Header */}
                <div className="pb-6 border-b border-white/10 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 font-bold uppercase">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{activeLetter.date}</span>
                      <span>•</span>
                      <span>{activeLetter.theme}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
                      {activeLetter.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setUseTypewriterFont(!useTypewriterFont)}
                    className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-[#060810] hover:bg-[#121524] text-stone-300 flex items-center space-x-2 border border-white/10 transition-colors"
                  >
                    <Type className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{useTypewriterFont ? 'Serif Typewriter' : 'Clean Font'}</span>
                  </button>
                </div>

                {/* Letter Body Text */}
                <div className={`p-6 sm:p-8 rounded-2xl bg-[#060810] border border-white/10 whitespace-pre-line text-sm sm:text-base leading-relaxed text-stone-200 shadow-inner ${
                  useTypewriterFont ? 'font-serif italic' : 'font-sans'
                }`}>
                  {activeLetter.fullText}
                </div>

                {/* Clinical Annotation */}
                <div className="mt-8 p-5.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200 space-y-1">
                  <span className="font-mono font-bold uppercase text-[10px] text-emerald-400 block">
                    Forensic Psychotherapy Note
                  </span>
                  <p className="leading-relaxed">
                    {activeLetter.annotation}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* PART 2: PHOTO ALBUM & ARTIFACT VAULT */}
        <div className="pt-12 border-t border-white/10">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-300 mb-3 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>Visual Artifact Vault</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-2 text-stone-100">
              Photo Album of Sabrina and Nate
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              Archived memory snippets, documents, and visual evidence from the 1-year timeline.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHOTO_VAULT.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group cursor-pointer rounded-2xl bg-[#0d0f1a] border border-white/10 overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
              >
                <div className="relative aspect-video overflow-hidden bg-[#05060c]">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#060810]/90 text-amber-300 backdrop-blur-md border border-amber-500/30">
                    {photo.category}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-mono text-stone-400 block">
                    {photo.date}
                  </span>
                  <h4 className="font-serif font-bold text-base text-stone-100 group-hover:text-amber-300 transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Photo Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#0d0f1a] border border-white/20 max-w-2xl w-full rounded-3xl p-6 sm:p-8 space-y-4 relative shadow-2xl">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-stone-300 hover:text-white hover:bg-black/80 transition-all border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video rounded-2xl overflow-hidden bg-black border border-white/10">
                <img src={selectedPhoto.imageUrl} alt={selectedPhoto.title} className="w-full h-full object-cover" />
              </div>

              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 mb-1">
                  <span>{selectedPhoto.date}</span>
                  <span>•</span>
                  <span>{selectedPhoto.category}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-100">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-stone-300 mt-2 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
                {selectedPhoto.note && (
                  <div className="mt-4 p-3 rounded-xl bg-[#060810] text-xs font-mono text-stone-300 border border-white/10">
                    Note: {selectedPhoto.note}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
