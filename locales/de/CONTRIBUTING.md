[English](../../CONTRIBUTING.md) • [Català](../ca/CONTRIBUTING.md) • <b>Deutsch</b> • [Español](../es/CONTRIBUTING.md) • [Français](../fr/CONTRIBUTING.md) • [हिंदी](../hi/CONTRIBUTING.md) • [Italiano](../it/CONTRIBUTING.md) • [Nederlands](../nl/CONTRIBUTING.md) • [Русский](../ru/CONTRIBUTING.md)

[日本語](../ja/CONTRIBUTING.md) • [한국어](../ko/CONTRIBUTING.md) • [Polski](../pl/CONTRIBUTING.md) • [Português (BR)](../pt-BR/CONTRIBUTING.md) • [Türkçe](../tr/CONTRIBUTING.md) • [Tiếng Việt](../vi/CONTRIBUTING.md) • [简体中文](../zh-CN/CONTRIBUTING.md) • [繁體中文](../zh-TW/CONTRIBUTING.md)

# Beitrag zu Roo Vibecoding

Roo Code ist ein Community-getriebenes Projekt, und wir schätzen jeden Beitrag sehr. Für eine reibungslose Zusammenarbeit arbeiten wir nach dem [Issue-First-Ansatz](#issue-first-ansatz), was bedeutet, dass alle [Pull Requests (PRs)](#einen-pull-request-einreichen) zuerst mit einem GitHub Issue verknüpft werden müssen. Bitte lies diesen Leitfaden sorgfältig durch.

## Inhaltsverzeichnis

- [Bevor du beiträgst](#bevor-du-beiträgst)
- [Beitrag finden & planen](#beitrag-finden--planen)
- [Entwicklung & Einreichung](#entwicklung--einreichung)
- [Rechtliches](#rechtliches)

## Bevor du beiträgst

### 1. Verhaltenskodex

Alle Mitwirkenden müssen sich an unseren [Verhaltenskodex](./CODE_OF_CONDUCT.md) halten.

### 2. Projekt-Roadmap

<<<<<<< HEAD
Roo Vibecoding hat eine klare Entwicklungs-Roadmap, die unsere Prioritäten und die Zukunft vorgibt. Wenn du die Roadmap kennst, kannst du:
=======
Unsere Roadmap gibt die Richtung des Projekts vor. Richte deine Beiträge an diesen Schlüsselzielen aus:
>>>>>>> d7eec3afa6acde24d3000fde5e5f4f005fad757c

### Zuverlässigkeit an erster Stelle

- Sicherstellen, dass Diff-Bearbeitung und Befehlsausführung durchgängig zuverlässig sind.
- Reibungspunkte reduzieren, die von der regelmäßigen Nutzung abhalten.
- Reibungslosen Betrieb in allen Sprachen und auf allen Plattformen garantieren.
- Robuste Unterstützung für eine Vielzahl von KI-Anbietern und -Modellen ausbauen.

### Verbesserte Benutzererfahrung

- Die Benutzeroberfläche für mehr Klarheit und Intuitivität optimieren.
- Den Workflow kontinuierlich verbessern, um den hohen Erwartungen gerecht zu werden, die Entwickler an täglich genutzte Tools stellen.

### Führend bei der Agentenleistung

- Umfassende Evaluierungsmaßstäbe (Evals) etablieren, um die Produktivität in der realen Welt zu messen.
- Es für jeden einfach machen, diese Evals durchzuführen und zu interpretieren.
- Verbesserungen liefern, die klare Steigerungen der Eval-Ergebnisse zeigen.

Erwähne die Ausrichtung an diesen Bereichen in deinen PRs.

### 3. Werde Teil der Roo Vibecoding Community

<<<<<<< HEAD
Mit der Roo Vibecoding Community in Kontakt zu kommen, ist ein super Start:

- **Hauptweg**:
    1.  Tritt der [Roo Vibecoding Discord Community](https://discord.gg/roocode) bei.
    2.  Schreib dann eine Direktnachricht (DM) an **Hannes Rudolph** (Discord: `hrudolph`), um dein Interesse zu besprechen und Tipps zu bekommen.
- **Alternative für Erfahrene**: Wenn du mit dem Issue-First-Ansatz vertraut bist, kannst du direkt über GitHub mitmachen, indem du das [Kanban-Board](https://github.com/orgs/RooVetGit/projects/1) nutzt und über Issues und Pull Requests kommunizierst.
=======
- **Hauptweg:** Tritt unserem [Discord](https://discord.gg/roocode) bei und schreibe eine DM an **Hannes Rudolph (`hrudolph`)**.
- **Alternative:** Erfahrene Mitwirkende können sich direkt über [GitHub Projects](https://github.com/orgs/RooVetGit/projects/1) beteiligen.

## Beitrag finden & planen
>>>>>>> d7eec3afa6acde24d3000fde5e5f4f005fad757c

### Beitragsarten

- **Bugfixes:** Fehler im Code beheben.
- **Neue Features:** Neue Funktionen hinzufügen.
- **Dokumentation:** Anleitungen verbessern und klarer gestalten.

### Issue-First-Ansatz

Alle Beiträge müssen mit einem GitHub Issue beginnen.

- **Bestehende Issues prüfen**: Durchsuche die [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues).
- **Issue erstellen**: Nutze die passenden Vorlagen:
    - **Bugs:** "Bug Report"-Vorlage.
    - **Features:** "Detailed Feature Proposal"-Vorlage. Vor dem Start ist eine Genehmigung erforderlich.
- **Issues beanspruchen**: Kommentiere und warte auf die offizielle Zuweisung.

**PRs ohne genehmigte Issues können geschlossen werden.**

### Was soll ich machen?

- Schau im [GitHub Project](https://github.com/orgs/RooVetGit/projects/1) nach nicht zugewiesenen "Good First Issues".
- Für Dokumentation besuche das [Roo Code Docs](https://github.com/RooVetGit/Roo-Code-Docs) Repository.

### Bugs melden

- Prüfe zuerst, ob der Bug bereits gemeldet wurde.
- Erstelle neue Bug-Reports mit der ["Bug Report"-Vorlage](https://github.com/RooVetGit/Roo-Code/issues/new/choose).
- **Sicherheitslücken:** Melde diese privat über [Security Advisories](https://github.com/RooVetGit/Roo-Code/security/advisories/new).

<<<<<<< HEAD
- **Good First Issues**: Schau im Bereich "Issue [Unassigned]" auf unserem [Roo Vibecoding Issues](https://github.com/orgs/RooVetGit/projects/1) GitHub-Projekt.
- **Dokumentation**: Während dieses `CONTRIBUTING.md` der Hauptleitfaden für Code-Beiträge ist, findest du weitere Doku (wie User-Guides oder API-Doku) im [Roo Vibecoding Docs Repository](https://github.com/RooVetGit/Roo-Code-Docs) oder frag in der Discord-Community nach.
- **Neue Features vorschlagen**:
    1.  **Erste Idee/Diskussion**: Für grobe oder neue Feature-Ideen starte eine Diskussion in [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests).
    2.  **Formaler Vorschlag**: Für konkrete, umsetzbare Feature-Vorschläge nutze die "Detailed Feature Proposal"-Vorlage auf unserer [Issues-Seite](https://github.com/RooVetGit/Roo-Code/issues/new/choose). Das ist ein wichtiger Teil unseres **Issue-First-Ansatzes**.
=======
## Entwicklung & Einreichung
>>>>>>> d7eec3afa6acde24d3000fde5e5f4f005fad757c

### Entwicklungs-Setup

1. **Fork & Clone:**

<<<<<<< HEAD
1.  **Nach bestehenden Issues suchen**: Schau bei den [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues) nach, ob es schon gemeldet wurde.
2.  **Neues Issue erstellen**: Wenn nicht, nutze die "Bug Report"-Vorlage auf unserer [Issues-Seite](https://github.com/RooVetGit/Roo-Code/issues/new/choose).

> 🔐 **Sicherheitslücken**: Wenn du eine Sicherheitslücke findest, melde sie bitte privat über [GitHubs Security Advisory Tool](https://github.com/RooVetGit/Roo-Code/security/advisories/new). Erstelle kein öffentliches Issue für Sicherheitslücken.

## III. Entwicklung & Einreichung

Folge diesen Schritten beim Coden und Einreichen deiner Arbeit.

### 1. Entwicklungs-Setup

1.  **Fork & Clone**:
    - Forke das Repository auf GitHub.
    - Klone deinen Fork lokal: `git clone https://github.com/DEIN_USERNAME/Roo-Code.git`
2.  **Abhängigkeiten installieren**: `npm run install:all`
3.  **Webview (Dev Mode) starten**: `npm run dev` (für Vite/React-App mit HMR)
4.  **Extension debuggen**: Drücke `F5` in VS Code (oder **Run** → **Start Debugging**), um ein neues Extension Development Host-Fenster mit Roo Vibecoding zu öffnen.

Webview-Änderungen (in `webview-ui`) erscheinen sofort dank Hot Module Replacement. Änderungen an der Core-Extension (in `src`) erfordern einen Neustart des Extension Development Host.

Alternativ kannst du ein `.vsix`-Paket bauen und installieren:

```sh
npm run build
code --install-extension bin/roo-cline-<version>.vsix
=======
```
git clone https://github.com/DEIN_USERNAME/Roo-Code.git
>>>>>>> d7eec3afa6acde24d3000fde5e5f4f005fad757c
```

2. **Abhängigkeiten installieren:**

```
npm run install:all
```

3. **Debugging:** Öffne mit VS Code (`F5`).

### Code-Richtlinien

- Ein fokussierter PR pro Feature oder Fix.
- Folge den ESLint und TypeScript Best Practices.
- Schreibe klare, beschreibende Commits, die auf Issues verweisen (z.B. `Fixes #123`).
- Liefere gründliche Tests (`npm test`).
- Rebase auf den neuesten `main`-Branch vor dem Einreichen.

### Einen Pull Request einreichen

- Beginne als **Draft PR**, wenn du frühes Feedback suchst.
- Beschreibe deine Änderungen klar und folge der Pull Request Vorlage.
- Stelle Screenshots/Videos für UI-Änderungen bereit.
- Gib an, ob Dokumentationsaktualisierungen notwendig sind.

### Pull Request Richtlinie

- Muss auf vorab genehmigte, zugewiesene Issues verweisen.
- PRs ohne Einhaltung der Richtlinie können geschlossen werden.
- PRs sollten CI-Tests bestehen, zur Roadmap passen und klare Dokumentation haben.

### Review-Prozess

- **Tägliche Triage:** Schnelle Prüfungen durch Maintainer.
- **Wöchentliche Tiefenprüfung:** Umfassende Bewertung.
- **Zeitnah auf Feedback reagieren** und entsprechend iterieren.

## Rechtliches

Mit deinem Beitrag erklärst du dich damit einverstanden, dass deine Beiträge unter der Apache 2.0 Lizenz lizenziert werden, konsistent mit der Lizenzierung von Roo Code.
