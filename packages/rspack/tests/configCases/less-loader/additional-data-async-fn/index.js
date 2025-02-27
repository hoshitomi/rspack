const fs = require("fs");
const path = require("path");

it("should work as string", () => {
	require("./index.less");
	const css = fs.readFileSync(path.resolve(__dirname, "main.css"), "utf-8");
	expect(css.includes("coral")).toBe(true);
	expect(css.includes(`relative-path: "index.less"`)).toBe(true);
});
