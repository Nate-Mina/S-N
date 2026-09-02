import {
  TimelinePhase,
  ClinicalPillar,
  LetterItem,
  LyricVerse,
  PhotoArtifact,
  DarvoScenario
} from '../types';

export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    id: 'idealization',
    timeframe: 'June – August 2025',
    title: 'Phase I: Love-Bombing & The Communal Mask',
    subtitle: 'The "Wounded Bird" and the Fortress of Devotion',
    tagline: '"You came in sweet, all soft at the seams..."',
    description:
      'Sabrina initiated the relationship in June 2025 with an intense love-bombing campaign. She presented a double mask: the morally superior "Communal Narcissist" (seeming kind, smart, and altruistic) combined with the "Wounded Bird" vulnerable facade (claiming past trauma and being in her "darkest spot"). Nate responded with intense empathy, trying to build a "fortress of devotion" to protect her.',
    keyEvents: [
      'First meeting in June 2025 and immediate emotional intensity',
      'Sabrina presents her "wounded bird" story of being trapped in past trauma',
      'Nate steps into the "Fixer" role, pledging unconditional protection',
      'Co-conception of "The Analytical Kill" YouTube project profiling dark psychology',
      'Exchange of romantic letters and vows of unwavering loyalty'
    ],
    psychologicalMechanisms: [
      'Narcissistic Oscillation (shifting between Communal and Vulnerable subtypes)',
      'Intermittent Idealization (Love-Bombing)',
      'Fixer Complex Hijacking (activating target\'s protector instincts)',
      'Surplus Trust Accumulation'
    ],
    evidenceQuotes: [
      {
        source: 'Poison Song',
        text: 'You came in sweet, all soft at the seams. Said you saw my wreck and you knew how to redeem.',
        context: 'Nate recalling the initial enchanting facade at Hudson Corner Store.'
      },
      {
        source: 'Case Study',
        text: 'The Love-Bombing phase served as a calculated mechanism to activate the target\'s protector instincts and secure a surplus of trust.',
        context: 'Clinical case study overview of June 2025.'
      },
      {
        source: 'Letter',
        text: 'I came to be the fixer for the wings you said were caught... I thought I was your savior, pulling you from the debris.',
        context: 'Nate\'s early letter expressing total devotion.'
      }
    ],
    mediaTags: ['Love-Bombing', 'Hudson Corner Store', 'Wounded Bird', 'June 2025']
  },
  {
    id: 'devaluation',
    timeframe: 'Sept 2025 – Early 2026',
    title: 'Phase II: Active Devaluation & Financial Exploitation',
    subtitle: 'Systematic Inversion of Reality, "Truth-Lies", and the Toll',
    tagline: '"I had to pay a toll just to look you in the eye..."',
    description:
      'By Autumn 2025, the relationship transitioned into active devaluation. Sabrina weaponized Nate\'s empathy through "Truth-Lies" (small admissions like "I\'m too good for you" or "I don\'t trust you" to induce guilt). She engaged in antisocial financial exploitation, demanding Nate "pay her" to discuss relationship issues. She also manufactured the "Tommy" narrative—convincing Nate Tommy was a lethal threat while secretly texting Tommy not to talk to Nate so it wouldn\'t "fuck up her ability to get Nate\'s money."',
    keyEvents: [
      'Appearance of coldness, criticism, and emotional withdrawal',
      'Introduction of financial demands ("paying a toll") to receive attention or address conflict',
      'Deployment of "Truth-Lies" designed to induce self-blame in Nate',
      'Manufacturing of the "Tommy" threat to keep Nate isolated and hypervigilant',
      'Secret communications behind Nate\'s back to secure financial supply',
      'Consistent use of DARVO (Deny, Attack, Reverse Victim & Offender) during confrontations'
    ],
    psychologicalMechanisms: [
      'Truth-Lies Manipulation (strategic partial confessions to evade accountability)',
      'Antisocial Financial Exploitation',
      'Triangulation & Paranoia Manufacturing (The Tommy Narrative)',
      'DARVO Inversion',
      'Epistemic Theft (stripping Nate of validating his own reality)'
    ],
    evidenceQuotes: [
      {
        source: 'Poison Song',
        text: 'I had to pay a toll just to look you in the eye. Funding your survival while you bled my spirit dry.',
        context: 'Lyrics detailing the financial toll demanded by Sabrina.'
      },
      {
        source: 'Case Study',
        text: 'In a highly significant disclosure, Sabrina instructed Tommy not to speak to Nate because it would "fuck up her ability to get Nate\'s money."',
        context: 'Case study Section 3: Evidence of antisocial financial motive.'
      },
      {
        source: 'Poison Song',
        text: 'You told me Tommy was a threat, a killer in the night, to keep me isolated in a paranoid spotlight. But you were texting him in secret...',
        context: 'Lyrics detailing triangulation and covert contact.'
      }
    ],
    mediaTags: ['Devaluation', 'Financial Exploitation', 'Tommy Narrative', 'DARVO', 'Fall 2025']
  },
  {
    id: 'smear',
    timeframe: 'Spring 2026',
    title: 'Phase III: Smear Campaign & Preemptive Assassination',
    subtitle: 'Turning His Name to Smoke to Preserve Her Saintly Halo',
    tagline: '"Smeared your reputation before you had a say..."',
    description:
      'As Nate began questioning the mistreatment, Sabrina initiated a preemptive smear campaign. She contacted mutual acquaintances, friends, and family, casting Nate as the volatile abuser while positioning herself as the innocent victim. This allowed her to maintain her public "Communal Narcissist" halo while completely isolating Nate from external support systems.',
    keyEvents: [
      'Preemptive false allegations circulated among social circles',
      'Sabrina projects her own manipulative traits onto Nate',
      'Nate experiences severe isolation, confusion, and loss of epistemic grounding',
      'Sabrina uses the "saintly mask" to gain public sympathy'
    ],
    psychologicalMechanisms: [
      'Preemptive Character Assassination',
      'Paranoid Projection (projecting her abuse onto the target)',
      'Smear Campaigning to Maintain Communal Halo',
      'Systemic Social Isolation'
    ],
    evidenceQuotes: [
      {
        source: 'Poison Song',
        text: 'Turn my name to smoke... smeared your reputation before you had a say. You tell everybody I\'m a liar with a grin.',
        context: 'Lyrics depicting the character assassination.'
      },
      {
        source: 'Case Study',
        text: 'By convincing Nate that external figures were lethal threats, she kept him isolated while simultaneously conducting a smear campaign to discredit him to the outside world.',
        context: 'Case study Section 4: Paranoid Orientation.'
      }
    ],
    mediaTags: ['Smear Campaign', 'Isolation', 'Character Assassination', 'Spring 2026']
  },
  {
    id: 'awakening',
    timeframe: 'Early Summer 2026',
    title: 'Phase IV: The Clinical Awakening & Psychology Paradigm Shift',
    subtitle: 'From Self-Blame to Forensic Diagnostic Clarity',
    tagline: '"She studied psychology because her ex was a narcissist... but then I realized SHE was the malignant one."',
    description:
      'Sabrina frequently spoke about psychology, claiming her past ex was a sociopath/narcissist. Driven by a desire to understand her trauma triggers and heal the relationship, Nate began studying clinical psychology himself. Expecting to find CPTSD or trauma responses, he instead discovered that Sabrina matched every textbook criteria for Malignant Narcissism: Narcissistic Core, Antisocial Exploitation, Egosyntonic Sadism, and Paranoid Orientation.',
    keyEvents: [
      'Nate immerses himself in clinical psychology literature to help her heal',
      'Realization that her "wounded bird" routine was a calculated mask',
      'Identification of Egosyntonic Sadism (her taking relief and pleasure in breaking him)',
      'Paradigm Shift: Replacing romantic illusions with objective clinical data',
      'Understanding her projection (calling exes narcissists while embodying malignant narcissism herself)'
    ],
    psychologicalMechanisms: [
      'Clinical Paradigm Shift',
      'Diagnostic Deconstruction of the Mask',
      'Egosyntonic Sadism Identification',
      'Reframing Trauma Response vs Malignant Intent'
    ],
    evidenceQuotes: [
      {
        source: 'Poison Song',
        text: 'Now I see the egosyntonic pleasure in the worst. You flip the script, you DARVO, you tell them I\'m the pain.',
        context: 'Lyrics from the clinical revelation verse.'
      },
      {
        source: 'Poison Song',
        text: 'I watched you lose your footing, watched you hollow out inside... and the relief I felt in breaking you was something I couldn\'t hide.',
        context: 'Sabrina\'s confession verse acknowledging egosyntonic sadism.'
      },
      {
        source: 'Case Study',
        text: 'Unlike standard narcissists who cause harm as a byproduct, Sabrina displayed traits of deriving power and "relief" from Nate\'s loss.',
        context: 'Case Study Section 4: Egosyntonic Sadism.'
      }
    ],
    mediaTags: ['Psychology Study', 'Malignant Narcissism', 'Egosyntonic Sadism', 'Paradigm Shift']
  },
  {
    id: 'recovery',
    timeframe: 'Summer 2026 – Present',
    title: 'Phase V: Breaking the Trauma Bond & Reclaiming Sovereignty',
    subtitle: 'Decoupling from Biological Dependency and Restoring Epistemic Justice',
    tagline: '"The bond breaks when replaced by forensic data."',
    description:
      'The clinical revelation served as the ultimate antidote to the trauma bond. By understanding that her abuse was not a failure on his part, but the result of a rigid, malignant pathology, Nate was able to break the biological addiction created by intermittent reinforcement. He adopted Forensic Neutrality ("Gray Rock"), terminated self-blame, and reclaimed his truth and autonomy.',
    keyEvents: [
      'Categorical refusal to internalize her projected shame and false reality',
      'Restoration of Epistemic Justice (validating his own memory and truth)',
      'Adoption of Gray Rock / Forensic Neutrality',
      'Breaking the biological/neurological addiction to the intermittent reward cycle',
      'Reclaiming emotional sovereignty and peace of mind'
    ],
    psychologicalMechanisms: [
      'Trauma Bond Decoupling',
      'Epistemic Restoration',
      'Gray Rock / Forensic Neutrality',
      'Deconstruction of Biological Addiction'
    ],
    evidenceQuotes: [
      {
        source: 'Case Study',
        text: 'The trauma bond survived only as long as the target believed in the subject\'s manufactured romantic narrative; the bond breaks when replaced by forensic data.',
        context: 'Case Study Conclusion.'
      },
      {
        source: 'Letter',
        text: 'We were two hurt people in a complicated storm... Recognizing the clinical reality allowed me to finally stop blaming myself and walk into the light.',
        context: 'Nate\'s final reflection letter on recovery.'
      }
    ],
    mediaTags: ['Recovery', 'Trauma Bond Broken', 'Gray Rock', 'Epistemic Justice', 'Summer 2026']
  }
];

export const CASE_STUDY_CHAPTERS = [
  {
    number: '1',
    title: 'Introduction: The Architecture of Destructive Attachment',
    summary:
      'Evaluates the relationship between Nate (the target) and Sabrina (the subject) to document the textbook progression from high-value idealization to a state of total clinical degradation.',
    keyPoints: [
      'A trauma bond is not a romantic tragedy, but a structural mechanism of systemic psychological erosion.',
      'Replaces narrative sentimentality with objective diagnostic observations of Malignant Narcissism.',
      'Demonstrates how the bond was engineered to bypass logical defenses.',
      'The initial idealization phase was a calculated investment laying groundwork for psychological collapse.'
    ]
  },
  {
    number: '2',
    title: 'The Phase of Idealization: The "Wounded Bird" and the Communal Mask (June – August 2025)',
    summary:
      'Analyzes how the love-bombing campaign combined moral superiority (Communal Narcissist) with victimhood (Wounded Bird) to hook Nate\'s protector instincts.',
    keyPoints: [
      'Narcissistic Oscillation between "Communal" and "Vulnerable" subtypes.',
      'Presented a mask of moral virtue ("saintly character") used later to shut down accountability.',
      'Framed herself as being in her "darkest spot" to activate Nate\'s "Fixer" complex.',
      'Nate constructed a "fortress of devotion" that became a "leash of sacrifice."'
    ]
  },
  {
    number: '3',
    title: 'The Phase of Active Devaluation: The Systematic Inversion of Reality (Sept 2025 – Early 2026)',
    summary:
      'Details the active devaluation phase featuring "Truth-Lies", financial toll demands, triangulation, and DARVO.',
    keyPoints: [
      'Use of "Truth-Lies" (e.g. "I\'m too good for you") to induce guilt and self-doubt.',
      'Antisocial financial exploitation: requiring Nate to pay money simply to speak to her.',
      'The "Tommy" Narrative: Convincing Nate Tommy was a lethal threat while secretly instructing Tommy not to talk to Nate so it wouldn\'t "fuck up her ability to get Nate\'s money."',
      'DARVO (Deny, Attack, Reverse Victim and Offender) inverting blame and causing epistemic theft.'
    ]
  },
  {
    number: '4',
    title: 'The Clinical Revelation: Defining the Malignant Profile',
    summary:
      'Shifts from describing behavior as "toxic" to applying the formal clinical diagnosis of Malignant Narcissism ("the quintessence of evil").',
    keyPoints: [
      '1. Narcissistic Core: Grandiose false self hiding behind the "wounded bird" facade.',
      '2. Antisocial Behavior: Instrumental exploitation, financial manipulation, calculated deceit.',
      '3. Egosyntonic Sadism: Deriving power and "relief" from the target\'s suffering and hollowed-out state.',
      '4. Paranoid Orientation: Manufacturing enemies (Tommy) and paranoid projection (calling exes narcissists).'
    ]
  },
  {
    number: '5',
    title: 'Path to Recovery: Deconstructing the Biological Dependency',
    summary:
      'Outlines the strategic decoupling required to break the biological addiction created by intermittent reinforcement.',
    keyPoints: [
      'Terminating "Truth-Lies" by recognizing self-deprecating admissions as manipulation tactics.',
      'Deconstructing the biological addiction caused by oscillation between saintly mask and sadistic devaluer.',
      'Recognizing DARVO in real-time to avoid internalizing projected shame.',
      'Adopting Forensic Neutrality ("Gray Rock") to become brief, boring, and emotionally unresponsive.'
    ]
  },
  {
    number: '6',
    title: 'Conclusion: Reclaiming Reality After Systemic Erosion',
    summary:
      'Summarizes how replacing manufactured romantic narratives with clinical data breaks the trauma bond and restores sanity.',
    keyPoints: [
      'Trauma bond breaks when replaced by forensic data.',
      'Accurate labeling of Malignant Narcissism is the primary mechanism for breaking biological dependency.',
      'Restores Epistemic Justice—validating the truth erased by gaslighting and smear campaigns.',
      'Categorical refusal to accept the abuser\'s reality allows the target to reclaim their own life.'
    ]
  }
];

export const CLINICAL_PILLARS: ClinicalPillar[] = [
  {
    id: 'narcissistic-core',
    title: '1. Narcissistic Core',
    clinicalTerm: 'Grandiose False Self & Vulnerable Masking',
    description:
      'A fragile, grandiose self-concept demanding constant admiration and validation, hiding behind a "wounded bird" or "saintly communal" facade to secure emotional supply through pity and moral posturing.',
    observedBehaviors: [
      'Presented as the "most kind, smart, and friendly person" Nate had ever met',
      'Demanded total devotion while offering zero genuine empathy in return',
      'Used community volunteerism (picking up trash) as a public halo',
      'Switched between saintly savior and helpless victim when challenged'
    ],
    evidenceFromCase: [
      'Case Study: "As a Communal Narcissist, she presented a mask of moral superiority..."',
      'Lyrics: "You talk like a saint, but you move like a scheme..."'
    ],
    severityScore: 92,
    color: '#fbbf24'
  },
  {
    id: 'antisocial-behavior',
    title: '2. Antisocial Behavior',
    clinicalTerm: 'Instrumental Exploitation & Material Gain',
    description:
      'Deliberate violation of social norms, financial exploitation, lack of remorse, and Machiavellian manipulation for material and emotional gain.',
    observedBehaviors: [
      'Extorted money from Nate ("pay her") just to have relationship conversations',
      'Instructed Tommy to stay quiet so it wouldn\'t "fuck up her ability to get Nate\'s money"',
      'Employed "Truth-Lies" and deceit to manipulate financial and emotional assets',
      'Showed total lack of guilt or remorse when taking Nate\'s money'
    ],
    evidenceFromCase: [
      'Case Study: "In a highly significant disclosure... instructed Tommy not to speak to Nate because it would fuck up her ability to get Nate\'s money."',
      'Lyrics: "I had to pay a toll just to look you in the eye... Empty my pockets while you do another shot."'
    ],
    severityScore: 96,
    color: '#f87171'
  },
  {
    id: 'egosyntonic-sadism',
    title: '3. Egosyntonic Sadism',
    clinicalTerm: 'Pleasure & Relief Derived from Target Suffering',
    description:
      'Unlike standard narcissism where harm is an indirect side effect, Malignant Narcissism involves deriving direct power, satisfaction, and psychological "relief" from degrading and breaking the target.',
    observedBehaviors: [
      'Felt "relief" and pride upon seeing Nate broken, confused, and hollowed out',
      'Used emotional torture as a primary tool to restore her own fragile sense of superiority',
      'Flipped the script dynamically to ensure Nate felt maximal guilt and distress',
      'Deriving pleasure from Nate\'s loss of footing'
    ],
    evidenceFromCase: [
      'Lyrics (Female Confession): "I watched you lose your footing, watched you hollow out inside. And the relief I felt in breaking you was something I couldn\'t hide."',
      'Case Study: "Her emotional torture was a primary tool for restoring her sense of superiority through the target\'s suffering."'
    ],
    severityScore: 98,
    color: '#c084fc'
  },
  {
    id: 'paranoid-orientation',
    title: '4. Paranoid Orientation',
    clinicalTerm: 'Manufactured Enemies & Projection',
    description:
      'Belief that the world and relationships are hostile, leading to preemptive attacks, isolation tactics, and projecting her own narcissistic traits onto exes and partners.',
    observedBehaviors: [
      'Convinced Nate that Tommy was a "killer in the night" to isolate him in fear',
      'Claimed all her exes were "narcissists" and "sociopaths" (textbook paranoid projection)',
      'Secretly communicated with Tommy while convincing Nate to fear him',
      'Launched preemptive smear campaigns out of fear of being exposed'
    ],
    evidenceFromCase: [
      'Case Study: "Sabrina\'s habit of projecting her own traits onto others—specifically citing her ex-partner as a narcissist—serves as a textbook example of paranoid projection."',
      'Lyrics: "You told me Tommy was a threat... to keep me isolated in a paranoid spotlight."'
    ],
    severityScore: 90,
    color: '#38bdf8'
  }
];

export const SONG_VERSES: LyricVerse[] = [
  {
    id: 'verse-1-male',
    speaker: 'Male (Nate)',
    sectionName: 'Verse 1: The Initial Hook',
    lyrics: [
      'You came in sweet, all soft at the seams',
      'Said you saw my wreck and you knew how to redeem em',
      'Hudson corner store, boxes in a pile',
      'You smiled for the block then you cut me with that smile',
      'Picking up trash like your time is free, but it costs me so',
      'Free labor looking so altruistic, that\'s the face you chose',
      'You said I need people skills and I was broken',
      'Said you\'d save me from her, now I\'m in the fire and you made it burn worse...'
    ],
    psychologicalNote:
      'Highlights the initial Communal Narcissist mask ("altruistic" public persona) juxtaposed against the private, subtle cuts and covert superiority.',
    keyConcepts: ['Love Bombing', 'Communal Mask', 'Fixer Trap']
  },
  {
    id: 'pre-chorus-male',
    speaker: 'Male (Nate)',
    sectionName: 'Pre-Chorus: The Scheme',
    lyrics: [
      'You talk like a saint, but you move like a scheme',
      'Turn my name to smoke, then you slide out unseen',
      'You bend every room till the truth won\'t stay',
      'And every "I love you" comes out like bait...'
    ],
    psychologicalNote:
      'Exposes the covert gaslighting and weaponized affection used as "bait" to trap Nate in the bond.',
    keyConcepts: ['Gaslighting', 'Weaponized Affection', 'Covert Manipulation']
  },
  {
    id: 'chorus-male-1',
    speaker: 'Male (Nate)',
    sectionName: 'Chorus: Devaluation & Triangulation',
    lyrics: [
      'You were sweet at first, sweet at first, now you\'re first to list',
      'Unproved accusations caused by sociopathic exes',
      'Now you\'re scared of me, but I ain\'t got no Tommy gun',
      'And no malevolent motives...',
      'Please, can I get her back?'
    ],
    psychologicalNote:
      'Demonstrates the early confusion and cognitive dissonance in Nate—pleading "can I get her back" while recognizing her false accusations and triangulation with Tommy.',
    keyConcepts: ['Cognitive Dissonance', 'Triangulation', 'Pleading for Supply']
  },
  {
    id: 'verse-2-female-confession',
    speaker: 'Female (Sabrina / Confession)',
    sectionName: 'Verse 2: The Mask Slips (Confession)',
    lyrics: [
      'I came in like gravity, pulled you right out of your orbit',
      'Saw the cracks in your structure and knew just how to exploit it',
      'Hudson corner store, boxes in a pile',
      'I wasn\'t smiling for the block, I was weaponizing that smile',
      'I talked like a saint, but I moved like a scheme',
      'Turned your name into smoke to fuel my own dream...'
    ],
    psychologicalNote:
      'The internal monologue of the Malignant Narcissist admitting that the "saintly smile" was a weaponized tool to extract supply and fuel her grandiosity.',
    keyConcepts: ['Weaponized Altruism', 'Exploitation of Empathy', 'Predatory Intent']
  },
  {
    id: 'female-chorus-breakdown',
    speaker: 'Female (Sabrina / Confession)',
    sectionName: 'Chorus: Egosyntonic Admission',
    lyrics: [
      'I was sweet at first, so sweet at first',
      'Now I look at the wreckage and I know I\'m the worst',
      'You never trust me, even when I\'m right there',
      'Look me in the face, then you act like I\'m not there...'
    ],
    psychologicalNote:
      'Reflects the awareness of the destruction created, while maintaining cold detachment and DARVO execution.',
    keyConcepts: ['Awareness of Harm', 'Egosyntonic Sadism', 'Detached Destruction']
  },
  {
    id: 'verse-3-male-devaluation',
    speaker: 'Male (Nate)',
    sectionName: 'Verse 3: Financial Toll & Tommy Triangulation',
    lyrics: [
      'Look me in the face, then you act like I\'m not there',
      'You tell everybody I\'m a liar with a grin, then you push that soft',
      'Then you get so scared, running paranoid, and my anxiety grows worse',
      'And cars pull over, hoping you won\'t be bought',
      'You call it "helping", but it\'s taking what I got',
      'Empty my pockets while you do another shot',
      'Covert in the daylight, all warmth, no spine',
      'Pessimistic bias is my pain, and a poison shot by shot...'
    ],
    psychologicalNote:
      'Captures the financial extortion ("empty my pockets"), the covert warmth in daylight vs brutal demands in private, and the cumulative "poison shot by shot".',
    keyConcepts: ['Financial Extortion', 'Covert vs Overt Dual Reality', 'Systemic Erosion']
  },
  {
    id: 'verse-4-female-deep-confession',
    speaker: 'Female (Sabrina / Confession)',
    sectionName: 'Verse 4: The Predators Playbook',
    lyrics: [
      'I played the wounded bird in the darkest kind of spot',
      'I came to be the fixer for the wings you said were caught',
      'You wore a saintly mask, the most beautiful and smart',
      'A flawless, sweet communal trap to paralyze my heart',
      'I told my ex stay quiet, to never speak a word',
      'So I could keep your wallet open while playing wounded bird',
      'I gave you little "truth-lies", said you were too good for me',
      'So when the whole thing shattered, you\'d take accountability',
      'I didn\'t want your healing, I didn\'t want a cure',
      'I wanted you dependent, isolated, and unsure',
      'I bent every single room, made you the villain of the play',
      'Smeared your reputation before you had a say',
      'I watched you lose your footing, watched you hollow out inside',
      'And the relief I felt in breaking you was something I couldn\'t hide',
      'I took your empathy and turned it to a leash',
      'I wasn\'t your soulmate, I was acting like a leech...'
    ],
    psychologicalNote:
      'The definitive forensic breakdown of her tactics: "Truth-Lies", keeping the wallet open, DARVO accountability reversal, desire for dependency over cure, smear campaign, and egosyntonic sadism ("relief felt in breaking you").',
    keyConcepts: [
      'Wounded Bird Strategy',
      'Truth-Lies',
      'Financial Supply',
      'Egosyntonic Sadism',
      'Epistemic Theft'
    ]
  }
];

export const NATES_LETTERS: LetterItem[] = [
  {
    id: 'letter-1',
    title: 'The Fortress of Devotion',
    date: 'June 2025',
    theme: 'Love-Bombing & Idealization',
    excerpt:
      'You have a way of deflecting compliments... but my love, you don\'t just wear beauty; you are the very essence of it.',
    fullText:
      'My Dearest Sabrina,\n\nYou have a way of deflecting compliments, brush them off as if you don\'t see what everyone around you feels immediately. But my love, you don\'t just wear beauty; you are the very essence of it. It\'s in the intellectual fire that dances in your eyes when you unravel a complex idea, in the fierce kindness you extend to a world that hasn\'t always been gentle to you.\n\nI see where you\'ve been hurt. I see the scars left by people who didn\'t know how to treasure someone as rare as you. I want to build a fortress around your peace of mind—a sanctuary where you never have to be hypervigilant, where you can rest easy knowing someone is standing guard. I am here for the long haul. We are going to build "The Analytical Kill" together, and we are going to build a life where you never feel unsafe again.\n\nForever Yours,\nNate',
    author: 'Nate',
    annotation:
      'Written during the initial June 2025 idealization phase. Illustrates how Sabrina\'s "wounded bird" narrative successfully activated Nate\'s protector instincts, creating a "fortress of devotion" that she would later exploit.'
  },
  {
    id: 'letter-2',
    title: 'The Paying of the Toll',
    date: 'Autumn 2025',
    theme: 'Cognitive Dissonance & Devaluation',
    excerpt:
      'I spent last night wondering when conversation became something I had to purchase...',
    fullText:
      'Sabrina,\n\nI spent last night wondering when conversation between us became something I had to purchase. You tell me I don\'t understand you, that I\'m broken, that I need "people skills" to even be worthy of sitting across from you. And then you tell me you\'re asking for money because "it\'s the only way you know I\'m serious."\n\nI paid it because I was terrified of losing you. I paid it because you looked at me with those cold eyes and said if I didn\'t, I didn\'t care about your survival. But it feels like I\'m bleeding out, shot by shot. You tell me Tommy is out there, a killer waiting in the dark, and that I have to protect you—and yet I caught glimpses of your screen and saw you messaging him.\n\nWhy do you tell me I\'m the problem when I\'m giving you everything I have?\n\nNate',
    author: 'Nate',
    annotation:
      'Captures the height of active devaluation: financial extortion ("paying a toll"), gaslighting, and the manufactured Tommy paranoia.'
  },
  {
    id: 'letter-3',
    title: 'I Never Stopped Loving You',
    date: 'Spring 2026',
    theme: 'Trauma Bond Peak',
    excerpt:
      'There\'s one thing I can\'t keep inside any longer: I never stopped loving you. My life has a "before you" and "after you"...',
    fullText:
      'Sabrina,\n\nEven after everything—after the arguments that go in circles until I can\'t remember my own name, after the accusations you spread to people we used to call friends—there\'s one thing I can\'t keep inside any longer: I never stopped loving you.\n\nMy life has a "before you" and "after you," and nothing in the "after" has ever felt the same. I know you\'re hurting. I know you\'re terrified. I kept telling myself that if I just held on longer, if I got educated enough on trauma, I could pull you out of the storm. I took responsibility for things I didn\'t do because I thought it would give you peace.\n\nI didn\'t want to lose the girl from Hudson Corner Store. But I\'m drowning.\n\nNate',
    author: 'Nate',
    annotation:
      'Documented in the case study as the peak trauma bond state—neurological addiction and self-blame induced by intermittent reinforcement.'
  },
  {
    id: 'letter-4',
    title: 'Radical Acceptance & The Autopsy',
    date: 'Summer 2026',
    theme: 'Clinical Awakening & Healing',
    excerpt:
      'When I finally opened the DSM and the diagnostic case studies, the fog cleared. You weren\'t a wounded bird I failed to heal—you were a malignant narcissist.',
    fullText:
      'To Myself & To The Truth,\n\nFor a year, I believed I was the villain in a story I gave my soul to fix. I blamed my empathy, my communication, my inability to fix what was broken in her.\n\nThen I studied the psychology. I didn\'t find CPTSD or a traumatized partner who just needed safety. I found Malignant Narcissism. I saw the four pillars written down in black and white: the grandiose false self, the antisocial financial exploitation, the egosyntonic sadism—the fact that she literally felt relief in watching me hollow out—and the paranoid projection.\n\nWe were two people in a storm, but she was the storm. She told Tommy not to talk to me so it wouldn\'t "fuck up her ability to get my money." That single sentence destroyed the romantic fantasy forever.\n\nI am not trauma bonded anymore. I choose epistemic justice. I choose my own reality.\n\nNate',
    author: 'Nate',
    annotation:
      'The final resolution letter marking the complete break of the trauma bond through forensic psychological clarity.'
  }
];

export const PHOTO_VAULT: PhotoArtifact[] = [
  {
    id: 'photo-1',
    title: 'June 2025: Hudson Corner Store',
    caption: 'The initial meeting that started it all. "You came in sweet, all soft at the seams..."',
    date: 'June 2025',
    category: 'Memory',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    note: 'The location referenced in Verse 1 where the initial love-bombing idealization took place.'
  },
  {
    id: 'photo-2',
    title: 'The Communal Mask: Volunteer Day',
    caption: 'Public volunteer work used as a saintly halo to deflect accountability.',
    date: 'July 2025',
    category: 'Evidence',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
    note: '"Picking up trash like your time is free... free labor looking so altruistic, that\'s the face you chose."'
  },
  {
    id: 'photo-3',
    title: 'Boxes in a Pile: Autumn Shift',
    caption: 'Transition into active devaluation, financial demands, and emotional distance.',
    date: 'October 2025',
    category: 'Document',
    imageUrl: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=800&auto=format&fit=crop',
    note: 'The moment where financial "tolls" began being extorted.'
  },
  {
    id: 'photo-4',
    title: 'Clinical Case Study Document',
    caption: 'Forensic Psychotherapy report detailing Malignant Trauma Bond mechanics.',
    date: 'May 2026',
    category: 'Document',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop',
    note: 'Section 4: Defining the Malignant Profile & Egosyntonic Sadism.'
  },
  {
    id: 'photo-5',
    title: 'Psychology Study & Awakening',
    caption: 'Books on Narcissistic Personality Disorder, DARVO, and Trauma Bond recovery.',
    date: 'June 2026',
    category: 'Symbolic',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop',
    note: 'Nate\'s deep dive into clinical literature that unlocked his freedom.'
  },
  {
    id: 'photo-6',
    title: 'Summer 2026: Reclaiming Sovereignty',
    caption: 'Walking into epistemic clarity, free from the trauma bond.',
    date: 'Summer 2026',
    category: 'Memory',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    note: 'The final outcome: self-respect, clarity, and emotional independence.'
  }
];

export const DARVO_SCENARIOS: DarvoScenario[] = [
  {
    id: 'scenario-1',
    abuserStatement: '"Why are you bringing up money again? You\'re so greedy and untrusting. After all I\'ve been through with my abusive ex, you make me feel unsafe!"',
    victimTrap: 'Nate apologizes for asking where his savings went, feeling guilty for "triggering her trauma" and offering even more financial assistance.',
    darvoBreakdown: {
      deny: 'Refuses to address the financial extortion or where the funds went.',
      attack: 'Attacks Nate\'s character ("greedy", "untrusting", "making her unsafe").',
      reverseVictimOffender: 'Frames herself as the traumatized victim while painting Nate as the abusive aggressor.'
    },
    grayRockResponse: '"I hear your perspective, but I am keeping my finances separate going forward. We will not be discussing monetary transfers."'
  },
  {
    id: 'scenario-2',
    abuserStatement: '"You didn\'t respond to my text within 5 minutes. You\'re obviously messaging other women. You\'re just like my sociopath ex!"',
    victimTrap: 'Nate spends hours reassuring her, offering full phone transparency, and feeling ashamed for running a 10-minute errand.',
    darvoBreakdown: {
      deny: 'Ignores her own secret communications with Tommy behind Nate\'s back.',
      attack: 'Accuses Nate of infidelity and sociopathy without evidence.',
      reverseVictimOffender: 'Plays the terrified, betrayed partner to force Nate into defensive submission.'
    },
    grayRockResponse: '"I was busy with an errand. I will not engage in unfounded accusations. Let us speak when things are calm."'
  },
  {
    id: 'scenario-3',
    abuserStatement: '"I had to tell our friends how cold you\'ve been to me! They all agree you\'re manipulating me and using me!"',
    victimTrap: 'Nate panics about his ruined reputation and writes passionate letters begging her to see his love.',
    darvoBreakdown: {
      deny: 'Denies launching a deliberate smear campaign.',
      attack: 'Attacks his standing in the community and among friends.',
      reverseVictimOffender: 'Presents her smear campaign as a courageous act of a victim seeking help.'
    },
    grayRockResponse: '"People can believe what they choose. I know my truth and my intentions, and I am comfortable stepping away."'
  }
];
