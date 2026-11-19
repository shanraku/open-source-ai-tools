# Open Source AI Tools

**Discover tools. Create more.** A community-driven directory to help everyone discover AI tools for writing, coding, research, images, video, audio and productivity.

> **Principle:** Maximum Freedom. Minimum Restrictions. Unlimited Possibilities.

This repository is an independent open-source project. It is not affiliated with, sponsored by, or endorsed by any listed AI service.

## Features

- Search tools by name, category, description and keywords.
- Filter by category and access model (Free, Freemium, Paid).
- Sort by featured order, name or curated popular picks.
- Responsive layout for phones, tablets and desktops.
- Community tool submissions through GitHub Issues.
- No account, tracking script, API key or backend required for the directory to run.
- Accessible controls, semantic markup and reduced-motion support.

## Run locally

No build step or package installation is required.

1. Clone this repository.
2. Open `index.html` in a browser, or serve the folder with any static file server.
3. Edit the tool list in `app.js`.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Add or update a tool

For a quick local change, add an object to the `tools` array in `app.js`:

```js
{
  name: "Example AI",
  letter: "E",
  category: "Writing",
  access: "Freemium",
  description: "A short, factual description of the tool.",
  url: "https://example.com/",
  popular: 50
}
```

Allowed categories: `Writing`, `Coding`, `Image`, `Video`, `Research`, `Productivity`, `Audio`.

Access labels: `Free`, `Freemium`, `Paid`. Pricing changes frequently; verify the official pricing page before changing a label. The popular score is a manually curated display order, not a live usage metric.

You can also submit a tool using the **Suggest a tool** link on the site. Maintainers review submissions before merging them.

## Project structure

- `index.html` — page structure and metadata
- `styles.css` — responsive visual design
- `app.js` — directory data, filtering and rendering
- `.github/ISSUE_TEMPLATE/tool_submission.yml` — structured tool submissions

## Quality and safety

- External links open with `noopener noreferrer`.
- User-submitted content is not rendered directly; directory text is HTML-escaped.
- Do not add API keys, passwords, access tokens or private data.
- Do not claim a tool is free, safe, private or endorsed without reliable evidence.
- Respect each service's terms, trademarks and content licenses.
- This directory does not process payments or guarantee the availability of third-party services.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Please submit factual corrections and useful tools with official links.

## License

The source code is released under the MIT License. See [LICENSE](LICENSE). Third-party product names and trademarks remain the property of their respective owners.
