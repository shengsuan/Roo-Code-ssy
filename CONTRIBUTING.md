**English** • [Català](locales/ca/CONTRIBUTING.md) • [Deutsch](locales/de/CONTRIBUTING.md) • [Español](locales/es/CONTRIBUTING.md) • [Français](locales/fr/CONTRIBUTING.md) • [हिंदी](locales/hi/CONTRIBUTING.md) • [Italiano](locales/it/CONTRIBUTING.md) • [Nederlands](locales/nl/CONTRIBUTING.md) • [Русский](locales/ru/CONTRIBUTING.md)

[日本語](locales/ja/CONTRIBUTING.md) • [한국어](locales/ko/CONTRIBUTING.md) • [Polski](locales/pl/CONTRIBUTING.md) • [Português (BR)](locales/pt-BR/CONTRIBUTING.md) • [Türkçe](locales/tr/CONTRIBUTING.md) • [Tiếng Việt](locales/vi/CONTRIBUTING.md) • [简体中文](locales/zh-CN/CONTRIBUTING.md) • [繁體中文](locales/zh-TW/CONTRIBUTING.md)

# Contributing to Roo Vibecoding

<<<<<<< HEAD
Roo Vibecoding is a community-driven project, and we highly value every contribution. To ensure a smooth and effective process for everyone, **we operate on an "[Issue-First](#2-key-principle-issue-first-approach)" basis.** This means all work should be linked to a GitHub Issue _before_ a Pull Request is submitted (see our [PR Policy](#pull-request-pr-policy) for details). Please read this guide carefully to understand how to contribute.
This guide outlines how to contribute to Roo Vibecoding, whether you're fixing bugs, adding features, or improving documentation.
=======
Roo Code is a community-driven project, and we deeply value every contribution. To streamline collaboration, we operate on an [Issue-First](#issue-first-approach) basis, meaning all [Pull Requests (PRs)](#submitting-a-pull-request) must first be linked to a GitHub Issue. Please review this guide carefully.
>>>>>>> d7eec3afa6acde24d3000fde5e5f4f005fad757c

## Table of Contents

- [Before You Contribute](#before-you-contribute)
- [Finding & Planning Your Contribution](#finding--planning-your-contribution)
- [Development & Submission Process](#development--submission-process)
- [Legal](#legal)

## Before You Contribute

### 1. Code of Conduct

All contributors must adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md).

### 2. Project Roadmap

<<<<<<< HEAD
Roo Vibecoding has a clear development roadmap that guides our priorities and future direction. Understanding our roadmap can help you:
=======
Our roadmap guides the project's direction. Align your contributions with these key goals:
>>>>>>> d7eec3afa6acde24d3000fde5e5f4f005fad757c

### Reliability First

- Ensure diff editing and command execution are consistently reliable.
- Reduce friction points that deter regular usage.
- Guarantee smooth operation across all locales and platforms.
- Expand robust support for a wide variety of AI providers and models.

### Enhanced User Experience

- Streamline the UI/UX for clarity and intuitiveness.
- Continuously improve the workflow to meet the high expectations developers have for daily-use tools.

### Leading on Agent Performance

- Establish comprehensive evaluation benchmarks (evals) to measure real-world productivity.
- Make it easy for everyone to easily run and interpret these evals.
- Ship improvements that demonstrate clear increases in eval scores.

Mention alignment with these areas in your PRs.

### 3. Join the Roo Vibecoding Community

<<<<<<< HEAD
Connecting with the Roo Vibecoding community is a great way to get started:

- **Primary Method**:
    1.  Join the [Roo Vibecoding Discord community](https://discord.gg/roocode).
    2.  Once joined, send a direct message (DM) to **Hannes Rudolph** (Discord username: `hrudolph`) to discuss your interest and get guidance.
- **Alternative for Experienced Contributors**: If you're comfortable with an issue-first approach, you can engage directly through GitHub by following the [Kanban board](https://github.com/orgs/RooVetGit/projects/1) and communicating via issues and pull requests.
=======
- **Primary:** Join our [Discord](https://discord.gg/roocode) and DM **Hannes Rudolph (`hrudolph`)**.
- **Alternative:** Experienced contributors can engage directly via [GitHub Projects](https://github.com/orgs/RooVetGit/projects/1).

## Finding & Planning Your Contribution
>>>>>>> d7eec3afa6acde24d3000fde5e5f4f005fad757c

### Types of Contributions

- **Bug Fixes:** Addressing code issues.
- **New Features:** Adding functionality.
- **Documentation:** Improving guides and clarity.

### Issue-First Approach

All contributions must begin with a GitHub Issue.

- **Check existing issues**: Search [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues).
- **Create an issue**: Use appropriate templates:
    - **Bugs:** "Bug Report" template.
    - **Features:** "Detailed Feature Proposal" template. Approval required before starting.
- **Claim issues**: Comment and await official assignment.

**PRs without approved issues may be closed.**

### Deciding What to Work On

- Check the [GitHub Project](https://github.com/orgs/RooVetGit/projects/1) for unassigned "Good First Issues."
- For docs, visit [Roo Code Docs](https://github.com/RooVetGit/Roo-Code-Docs).

### Reporting Bugs

- Check for existing reports first.
- Create new bugs using the ["Bug Report" template](https://github.com/RooVetGit/Roo-Code/issues/new/choose).
- **Security issues**: Report privately via [security advisories](https://github.com/RooVetGit/Roo-Code/security/advisories/new).

<<<<<<< HEAD
- **Good First Issues**: Check the "Issue [Unassigned]" section of our [Roo Vibecoding Issues](https://github.com/orgs/RooVetGit/projects/1) GitHub Project.
- **Documentation**: While this `CONTRIBUTING.md` is the primary guide for code contributions, if you're interested in contributing to other documentation (like user guides or API docs), please check the [Roo Vibecoding Docs repository](https://github.com/RooVetGit/Roo-Code-Docs) or inquire in the Discord community.
- **Proposing New Features**:
    1.  **Initial Idea/Discussion**: For broad or initial feature ideas, start a conversation in [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests).
    2.  **Formal Proposal**: For specific, actionable feature proposals ready for consideration and potential approval, create a "Detailed Feature Proposal" issue using the template on our [issues page](https://github.com/RooVetGit/Roo-Code/issues/new/choose). This is a key part of our **Issue-First Approach**.
=======
## Development & Submission Process
>>>>>>> d7eec3afa6acde24d3000fde5e5f4f005fad757c

### Development Setup

1. **Fork & Clone:**

<<<<<<< HEAD
1.  **Search Existing Issues**: Check [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues) for duplicates.
2.  **Create a New Issue**: If unique, use the "Bug Report" template on our [issues page](https://github.com/RooVetGit/Roo-Code/issues/new/choose).

> 🔐 **Security Vulnerabilities**: If you discover a security vulnerability, please report it privately using [GitHub's security advisory tool](https://github.com/RooVetGit/Roo-Code/security/advisories/new). Do not create a public issue for security vulnerabilities.

## III. Development & Submission Process

Follow these steps for coding and submitting your work.

### 1. Development Setup

1.  **Fork & Clone**:
    - Fork the repository on GitHub.
    - Clone your fork locally: `git clone https://github.com/YOUR_USERNAME/Roo-Code.git`
2.  **Install Dependencies**: `npm run install:all`
3.  **Run Webview (Dev Mode)**: `npm run dev` (for Vite/React app with HMR)
4.  **Debug Extension**: Press `F5` in VS Code (or **Run** → **Start Debugging**) to open a new Extension Development Host window with Roo Vibecoding loaded.

Webview changes (in `webview-ui`) will appear immediately with Hot Module Replacement. Changes to the core extension (in `src`) will require a restart of the Extension Development Host.

Alternatively, to build and install a `.vsix` package:

```sh
npm run build
code --install-extension bin/roo-cline-<version>.vsix
=======
```
git clone https://github.com/YOUR_USERNAME/Roo-Code.git
>>>>>>> d7eec3afa6acde24d3000fde5e5f4f005fad757c
```

2. **Install Dependencies:**

```
npm run install:all
```

3. **Debugging:** Open with VS Code (`F5`).

### Writing Code Guidelines

- One focused PR per feature or fix.
- Follow ESLint and TypeScript best practices.
- Write clear, descriptive commits referencing issues (e.g., `Fixes #123`).
- Provide thorough testing (`npm test`).
- Rebase onto the latest `main` branch before submission.

### Submitting a Pull Request

- Begin as a **Draft PR** if seeking early feedback.
- Clearly describe your changes following the Pull Request Template.
- Provide screenshots/videos for UI changes.
- Indicate if documentation updates are necessary.

### Pull Request Policy

- Must reference pre-approved, assigned issues.
- PRs without adherence to the policy may be closed.
- PRs should pass CI tests, align with the roadmap, and have clear documentation.

### Review Process

- **Daily Triage:** Quick checks by maintainers.
- **Weekly In-depth Review:** Comprehensive assessment.
- **Iterate promptly** based on feedback.

## Legal

By contributing, you agree your contributions will be licensed under the Apache 2.0 License, consistent with Roo Code's licensing.
