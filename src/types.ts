export type PhaseId = 'idealization' | 'devaluation' | 'smear' | 'awakening' | 'recovery';

export interface TimelinePhase {
  id: PhaseId;
  timeframe: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  keyEvents: string[];
  psychologicalMechanisms: string[];
  evidenceQuotes: {
    source: 'Letter' | 'Case Study' | 'Poison Song' | 'Video';
    text: string;
    context: string;
  }[];
  mediaTags: string[];
}

export interface ClinicalPillar {
  id: string;
  title: string;
  clinicalTerm: string;
  description: string;
  observedBehaviors: string[];
  evidenceFromCase: string[];
  severityScore: number; // 1-100 for visual metrics
  color: string;
}

export interface LetterItem {
  id: string;
  title: string;
  date: string;
  theme: string;
  excerpt: string;
  fullText: string;
  author: 'Nate' | 'Sabrina';
  annotation: string;
}

export interface LyricVerse {
  id: string;
  speaker: 'Male (Nate)' | 'Female (Sabrina / Confession)';
  sectionName: string;
  lyrics: string[];
  psychologicalNote: string;
  keyConcepts: string[];
}

export interface PhotoArtifact {
  id: string;
  title: string;
  caption: string;
  date: string;
  category: 'Memory' | 'Document' | 'Evidence' | 'Symbolic';
  imageUrl: string;
  note?: string;
}

export interface DarvoScenario {
  id: string;
  abuserStatement: string;
  victimTrap: string;
  darvoBreakdown: {
    deny: string;
    attack: string;
    reverseVictimOffender: string;
  };
  grayRockResponse: string;
}
