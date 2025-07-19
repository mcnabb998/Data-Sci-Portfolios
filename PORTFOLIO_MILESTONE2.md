# Portfolio Milestone 2 Plan

## 1. Site Architecture
- **Root**: `index.html` as landing page
- **About**: `about.md` with personal story and skills
- **Projects**: each project in `projects/<project-name>/` containing `index.md` and assets
- **Assets**: `assets/css/style.css`, `assets/img/`, `assets/js/`
- **Extras**: `contact.html` for a dedicated contact page

Suggested navigation order: **Home → About → Projects → Experience → Contact**

## 2. Design Starter
```css
:root {
  --color-bg: #ffffff;
  --color-text: #333333;
  --color-accent: #008080;
  --font-stack: 'Segoe UI', Arial, sans-serif;
}
```
- **Hero Copy**: "Data-driven solutions for real-world impact."
- **Footer Snippet**:
```html
<footer>
  <p>Email me at <a href="mailto:[email]">[email]</a></p>
  <a href="https://www.linkedin.com/in/username">LinkedIn</a> |
  <a href="https://github.com/username">GitHub</a>
</footer>
```

## 3. About Section Draft
I specialize in turning messy datasets into clear business insights. After years of honing my analytical skills, I've built models that help organizations in healthcare and fintech make data-backed decisions faster. I enjoy collaborating with multidisciplinary teams and thrive when dissecting complex problems. When I'm not wrangling code, you'll find me sketching user flows or documenting findings so stakeholders can understand exactly what the data is saying. My goal is to contribute pragmatic, high-impact solutions that streamline operations and uncover new opportunities.

## 4. Todo Checklist
- [x] Set up GitHub Pages branch and basic site skeleton (1 hr)
- [x] Create `index.html`, `about.md`, and project subfolders (1 hr)
- [x] Draft copy for projects and contact page (2 hrs)
- [x] Style with CSS variables and responsive layout (2 hrs)
- [x] Populate project pages with summaries and links (2 hrs)
- [ ] Final proofread and deploy to GitHub Pages (1 hr)

## 5. Optional Stretch Goals
- Implement a dark-mode toggle using simple JavaScript
- Add a tag-based filter for projects
- Set up Google Analytics for basic traffic stats
