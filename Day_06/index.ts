const fs = require("fs");
const args = require("minimist")(process.argv.slice(2));

// Directory Operations
const createDirectory = (dir: string) => {
  fs.mkdir(`./${dir}`, (err: Error) => console.error(err));
  console.log(`${dir} created`);
};

const delDirectory = (dir: string, isRecursive: boolean) => {
  fs.rm(
    `${dir}`,
    { recursive: isRecursive ? true : false },
    (err: { code: string }) => {
      if (err.code === "ERR_FS_EISDIR")
        console.log(
          `Error! Folder ./${dir} has files/folders in it. Please delete them first. \nOr Try using 'delDir folder --r' flag to remove the subfolders too`
        );
      else console.error(err);
    }
  );
  console.log(`${dir} deleted`);
};

// File Operations
const writeToFile = (file: string, data: string) => {
  fs.writeFile(`./${file}`, data, (err: Error) => console.error(err));
  console.log(`${file} created`);
};

const appendToFile = (file: string, data: string) => {
  fs.appendFile(`./${file}`, data, (err: Error) => console.error(err));
  console.log(`"${data}" appended to ${file}`);
};

const readFromFile = (file: string) => {
  let data = fs.readFile(`./${file}`, "utf-8", (err: Error) =>
    console.error(err)
  );
  console.log(`Data in ${file}: \n${data}`);
};

const renameFile = (oldName: string, newName: string) => {
  fs.rename(`./${oldName}`, `./${newName}`, (err: Error) => console.error(err));
  console.log(`${oldName} renamed to ${newName}`);
};

const delFile = (file: string) => {
  fs.unlink(`./${file}`, (err: Error) => console.error(err));
  console.log(`${file} deleted`);
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
