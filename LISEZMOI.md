# Avantage — version installable

Ce dossier contient l'application prête à être mise en ligne. Une fois hébergée, elle s'installe
sur Android et iPhone comme une vraie application (icône, plein écran, fonctionnement hors connexion).

## Fichiers
- `index.html` : l'application
- `manifest.webmanifest` : nom, couleurs et icônes de l'application
- `sw.js` : permet le fonctionnement hors connexion
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` : icônes
- `pdf.min.mjs`, `pdf.worker.min.mjs` : lecteur PDF (bibliothèque libre pdf.js) utilisé pour importer les convocations dans « Mes matchs »

Tous les fichiers doivent rester ensemble, à la racine du même dossier.

## Mise en ligne gratuite avec GitHub Pages (≈ 10 min)
1. Crée un compte sur https://github.com (gratuit).
2. Clique sur **New repository**, nomme-le par exemple `rugby-arbitrage`, coche **Public**, puis **Create repository**.
3. Sur la page du dépôt : **Add file → Upload files**, glisse **tous les fichiers de ce dossier**, puis **Commit changes**.
4. Va dans **Settings → Pages**. Dans « Branch », choisis `main` et `/ (root)`, puis **Save**.
5. Après une à deux minutes, l'adresse s'affiche : `https://TON-PSEUDO.github.io/rugby-arbitrage/`.

Alternative encore plus simple : https://app.netlify.com/drop — glisse le dossier entier, l'adresse est créée immédiatement.

## Installation sur le téléphone
- **Android (Chrome)** : ouvre l'adresse, puis menu ⋮ → **Installer l'application** (ou « Ajouter à l'écran d'accueil »).
- **iPhone / iPad (Safari obligatoirement)** : ouvre l'adresse, bouton **Partager** → **Sur l'écran d'accueil**.
- **Ordinateur (Chrome / Edge)** : icône d'installation à droite de la barre d'adresse.

Après la première ouverture, l'application fonctionne sans réseau.

## Mettre à jour
Remplace `index.html` et `sw.js` par les nouvelles versions sur GitHub (Upload files).
Les téléphones récupèrent la mise à jour à la prochaine ouverture avec du réseau.

## Progression
La progression est enregistrée dans le téléphone (stockage du navigateur). Elle n'est pas
synchronisée entre appareils : utilise **Paramètres → Exporter / Importer** pour la transférer.
Sur iPhone, l'application installée et Safari ont chacun leur propre progression.
