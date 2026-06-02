# Hannes F. Wagner — Personal Academic Website

A clean, static HTML/CSS academic website. No build tools, no frameworks — just files you can edit directly in any text editor or on GitHub.

## Structure

```
.
├── index.html              ← Home page
├── pages/
│   ├── research.html       ← Publications & working papers
│   ├── media.html          ← Press & podcast coverage
│   ├── teaching.html       ← Courses
│   └── data.html           ← Research datasets
├── css/
│   └── style.css           ← All styles (edit here for design changes)
├── js/
│   └── nav.js              ← Active nav highlighting
├── cv/
│   └── cvHannesWagner.pdf  ← Your CV (replace this file)
└── img/
    └── photo.jpg           ← Your headshot (replace this file)
```

## How to deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `hanneswagner-site` or just `<yourusername>.github.io`)
2. Push all these files to the `main` branch
3. Go to **Settings → Pages → Source** and select **GitHub Actions**
4. The workflow at `.github/workflows/deploy.yml` will handle deployment automatically
5. Your site will be live at `https://<yourusername>.github.io/<repo-name>/`

Or if you name the repo `<yourusername>.github.io`, it will be at `https://<yourusername>.github.io/`.

## How to edit content

### Add a new paper (research.html)
Copy an existing `<li class="paper-item">` block and fill in:
- `<a href="...">` — SSRN or journal link
- Paper title
- `.paper-meta` — coauthors
- `.paper-venue` — journal name and year
- `.paper-award` badges (optional, delete if not needed)

### Add a media item (media.html)
Copy a `<a class="media-card">` block and fill in:
- `href` — link to the article
- `.media-outlet` — publication name
- Description text and date

### Add a course (teaching.html)
Copy a `<li class="course-item">` block and fill in:
- `.course-code` — course number or `—`
- `.course-name` — course title (wrap in `<a>` if you have a course page)
- `.course-details` — institution and level

### Update your CV
Replace `cv/cvHannesWagner.pdf` with your current CV file (keep the same filename, or update the links in each HTML file).

### Update your photo
Place your headshot at `img/photo.jpg` and update the `<img src="...">` in `index.html`.

### Change colors or fonts
Open `css/style.css` and edit the CSS variables at the top of the file:
```css
:root {
  --accent: #7c3d2a;   /* main color — currently deep terracotta */
  --link:   #2e5987;   /* link color */
  /* etc. */
}
```

## Custom domain (optional)

If you want to use `hannesfwagner.com` instead of the GitHub Pages URL:
1. Add a file called `CNAME` in the root with just your domain: `hannesfwagner.com`
2. Update your domain's DNS to point to GitHub Pages (see GitHub docs)
