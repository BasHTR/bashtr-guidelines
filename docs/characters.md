# Character Inventory and Graphemic Mapping

The character inventory is the smallest set that preserves the graphemic distinctions present in the script. Where a distinction is uncertain, fewer character classes are preferred.

## Unicode range

Use characters from the following Unicode blocks:

| Block | Range |
| --- | --- |
| Arabic | `U+0600-U+06FF` |
| Arabic Supplement | `U+0750-U+077F` |
| Arabic Extended-A | `U+08A0-U+08FF` |

Do not use Arabic Presentation Forms (`U+FB50-U+FEFF`).

Initial, medial, final, and isolated forms of a letter are all transcribed with a single Unicode code point. The recognizer sees each visual form, while the transcription records their shared graphemic identity.

## Corpus-wide mappings

Where Unicode provides more than one representation for a grapheme, use the following mappings throughout the corpus:

| Character | Code point | Rule |
| --- | --- | --- |
| <span lang="ar">ك</span> | `U+0643` | *Kāf* in all manuscripts, regardless of language |
| <span lang="ar">ي</span> | `U+064A` | Initial and medial *yāʾ*; final *yāʾ* when dotted |
| <span lang="ar">ى</span> | `U+0649` | Final *yāʾ* when dotless |
| <span lang="ar">ه</span> | `U+0647` | *Hāʾ*, or *tāʾ marbūṭa* when its dots are absent |
| <span lang="ar">ة</span> | `U+0629` | *Tāʾ marbūṭa* when its dots are present |

The dotted/dotless distinction is preserved under the [*iʿjām* rule](transcription.md#diacritics).

## Language-specific letters

Use the dedicated code point whenever a language-specific letter is present in the manuscript. Do not replace it with a standard Arabic letter.

| Tradition | Characters |
| --- | --- |
| Persian | <span lang="ar">پ</span> (`U+067E`), <span lang="ar">چ</span> (`U+0686`), <span lang="ar">ژ</span> (`U+0698`), <span lang="ar">گ</span> (`U+06AF`) |
| Urdu | <span lang="ar">ٹ</span> (`U+0679`), <span lang="ar">ڈ</span> (`U+0688`), <span lang="ar">ڑ</span> (`U+0691`), <span lang="ar">ں</span> (`U+06BA`), <span lang="ar">ہ</span> (`U+06C1`), <span lang="ar">ے</span> (`U+06D2`) |
| Jawi/Malay | <span lang="ar">ڠ</span> (`U+06A0`), <span lang="ar">ڽ</span> (`U+06BD`), <span lang="ar">ڤ</span> (`U+06A4`), <span lang="ar">ݢ</span> (`U+0762`), <span lang="ar">ۏ</span> (`U+06CF`) |
| Maghribī | <span lang="ar">ڢ</span> (`U+06A2`) for *fāʾ* with one dot below; <span lang="ar">ڧ</span> (`U+06A7`) for *qāf* with one dot above |

Use standard <span lang="ar">ف</span> (`U+0641`) and <span lang="ar">ق</span> (`U+0642`) otherwise.

## Undotted rasm

When consonantal dots are absent, use the appropriate undotted skeleton:

| Character | Code point | Use |
| --- | --- | --- |
| <span lang="ar">ٮ</span> | `U+066E` | Undotted *bāʾ/tāʾ/thāʾ/nūn/yāʾ* skeleton |
| <span lang="ar">ٯ</span> | `U+066F` | Undotted *fāʾ/qāf* skeleton |
| <span lang="ar">ں</span> | `U+06BA` | Final undotted *nūn* when final *yāʾ* is ruled out |
