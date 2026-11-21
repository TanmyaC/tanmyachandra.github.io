# tanmya.chandra — personal site

Personal profile, blog and references. Built with [Jekyll](https://jekyllrb.com) and deployed to GitHub Pages by a GitHub Actions workflow.

## Edit content

Almost everything is in YAML under `_data/`, so you rarely need to touch HTML:

| What | File |
| --- | --- |
| Name, email, LinkedIn, résumé path | `_config.yml` |
| Diagram under the headline | `_data/hero.yml` |
| Headline stats | `_data/stats.yml` |
| Theme tabs and their diagrams (`guards`, `flow`, `bars`, `sticky`) | `_data/themes.yml` |
| Experience timeline | `_data/experience.yml` |
| Skills + education | `_data/skills.yml` |
| Side projects | `_data/projects.yml` |
| Women in Engineering | `_data/wie.yml` |
| References (talks, articles, recommendations) | `_data/references.yml` |

To offer a résumé download, add the PDF under `assets/` and set `resume:` in `_config.yml` (empty hides the links).

## Write a blog post

1. Add `_posts/YYYY-MM-DD-my-title.md`:
   ```markdown
   ---
   title: "My title"
   description: "One-line summary shown on cards."
   tags: [Agentic AI]
   ---
   Markdown goes here.
   ```
2. Commit and push. The **Writing** nav link, the home-page section and the RSS feed (`/feed.xml`) list every post.

Optional front matter: `series: "Backend → AI Engineer · Part 1"` adds a pill, `read_time: 6 min read` shows on cards, and `external_url: https://...` makes the cards link to a post published somewhere else.

Markdown blockquotes (`> like this`) render as sticky notes.

Work in progress goes in `_drafts/` (no date in the filename). Drafts are never published.

## References

Add entries to `_data/references.yml`. Examples are in the file's comments. The `/references/` page and its nav link appear once there's at least one entry, and up to three recommendations (entries with a `quote`) also show on the home page.

## Run locally

```bash
bundle install
bundle exec jekyll serve --livereload   # add --drafts to preview drafts
```

Then open http://localhost:4000.

## Deploy (GitHub Pages)

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Each push to `main` deploys. Name the repo `<username>.github.io` to serve it at `https://<username>.github.io`. Any other name serves it at `https://<username>.github.io/<repo>/`, and the workflow sets the base path for you.
4. Optional custom domain: add it under **Settings → Pages**.
