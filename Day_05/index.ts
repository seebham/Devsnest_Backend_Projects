const fs = require("fs");
const args = require("minimist")(process.argv.slice(2));

// Directory Operations
const createDirectory = (dir: string) => {
  try {
    fs.mkdirSync(`./${dir}`);
    console.log(`${dir} created`);
  } catch (err) {
    console.error(err);
  }
};

const delDirectory = (dir: string, isRecursive: boolean) => {
  try {
    fs.rmSync(`${dir}`, { recursive: isRecursive ? true : false });
    console.log(`${dir} deleted`);
  } catch (err: any) {
    if (err.code === "ERR_FS_EISDIR")
      console.log(
        `Error! Folder ./${dir} has files/folders in it. Please delete them first. \nOr Try using 'delDir folder --r' flag to remove the subfolders too`
      );
    else console.error(err);
  }
};

// File Operations
const writeToFile = (file: string, data: string) => {
  try {
    fs.writeFileSync(`./${file}`, data);
    console.log(`${file} created`);
  } catch (err) {
    console.error(err);
  }
};

const appendToFile = (file: string, data: string) => {
  try {
    fs.appendFileSync(`./${file}`, data);
    console.log(`"${data}" appended to ${file}`);
  } catch (err) {
    console.error(err);
  }
};

const readFromFile = (file: string) => {
  try {
    let data = fs.readFileSync(`./${file}`, "utf-8");
    console.log(`Data in ${file}: \n${data}`);
  } catch (err) {
    console.error(err);
  }
};

const renameFile = (oldName: string, newName: string) => {
  try {
    fs.renameSync(`./${oldName}`, `./${newName}`);
    console.log(`${oldName} renamed to ${newName}`);
  } catch (err) {
    console.error(err);
  }
};

const delFile = (file: string) => {
  try {
    fs.unlinkSync(`./${file}`);
    console.log(`${file} deleted`);
  } catch (err) {
    console.error(err);
  }
};

switch (args._[0]) {
  case "createDir":
    createDirectory(args._[1]);
    break;
  case "delDir":
    delDirectory(args._[1], args.r);
    break;
  case "writeToFile":
    writeToFile(args.file, args.data);
    break;
  case "readFromFile":
    readFromFile(args.file);
    break;
  case "appendToFile":
    appendToFile(args.file, args.data);
    break;
  case "renameFile":
    renameFile(args._[1], args._[2]);
    break;
  case "delFile":
    delFile(args.file);
    break;
  default:
    console.log("Invalid Command");
}

console.log("Exited!");
