import * as assert from "assert"
import * as vscode from "vscode"

suite("Cline Pro Extension", () => {
	test("Commands should be registered", async () => {
		const expectedCommands = [
			"cline-pro.plusButtonClicked",
			"cline-pro.mcpButtonClicked",
			"cline-pro.historyButtonClicked",
			"cline-pro.popoutButtonClicked",
			"cline-pro.settingsButtonClicked",
			"cline-pro.openInNewTab",
			"cline-pro.explainCode",
			"cline-pro.fixCode",
			"cline-pro.improveCode",
		]

		const commands = await vscode.commands.getCommands(true)

		for (const cmd of expectedCommands) {
			assert.ok(commands.includes(cmd), `Command ${cmd} should be registered`)
		}
	})
})
