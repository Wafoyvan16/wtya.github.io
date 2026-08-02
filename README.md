# Portfolio Cybersécurité — Jekyll + GitHub Pages

Site statique (Jekyll) prêt à héberger sur GitHub Pages : présentation,
expériences, compétences et writeups de CTF.

## Structure

```
_data/profile.yml       → nom, rôle, bio, stats, réseaux sociaux
_data/experience.yml    → expériences professionnelles (timeline)
_data/skills.yml        → compétences par catégorie
_data/ctfs.yml          → liste de TOUS les CTF joués (avec ou sans writeup)
_writeups/*.md          → un fichier par writeup détaillé (collection Jekyll)
_layouts/                → home, page, writeup, default
_includes/                → nav, head, footer
assets/css/main.css      → tout le style (aucun framework)
assets/js/main.js        → filtre de la table des CTF
ctf.md                   → page /ctf/ listant tous les CTF avec filtres
index.md                 → page d'accueil
```

## 1. Personnaliser le contenu

1. **`_data/profile.yml`** : nom, rôle, tagline, email, liens (GitHub, LinkedIn,
   CTFtime), et stats affichées dans le hero.
2. **`_data/experience.yml`** : une entrée par poste (rôle, entreprise,
   période, résumé, points clés).
3. **`_data/skills.yml`** : vos compétences groupées par catégorie.
4. **`_data/ctfs.yml`** : ajoutez une ligne par CTF joué. Si vous avez rédigé
   un writeup, indiquez son nom de fichier (sans extension) dans le champ
   `writeup:` — il sera automatiquement lié depuis le tableau.
5. **`_writeups/`** : dupliquez un des deux fichiers d'exemple pour chaque
   nouveau writeup. Le nom du fichier devient l'URL
   (`mon-writeup.md` → `/writeups/mon-writeup/`).
6. **CV** : déposez votre CV en PDF dans `assets/` (ex: `assets/cv.pdf`) et
   mettez à jour `cv_url` dans `profile.yml`.

Les deux writeups fournis (`_writeups/*.md`) sont des **exemples fictifs** à
remplacer par vos propres résolutions.

## 2. Tester en local

```bash
bundle install
bundle exec jekyll serve
```

Le site est alors disponible sur `http://localhost:4000`.

## 3. Déployer sur GitHub Pages

Deux options :

### Option A — GitHub Actions (recommandé, inclus dans ce repo)

1. Poussez ce dossier dans un nouveau repository GitHub (public).
2. Dans **Settings → Pages**, section "Build and deployment", choisissez
   **Source: GitHub Actions**.
3. Le workflow `.github/workflows/pages.yml` build et déploie automatiquement
   le site à chaque push sur `main`.

### Option B — Déploiement classique (branche + dossier)

1. Dans **Settings → Pages**, choisissez **Source: Deploy from a branch**,
   branche `main`, dossier `/ (root)`.
2. GitHub Pages utilise nativement Jekyll, aucune action supplémentaire n'est
   nécessaire.

## 4. Configurer l'URL

Dans `_config.yml` :

- Si votre repo s'appelle `VOTRE-PSEUDO.github.io` → laissez `baseurl: ""`
  et mettez `url: "https://VOTRE-PSEUDO.github.io"`.
- Si votre repo a un autre nom (ex: `portfolio`) → mettez
  `baseurl: "/portfolio"` et `url: "https://VOTRE-PSEUDO.github.io"`.

## Licence

Faites-en ce que vous voulez pour votre propre portfolio.
