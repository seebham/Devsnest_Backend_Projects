"use strict";
var fs = require("fs");
var args = require("minimist")(process.argv.slice(2));
// Directory Operations
var createDirectory = function (dir) {
    try {
        fs.mkdirSync("./" + dir);
        console.log(dir + " created");
    }
    catch (err) {
        console.error(err);
    }
};
var delDirectory = function (dir, isRecursive) {
    try {
        fs.rmSync("" + dir, { recursive: isRecursive ? true : false });
        console.log(dir + " deleted");
    }
    catch (err) {
        if (err.code === "ERR_FS_EISDIR")
            console.log("Error! Folder ./" + dir + " has files/folders in it. Please delete them first. \nOr Try using 'delDir folder --r' flag to remove the subfolders too");
        else
            console.error(err);
    }
};
// File Operations
var writeToFile = function (file, data) {
    try {
        fs.writeFileSync("./" + file, data);
        console.log(file + " created");
    }
    catch (err) {
        console.error(err);
    }
};
var appendToFile = function (file, data) {
    try {
        fs.appendFileSync("./" + file, data);
        console.log("\"" + data + "\" appended to " + file);
    }
    catch (err) {
        console.error(err);
    }
};
var readFromFile = function (file) {
    try {
        var data = fs.readFileSync("./" + file, "utf-8");
        console.log("Data in " + file + ": \n" + data);
    }
    catch (err) {
        console.error(err);
    }
};
var renameFile = function (oldName, newName) {
    try {
        fs.renameSync("./" + oldName, "./" + newName);
        console.log(oldName + " renamed to " + newName);
    }
    catch (err) {
        console.error(err);
    }
};
var delFile = function (file) {
    try {
        fs.unlinkSync("./" + file);
        console.log(file + " deleted");
    }
    catch (err) {
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
