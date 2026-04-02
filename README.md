# 🏗️ Cédric Peyrat - Portfolio Architecture & 3D
# 🏗️ R&T - Portfolio Architecture & 3D

Site portfolio professionnel pour micro-entrepreneur en architecture d'intérieur et infographie 3D.

## 📋 Description

Ce site présente les services de Cédric Peyrat, architecte d'intérieur et infographiste 3D basé dans les Hautes-Pyrénées (65), à proximité de Bagnères-de-Bigorre et Lourdes.

### Services proposés
- Plans de permis de construire
- Visualisation 3D intérieure
- Modélisation complète d'habitat

## 🚀 Déploiement sur GitHub Pages

### 1. Création du repository

1. Créer un compte sur [GitHub](https://github.com) (si ce n'est pas déjà fait)
2. Cliquer sur le bouton vert **"New"** ou **"New repository"**
3. Remplir les informations :
   - **Repository name** : `cedricpeyrat-architecture` (ou `votrenom.github.io` pour une URL courte)
   - **Description** : (optionnel) "Portfolio architecture et 3D"
   - **Public** : ✅ Cochez cette case (obligatoire pour GitHub Pages gratuit)
   - **Add a README file** : ❌ Ne PAS cocher
4. Cliquer sur **"Create repository"**

### 2. Upload des fichiers

#### Option A - Upload direct (recommandé pour débutants)

1. Sur la page du repository, cliquer sur **"uploading an existing file"**
2. Glisser-déposer les fichiers suivants :
   - `index.html`
   - `style.css`
   - `script.js`
   - `robots.txt`
   - `sitemap.xml`
3. Dans la section **"Commit changes"**, ajouter un message : "Initial commit"
4. Cliquer sur **"Commit changes"**

#### Option B - Git en ligne de commande (pour utilisateurs avancés)

```bash
# Cloner le repository
git clone https://github.com/VOTRE-USERNAME/cedricpeyrat-architecture.git
cd cedricpeyrat-architecture

# Copier les fichiers
cp /chemin/vers/vos/fichiers/* .

# Commit et push
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. Activation de GitHub Pages

1. Dans le repository, cliquer sur l'onglet **"Settings"**
2. Dans le menu de gauche, cliquer sur **"Pages"**
3. Section **"Build and deployment"** :
   - **Source** : Sélectionner **"Deploy from a branch"**
   - **Branch** : Sélectionner **"main"** (ou "master") et **"/ (root)"**
4. Cliquer sur **"Save"**
5. **Attendre 2 à 5 minutes** que le site soit généré
6. L'URL apparaîtra en haut de la page, par exemple :
   ```
   🟢 Your site is live at https://votre-username.github.io/cedricpeyrat-architecture/
   ```

### 4. Nom de domaine personnalisé (Optionnel)

Si vous souhaitez utiliser un domaine personnalisé (ex: `cedricpeyrat.fr`) :

1. Acheter un domaine chez un registrar (OVH, Namecheap, GoDaddy, etc.)
2. Dans GitHub : **Settings > Pages > Custom domain**
3. Entrer : `www.cedricpeyrat.fr`
4. Chez votre registrar, ajouter ces enregistrements DNS :

   **Option A - Enregistrements A :**
   ```
   Type A | @ | 185.199.108.153
   Type A | @ | 185.199.109.153
   Type A | @ | 185.199.110.153
   Type A | @ | 185.199.111.153
   ```

   **Option B - Enregistrement CNAME :**
   ```
   Type CNAME | www | votre-username.github.io
   ```

5. Attendre la propagation DNS (24-48h max)
6. Retourner sur GitHub Pages et cocher **"Enforce HTTPS"**

## 🔍 Indexation Google (SEO)

### 1. Fichier robots.txt

Le fichier `robots.txt` est déjà inclus. Il permet aux moteurs de recherche d'indexer votre site.

```
User-agent: *
Allow: /
Sitemap: https://votre-url.github.io/sitemap.xml
```

⚠️ **Important** : Modifiez l'URL du sitemap avec votre vraie URL après déploiement.

### 2. Sitemap.xml

Le fichier `sitemap.xml` est inclus. Mettez à jour l'URL avec votre domaine :

```xml
<loc>https://votre-url.github.io/</loc>
```

### 3. Google Search Console (OBLIGATOIRE)

Pour être indexé par Google, vous DEVEZ inscrire votre site :

1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Cliquer sur **"Ajouter une propriété"**
3. Choisir **"Préfixe d'URL"**
4. Entrer l'URL complète de votre site (ex: `https://votre-username.github.io/cedricpeyrat-architecture/`)
5. Méthode de validation recommandée : **Fichier HTML**
   - Télécharger le fichier de validation (ex: `google123abc.html`)
   - L'ajouter à votre repository GitHub (à côté de `index.html`)
   - Faire un commit
   - Attendre 2 minutes
   - Cliquer sur **"Valider"** dans Search Console

#### Soumission du sitemap

1. Dans Search Console, aller dans **"Sitemaps"** (menu gauche)
2. Dans le champ, entrer : `sitemap.xml`
3. Cliquer sur **"Envoyer"**

#### Demande d'indexation

1. Dans Search Console, aller dans **"URL inspection"**
2. Entrer l'URL de votre page d'accueil
3. Cliquer sur **"Demander l'indexation"**

### 4. Vérification des balises Meta SEO

Dans `index.html`, vérifiez et personnalisez si besoin :

```html
<!-- Meta description (max 160 caractères) -->
<meta name="description" content="...">

<!-- Canonical URL -->
<link rel="canonical" href="https://votre-url.github.io/">

<!-- Open Graph (pour réseaux sociaux) -->
<meta property="og:title" content="Cédric Peyrat - Architecture & 3D">
<meta property="og:description" content="...">
<meta property="og:image" content="https://votre-url.github.io/images/og-image.jpg">
<meta property="og:url" content="https://votre-url.github.io/">
```

### 5. Référencement local

Le Schema.org JSON-LD est déjà intégré dans le `<head>`. Mettez à jour :
- L'URL du site
- Les coordonnées si elles changent
- La zone d'intervention

## 📸 Remplacement des images placeholders

Les images actuelles sont des placeholders. Pour les remplacer :

### Format recommandé
- **Format** : WebP (avec fallback JPG)
- **Hero** : 1920x1080px minimum
- **Portfolio** : 1200x800px (ratio 3:2)
- **Portrait** : 800x1000px (ratio 4:5)
- **Poids** : Moins de 200KB par image

### Méthode de remplacement

1. Créer un dossier `images/` dans votre repository
2. Uploader vos images
3. Remplacer les placeholders dans `index.html` :

```html
<!-- AVANT -->
<div class="hero__placeholder">
    <i class="fas fa-building"></i>
    <span>Image d'ambiance architecture - 1920x1080px</span>
</div>

<!-- APRÈS -->
<picture>
    <source srcset="images/hero.webp" type="image/webp">
    <img src="images/hero.jpg" alt="Vue 3D d'une maison moderne" loading="eager">
</picture>
```

### Optimisation des images

Utilisez ces outils pour compresser vos images :
- [TinyPNG](https://tinypng.com/) - Compression en ligne
- [Squoosh](https://squoosh.app/) - Outil Google avancé
- [ImageOptim](https://imageoptim.com/) - Pour Mac

## ✅ Checklist avant mise en ligne

### Contenu
- [ ] Remplacer `[Numéro à compléter]` par le vrai SIRET
- [ ] Ajouter une photo professionnelle dans la section "À propos"
- [ ] Remplacer les 6 placeholders du portfolio par de vraies images
- [ ] Ajouter une image hero d'ambiance architecture
- [ ] Personnaliser l'image Open Graph (`og-image.jpg`)

### SEO
- [ ] Mettre à jour l'URL canonique
- [ ] Mettre à jour les URLs dans `robots.txt`
- [ ] Mettre à jour l'URL dans `sitemap.xml`
- [ ] Inscrire le site sur Google Search Console
- [ ] Soumettre le sitemap
- [ ] Demander l'indexation

### Technique
- [ ] Vérifier le responsive sur mobile
- [ ] Tester tous les liens
- [ ] Vérifier que le menu mobile fonctionne
- [ ] Tester le formulaire de contact (si ajouté)

## 🛠️ Personnalisation

### Couleurs

Les couleurs sont définies en variables CSS dans `style.css` :

```css
:root {
    --color-primary: #1e3a5f;      /* Bleu marine */
    --color-primary-dark: #152a45;  /* Bleu marine foncé */
    --color-primary-light: #2c5282; /* Bleu acier */
    --color-secondary: #4a5568;     /* Gris anthracite */
    --color-bg: #f7fafc;            /* Fond blanc cassé */
    --color-bg-alt: #edf2f7;        /* Fond gris clair */
}
```

### Contenu

Pour modifier le contenu, éditez directement le fichier `index.html` :
- Textes de présentation
- Titres des projets
- Informations de contact
- Zone géographique

## 📱 Compatibilité

- ✅ Chrome / Edge (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Mobile iOS / Android

## 📄 Licence

Ce site est la propriété de Cédric Peyrat. Tous droits réservés.

## 🆘 Support

En cas de problème :
1. Vérifier que tous les fichiers sont bien uploadés
2. Vérifier que le repository est en mode "Public"
3. Vérifier que GitHub Pages est activé sur la bonne branche
4. Consulter la [documentation GitHub Pages](https://docs.github.com/fr/pages)

---

**© 2026 Cédric Peyrat - Micro-entrepreneur en architecture et infographie 3D**
