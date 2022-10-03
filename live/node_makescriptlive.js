
var fs = require("fs");
fs.writeFileSync("live.js",`(function () {\n${fs.readFileSync("./liverunner.console.js",{encoding:"UTF-8"})}\n})();\n(async function () {\nvar console = new lrconsole();${fs.readFileSync("./liverunner.js",{encoding:"UTF-8"})}\n})();`)
