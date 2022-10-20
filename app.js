const { createFile } = require("./helpers/multiply");
const argv = require("./config/yargs")

console.clear();

//obtain data passed to arguments on the terminal
/* const [, , arg3 = "base=5"] = process.argv;
const [, base = 5] = arg3.split("=");
console.log(base);
 */

console.log(argv);

const base = argv.b;
const multiplyUntil = argv.u;
const mustListTable = argv.l;

createFile(base, multiplyUntil, mustListTable)
  .then((fileName) => console.log(`${fileName} created`))
  .catch((err) => console.log(err));
