# Site Web Tourisme Banfora

Ce projet est un site web statique présentant les attractions touristiques de la ville de Banfora, Burkina Faso.

## Structure du Projet

```
banfora-tourisme/
│
├── README.md                 # Ce fichier
├── index.html                # Page d'accueil
├── patrimoine.html           # Liste des sites patrimoniaux
├── reservation.html          # Formulaire de réservation d'hôtel
├── galerie.html              # Galerie photos
├── site1.html                # Page dédiée au site 1 (ex: Cascades de Karfiguéla)
├── site2.html                # Page dédiée au site 2 (À créer sur le modèle de site1.html)
├── site3.html                # Page dédiée au site 3 (À créer)
├── ... (jusqu'à site10.html pour les 10 sites patrimoniaux)
│
├── css/
│   └── style.css             # Feuille de style principale
│
├── js/
│   └── script.js             # Scripts JavaScript (menu hamburger, lien actif)
│
├── img/
│   ├── logo.png              # Logo du site (À remplacer)
│   ├── bg.jpg                # Image de fond commune (Optionnelle, à ajouter si désirée)
│   ├── placeholder_patrimoine.jpg # Placeholder pour la page d'accueil (À remplacer)
│   ├── placeholder_galerie.jpg    # Placeholder pour la page d'accueil (À remplacer)
│   ├── placeholder_hotel.jpg      # Placeholder pour la page d'accueil (À remplacer)
│   ├── .placeholder          # Fichier vide pour assurer la création du dossier img
│   │
│   ├── heritage/             # Images des sites patrimoniaux (miniatures et bannières)
│   │   ├── cascades_karfiguela_thumb.jpg  (Exemple, à remplacer)
│   │   ├── cascades_karfiguela_banner.jpg (Exemple, à remplacer)
│   │   ├── domes_fabedougou_thumb.jpg   (Exemple, à remplacer)
│   │   ├── domes_fabedougou_banner.jpg  (Exemple, à remplacer)
│   │   ├── lac_tengrela_thumb.jpg       (Exemple, à remplacer)
│   │   ├── lac_tengrela_banner.jpg      (Exemple, à remplacer)
│   │   ├── placeholder_thumb.jpg        (Placeholder, à utiliser/remplacer)
│   │   ├── placeholder_banner.jpg       (Placeholder, à utiliser/remplacer)
│   │   └── .placeholder        # Fichier vide pour assurer la création du dossier
│   │
│   └── galerie/              # Images pour la galerie (miniatures et grandes)
│       ├── image1_thumb.jpg    (Exemple, à remplacer)
│       ├── image1_large.jpg    (Exemple, à remplacer)
│       ├── ... (autres images)
│       └── .placeholder        # Fichier vide pour assurer la création du dossier
│
└── fonts/  (facultatif)      # Pour polices personnalisées (dossier à créer si besoin)
```

## Instructions de Configuration et Personnalisation

1.  **Images Placeholders :**
    *   **Logo :** Remplacez `img/logo.png` par le logo de votre site. Dimensions suggérées : environ 150x50 pixels, mais ajustable dans `css/style.css` (`header .logo img`).
    *   **Image de fond :** Si vous souhaitez une image de fond commune, nommez-la `bg.jpg`, placez-la dans `img/`, et assurez-vous que la classe `common-background` est sur la balise `<body>` de chaque page HTML. Le style est déjà présent dans `css/style.css`.
    *   **Images de la page d'accueil :** Remplacez `img/placeholder_patrimoine.jpg`, `img/placeholder_galerie.jpg`, `img/placeholder_hotel.jpg` par des images attrayantes pour les liens rapides.
    *   **Images du patrimoine :** Pour chaque site sur `patrimoine.html` et pour chaque page de site dédiée (`siteX.html`), vous aurez besoin d'une image miniature (ex: `img/heritage/nom_du_site_thumb.jpg`) et d'une image bannière (ex: `img/heritage/nom_du_site_banner.jpg`). Mettez à jour les chemins dans les fichiers HTML correspondants.
    *   **Images de la galerie :** Ajoutez vos photos dans `img/galerie/`. Prévoyez une version miniature (`*_thumb.jpg`) et une version plus grande (`*_large.jpg`) si vous utilisez un effet Lightbox. Mettez à jour les chemins dans `galerie.html`.

2.  **Contenu Textuel :**
    *   Modifiez les textes (titres, descriptions, paragraphes) sur `index.html`, `patrimoine.html` (noms des sites), `reservation.html`, `galerie.html` (titres/descriptions des images si Lightbox).
    *   **Pages des sites patrimoniaux :** Créez les fichiers `site2.html` à `site10.html` (ou autant que nécessaire) en dupliquant et adaptant `site1.html`. Remplissez chaque page avec la description, l'histoire, et les informations pratiques du site concerné.

3.  **Styles CSS :**
    *   Les couleurs principales, polices, etc., sont définies comme variables CSS au début de `css/style.css`. Vous pouvez les ajuster facilement pour changer l'apparence globale du site.

4.  **Galerie d'images interactive (Lightbox) :**
    *   La page `galerie.html` est prête à intégrer une librairie comme [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/). Pour l'activer :
        *   Téléchargez Lightbox2 et placez ses fichiers CSS et JS dans votre projet (ou utilisez un CDN).
        *   Décommentez les liens vers Lightbox CSS dans `<head>` de `galerie.html` et le script JS avant la fin de `</body>`.
        *   Assurez-vous que vos liens d'images dans `galerie.html` ont les attributs `data-lightbox` et `data-title` corrects.

5.  **Formulaire de Réservation :**
    *   Le formulaire dans `reservation.html` est un template HTML/CSS. Pour qu'il envoie réellement des données (par email, vers une base de données), vous devrez implémenter une logique backend (avec PHP, Node.js, Python/Flask, etc.) ou utiliser un service tiers comme [Formspree](https://formspree.io/) ou les formulaires Netlify si vous hébergez sur Netlify.

## Pages à Créer/Compléter (Minimum)

*   `site2.html`
*   `site3.html`
*   `site4.html`
*   `site5.html`
*   `site6.html`
*   `site7.html`
*   `site8.html`
*   (Au moins 8 pages au total, donc 2 pages de sites supplémentaires si on compte les 4 pages principales + 10 sites = 14 pages. Si c'est 8 pages au total incluant les sites, alors il faut moins de pages de sites.)
    *L'énoncé demande "au moins 8 pages Web présentes" et "un minimum de dix sites patrimoniaux", chaque site ayant sa page. Donc : 1 (Accueil) + 1 (Patrimoine) + 1 (Réservation) + 1 (Galerie) + 10 (Sites) = 14 pages.* Il faudra donc créer `site2.html` à `site10.html`.

## Visualisation

Ouvrez le fichier `index.html` dans un navigateur web pour voir le site.
