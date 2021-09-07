"use strict";
const fs = require("fs");
const args = require("minimist")(process.argv.slice(2));
// Directory Operations
const createDirectory = (dir) => {
    fs.mkdir(`./${dir}`, (err) => console.error(err));
    console.log(`${dir} created`);
};
const delDirectory = (dir, isRecursive) => {
    fs.rm(`${dir}`, { recursive: isRecursive ? true : false }, (err) => {
        if (err.code === "ERR_FS_EISDIR")
            console.log(`Error! Folder ./${dir} has files/folders in it. Please delete them first. \nOr Try using 'delDir folder --r' flag to remove the subfolders too`);
        else
            console.error(err);
    });
    console.log(`${dir} deleted`);
};
// File Operations
const writeToFile = (file, data) => {
    fs.writeFile(`./${file}`, data, (err) => console.error(err));
    console.log(`${file} created`);
};
const appendToFile = (file, data) => {
    fs.appendFile(`./${file}`, data, (err) => console.error(err));
    console.log(`"${data}" appended to ${file}`);
};
const readFromFile = (file) => {
    let data = fs.readFile(`./${file}`, "utf-8", (err) => console.error(err));
    console.log(`Data in ${file}: \n${data}`);
};
const renameFile = (oldName, newName) => {
    fs.rename(`./${oldName}`, `./${newName}`, (err) => console.error(err));
    console.log(`${oldName} renamed to ${newName}`);
};
const delFile = (file) => {
    fs.unlink(`./${file}`, (err) => console.error(err));
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
