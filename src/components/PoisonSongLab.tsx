import React, { useState, useEffect, useRef } from 'react';
import { SONG_VERSES } from '../data/relationshipData';
import { LyricVerse } from '../types';
import { 
  Play, Pause, Music, Volume2, VolumeX, ShieldAlert, Disc, 
  RotateCcw, RotateCw, Video, Loader2, RefreshCw, Radio
} from 'lucide-react';
import { songSynthesizer } from '../utils/audioSynthesizer';

interface PoisonSongLabProps {
  isDarkMode: boolean;
}

export const PoisonSongLab: React.FC<PoisonSongLabProps> = () => {
  const [selectedVerseId, setSelectedVerseId] = useState<string>(SONG_VERSES[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isBuffering, setIsBuffering] = useState<boolean>(false);
  const [hasMediaError, setHasMediaError] = useState<boolean>(false);
  const [useSynthFallback, setUseSynthFallback] = useState<boolean>(false);
  
  const [speakerFilter, setSpeakerFilter] = useState<'All' | 'Male (Nate)' | 'Female (Sabrina / Confession)'>('All');
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.85);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [showVideoMode, setShowVideoMode] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const lastTimeRef = useRef<number>(0);
  const stallCheckCountRef = useRef<number>(0);

  // Dynamic base URL resolution for GitHub Pages and subpath deployments
  const baseUrl = import.meta.env.BASE_URL || './';
  const songMediaUrl = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}poison_shot_by_shot.mp4`;

  const selectedVerse = SONG_VERSES.find(v => v.id === selectedVerseId) || SONG_VERSES[0];

  const filteredVerses = SONG_VERSES.filter(v => {
    if (speakerFilter === 'All') return true;
    return v.speaker === speakerFilter;
  });

  // Attach persistent listeners to single HTML5 Video/Audio element
  useEffect(() => {
    const media = videoRef.current;
    if (!media) return;

    const handleTimeUpdate = () => {
      setCurrentTime(media.currentTime);
      setIsBuffering(false);
      setHasMediaError(false);
    };

    const handleLoadedMetadata = () => {
      setDuration(media.duration || 0);
      setHasMediaError(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      setIsBuffering(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setIsBuffering(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
      setIsBuffering(false);
    };

    const handleWaiting = () => {
      setIsBuffering(true);
    };

    const handleStalled = () => {
      setIsBuffering(true);
    };

    const handleCanPlay = () => {
      setIsBuffering(false);
    };

    const handleError = () => {
      console.warn("Media playback error detected on MP4 asset.");
      setIsBuffering(false);
      setIsPlaying(false);
      setHasMediaError(true);
    };

    media.addEventListener('timeupdate', handleTimeUpdate);
    media.addEventListener('loadedmetadata', handleLoadedMetadata);
    media.addEventListener('ended', handleEnded);
    media.addEventListener('play', handlePlay);
    media.addEventListener('pause', handlePause);
    media.addEventListener('waiting', handleWaiting);
    media.addEventListener('stalled', handleStalled);
    media.addEventListener('canplay', handleCanPlay);
    media.addEventListener('error', handleError);

    if (media.duration) {
      setDuration(media.duration);
    }

    return () => {
      media.removeEventListener('timeupdate', handleTimeUpdate);
      media.removeEventListener('loadedmetadata', handleLoadedMetadata);
      media.removeEventListener('ended', handleEnded);
      media.removeEventListener('play', handlePlay);
      media.removeEventListener('pause', handlePause);
      media.removeEventListener('waiting', handleWaiting);
      media.removeEventListener('stalled', handleStalled);
      media.removeEventListener('canplay', handleCanPlay);
      media.removeEventListener('error', handleError);
    };
  }, []);

  // Watchdog timer: automatically kickstart stalled media stream if it freezes
  useEffect(() => {
    if (!isPlaying || useSynthFallback) return;

    const timer = setInterval(() => {
      const media = videoRef.current;
      if (!media) return;

      // If playing but time hasn't advanced
      if (Math.abs(media.currentTime - lastTimeRef.current) < 0.01 && !media.paused && !media.ended) {
        stallCheckCountRef.current += 1;
        setIsBuffering(true);

        // If stalled for 2 cycles, attempt soft nudge recovery
        if (stallCheckCountRef.current >= 2) {
          console.log("Media stall detected. Nudging media element to unfreeze...");
          media.play().catch(() => {});
          if (media.currentTime > 0) {
            media.currentTime = Math.min(media.duration || 999, media.currentTime + 0.05);
          }
          stallCheckCountRef.current = 0;
        }
      } else {
        stallCheckCountRef.current = 0;
        lastTimeRef.current = media.currentTime;
      }
    }, 1500);

    return () => clearInterval(timer);
  }, [isPlaying, useSynthFallback]);

  // Volume & Speed updates
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = isMuted ? 0 : volume;
      videoRef.current.playbackRate = playbackRate;
    }
    songSynthesizer.setVolume(isMuted ? 0 : volume);
  }, [volume, isMuted, playbackRate]);

  // Cleanup synthesizer on unmount
  useEffect(() => {
    return () => {
      songSynthesizer.stop();
    };
  }, []);

  const togglePlay = () => {
    if (useSynthFallback) {
      const nextState = songSynthesizer.toggle();
      setIsPlaying(nextState);
      return;
    }

    const media = videoRef.current;
    if (!media) return;

    if (isPlaying) {
      media.pause();
    } else {
      setHasMediaError(false);
      media.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Playback error:", err);
        setIsPlaying(false);
        setHasMediaError(true);
      });
    }
  };

  const handleRetryMedia = () => {
    setHasMediaError(false);
    setIsBuffering(true);
    const media = videoRef.current;
    if (media) {
      media.load();
      media.play().then(() => {
        setIsPlaying(true);
        setIsBuffering(false);
      }).catch(() => {
        setIsBuffering(false);
        setHasMediaError(true);
      });
    }
  };

  const toggleSynthEngine = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    const nextSynth = !useSynthFallback;
    setUseSynthFallback(nextSynth);
    if (nextSynth) {
      songSynthesizer.play();
      setIsPlaying(true);
    } else {
      songSynthesizer.stop();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (useSynthFallback) return;

    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const skipTime = (seconds: number) => {
    if (useSynthFallback) return;
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, Math.min(duration, videoRef.current.currentTime + seconds));
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#050508] text-stone-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-rose-500/10 text-rose-300 mb-3 border border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
            <Music className="w-3.5 h-3.5 text-rose-400" />
            <span>Official Track & Dual-Perspective Lyric Lab</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-stone-100">
            "Poison Shot by Shot"
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            By @idom_inate — The official song composition tracing the relationship through both Nate's experience and Sabrina's confession monologue.
          </p>
        </div>

        {/* Real Audio/Video Player Banner */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0c0e18] via-[#121626] to-[#0c0e18] border border-white/10 shadow-2xl relative overflow-hidden space-y-6">
          
          {/* Always-mounted Single HTML5 Video DOM Element */}
          <div className={`w-full flex justify-center transition-all duration-300 ${showVideoMode ? 'block mb-4' : 'hidden'}`}>
            <video
              ref={videoRef}
              src={songMediaUrl}
              playsInline
              preload="auto"
              className="w-full max-w-2xl rounded-2xl border border-white/10 shadow-2xl bg-black max-h-80 object-contain"
            />
          </div>

          {/* Media Error / Stalled Recovery Bar */}
          {hasMediaError && (
            <div className="p-4 rounded-2xl bg-rose-950/80 border border-rose-500/40 text-rose-200 text-xs font-mono flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Media stream buffer issue or codec stall.</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleRetryMedia}
                  className="px-3 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/50 text-rose-100 flex items-center space-x-1.5 transition-colors font-bold"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retry Stream</span>
                </button>
                <button
                  onClick={toggleSynthEngine}
                  className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-200 flex items-center space-x-1.5 transition-colors font-bold"
                >
                  <Radio className="w-3.5 h-3.5" />
                  <span>Use Synth Engine</span>
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            
            {/* Track Info & Main Play Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={togglePlay}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                  isPlaying
                    ? 'bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-500 text-stone-950 shadow-[0_0_25px_rgba(244,63,94,0.5)] scale-105'
                    : 'bg-rose-500 hover:bg-rose-400 text-stone-950 shadow-lg shadow-rose-500/20'
                }`}
              >
                {isBuffering ? (
                  <Loader2 className="w-6 h-6 animate-spin text-stone-950" />
                ) : isPlaying ? (
                  <Pause className="w-6 h-6 fill-current" />
                ) : (
                  <Play className="w-6 h-6 fill-current ml-1" />
                )}
              </button>

              <div>
                <div className="flex items-center space-x-2">
                  <Disc className={`w-4 h-4 text-rose-400 ${isPlaying ? 'animate-spin' : ''}`} />
                  <span className="font-serif font-bold text-lg text-stone-100">Poison Shot by Shot</span>
                  
                  {useSynthFallback ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      Synth Engine
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      Official Track
                    </span>
                  )}

                  {isBuffering && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 animate-pulse">
                      Buffering...
                    </span>
                  )}
                </div>
                <span className="text-xs text-stone-400 font-mono">
                  {selectedVerse.speaker} • {selectedVerse.sectionName}
                </span>
              </div>
            </div>

            {/* Skip & Mode Controls */}
            <div className="flex items-center space-x-3 text-xs font-mono">
              <button
                onClick={() => skipTime(-10)}
                disabled={useSynthFallback}
                className="p-2 rounded-xl bg-[#060810] border border-white/10 text-stone-300 hover:text-white hover:bg-[#121524] transition-colors disabled:opacity-40"
                title="Rewind 10s"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => skipTime(10)}
                disabled={useSynthFallback}
                className="p-2 rounded-xl bg-[#060810] border border-white/10 text-stone-300 hover:text-white hover:bg-[#121524] transition-colors disabled:opacity-40"
                title="Forward 10s"
              >
                <RotateCw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowVideoMode(!showVideoMode)}
                disabled={useSynthFallback}
                className={`px-3 py-2 rounded-xl border flex items-center space-x-1.5 transition-all ${
                  showVideoMode
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold'
                    : 'bg-[#060810] text-stone-400 border-white/10 hover:text-stone-200'
                } disabled:opacity-40`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>{showVideoMode ? 'Hide Video' : 'Video View'}</span>
              </button>

              <button
                onClick={toggleSynthEngine}
                className={`px-3 py-2 rounded-xl border flex items-center space-x-1.5 transition-all ${
                  useSynthFallback
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold'
                    : 'bg-[#060810] text-stone-400 border-white/10 hover:text-stone-200'
                }`}
                title="Switch between MP4 track and Web Audio synth"
              >
                <Radio className="w-3.5 h-3.5" />
                <span>{useSynthFallback ? 'Synth ON' : 'Synth Mode'}</span>
              </button>

              {/* Playback speed selector */}
              <button
                onClick={() => setPlaybackRate(rate => rate === 1 ? 1.25 : rate === 1.25 ? 0.75 : 1)}
                disabled={useSynthFallback}
                className="px-2.5 py-2 rounded-xl bg-[#060810] border border-white/10 text-stone-300 hover:text-white text-xs font-mono font-bold disabled:opacity-40"
              >
                {playbackRate}x
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center space-x-2 bg-[#060810] px-3.5 py-2 rounded-xl border border-white/10 shrink-0">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-rose-400 hover:text-rose-300 transition-colors"
              >
                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="w-20 h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
            </div>

          </div>

          {/* Scrubber / Progress Bar */}
          {!useSynthFallback && (
            <div className="space-y-1.5 pt-2">
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 font-semibold">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <input
                type="range"
                min="0"
                max={duration || 100}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-[#060810] rounded-lg appearance-none cursor-pointer accent-rose-500 border border-white/10"
              />
            </div>
          )}

        </div>

        {/* Perspective Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {(['All', 'Male (Nate)', 'Female (Sabrina / Confession)'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSpeakerFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                speakerFilter === tab
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold shadow-[0_0_15px_rgba(244,63,94,0.15)]'
                  : 'bg-[#0c0e18] text-stone-400 border border-white/5 hover:text-stone-200 hover:bg-[#121524]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Grid: Verse Directory (Left) & Lyric Reading Area (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Verse Directory Sidebar (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-stone-400 block px-1">
              Song Structure & Verses
            </span>

            {filteredVerses.map((verse) => {
              const isActive = verse.id === selectedVerseId;
              const isFemale = verse.speaker.includes('Female');

              return (
                <button
                  key={verse.id}
                  onClick={() => setSelectedVerseId(verse.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                    isActive
                      ? isFemale
                        ? 'bg-rose-500/20 border-rose-500/50 text-rose-200 shadow-[0_0_20px_rgba(244,63,94,0.15)] font-bold'
                        : 'bg-emerald-500/20 border-emerald-500/50 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.15)] font-bold'
                      : 'bg-[#0c0e18]/80 border-white/10 text-stone-400 hover:text-stone-200 hover:bg-[#121524]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                      isFemale ? 'bg-rose-500/20 text-rose-300' : 'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {verse.speaker}
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">
                      {verse.lyrics.length} Lines
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-sm text-stone-100 mt-1">
                    {verse.sectionName}
                  </h4>

                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {verse.keyConcepts.map((concept, idx) => (
                      <span key={idx} className="text-[9px] font-mono px-2 py-0.5 bg-[#060810] text-stone-300 rounded border border-white/5">
                        #{concept}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Lyric Display Area (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#0d0f1a]/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/80 relative">
              
              {/* Header */}
              <div className="pb-6 border-b border-white/10 mb-6 flex items-center justify-between">
                <div>
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    selectedVerse.speaker.includes('Female')
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {selectedVerse.speaker}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 mt-3">
                    {selectedVerse.sectionName}
                  </h3>
                </div>

                {isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30 transition-colors flex items-center space-x-2"
                  >
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pause</span>
                  </button>
                )}
              </div>

              {/* Lyrics List */}
              <div className="space-y-3 font-serif text-base sm:text-lg text-stone-200 leading-relaxed italic bg-[#060810] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-inner">
                {selectedVerse.lyrics.map((line, idx) => (
                  <p key={idx} className="hover:text-amber-300 transition-colors">
                    "{line}"
                  </p>
                ))}
              </div>

              {/* Psychological Commentary Box */}
              <div className="mt-8 p-5.5 rounded-2xl bg-[#060810] border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-amber-400">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Clinical Psychological Commentary</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {selectedVerse.psychologicalNote}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
