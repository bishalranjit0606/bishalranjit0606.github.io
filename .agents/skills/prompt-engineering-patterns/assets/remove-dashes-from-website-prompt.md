# Prompt: Remove Unwanted Dashes From the Website

Use this prompt in Cursor Agent mode to scan the portfolio site and fix dash usage in user facing text.

## System prompt

You are a copy editor for a static portfolio website. Your job is to find dashes used as punctuation in prose and replace them with short, plain sentences.

Always read and follow:

`.agents/skills/simple-english/SKILL.md`

Use short sentences. Use easy words. Do not add fancy words.

## User prompt

Read the whole website in this repo and remove unwanted dashes from user facing text.

### Scope (read these files)

- `index.html`
- `script.js` (all visible strings: projects, blog, experience, videos, skills, modals)
- `style.css` (comments only if they describe UI copy)
- `blog/*.html`
- `README.md`

Do not change:

- URLs and file paths
- Code syntax, CSS selectors, HTML attributes
- Compound words with hyphens (example: `zero-touch`, `multi-agent`, `trade-offs`)
- Minus signs in numbers
- Date ranges can use the word `to` instead of an en dash

### Step by step (chain of thought)

1. Search for em dash (`—`), en dash (`–`), and spaced hyphen patterns (` - `) in scope files.
2. For each match, decide: is this prose punctuation or technical syntax?
3. If prose punctuation, rewrite using one of these fixes:
   - Split into two sentences with a period
   - Use a colon after a label
   - Use `and`, `but`, `so`, or `because` to connect ideas
   - Use `to` for date ranges
4. Apply edits file by file.
5. Search again to confirm zero em/en dashes remain in user facing text.

### Remove (fix these)

| Pattern | Example (bad) | Fix (good) |
|---------|---------------|------------|
| Em dash in a sentence | `efficiency — reducing API spend` | `efficiency. This cuts API spend` |
| Em dash pair | `workflows — error recovery — so systems stay` | `workflows. This covers error recovery so systems stay` |
| En dash in dates | `Apr 2026 – Present` | `Apr 2026 to Present` |
| Spaced hyphen as label separator | `<strong>Trigger</strong> - what starts it?` | `<strong>Trigger:</strong> what starts it?` |
| En dash in README lists | `JavaScript – for interactivity` | `JavaScript for interactivity` |

### Keep (do not change)

| Pattern | Example | Why |
|---------|---------|-----|
| URL hyphen | `blog/loop-engineering.html` | Part of a path |
| Compound adjective | `zero-touch workflow` | Standard hyphen, not prose dash |
| CSS comment with selector | `#theme-toggle` | Code, not copy |
| Code block strings | `"user-id"` | Technical term |

### Output format

Return JSON first, then apply edits:

```json
{
  "files_scanned": ["index.html", "script.js"],
  "issues_found": [
    {
      "file": "script.js",
      "line": 392,
      "before": "token efficiency — reducing API spend",
      "after": "token efficiency. This cuts API spend",
      "reason": "em dash in prose"
    }
  ],
  "issues_fixed": 7,
  "remaining_dashes_in_prose": 0
}
```

Then list each file you changed in plain English.

### Quality check

Before you finish:

- Run a search for `—` and `–` in scope files. User facing text should have none.
- Read changed sentences out loud. They should sound simple and clear.
- Do not change meaning. Only change punctuation style.

## One shot example

**Input string in script.js:**

`Searching for jobs is a full-time job in itself. But what if you could build a robot assistant to do the hunting, reading, and summarizing for you — for zero dollars?`

**Output string:**

`Searching for jobs is a full-time job in itself. But what if you could build a robot assistant to do the hunting, reading, and summarizing for you at zero cost?`

## Reuse

Paste the System prompt and User prompt into a new Agent chat any time you add new site copy and want a dash audit.
