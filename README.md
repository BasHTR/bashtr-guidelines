# BASHtr Transcription Guidelines

Source for [bashtr.github.io/bashtr-guidelines](https://bashtr.github.io/bashtr-guidelines/), the public transcription guidelines of BASHtr (Benchmark for Arabic-script Handwritten Text Recognition).

The site documents conventions for preparing ATR training data from historical Arabic-script manuscripts. 

## Editing the guidelines

The source pages are Markdown files in `docs/`. Add every page to the `nav` section of `mkdocs.yml`;
- `docs/*.md` contains the guideline and resource pages.
- `docs/assets/` contains the logo, favicon, examples images, and decorative marks.
- `docs/downloads/` contains files offered for download; eScriptorium keyboard
- `docs/stylesheets/site.css` contains the complete visual design.
- `docs/javascripts/` contains the image viewer, header actions, and external-link behavior.
- `mkdocs.yml` contains the site settings, navigation, theme options, and asset registration.

The `community.md` page is reserved for conventions that the guidelines explicitly leave unresolved.

### Links

Use relative paths for links between pages:

```md
[Transcription Rules](transcription.md)
[Reading order](community.md#reading-order)
```

External links use normal Markdown syntax. 

### Arabic text

Use a language span for Arabic characters within prose or tables:

```html
<span lang="ar">الحمدالله</span>
```

Use an explicitly right-to-left paragraph for complete transcriptions:

```html
<p lang="ar" dir="rtl">النص هنا</p>
```

### Manuscript examples

Images are stored in `docs/assets/`. Each item on `examples.md` uses one image and one transcription:

```md
<div class="ms-plate" markdown>

![Example 14](assets/example_14.png)

<p lang="ar" dir="rtl">النص هنا</p>

</div>
```

Add new records inside the existing `example-list` wrapper. Keep image names sequential and provide a concise alt label.

### Virtual keyboard

`docs/downloads/bashtr-escriptorium-keyboard.json` contains the eScriptorium keyboard configuration. it synchronized with the non-standard characters required by the [Character Inventory](https://bashtr.github.io/bashtr-guidelines/characters/). Characters available on a standard Arabic keyboard are out.

## Building
Built with [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/). Hosted on [GitHub Pages](https://pages.github.com/).
