# **SQL Data Modification**

At the heart of a dynamic application is a database. Whether the application is an eCommerce, sports team, social network or a productivity app on your phone the data needs to change over time.  The following notes are for modifing data for dynamic applications.

## **CRUD**

Four main data operations: Create, Read (this has been primarily been covered in the SQL commands readme file), Update, Delete.

## **Create**

Inserting a single row:

        INSERT INTO <table> VALUES (<value 1>, <value 2>, ...);

This will insert values in the order of the columns prescribed in the schema.

Examples:

        INSERT INTO users VALUES  (1, "chalkers", "Andrew", "Chalkley");
        INSERT INTO users VALUES  (2, "ScRiPtKiDdIe", "Kenneth", "Love");

        INSERT INTO movies VALUES (3, "Starman", "Science Fiction", 1984);
        INSERT INTO movies VALUES (4, "Moulin Rouge!", "Musical", 2001);

Inserting a single row with values in any order (the name of the columns and the values need to be in order in the SQL statement):

        INSERT INTO <table> (<column 1>, <column 2>) VALUES (<value 1>, <value 2>);
        INSERT INTO <table> (<column 2>, <column 1>) VALUES (<value 2>, <value 1>);

Examples:

        INSERT INTO users (username, first_name, last_name) VALUES ("chalkers", "Andrew", "Chalkley");
        INSERT INTO users (first_name, last_name, username) VALUES  ("Kenneth", "Love", "ScRiPtKiDdIe");

        INSERT INTO movies (title, genre, year_released) VALUES ("Starman", "Science Fiction", 1984);
        INSERT INTO movies (title, year_released, genre) VALUES ("Moulin Rouge!", 2001,  "Musical");

NOTE: To prevent clashing of creating an element with the same id, you can enter in 'NULL' and then the auto-incremented value would be added.

NOTE: If you don't specifiy a column and a value, the element will most likely be signified as null.  The exception is if the scheme has been designed where certain columns can not be specified as null as in the example of a library database where a column like "returned_by" needs to be filled in at a later date.

To add multiple rows and values, use the following structure:

        INSERT INTO <table> (<column 1>, <column 2>, ...)
            VALUES
                (<value 1>, <value 2>, ...),
                (<value 1>, <value 2>, ...),
                (<value 1>, <value 2>, ...);

Example:

        INSERT INTO users (username, first_name, last_name)
            VALUES
                ("chalkers", "Andrew", "Chalkley"),
                ("ScRiPtKiDdIe", "Kenneth", "Love");

        INSERT INTO movies (title, genre, year_released)
            VALUES
                ("Starman", "Science Fiction", 1984),
                ("Moulin Rouge!", "Musical", 2001);
