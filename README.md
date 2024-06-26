# Kasa - Location de Logements

## Description

Kasa est une application web permettant de louer des appartements entre particuliers.

Cette application React est construite avec [Vite](https://vitejs.dev/) et JavaScript, et stylisée avec Sass en respectant la convention BEM. Elle utilise un fichier de données data.json pour afficher les informations utiles des logements.

Homepage preview:
![alt text](Public/homepagePreview.png)

Housing preview:
![alt text](Public/housingPreview.png)

About page preview:
![alt text](Public/aboutPagePreview.png)

## Fonctionnalités

- Routing avec React Router : Navigation entre différentes pages (Home, About, Error, Housing).
- Affichage dynamique des logements : Utilisation d'un fichier de données data.json pour récupérer et afficher les informations des logements.
- Composants réutilisables : Création de composants réutilisables tels que Banner et Collapse.
- Système de notation : Génération dynamique d'étoiles de notation pour chaque logement.
- Stylisation avancée avec Sass et BEM : Utilisation de Sass pour des styles modulaires et de la convention BEM pour une meilleure lisibilité et maintenir du CSS.
- Adaptation responsive : Mise en place de media queries pour une expérience utilisateur optimisée sur différentes tailles d'écran.
- Gestion des erreurs : Redirection vers une page d'erreur personnalisée lorsque l'ID du logement n'existe pas.
- Performances optimisées avec Vite : Utilisation de Vite pour un démarrage de développement rapide et une optimisation de la build.

## Installation

### Prérequis

- Node.js
- Yarn

### Étapes

1. Clonez le dépôt

```bash
git clone https://github.com/votre-utilisateur/kasa-website.git
```

2. Accédez au dossier du projet

```bash
cd kasa-website
```

3. Installez les dépendances

```bash
yarn install
```

## Usage

Pour démarrer le projet en mode développement avec Vite :

```bash
yarn dev
```

## Structure du projet

Nomenclature explicite avec src/main.jsx comme point d'entrée.

## Dépendances

```bash
yarn add sass
```

## TODO

- Cards avec hover animations.
