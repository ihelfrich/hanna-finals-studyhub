# Hanna's Finals — StudyHub (Spring 2026)

A Quarto-rendered study site for Hanna Nio's USC Spring 2026 finals: **IR 362** (Hammad), **ECON 205** (Pérez), and **ACCT 410x** (Leventhal).

**Live site:** https://ihelfrich.github.io/hanna-finals-studyhub/ *(after GitHub Pages activates)*

## What's here

- `index.qmd` — landing dashboard with countdowns and strategy
- `ir362/` — IR 362 framework + four deep-dive research pages (Iran/axis, Abraham Accords, Nash equilibrium, Syria collapse) + cram sheet
- `econ205/` — full study pack: cram sheet, 60-Q active recall bank, two mock finals with keys, killer-traps drills
- `acct410x/` — cheat sheet, mock final, 40-Q trap drills, day-of playbook
- `research/` — raw research markdown (excluded from rendered site; source of truth for the IR 362 deep dives)
- `assets/` — CSS, images

## Build locally

```bash
quarto preview          # serves locally with hot reload
quarto render           # builds to _site/
```

## Deploy

GitHub Actions auto-deploys on push to `main`. See `.github/workflows/publish.yml`.

## Credit

Synthesized May 2026 by Dr. Ian Helfrich + Claude (Opus 4.7) + a swarm of research agents covering Iran, the Abraham Accords, Nash-equilibrium IR theory, and the December 2024 Syrian collapse.
