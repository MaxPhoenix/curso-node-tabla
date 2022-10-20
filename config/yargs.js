const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: 'Number for calculating its multiplication table'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: `Whether to print or not the base's multiplication table`
    })
    .option('u', {
        alias: "until",
        type: "number",
        demandOption: true,
        describe: 'Number until the base will be multiplied'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'Base must be a number';
        }
        return true;
    })
    .argv;

module.exports = argv;