# File System CRUD NodeJS CLI using FS Module and Minimist

This NodeJS script is a for carrying out Create, Read, Update and Delete (CRUD) operation of File System. </br>
I learnt NodeJS `fs` module and `minimist` library for writing this.
</br></br>
This uses `Asynchronous` methods, for program with `Synchronous` methods check <a href="https://github.com/seebham/Devsnest_Backend_Projects/tree/main/Day_05" target="_blank">Day 5</a> THA

## Try this

1. Download index.js and run in CLI (install node if not installed already)
   ```bash
   node index [arguments]
   ```
2. Use the [Commands](#commands) in the console

## Commands

1.  Create a directory

    ```shell
    node index createDir <directoryName>
    ```

    ex. `node index createDir folder`

2.  Create a File with data

    ```shell
    node index writeToFile --file=<fileName.extension> --data=<data>
    ```

    ex. `node index writeToFile --file=./folder/data.txt --data="Hello"`

3.  Append to File

    ```shell
    node index appendToFile --file=<fileName.extension> --data=<dataToAppend>
    ```

    ex. `node index appendToFile --file=./folder/data.txt --data=" from CLI"`

4.  Rename a file

    ```shell
    node index readFromFile --file="<filePath.extension>"
    ```

    ex. `node index readFromFile --file="folder/data.txt"`

5.  Rename a file

    ```shell
    node index renameFile <oldFileName.extension> <newFileName.extension>
    ```

    ex. `node index renameFile folder/data.txt folder/database.txt`

6.  Delete a file

    ```shell
    node index delFile --file=<fileName.extension>
    ```

    ex. `node index delFile --file=folder/database.txt`

7.  Delete a Folder

    ```shell
    node index delDir <folderName>
    ```

    ex. `node index delDir folder`

8.  Delete a Folder with files/folders inside it (recursive flag)
    ```shell
    node index delDir <folderName> --r
    ```
    ex. `node index delDir folder --r`
