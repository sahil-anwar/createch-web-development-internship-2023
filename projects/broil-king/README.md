# Broil King — Frontend Website | Internship Project

A product-focused frontend website created as part of my **Web Development Internship at Createch IT Solutions (SMC) Pvt. Ltd.**, Mingora, Swat, Pakistan. This repository preserves the original internship-era visual design and documents later maintenance improvements.

> **Disclaimer:** This is an independent internship portfolio project, not the official Broil King website and not affiliated with or endorsed by Broil King. Brand names, images, and other third-party materials belong to their respective owners.

## Internship background

| Detail | Information |
| --- | --- |
| Organization | Createch IT Solutions (SMC) Pvt. Ltd. |
| Internship | Web Development Internship Program |
| Period | **1 June – 18 August 2023** |
| Topics covered | HTML, CSS, Bootstrap, graphic design |
| Final assessment | Four web-design projects presented across the internship program |
| Certificate date | 18 August 2023 |

The internship certificate confirms completion of the training program and presentation of four web-design projects. **This repository documents one website project; it does not represent all four assessment projects.**

## About this project

This website showcases a grill-product-themed landing page with branded imagery, navigation, product-focused sections, and interactive UI elements. The original look and content have been retained to document the design and frontend work from the internship period.

### Features

- Multi-section, product-focused landing page
- Navigation and interactive menus
- Responsive layout built around Bootstrap and custom CSS
- Carousels and animations using existing frontend libraries
- Original imagery, typography, and media retained

### Tech stack

- **Core:** HTML5, CSS3, JavaScript
- **Framework:** Bootstrap
- **Existing UI dependencies:** jQuery and carousel/animation libraries used in the original project
- **Hosting:** Static website; no backend or build process required

## Run locally

1. Download or clone this repository.
2. Open a terminal in the project root.
3. Run:

   ```bash
   python -m http.server 8000
   ```

4. Visit **http://localhost:8000**.

Alternatively, open the folder in VS Code and use the Live Server extension. Some original dependencies load from CDNs and need an internet connection.

## Repository structure

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css           # Original styling
│   │   └── improvements.css    # Later responsive/accessibility refinements
│   ├── js/
│   │   ├── main.js             # Original behavior
│   │   └── improvements.js     # Later progressive enhancements
│   ├── img/                    # Original images and icons
│   ├── videos/                 # Original video assets
│   └── Fonts/                  # Original fonts
├── README.md
└── .gitignore
```

## Maintenance improvements (October 2026)

The changes below were made **after** the 2023 internship, not during it:

- Removed forced page reload when resizing the browser window
- Added responsive overflow safeguards and mobile navigation scrolling improvements
- Added lazy loading and asynchronous decoding for noncritical images
- Improved keyboard focus visibility and reduced-motion accessibility
- Added basic metadata and safer external-link attributes
- Kept the original layout, media, and frontend libraries to preserve visual fidelity

## Current limitations

- Some original links may be placeholders rather than working destination pages.
- Cross-browser and mobile-device visual testing is still needed before describing the website as production-ready.
- Existing CDN libraries and large media assets may benefit from a future version/security/performance audit.

## Internship verification

A completion certificate issued by **Createch IT Solutions** on **18 August 2023** documents the internship program. For privacy and authenticity, the certificate is **not included in this public-source repository**; it can be provided separately when appropriate.

## Publication and intellectual property

Before making this repository public, confirm permission to share internship source code, brand graphics, videos, fonts, and other third-party assets. This repository does **not** grant rights to use Broil King trademarks or third-party materials. If public redistribution is not authorized, keep the repository private or publish an approved, asset-cleared case study instead.

## Portfolio description

**Broil King — Frontend Website (Createch IT Solutions Internship, 2023)**  
Created a product-focused frontend website using HTML, CSS, JavaScript, and Bootstrap during a web development internship. Preserved and subsequently improved the original implementation with responsive behavior, accessibility enhancements, and performance-focused maintenance.
