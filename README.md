# ClassPoll — Live Classroom Polling

A free, open-source live polling tool for instructors.
Students join from any device with a browser;
no app install, no account, no login required.
Results appear in real time.
All data stays in your own Firebase project.

**Instructor quick reference:** see [USAGE.md](USAGE.md)
for an at-a-glance guide to running polls and poll sets in class.

## Features

### For instructors
- Create multiple-choice polls on the fly or prepare them in advance as **poll sets**
- Control when students see results and whether the correct answer (if any) is revealed
- Step through a poll set sequentially at your own pace
- View poll history and attendance, grouped by poll set and session
- CSV export of poll results (per-poll and per-session)
- Delete individual polls from history
- Password-protected instructor and history access

### For students
- Join with just a name — no account needed
- See results and correct answer when the instructor chooses to reveal them
- Works on phone, tablet, laptop, or desktop

### Poll sets
- Create polls in a plain text format and paste them in bulk
- Or build polls one at a time using the form interface
- Set default duration and display policies for the whole set, with per-poll overrides
- Edit sets in form view (one poll at a time) or text view (all at once)

## Plain text poll set format

- Individual polls are separated by `---`.
- The first prompt line begins with `Q:`.
- A blank line is required to separate the prompt from the block of answers.
(This allows multi-line prompts.)
- The correct answer is marked with a `*` prefix.
- Each answer has a letter followed by `.`.
- Per-poll overrides go before the `Q:` line.

### Per-poll override keys

| Key | Values | Default |
|-----|--------|---------|
| `duration` | seconds, e.g. `30`, `90` | poll set default |
| `results` | `submit`, `manual`, `never` | poll set default |
| `correct` | `results`, `manual`, `never` | poll set default |

### Display policy values

| Value | Meaning |
|-------|---------|
| `submit` | Students see results after they submit their answer |
| `manual` | Instructor reveals results with a toggle on the dashboard |
| `never` | Results never shown to students |
| `results` | Correct answer shown at the same moment as results |

### Example of a plain text poll set

```
Q: What is photosynthesis?

* A. Converts sunlight into energy
  B. Breaks down glucose
  C. Absorbs water through roots
  D. Releases CO2
---
duration: 90
correct: manual
Q: Which organelle contains chlorophyll?

  A. Mitochondria
* B. Chloroplast
  C. Nucleus
  D. Vacuole
```


## Setup

ClassPoll uses [Firebase Realtime Database](https://firebase.google.com/products/realtime-database)
as its backend; there's no server for you to maintain.
Each instructor deploys their own instance with their own Firebase project, so student data stays private.

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- A free [Firebase](https://firebase.google.com/) account
- A [GitHub](https://github.com/) account

### Step 1 — Fork this repository

Click **Fork** at the top right of this page. Clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/classroom-polling.git
cd classroom-polling
git remote add upstream https://github.com/MetroCS/classroom-polling.git
npm install
```

### Step 2 — Create a Firebase project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it (e.g. `classroom-polling`) → disable Analytics → **Create project**

### Step 3 — Enable Realtime Database

1. In the Firebase Console left sidebar: **Build → Realtime Database**
2. Click **Create Database** → choose your region
3. If prompted for security rules, choose locked mode — you will set them in Step 7

If the setup dialog does not show an Enable button, use the Firebase CLI:

```bash
npm install -g firebase-tools
firebase login
firebase init database
```

### Step 4 — Enable Anonymous Authentication

1. Firebase Console → **Build → Authentication** → **Get started**
2. Under **Sign-in providers** → **Anonymous** → toggle ON → **Save**

### Step 5 — Get your Firebase config

1. Firebase Console → **gear icon ⚙ → Project settings**
2. Under **Your apps** → click **&lt;/&gt;** → register a web app
3. Copy the `firebaseConfig` values shown

### Step 6 — Create your .env.local file

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your Firebase config values and an instructor password of your choice:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your_project-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_INSTRUCTOR_PASSWORD=your_password_here
```

**Never commit `.env.local` to git.** It is already listed in `.gitignore`.

### Step 7 — Set Firebase security rules

The file [`firebase-rules.json`](firebase-rules.json) defines who can read and
write each part of the database.

1. Firebase Console → **Realtime Database → Rules** tab
2. Replace everything with the contents of [`firebase-rules.json`](firebase-rules.json)
3. Click **Publish**

Note that the CI pipeline valideas the rules but does not deploy them automatically.
Whenever the rules change, they must be deployed to the Firebase project directly.

To do this from the Firebase CLI:
```bash
npx firebase-tools login
npx firebase-tools deploy --only database --project YOUR_PROJECT_ID
```
Replace `YOUR_PROJECT_ID` with the Firebase project ID from your `.env.local`
(`VITE_FIREBASE_PROEJCT_ID`).

### Step 8 — Test locally

```bash
npm run dev
```

Open [http://localhost:5173/classroom-polling/](http://localhost:5173/classroom-polling/).
Open two browser tabs — one as instructor, one as student — to verify everything works.

### Step 9 — Set your repo name in vite.config.js

If your GitHub repository is named something other than `classroom-polling`,
update `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

### Step 10 — Deploy to GitHub Pages

```bash
git add .
git commit -m "Initial setup"
git push origin main
npm run build
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

Then in GitHub → your repo → **Settings → Pages**:
- Source: **Deploy from a branch**
- Branch: **gh-pages** → **/ (root)** → **Save**

Your app will be live at:

```
https://YOUR_USERNAME.github.io/classroom-polling/
```

For subsequent deployments:

```bash
npm run build
git add dist -f
git commit -m "Update deployment"
git subtree push --prefix dist origin gh-pages
git push origin main
```

### Updating your fork to the newest version
```bash
git fetch upstream
git merge upstream/main
```


## Usage

### Running a poll

1. Open the app → **I'm the Instructor** → enter your password
2. Click **New Poll** → enter question and options → click **Start Poll**
3. Share your app URL with students — they click **I'm a Student**, enter their name, and wait
4. Students see the poll instantly; results update live on your dashboard
5. For standalone polls, click **Close Poll** when done. When running a poll set, click **End Poll** to stop accepting answers while staying in the set, then **Next Poll* to advance

### Running a poll set

1. Click **Poll Sets** → **+ New Set**
2. Enter a name, set defaults, paste your polls in plain text → **Preview** → **Save Set**
3. Open the set → click **Launch**
4. Step through polls with **Next Poll**; use **End Poll** to pause between polls
5. Click **Finish Set** when done

### Viewing history and attendance

1. Click **History** → enter instructor password
2. **Polls tab**: past polls grouped by set, expandable with per-option results
3. **Attendance tab**: students who joined, grouped by date

## Customization

| File | What to change |
|------|---------------|
| `.env.local` | Instructor password, Firebase config |
| `firebase-rules.json` | Database security rules |
| `vite.config.js` | Repository name for GitHub Pages base path |
| `src/index.css` | Colors, fonts, visual design |

## Project structure

```
classroom-polling/
├── src/
│   ├── firebase.js           Firebase initialization (config from .env.local)
│   ├── utils/
│   │   ├── firebaseOps.js    All database read/write operations
│   │   └── pollParser.js     Plain text poll format parser
│   │   └── csvExport.js      CSV export utilities
│   ├── pages/
│   │   ├── RoleSelector.jsx  Landing page
│   │   ├── InstructorPage.jsx   Instructor dashboard
│   │   ├── StudentPage.jsx   Student poll experience
│   │   ├── PollHistory.jsx   History and attendance
│   │   ├── PollSets.jsx      Poll set list and creation
│   │   └── PollSetDetail.jsx Poll set editing and launch
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example              Template — copy to .env.local and fill in values
├── firebase-rules.json       Paste into Firebase Console Rules tab
├── vite.config.js
└── package.json
```

## Firebase free tier limits

The Firebase Spark (free) plan is sufficient for typical classroom use:

| Resource | Free limit | Typical usage |
|----------|-----------|---------------|
| Simultaneous connections | 100 | Fine for one class |
| Storage | 1 GB | Years of poll data |
| Downloads/month | 10 GB | ~500,000 page loads |

## Known limitations

- Instructor password is a single shared secret; not suitable for multiple instructors sharing one instance
- Code formatting in questions is plain text only (markdown support planned)
- Student names are self-reported and not authenticated

## Planned features

- Code block rendering in questions and options
- Student self-paced mode for poll sets

## Contributing

Contributions welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Copyright (C) 2026 Dr. Jody Paul

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later version.

See [LICENSE](LICENSE) for the full license text.
