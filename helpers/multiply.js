const fs = require("fs");
const colors = require('colors');

const createFile = async (base = 5, multiplyUntil = 10, listTable = false) => {
  try {
    let fileOutput = "";
    let consoleOutput = "";
    for (let i = 1; i <= multiplyUntil; i++) {
      consoleOutput += `${colors.green(base)} ${colors.red('x')} ${colors.blue(i)} = ${colors.yellow(base * i)}\n`;
      fileOutput += `${base} x ${i} = ${base * i}\n`;
    }

    if (listTable)
      console.log(consoleOutput);

    const fileName = `output/table-${base}.txt`;
    fs.writeFileSync(fileName, fileOutput);

    return fileName;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile
};
