# tanmya.chandra — personal site

Personal profile, blog and references. Built with [Jekyll](https://jekyllrb.com) and deployed to GitHub Pages by a GitHub Actions workflow.

## Edit content

Almost everything is in YAML under `_data/`, so you rarely need to touch HTML:

| What | File |
| --- | --- |
| Name, email, LinkedIn, résumé path | `_config.yml` |
| Headline stats | `_data/stats.yml` |
| "What I work on" theme tabs | `_data/themes.yml` |
| Experience timeline | `_data/experience.yml` |
| Skills + education | `_data/skills.yml` |
| Side projects | `_data/projects.yml` |
| Women in Engineering | `_data/wie.yml` |
| References (talks, articles, recommendations) | `_data/references.yml` |

Put your résumé at `assets/Tanmya-Chandra-Resume.pdf`, or change `resume:` in `_config.yml`.

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
2. Commit and push. Once the first post exists, a **Blog** nav link, a "writing" section on the home page and an RSS feed (`/feed.xml`) appear on their own.

Work in progress goes in `_drafts/` (no date in the filename). Drafts are never published.

## References

Add entries to `_data/references.yml`. Examples are in the file's comments. The `/references/` page and its nav link appear once there's at least one entry.

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
