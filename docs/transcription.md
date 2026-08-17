# Transcription Rules

These rules govern the transcription of manuscript text. Unicode mappings are listed in the [Character Inventory](characters.md); decisions involving lines and regions are covered in [Layout & Segmentation](layout.md).

## Diacritics

- Omit all vowel marks: *fatḥa*, *kasra*, *ḍamma*, *sukūn*, the *tanwīn* series, *waṣla*, and *maddah* when it is not part of <span lang="ar">آ</span>.
- Omit *shadda*. Its inconsistent use in manuscripts prevents reliable annotation; gemination is recovered downstream through lexical and morphological analysis.
- Transcribe consonantal dotting (*iʿjām*) exactly as it appears, including incorrect, eccentric, or scribally inconsistent dotting. Never restore missing dots.
- Ignore crossed-out or struck-through dotting.
- If the dot count is clear but its position is ambiguous, choose the most common member of the letter family. If the dot count is unclear, use the appropriate undotted skeleton: <span lang="ar">ٮ</span>, <span lang="ar">ٯ</span>, or <span lang="ar">ں</span>. Do not guess.

## Hamza

Use a precomposed carrier-and-hamza character where one exists:

| Form | Character | Code point |
| --- | --- | --- |
| Hamza above alif | <span lang="ar">أ</span> | `U+0623` |
| Hamza below alif | <span lang="ar">إ</span> | `U+0625` |
| Hamza on waw | <span lang="ar">ؤ</span> | `U+0624` |
| Hamza on *yāʾ* | <span lang="ar">ئ</span> | `U+0626` |
| Alif with madda | <span lang="ar">آ</span> | `U+0622` |

- Use <span lang="ar">ء</span> (`U+0621`) for standalone hamza with no carrier.
- Do not supply hamza when none is present on the page.
- For Persian high hamza or raised hamza above a non-standard carrier, encode the base letter followed by combining hamza above (`U+0654`) only when it is clearly present as a raised mark. Otherwise, treat it as ordinary hamza.

## Numerals

- Transcribe numerals as Western Arabic digits `0-9` (`U+0030-U+0039`).
- Transcribe abjad numerals, or letters used as numerical values, as their letter forms. Recover their numerical function downstream.

## Spacing and justification

- Follow the word boundaries in the manuscript and separate words with a typographic space (`U+0020`).
- Do not insert zero-width non-joiners (`U+200C`).
- Do not transcribe *taṭwīl* (`U+0640`) used for justification or aesthetic purposes.

## Ligatures and bound forms

- Transcribe *lām-alif* as <span lang="ar">ل</span> followed by <span lang="ar">ا</span>. Do not use the presentation-form ligature.
- Never use dedicated sacred-phrase presentation forms such as <span lang="ar">ﷲ</span> (`U+FDF2`), <span lang="ar">ﷺ</span> (`U+FDFA`), <span lang="ar">ﷻ</span> (`U+FDFB`), or similar forms.

## Abbreviations, symbols, and sigla

Transcribe any feature that has the appearance of text. The boundary is visual rather than functional: a mark composed of recognizable letter forms or conventional signs enters the transcription.

- Never expand abbreviations. Transcribe the abbreviation mark when it has a visual presence on the page.
- Transcribe scribal sigla such as *ṣaḥḥ* and *naḫḫ*, collation marks, and numerical annotations as text.
- For reference marks (*signes de renvoi*), see [Open Questions](community.md#reference-marks).

## Decorative and non-textual elements

Do not transcribe punctuation, decorative symbols, or non-textual marks such as these:

<div class="ms-plate ms-plate--row" markdown>

![Decorative manuscript mark](assets/decorative_mark_1.png)

![Decorative manuscript mark](assets/decorative_mark_2.png)

![Decorative manuscript mark](assets/decorative_mark_3.png)

</div>

Transcribe text embedded in decoration, diagrams, tables, or illustrations under the same rules. Segment it as its own line or region.

## Deletions, corrections, and damage

Preserve as much legible text as possible. The aim is to maximize usable image-text pairs for training, not to reconstruct the author's intended text.

- Transcribe deleted text when it remains legible.
- Keep an interlinear or marginal correction inline when it does not change the line's vertical extent. Otherwise, transcribe it as a separate line.
- For damage or erasure at approximately word scale, retain the line and skip the illegible portion.
- For large-scale damage, segment the area into multiple lines around the damaged zone.
