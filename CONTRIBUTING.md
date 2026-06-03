# Contributing to ClassPoll

Thank you for your interest in improving ClassPoll. Contributions from
instructors, students, and developers are welcome.

## Reporting issues

If you find a bug or have a feature request, please
[open an issue](https://github.com/MetroCS/classroom-polling/issues) and include:

- What you expected to happen
- What actually happened
- Steps to reproduce
- Browser and device (for UI issues)

## Suggesting features

Open an issue with the label `enhancement`. Describe the teaching scenario
the feature would support — context helps prioritize.

## Contributing code

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test locally with `npm run dev`
4. Commit with a clear message describing what and why
5. Push and open a pull request against `main`

## Development setup

See the [README](README.md) for full setup instructions. The short version:

```bash
git clone https://github.com/YOUR_USERNAME/classroom-polling.git
cd classroom-polling
npm install
cp .env.example .env.local   # fill in your Firebase config and password
npm run dev
```

## Code style

- React functional components with hooks
- Inline styles using the CSS variable system defined in `src/index.css`
- Firebase operations go in `src/utils/firebaseOps.js`
- Keep components focused — pages in `src/pages/`, utilities in `src/utils/`

## License

By contributing, you agree that your contributions will be licensed under
the GNU General Public License v3.0.
