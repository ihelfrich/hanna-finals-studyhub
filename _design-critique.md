# Design Audit: StudyHub Index

**Auditor:** Design Audit by Gemini  
**Focus:** Cognitive load reduction and focus-state maintenance for high-stress finals prep.

## 1. Visual Weaknesses & Noise (Prioritized)

1.  **Shortcut Paralysis (Cram-mode Grid):** The "🚨 Cram-mode shortcuts" section presents 11 distinct, high-contrast buttons. For a student in "panic mode" (e.g., 2 hours before the IR exam), this creates an "Paradox of Choice." The brain has to scan 11 disparate icons and descriptions to find the single most relevant link. The lack of a "Primary Action" versus "Supporting Materials" hierarchy is a major stress trigger.
2.  **Information Obfuscation (Strategy Tabsets):** The `::: {.panel-tabset}` for core study strategies (IR, ECON, ACCT) is a classic anti-pattern for crisis management. It hides 75% of the relevant plan behind clicks. A stressed student needs a continuous, scrollable vertical flow where they can see the whole journey. Clicking tabs increases cognitive friction and the feeling of "hidden" tasks.
3.  **Redundancy Loop & Anchor Fatigue:** The Hero, Countdown, and Quick-grid all provide paths to the "IR Exam Day Path." While intent is clear, the visual repetition creates "banner blindness." The user's eye begins to skip large sections of the page because they look like links they've already seen, potentially missing new or critical tools like the "Source Check" or "Decision Tree."
4.  **Fragmented Grid Language:** The site uses four different card styles (Countdown, Cram-button, Quick-tile, Stat-row) with varying border-radii (some 10px, some 12px, some 14px), padding, and hover states. This lack of a unified "card language" makes the interface feel like a collection of separate plugins rather than a single, reliable instrument. Consistency breeds trust; inconsistency breeds subtle anxiety.
5.  **Metric Distraction (Stat-row):** Showing "50K words written" or "17,000 words research" is a vanity metric. To a student who hasn't started studying, it’s intimidating; to a student in the middle of it, it's irrelevant data. It takes up a full horizontal strip of prime real estate that could be used for an "Active Task" tracker or a countdown timer.

## 2. Concrete CSS & Layout Recommendations

1.  **Adaptive Course Elevation:** Use the subject's primary color systematically. Instead of hard-coded red buttons for everything, tint the UI based on the *active* final.
    ```css
    /* Subject-specific focus states */
    .subject-active-ir { --focus-color: #990000; --focus-bg: rgba(153,0,0,0.03); }
    .subject-active-econ { --focus-color: #2e7d32; --focus-bg: rgba(46,125,50,0.03); }
    .card-focus { border-left: 5px solid var(--focus-color); background: var(--focus-bg); }
    ```
2.  **Replace Tabs with Vertical Step-Paths:** Convert the Strategy tabsets into a scrollable feed. Use a vertical "timeline" line to connect the study steps. This visualizes the "6-step path" as a physical distance to be covered, which is mentally easier to process than a list.
3.  **Standardize the "Atom":** Enforce a single `var(--card-radius: 16px)` and `var(--card-padding: 1.5rem)` across all grids. This provides a "calm" visual rhythm.
4.  **Tiered Cram Shortcuts:** Categories the 11 buttons. Group "The Minimums" (5-min versions), "The Drill" (Timed tests), and "The Bank" (Sentence/Problem banks). Use size to indicate priority—the "Smallest Version" should be twice as large as the others.
5.  **Progress-Tracking Borders:** Use a partial border (linear-gradient) to indicate how much of a section is "done."
    ```css
    .progress-card {
      border: 1px solid var(--bs-border-color);
      border-bottom: 4px solid #ddd;
      position: relative;
    }
    .progress-card::after {
      content: ''; position: absolute; bottom: -4px; left: 0;
      width: 65%; height: 4px; background: #990000; /* 65% complete */
    }
    ```
6.  **De-emphasize Distant Deadlines:** On the day of the IR exam, reduce the opacity of ACCT/ECON countdowns to 0.4. This creates "tunnel vision" on the immediate threat, which is what a stressed student actually wants.
7.  **High-Contrast Typography for Math:** For ECON/ACCT, increase the font-weight of formulas and numbers. Use a dedicated "Formula Font" (like JetBrains Mono) with a larger base size (1.2rem) to prevent reading errors under fatigue.
8.  **Sticky Mobile "Next Stop":** Implement a fixed bottom button on mobile that reads "Resume: [Next Logical Step]." It should bypass the index entirely and take them to where they left off in their `localStorage` state.

## 3. Recommended Design Patterns

1.  **Linear’s "Active Cycle" Focus:** Linear excels at showing only what matters *now*. The StudyHub should have an "Active Target" section at the very top (replacing the Stats) that pulls one specific task from the "Tonight's Plan" page and presents it as a single, large card with a "Start Timer" button.
2.  **Brilliant’s "Path-to-Mastery":** Instead of a grid of tiles, use Brilliant’s concept of a "Learning Path." The 6-step sequences for IR and ACCT should be visualized as nodes on a map. This turns "studying" into "leveling up," which provides a dopamine hit that helps counteract cortisol-driven stress.
3.  **Anki’s "Knowledge Maturity" Widget:** Add a small floating pill in the corner that shows "facts mastered / facts remaining" based on the Flashcards page. Seeing the "Remaining" number go down is the best stress-reduction tool available.

---
*Design Audit by Gemini*
