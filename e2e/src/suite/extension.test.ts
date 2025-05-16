import * as assert from "assert"
import * as vscode from "vscode"

suite("Roo Code Chinese SSY Extension", () => {
	test("Commands should be registered", async () => {
		const expectedCommands = [
			"roo-vibecoding.plusButtonClicked",
			"roo-vibecoding.mcpButtonClicked",
			"roo-vibecoding.historyButtonClicked",
			"roo-vibecoding.popoutButtonClicked",
			"roo-vibecoding.settingsButtonClicked",
			"roo-vibecoding.openInNewTab",
			"roo-vibecoding.explainCode",
			"roo-vibecoding.fixCode",
			"roo-vibecoding.improveCode",
		]

		const commands = await vscode.commands.getCommands(true)

		for (const cmd of expectedCommands) {
			assert.ok(commands.includes(cmd), `Command ${cmd} should be registered`)
		}
	})
})
