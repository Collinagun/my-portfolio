# Collin Chiong — Personal Portfolio
## INFR3120 Assignment 1

A four-page responsive portfolio website built with semantic HTML5 and CSS3.

## Live Site
https://collinagun.github.io/my-portfolio/Home.html

## GitHub Repository
https://github.com/Collinagun/my-portfolio

## Pages
- Home.html - Home page
- About.html - Page about intro information about myself
- Projects.html - Page with past projects and assignments
- Contact.html - Page to contact me

## Responsive Design
The site uses three separate CSS files, each loaded via an HTML `<link>` element with a media query. This follows the "separate stylesheets per viewport" approach taught in Week 3.

### Viewport Dimensions and Reasoning

| Stylesheet | Media Query | Why this breakpoint |
|---|---|---|
| `desktop.css` | `min-width: 960px` | Laptop/desktop. Uses a fixed 960px wrapper (standard 960 grid), centred with `margin: auto`. The 960px width is easily divisible by 2, 3, 4, and 6 — allowing for clean column layouts. | 
| `tablet.css` | `481px – 959px` | Tablet. Switches to a fluid 100% wrapper so layout fills the screen. Nav items become evenly spaced (25% each) for easier tapping. Floating elements (aside, figures) stack vertically instead of squeezing content. | 
| `phone.css` | `max-width: 480px` | Smartphone. Nav becomes a vertical stack (one link per row) for larger tap targets. Form inputs and buttons stretch to 100% width. Submit and Reset buttons stack vertically. | 

Every page includes:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">

## Colour Scheme
#8A5A1E (nav), #0F7A3E (hover),  #10526B (h3), #4A3F94 (labels)

Adobe Colour Scheme
#D99437	Warm orange — accents, borders, gradient start
#23B7D9	Teal — headings, form borders, gradient end
#1FA65A	Green — hover states, project borders
#F2E2CE	Cream — page background, cards, aside background
#8176D7	Purple — banner, header/footer, figcaption backgrounds

WCAG Contrast Variants
#D99437	#8A5A1E	Nav bar background (white text on it)
#1FA65A	#0A5C2F	Hover/active nav, form button hover
#23B7D9	#10526B	main h3 section headings on cream background
#8176D7	#4A3F94	Form labels on white background
#F2E2CE    #ffffff    Footer text



## Gradients
Vertical Linear Gradient
Location: #banner on all four pages.

background: #8176D7;                                            /* fallback */
background: linear-gradient(to bottom, #8176D7 0%, #23B7D9 100%);


Angled (45°) Linear Gradient
Location: .subtitle-angled section on Projects.html.

background: #D99437;                                            /* fallback */
background: linear-gradient(45deg, #D99437 0%, #8176D7 100%);



## Testing
- W3C HTML validation: Zero errors
- W3C CSS validation: Zero errors
- W3C Link Checker: 1 url invalid cannot reach
- Spell check: Code Spell Checker extension for VS code
- WAVE accessibility: Minor Issues (footer text issues constantly)



## Semantic HTML5

The site uses HTML5 semantic tags throughout:

- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>` — page structure
- `<figure>` and `<figcaption>` — images with captions (profile photo, project screenshots)
- `<address>` — contact email in the footer
- `<mark>` — used in the aside element
- `<video>` with `controls`, `poster`, `preload` — embedded intro video



## Citations

“HTML Input Type=’Tel.’” Www.W3schools.Com, https://www.w3schools.com/tags/att_input_type_tel.asp. Accessed 12 Oct. 2026.
W3Schools. “HTML Input Type=’Email.’” Www.W3schools.Com, https://www.w3schools.com/tags/att_input_type_email.asp. Accessed 12 Oct. 2026.
“JetBrains Mono - Google Fonts.” Google Fonts, 2025, https://fonts.google.com/specimen/JetBrains+Mono. Accessed 12 Oct. 2026.

Most if not all code is from the lectures.



Collin Chiong
Student of FBIT Faculty — Ontario Tech University
collin.chiong@ontariotechu.net

© 2026 by Collin Chiong. All rights reserved.
