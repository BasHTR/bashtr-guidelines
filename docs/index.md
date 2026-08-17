# Benchmark for Arabic-script Handwritten Text

This website presents the BASHtr transcription guidelines for preparing training data from historical Arabic-script manuscripts. The guidelines define a consistent relation between a manuscript image and the text supplied to an Automatic Text Recognition (ATR) system. They provide a practical reference for producing, validating, and reusing interoperable transcription data.

> **Experimental release:** These guidelines are being tested during the development of the BASHtr corpus.

## Scope

Current work focuses on Arabic and Persian manuscripts. Further languages written in Arabic script will be incorporated as suitable material and expertise become available. The guidelines cover two stages of data preparation:

- **Transcription:** the conversion of manuscript text into a consistent sequence of Unicode characters.
- **Line-level segmentation:** the definition of baselines and line polygons for additions, marginalia, curved lines, and damaged passages.

Normalization, transliteration, full vocalization, and abbreviation expansion are downstream tasks and are not part of the ATR transcription. Reading order in complex multi-column, glossed, and commentary layouts is also outside the present scope.

## Use the guidelines

1. [General Principles](principles.md) introduces the rationale behind the guidelines.
2. [Character Inventory](characters.md) records Unicode mappings.
3. [Transcription Rules](transcription.md) sets out the conventions for encoding manuscript text.
4. [Layout & Segmentation](layout.md) addresses baselines, additions, marginalia, and damaged areas.
5. [Examples](examples.md) show the rules in context.

## Resources

Corpus releases will be published on the [Database](database.md) page. The [Virtual Keyboard](keyboard.md) provides an eScriptorium-ready configuration for special characters in the inventory. [Open Questions](community.md) identifies cases that still require evidence and community feedback. Citation details and methodological sources are collected under [Citation & References](about.md).
