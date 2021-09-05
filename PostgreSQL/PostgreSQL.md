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
   ```sql
   CREATE USER shubham WITH PASSWORD 'pwd';
   ```
2. Create a Database
   ```sql
   CREATE DATABASe devs;
   ```
3. Granting all the database's permission to a user
   ```sql
   GRANT ALL PRIVILEGES ON DATABASE devs to shubham;
   ```
4. Grant specific permissions
   ```sql
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
   ```sql
   DROP DATABASE devs;
   ```
8. Create a table
   ```sql
   CREATE TABLE COMPANY(
       ID INT NOT NULL,
       NAME CHAR[50],
       AGE INT,
       ADDRESS TEXT
   );
   ```
9. View the list of all tables
   ```sql
   \d
   ```
10. View a specific table
    ```sql
    \d company
    ```
11. Creating a Schema
    ```sql
    CREATE SCHEMA mySchema
    ```
12. Drop a Schema with its databases
    ```sql
    DROP SCHEMA mySchema CASCADE
    ```
13. Create Table inside a Schema
    ```sql
    CREATE TABLE mySchema.company(
       ID INT NOT NULL,
       NAME VARCHAR(20) NOT NULL,
       AGE INT NOT NULL,
       ADDRESS CHAR(25),
       SALARY DECIMAL(18,2),
       JOIN_DATE DATE,
       PRIMARY KEY(ID)
    );
    ```
14. Inserting data into the table

    ```sql
    INSERT INTO mySchema.company(ID, NAME, AGE, ADDRESS, SALARY)
    VALUES (1, 'John', 22, 'NYC', 20000.00, 2000-08-11);
    ```

### CREATE a TABLE

`CREATE TABLE [IF NOT EXISTS] table_name ( column1 datatype(length) column_contraint, column2 datatype(length) column_contraint, column3 datatype(length) column_contraint, table_constraints );`

```sql
CREATE TABLE mySchema.customer(
customer_id INT UNIQUE NOT NULL,
customer_name VARCHAR(255) NOT NULL,
PRIMARY KEY(customer_id)
);
```

### GENERATED AS IDENTITY

`column_name type GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY[ ( sequence_option ) ]`

```sql
CREATE TABLE mySchema.customer(
customer_id INT GENERATED ALWAYS AS IDENTITY,
customer_name VARCHAR(255) NOT NULL,
PRIMARY KEY(customer_id)
);
```

### SELECT

15. Viewing all rows of a table
    ```sql
    SELECT * FROM company;
    ```
16. Fun with SELECT
    ```sql
    SELECT (1+2) AS addition;
    ```
17. Get the count of ROWS in a table
    ```sql
    SELECT COUNT(*) AS "Records" FROM company;
    ```
18. Select current time
    ```sql
    SELECT CURRENT_TIMESTAMP AS "TIME";
    ```

### WHERE

19. Getting all the rows where age is less than 30 and salary is greater than 2000
    ```sql
    SELECT * FROM mySchema.company WHERE AGE < 30 AND SALARY >= 2000;
    ```

### Wildcard Characters

20. %
    ```sql
    SELECT * FROM mySchema.company WHERE NAME LIKE 'P%';
    ```
21. \_
    ```sql
    SELECT * FROM mySchema.company WHERE NAME LIKE 'P_ul';
    ```
22. % and \_ together
    ```sql
    SELECT * FROM mySchema.company WHERE NAME LIKE 'P_u%';
    ```

### Typecasting in SELECT

23. Use `::` to typecast
    ```sql
    SELECT * FROM mySchema.company WHERE SALARY::TEXT LIKE '200%';
    ```

### BETWEEN - operator to match a value against a range of values

`value BETWEEN low AND high;`

24. Find rows with Age between 20 and 30
    ```sql
    SELECT * FROM mySchema.company WHERE AGE BETWEEN 20 AND 30;
    ```

### IN - to check if a value matches any value in a list of values

`value IN (value1,value2,...)`

25. Find rows having age 22 and 29.
    ```sql
    SELECT * FROM mySchema.company WHERE AGE IN (22,29);
    ```
26. Find rows not having age 22 and 29.
    ```sql
    SELECT * FROM mySchema.company WHERE AGE NOT IN (22,29);
    ```

### Update

`UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;`

27. Updating salary of ID 3

    ```sql
    UPDATE mySchema.company SET SALARY = 2500.00 WHERE ID=3;
    ```

28. Updating multiple columns
    ```sql
    UPDATE mySchema.company SET ADDRESS='Banglore', SALARY=3000.00 WHERE ID=3;
    ```

### DELETE a row

`DELETE FROM table_name WHERE condition;`

29. Delete the row with ID = 4
    ```sql
    DELETE FROM mySchema.company WHERE ID=4;
    ```

### Foreign Key

30. Create Contacts Table and reference it to Customer Table
    ```sql
    CREATE TABLE mySchema.contacts(
      contact_id INT GENERATED ALWAYS AS IDENTITY,
      customer_id INT GENERATED ALWAYS AS IDENTITY,
      contact_name VARCHAR(255) NOT NULL,
      phone VARCHAR(15),
      email VARCHAR(100),
      PRIMARY KEY(contact_id),
      CONSTRAINT foreign_key_customer FOREIGN KEY(customer_id) REFERENCES mySchema.customer(customer_id) ON DELETE CASCADE);
    ```
