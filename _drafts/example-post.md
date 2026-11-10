---
title: "Making an AI admin assistant enterprise-safe"
description: "Four guards every question passes before our agent answers it."
tags: [Agentic AI, Security]
---

This is a **draft** and won't be published. To publish a post, move a file like
this one into `_posts/` and name it `YYYY-MM-DD-your-title.md`.

Preview drafts locally with:

```bash
bundle exec jekyll serve --drafts
```

## A heading

Write in plain Markdown — headings, lists, links, `inline code`, images and
fenced code blocks all work.

```kotlin
suspend fun getTeamMembers(teamId: TeamId, actor: User): List<Member> =
    authz.requireFieldAccess(actor, teamId) { repo.members(teamId) }
```
