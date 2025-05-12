import * as assert from "assert"
import * as vscode from "vscode"

suite("Roo Code Pro Extension", () => {
	test("Commands should be registered", async () => {
		const expectedCommands = [
			"roo-code-pro.plusButtonClicked",
			"roo-code-pro.mcpButtonClicked",
			"roo-code-pro.historyButtonClicked",
			"roo-code-pro.popoutButtonClicked",
			"roo-code-pro.settingsButtonClicked",
			"roo-code-pro.openInNewTab",
			"roo-code-pro.explainCode",
			"roo-code-pro.fixCode",
			"roo-code-pro.improveCode",
		]

		const commands = await vscode.commands.getCommands(true)

		for (const cmd of expectedCommands) {
			assert.ok(commands.includes(cmd), `Command ${cmd} should be registered`)
		}
	})
})
