# Repository Guidelines

## Project Structure & Module Organization
This is a Jekyll static site for GitHub Pages. Key locations:
- `_config.yml` holds site configuration.
- `_includes/` and `_layouts/` contain shared partials and page layouts.
- `assets/`, `css/`, and top-level content folders (e.g., `Blog/`, `Projects/`, `contact-me/`) hold site content and static assets.
- `_site/` is the generated output (do not edit by hand).

## Build, Test, and Development Commands
- `bundle install` installs the Ruby gem dependencies.
- `bundle exec jekyll serve` builds the site and runs a local dev server with live rebuilds.
- `bundle exec jekyll build` generates the static site into `_site/`.

## Coding Style & Naming Conventions
- Indentation: tabs are preferred over spaces (see `readme.md`).
- Keep file names descriptive and URL-friendly (e.g., `contact-me/`, `decklist-generator/`).
- Follow Jekyll conventions for layouts and includes (use descriptive partial names in `_includes/`).

## Testing Guidelines
No automated tests are defined in this repository. Validate changes by running the site locally and verifying pages render as expected.

## Commit & Pull Request Guidelines
- Commit messages in history follow a short prefix pattern like `master: update main website`. Keep messages concise, present-tense, and scoped.
- For pull requests, include: a brief summary, screenshots for UI changes, and links to any related issues.

## Configuration Tips
- Keep `_site/` as a build artifact; avoid committing manual edits there.
- If upgrading Jekyll or plugins, update `Gemfile` and run `bundle update`.
