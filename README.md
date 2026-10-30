# Createch IT Solutions — Web Development Internship Portfolio (2023)

A collection of **two currently available frontend projects** from my web development internship at **Createch IT Solutions (SMC) Pvt. Ltd.**, completed **1 June – 18 August 2023**.

The internship certificate records training in **HTML, CSS, Bootstrap, and graphic design**, and notes that **four web-design projects** were presented at the final assessment. **Only two project source archives are currently included in this repository**; this repository does not claim to contain all four.

## Included projects

| Project | Description | Open locally |
| --- | --- | --- |
| [Broil King](projects/broil-king/) | Branded product-focused frontend with visual sections and interactive components | `projects/broil-king/index.html` |
| [Botiga](projects/botiga/) | Multi-page storefront interface with shop, blog, contact, profile, and cart pages | `projects/botiga/index.html` |

## Repository structure
```text
Createch_Internship_2023/
├── README.md
├── .gitignore
├── projects/
│   ├── broil-king/
│   │   ├── index.html
│   │   ├── assets/
│   │   └── README.md
│   └── botiga/
│       ├── index.html
│       ├── botiga.html
│       ├── shop.html, blog.html, contact.html, profile.html, cart.html
│       ├── style.css
│       ├── enhancements.css
│       ├── enhancements.js
│       └── README.md
└── docs/
    └── PORTFOLIO_SUMMARY.md
```

## How to run.
These are static frontend projects. Open each project's `index.html` in a browser, or serve the repository locally:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000/projects/broil-king/` or `http://localhost:8000/projects/botiga/`.

## Original work and later maintenance
The projects originate from internship-era source files. A later **2026 maintenance pass** was made to preserve the existing appearance while improving compatibility, mobile responsiveness, accessibility, and code organization. These later fixes should not be interpreted as features delivered during the 2023 internship. See individual project READMEs for details.

## Limitations and publishing rights
These are frontend demonstrations, not complete production commerce systems. Brand names, images, fonts, and other assets may be owned by third parties or the internship organization. **Confirm authorization to publicly distribute the source and assets** before making the repository public. Until then, keep the repository private.
