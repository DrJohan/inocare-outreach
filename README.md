# Klinik Inocare Community Health Outreach deck

This is a self-contained bilingual Reveal.js presentation prepared for co-organiser meetings. The approved Klinik Inocare logo, Reveal.js, Reveal Chalkboard, Phosphor Icons, DM Sans, and Inter are included locally.

Third-party licence notices are included in `vendor/licenses/` and alongside the Reveal Chalkboard plugin. Verified 16:9 PDF backups are included in `downloads/`.

## Present locally

For the full presentation experience, serve this folder over a small local web server:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080/`.

Controls: arrow keys navigate, `F` enters full screen, `S` opens speaker notes, and `O` opens the slide overview.

## English / Bahasa Malaysia

Use the language selector on the opening slide. It updates every slide without reloading the deck.

You can also choose the starting language in the URL:

```text
http://localhost:8080/?lang=bm
http://localhost:8080/?lang=en
```

## Chalkboard and annotation

The three controls at the top of the presentation provide the same functions as their keyboard shortcuts:

- `C` — annotate directly on the current slide.
- `B` — open or close the full chalkboard.
- `D` — download the drawing data as `chalkboard.json`.

While drawing, `X` and `Y` cycle colours. `Delete` clears the current canvas; `Backspace` deletes all chalkboard drawings. Drawings are stored in session storage for the current browser tab.

## Personalise a meeting

Add URL parameters without editing the deck:

```text
http://localhost:8080/?lang=bm&partner=Masjid%20Example&programme=Program%20Kesihatan%20Komuniti
```

- `lang` accepts `en` or `bm`.
- `partner` updates the “Prepared for / Disediakan untuk” line.
- `programme` updates the main programme title and browser title in either language.

## Deploy to Netlify

Drag this entire folder into Netlify Drop, or connect a repository with this folder as the site root. No build command is required; `netlify.toml` publishes the current directory.

## Image and content governance

The three photographs are AI-generated conceptual outreach images and are visibly labelled as such. They do not depict real patients, participants, co-organisers, or Klinik Inocare events.

The programme modules are intentionally presented as a proposed, configurable format. Confirm the final clinical scope, logistics, participant information, privacy process, and reporting arrangements before each event.
