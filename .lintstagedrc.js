const path = require("path");

const buildEslintCommand = (filenames) => `next lint --fix`;

module.exports = {
  "*.{js,jsx,ts,tsx,json}": [buildEslintCommand, "npx prettier --write ."],
};
