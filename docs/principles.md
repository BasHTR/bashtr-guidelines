# General Principles

This page sets out the rationale for the standard and the principles needed to apply it consistently. The operational instructions are given in the [Transcription Rules](transcription.md).

## Why ATR needs its own transcription conventions

Transcription guidelines for ATR serve a different purpose from those used in scholarly editing. An edition may normalize spelling and expand abbreviations, while a paleographic transcription may record fine allographic detail. These are legitimate scholarly choices, but neither is optimized for producing the training data from which a model learns to convert manuscript images into text.

ATR conventions must satisfy three constraints:

- **Efficiency:** they must support the production of substantial quantities of consistently annotated data.
- **Learnability:** the expected output must be recoverable by a statistical model operating with limited context.
- **Interoperability:** datasets produced by different projects, languages, periods, and scribal traditions must remain compatible and capable of being combined.

## The transcription spectrum

A useful framework for these trade-offs is the distinction between graphetic, graphemic, and normalized transcription. These are idealized points on a continuous spectrum; any practical standard combines decisions made at different levels.

| Level | Records | ATR limitation |
| --- | --- | --- |
| Graphetic | Every allograph and calligraphic variation on the page | Produces many rare character classes and inconsistent judgments |
| Graphemic | Functional units of the writing system | Preserves distinctions while collapsing visual variants |
| Normalized | Standardized readings that may not be present in the image | Requires linguistic context and introduces output unsupported by the image |

This terminology follows Peter Robinson and Elizabeth Solopova's [*Guidelines for Transcription of the Manuscripts of the Wife of Bath's Prologue*](https://doi.org/10.5281/zenodo.4050360). The task is not to adopt one level without exception, but to choose the representation that produces the most reliable relation between image and text for each feature.

## The graphemic compromise

BASHtr adopts **graphemic transcription** as the foundation of the standard. It offers a practical compromise between efficiency, learnability, and interoperability. Positional and calligraphic variants of the same letter map to one Unicode code point, while consonantal dotting is retained as it appears because it distinguishes graphemes.

The standard therefore operates at the level of the writing system rather than that of any individual language. It records Arabic-script features as written without applying language-specific normalization, allowing material in different languages to follow a shared set of conventions.

Where the guidelines depart from strict graphemic transcription, they do so deliberately:

- Vocalization is omitted because its manuscript use is often sporadic and its exact reproduction leads to inconsistent annotation.
- *Shadda* is omitted even though it marks gemination, because its use is too irregular to provide dependable training labels.

We consider these choices conservative. They remove information that cannot be annotated reliably while preserving the consonantal skeleton, original orthography, and other evidence required for subsequent scholarly work.

## Practical benefits

The practical consequences of this approach are threefold:

1. **Language independence:** shared conventions allow Arabic-script datasets in different languages to be combined.
2. **Improved ATR performance:** a manageable character inventory and deterministic image-to-text mappings reduce rare character classes and support generalization to unseen material.
3. **Lower barriers to transcription:** we expect that fewer intricate or interpretive decisions will support more efficient data production and higher inter-annotator agreement.

The use of common rules to support interoperable, multilingual HTR data is informed by the [CATMuS guidelines](https://hal.science/hal-04346939) and the resulting [CATMuS Medieval dataset](https://doi.org/10.1007/978-3-031-70543-4_11).

## A note on downstream use

The output produced under these guidelines will not, by itself, satisfy every humanities use case. Critical editions may require normalized orthography, Ottoman studies may require field-specific transliteration, and linguistic analysis may require full vocalization.

These are legitimate needs, but they are best addressed through post-processing rather than baked into the ATR stage itself. A reliable graphemic base preserves the consonantal structure and original orthography while avoiding context-dependent output that is not supported by the manuscript image. The base transcription is produced once; different transformations can then be applied according to the research questions that require them.
