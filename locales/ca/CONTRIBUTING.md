[English](../../CONTRIBUTING.md) • <b>Català</b> • [Deutsch](../de/CONTRIBUTING.md) • [Español](../es/CONTRIBUTING.md) • [Français](../fr/CONTRIBUTING.md) • [हिंदी](../hi/CONTRIBUTING.md) • [Italiano](../it/CONTRIBUTING.md) • [Nederlands](../nl/CONTRIBUTING.md) • [Русский](../ru/CONTRIBUTING.md)

[日本語](../ja/CONTRIBUTING.md) • [한국어](../ko/CONTRIBUTING.md) • [Polski](../pl/CONTRIBUTING.md) • [Português (BR)](../pt-BR/CONTRIBUTING.md) • [Türkçe](../tr/CONTRIBUTING.md) • [Tiếng Việt](../vi/CONTRIBUTING.md) • [简体中文](../zh-CN/CONTRIBUTING.md) • [繁體中文](../zh-TW/CONTRIBUTING.md)

# Contribuir a Roo Vibecoding

Roo Code és un projecte impulsat per la comunitat i valorem molt cada contribució. Per simplificar la col·laboració, treballem amb un enfoc [Issue-First](#enfoc-issue-first), que significa que tots els [Pull Requests (PRs)](#enviar-un-pull-request) han d'estar primer vinculats a una Issue de GitHub. Si us plau, llegeix aquesta guia amb atenció.

## Taula de continguts

- [Abans de contribuir](#abans-de-contribuir)
- [Trobar i planificar la teva contribució](#trobar-i-planificar-la-teva-contribució)
- [Procés de desenvolupament i enviament](#procés-de-desenvolupament-i-enviament)
- [Legal](#legal)

## Abans de contribuir

### 1. Codi de conducta

Tots els col·laboradors han de complir el nostre [Codi de conducta](./CODE_OF_CONDUCT.md).

### 2. Fulla de ruta del projecte

<<<<<<< HEAD
Roo Vibecoding té una fulla de ruta clara que guia les nostres prioritats i direcció futura. Entendre-la t'ajuda a:
=======
La nostra fulla de ruta orienta la direcció del projecte. Alinea les teves contribucions amb aquests objectius clau:
>>>>>>> d7eec3afa6acde24d3000fde5e5f4f005fad757c

### Fiabilitat primer

- Garantir que l'edició de diferències i l'execució de comandes siguin consistentment fiables
- Reduir els punts de fricció que desanimen l'ús regular
- Garantir un funcionament fluid en tots els idiomes i plataformes
- Ampliar el suport robust per a una àmplia varietat de proveïdors i models d'IA

### Experiència d'usuari millorada

- Simplificar la interfície d'usuari per a més claredat i intuïció
- Millorar contínuament el flux de treball per satisfer les altes expectatives dels desenvolupadors

### Lideratge en rendiment dels agents

- Establir punts de referència d'avaluació (evals) complets per mesurar la productivitat real
- Facilitar que tothom pugui executar i interpretar aquestes avaluacions fàcilment
- Proporcionar millores que demostrin increments clars en les puntuacions d'avaluació

Esmenta la relació amb aquestes àrees als teus PRs.

### 3. Uneix-te a la comunitat Roo Vibecoding

<<<<<<< HEAD
Connectar amb la comunitat Roo Vibecoding és una excel·lent manera de començar:

- **Mètode principal**:
    1.  Uneix-te a la [comunitat Roo Vibecoding a Discord](https://discord.gg/roocode).
    2.  Un cop dins, envia un missatge directe (DM) a **Hannes Rudolph** (Discord: `hrudolph`) per comentar el teu interès i rebre orientació.
- **Alternativa per a col·laboradors experimentats**: Si et sents còmode amb l'enfoc issue-first, pots participar directament a GitHub seguint el [tauler Kanban](https://github.com/orgs/RooVetGit/projects/1) i comunicant-te mitjançant issues i pull requests.
=======
- **Principal:** Uneix-te al nostre [Discord](https://discord.gg/roocode) i envia un DM a **Hannes Rudolph (`hrudolph`)**.
- **Alternativa:** Els col·laboradors experimentats poden participar directament via [GitHub Projects](https://github.com/orgs/RooVetGit/projects/1).

## Trobar i planificar la teva contribució
>>>>>>> d7eec3afa6acde24d3000fde5e5f4f005fad757c

### Tipus de contribucions

- **Correcció d'errors:** Solucionar problemes en el codi.
- **Noves funcionalitats:** Afegir noves capacitats.
- **Documentació:** Millorar guies i claredat.

### Enfoc Issue-First

Totes les contribucions han de començar amb una Issue de GitHub.

- **Revisar issues existents:** Cerca a [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues).
- **Crear una issue:** Utilitza les plantilles adequades:
    - **Errors:** Plantilla "Bug Report".
    - **Funcionalitats:** Plantilla "Detailed Feature Proposal". Es requereix aprovació abans de començar.
- **Reclamar issues:** Comenta i espera l'assignació oficial.

**Els PRs sense issues aprovades poden ser tancats.**

### Decidir en què treballar

- Consulta el [Projecte GitHub](https://github.com/orgs/RooVetGit/projects/1) per trobar "Good First Issues" no assignades.
- Per a documentació, visita [Roo Code Docs](https://github.com/RooVetGit/Roo-Code-Docs).

### Informar d'errors

- Comprova primer els informes existents.
- Crea nous informes d'errors utilitzant la [plantilla "Bug Report"](https://github.com/RooVetGit/Roo-Code/issues/new/choose).
- **Vulnerabilitats de seguretat:** Informa de manera privada via [security advisories](https://github.com/RooVetGit/Roo-Code/security/advisories/new).

<<<<<<< HEAD
- **Good First Issues**: Consulta la secció "Issue [Unassigned]" del nostre [Projecte Roo Vibecoding Issues](https://github.com/orgs/RooVetGit/projects/1) a GitHub.
- **Documentació**: Tot i que aquest `CONTRIBUTING.md` és la guia principal per a contribucions de codi, si t'interessa contribuir a altra documentació (com guies d'usuari o API), revisa el [repositori Roo Vibecoding Docs](https://github.com/RooVetGit/Roo-Code-Docs) o pregunta a la comunitat de Discord.
- **Proposar noves funcionalitats**:
    1.  **Idea inicial/discussió**: Per a idees generals o inicials, inicia una conversa a [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests).
    2.  **Proposta formal**: Per a propostes específiques i llestes per a consideració, crea una issue de "Detailed Feature Proposal" utilitzant la plantilla a la nostra [pàgina d'issues](https://github.com/RooVetGit/Roo-Code/issues/new/choose). Això és clau en el nostre **enfoc Issue-First**.
=======
## Procés de desenvolupament i enviament
>>>>>>> d7eec3afa6acde24d3000fde5e5f4f005fad757c

### Configuració de desenvolupament

1. **Fork & Clona:**

<<<<<<< HEAD
1.  **Cerca issues existents**: Revisa [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues) per veure si ja està reportat.
2.  **Crea una nova issue**: Si és únic, utilitza la plantilla "Bug Report" a la nostra [pàgina d'issues](https://github.com/RooVetGit/Roo-Code/issues/new/choose).

> 🔐 **Vulnerabilitats de seguretat**: Si descobreixes una vulnerabilitat de seguretat, informa-la de manera privada utilitzant l'[eina d'avisos de seguretat de GitHub](https://github.com/RooVetGit/Roo-Code/security/advisories/new). No creïs una issue pública per a vulnerabilitats de seguretat.

## III. Procés de desenvolupament i enviament

Segueix aquests passos per programar i enviar la teva feina.

### 1. Configuració de desenvolupament

1.  **Fork & Clona**:
    - Fes un fork del repositori a GitHub.
    - Clona el teu fork localment: `git clone https://github.com/EL_TEU_USUARI/Roo-Code.git`
2.  **Instal·la les dependències**: `npm run install:all`
3.  **Executa Webview (mode dev)**: `npm run dev` (per a l'app Vite/React amb HMR)
4.  **Depura l'extensió**: Prem `F5` a VS Code (o **Run** → **Start Debugging**) per obrir una nova finestra Extension Development Host amb Roo Vibecoding carregat.

Els canvis a webview (`webview-ui`) apareixeran immediatament gràcies a Hot Module Replacement. Els canvis a l'extensió principal (`src`) requeriran reiniciar l'Extension Development Host.

Alternativament, per construir i instal·lar un paquet `.vsix`:

```sh
npm run build
code --install-extension bin/roo-cline-<versió>.vsix
=======
```
git clone https://github.com/EL_TEU_USUARI/Roo-Code.git
>>>>>>> d7eec3afa6acde24d3000fde5e5f4f005fad757c
```

2. **Instal·la dependències:**

```
npm run install:all
```

3. **Depuració:** Obre amb VS Code (`F5`).

### Guia per escriure codi

- Un PR centrat per funcionalitat o correcció.
- Segueix les millors pràctiques d'ESLint i TypeScript.
- Escriu missatges de commit clars i descriptius que facin referència a issues (ex: `Fixes #123`).
- Proporciona proves completes (`npm test`).
- Rebaseja a la branca `main` més recent abans d'enviar.

### Enviar un Pull Request

- Comença com a **PR en esborrany** si busques feedback primerenc.
- Descriu clarament els teus canvis seguint la Plantilla de Pull Request.
- Proporciona captures de pantalla/vídeos per a canvis d'UI.
- Indica si es necessiten actualitzacions de documentació.

### Política de Pull Request

- Ha de fer referència a issues preaprovades i assignades.
- Els PRs que no segueixen la política poden ser tancats.
- Els PRs han de passar els tests de CI, alinear-se amb la fulla de ruta i tenir documentació clara.

### Procés de revisió

- **Triatge diari:** Comprovacions ràpides pels mantenidors.
- **Revisió setmanal detallada:** Avaluació exhaustiva.
- **Itera ràpidament** en base al feedback.

## Legal

En enviar un pull request, acceptes que les teves contribucions es llicenciïn sota la Llicència Apache 2.0, d'acord amb la llicència de Roo Code.
