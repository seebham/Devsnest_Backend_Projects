# PostgreSQL in Arch Linux

##### Refer - [ArchWiki](https://wiki.archlinux.org/title/PostgreSQL)

1. Help in PSQL
   ```
   \help
   ```
2. Create database
   ```
   createdb <databaseName>
   ```
3. Connect to a database
   ```
   \c <databaseName>
   ```
4. Show summary information about all tables in the current database
   ```
   \dt
   ```
5. Exit psql shell
   `\q`
   or
   `CTRL + d`

# PostgreSQL CLI Commands learn in Day 1

1. Create a user
   ```
   CREATE USER shubham WITH PASSWORD 'pwd';
   ```
2. Create a Database
   ```
   CREATE DATABASe devs;
   ```
3. Granting all the database's permission to a user
   ```
   GRANT ALL PRIVILEGES ON DATABASE devs to shubham;
   ```
4. Grant specific permissions
   ```
   GRANT SELECT PRIVILEGE ON DATABASE devs to shubham;
   ```
5. List all databases
   ```
   \l
   ```
6. Connect to the database
   ```
   \c devs
   ```
7. Drop a database
   ```
   DROP DATABASE devs;
   ```
8. Create a table
   ```
   CREATE TABLE COMPANY(
       ID INT NOT NULL,
       NAME CHAR[50],
       AGE INT,
       ADDRESS TEXT
   );
   ```
9. View the list of all tables
   ```
   \d
   ```
10. View a specific table
    ```
    \d company
    ```
