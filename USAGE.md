# ClassPoll — Instructor Quick Reference

## At a glance — who does what

```
Instructor                          Students
──────────────────────────────────  ──────────────────────────
Open URL → I'm the Instructor       Open same URL → I'm a Student
Enter password                      Enter first name → Join
Start Poll                          See question → tap answer → Submit
Watch live results
Close Poll / Next Poll              See results (when revealed to them)
```

---

## Before class
- Open your ClassPoll URL and log in as **Instructor**
- Share the same URL with students — that's the only setup they need

Students open the URL, tap **I'm a Student**, type their first name, and wait.
No app, no account, no login.

---
## Running a spontaneous poll

| Step | What you do |
|------|-------------|
| 1 | **➕ New Poll** |
| 2 | Type your question and at least two options |
| 3 | *(Optional)* Click a lettered circle to mark the correct answer |
| 4 | Choose when students see results and the correct answer |
| 5 | **Start Poll →** |
| 6 | Students answer live — watch results update on your dashboard |
| 7 | **Close Poll** when done |

---

## Running an existing poll set

| Step | What you do |
|------|-------------|
| 1 | **📊 Dashboard → Launch a Set** or **📚 Poll Sets** |
| 2 | Select a set to open it |
| 3 |  **Launch →** to launch the poll|
| 4 | **End Poll** to stop accepting answers, **Next Poll →** to advance |
| 5 | **Finish Set ✓** when done |

---

## Creating a poll set

| Step | What you do |
|------|-------------|
| 1 | **📚 Poll Sets → + New Set** |
| 2 | Name the set, set a default duration |
| 3 | Paste your polls in plain text (see format below) or **Build manually** |
| 4 | → **Preview → Save Set** |

### Poll set plain text format

```
Q: Which sorting algorithm has O(n log n) average time?

* A. Merge sort
  B. Radix sort
  C. Insertion sort
  D. Selection sort
---
Q: What does RAM stand for?

  A. Read-only Active Map
* B. Random Access Memory
  C. Rapid Application Memory
  D. Runtime Address Map
```

- Polls are separated by `---`
- Question starts with `Q:` — blank line before the options
- Correct answer (if any) gets a `*` prefix
- Add `duration: 30` or `results: manual` before `Q:` to override defaults for that poll

---

## Display policy options

| Setting | Choices |
|---------|---------|
| **Show results** | After they submit · When I choose · Never |
| **Reveal correct answer** | With results · When I choose · Never |

Use **When I choose** when you want to discuss before revealing — toggle the switches on the dashboard.

---

## Viewing past polls and attendance

**📜 History** (requires instructor password)

- **Polls tab** — results grouped by poll set; expand any poll to see per-option counts
- **Attendance tab** — students who joined, grouped by date
-  **↓ CSV button** — Export any session as CSV using the download button

---
