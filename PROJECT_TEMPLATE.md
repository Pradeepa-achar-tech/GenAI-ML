# Project Blueprint — Master Template

Each project in `src/data/curriculum.js` can have an optional `blueprint` field. When present, the **Projects** tab in the app turns the card into an expandable panel that shows:

1. **Functional requirements** — what the app must do (user-facing).
2. **Technical implementation** — stack, file layout, control flow, error handling.
3. **Claude Code prompts** — numbered, copy-pastable prompts that build the app step by step. Each has its own **Copy** button; a **Copy all** button is at the top of the section.

The first project, `m0-p1` Simple Calculator, is fully filled in — open it in the app to see how the blueprint renders.

---

## How to add a blueprint to any project

1. Open `src/data/curriculum.js`.
2. Find the project by its id (e.g. `m1-p3` for Module 1 Project 3).
3. Inside the project object, after the `tools: [...]` line, paste the template below and fill in the fields.
4. Save — Vite HMR reloads, the card becomes expandable, and the new blueprint is live.

You do **not** need to fill all fields. Anything omitted is hidden. Minimum useful blueprint = `functionalRequirements` + `prompts`.

---

## Master template — copy and paste this into any project

```js
blueprint: {
  // OPTIONAL one-paragraph framing shown above all sections.
  overview:
    'One paragraph describing what the project is and what the learner walks away with. Keep it tight.',

  // WHAT THE APP MUST DO — user-facing capabilities. 5–8 bullets.
  // Markdown supported: **bold**, `inline code`. Newlines preserved.
  functionalRequirements: [
    'User can do X.',
    'App validates Y and shows error Z when invalid.',
    'On success, the app displays the result formatted as `a OP b = result`.',
    'Persists state to local storage / file / database.',
    'Edge case W is handled with a clear message.',
  ],

  // HOW IT IS BUILT — stack, file layout, control flow, error handling.
  // Each bullet should start with a bold tag like **Stack:** or **State:**.
  technicalImplementation: [
    '**Stack:** Python 3.10+, FastAPI, SQLite via SQLModel.',
    '**File layout:** `app/main.py`, `app/models.py`, `app/routes.py`, `tests/`.',
    '**Control flow:** REST endpoints → service layer → repository.',
    '**Auth:** JWT with python-jose, 24h expiry.',
    '**Error handling:** custom `AppError` mapped to HTTP 4xx in a single exception handler.',
    '**Testing hook:** repository takes a Session in __init__ so tests inject an in-memory DB.',
  ],

  // STEP-BY-STEP CLAUDE CODE PROMPTS. 4–8 steps is the sweet spot.
  // Each prompt should be self-contained — paste-and-go, no editing.
  // Order matters: each prompt assumes the previous step succeeded.
  prompts: [
    {
      step: 1,
      label: 'Scaffold the project',
      // OPTIONAL one-line preview of what the agent will produce.
      outcome: 'Creates the folder layout and entrypoint file.',
      prompt:
        'Create a new folder my-app/ with the following structure: ... Add a README.md stub. Do not add features yet.',
    },
    {
      step: 2,
      label: 'Define data models',
      outcome: 'Models cover all entities the requirements mention.',
      prompt:
        'In app/models.py, define <list of models> using <library>. Each should have <fields>. Add type hints and a __repr__.',
    },
    {
      step: 3,
      label: 'Build the core feature',
      outcome: 'The happy path works end to end.',
      prompt:
        'Implement <feature> in <file>. The function should accept <inputs> and return <output>. Handle <edge cases>.',
    },
    {
      step: 4,
      label: 'Add input validation and error handling',
      outcome: 'Bad input no longer crashes — clear messages instead.',
      prompt:
        'Wrap <input source> in validation. Reject <bad cases> with <message>. Catch <expected exceptions> and surface them as <user-friendly errors>.',
    },
    {
      step: 5,
      label: 'Wire up the UI / CLI / API surface',
      outcome: 'A user can drive the feature end to end.',
      prompt:
        'Build the <CLI menu / REST endpoints / React component> that lets the user trigger <feature>. Match the functional requirements above.',
    },
    {
      step: 6,
      label: 'Add unit tests',
      outcome: 'Pytest covers happy paths and the most important edge cases.',
      prompt:
        'Create tests/test_<thing>.py with pytest. Cover: one happy path per function, the divide-by-zero / empty-input style edges, and one integration test that exercises the full flow.',
    },
    {
      step: 7,
      label: 'Polish the README',
      outcome: 'Anyone can clone and run the project from the README alone.',
      prompt:
        'Create README.md with: one-line description, Features bullets, Setup (install + env vars), Run it, Run tests, Sample session/output. Keep it under 80 lines.',
    },
  ],

  // OPTIONAL — what "done" looks like. Shown at the bottom.
  deliverable:
    'A working app at <path>. Running <command> gives <expected behaviour>. `pytest -q` passes green.',
},
```

---

## Voice and length guidance

- **Talk to the agent like a teammate, not a contract.** "Create a function `read_number` that loops until valid input" beats "The system shall provide a numeric input validation routine."
- **Each prompt = one Claude Code session of work** — usually 30 seconds to 5 minutes for the agent. If a prompt would take longer, split it.
- **Reference files by exact path.** "In `app/routes.py` add..." beats "in the routes file add...".
- **Spell out the contract.** Inputs, outputs, error behaviour, file paths, function names. Do **not** leave naming choices vague — that wastes tokens on follow-up.
- **Don't stack features in one prompt.** Step 3 = core feature. Step 4 = validation. Step 5 = UI. Splitting keeps the diff reviewable.
- **End with tests + README.** This is the canonical last-two steps for every project; it makes the deliverable concrete.

## Markdown supported in text fields

- `**bold**` → white emphasis
- `` `code` `` → orange monospace pill
- Newlines (`\n`) are preserved as line breaks

Do **not** use headings (`#`, `##`) inside fields — they will render as literal `#` characters.

## A worked example

See `m0-p1` (Simple Calculator Application) in `src/data/curriculum.js`. Open the project in the app, click the card, and you can see exactly how the fields above render.

## Suggested workflow for filling in 35 projects

1. **Pick a project** (start with the easier ones — Module 0 and Module 1).
2. **Open `src/data/curriculum.js`**, locate the project by id.
3. **Paste the template** after the `tools` line, fill it in. ~10–15 minutes per project once you have the rhythm.
4. **Verify it parses:**
   ```powershell
   & "C:\Program Files\nodejs\node.exe" -e "import('./src/data/curriculum.js').then(m => console.log('OK')).catch(e => { console.error(e.message); process.exit(1); })"
   ```
5. **Open the project in the running app** (`npm run dev`), expand the card, sanity-check the rendering.
6. **Commit** every few projects so you can always roll back a bad batch.

## Tips for token-efficient batch filling

- Fill in **2–3 projects per Claude session**. The blueprint is high-information content, so a single session that does 6+ projects tends to drift in voice. Smaller batches stay sharper.
- For similar projects (e.g. all the EDA projects in Module 1), copy a completed blueprint and adapt it instead of starting fresh.
- Save your finished prompts somewhere — they make great reference material for similar projects in later modules.
