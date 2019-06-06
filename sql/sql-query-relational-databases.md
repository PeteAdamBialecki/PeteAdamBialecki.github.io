# **SQL**

## **Querying Relational Databases**

How to structure data in an organized manner.  Benefits of relational databases:

- Maximize storage

- Better application functionality

- Cleaner, richer data for business reporting

## **Normalization**

The process of eliminating redundant or repeating data in a database.

## **UNIQUE Keys**

- Can be null

- Multiple unique keys per table (e.g. email, SSN, etc.)

- Can be modified to a new value

## **PRIMARY Keys**

- Never be null

- One primary key per table

- Cannot be modified to a new value

## **FOREIGN Key**

- Columns designed correctly

- Foreign Key constraint

Extra:

Referential Integrity: FOREIGN key values must also exist as a PRIMARY key value in the reference table.

## **One-To-Many Relationships**

One to Many relationships are by far the most common type of table relationship. There is a wealth of information about One to Many relationships available.

## **Many-To-Many Relationships**

Many to Many relationships mean that a record in one table can relate to many other records in another table, and one record from the second table can also relate back to many records in the first table.

## **One-To-One Relationships**

A “One to one” relationship between two tables means that a row in one table can only relate to one row in the table on the other side of their relationship and vice versa. This is the least common database relationship. One to One relationships are the least common database relationship.

## **JOIN**

A join is the instruction to the query engine on how to relate records in one table to records in another.

INNER JOIN: The backbone of advanced SQL querying. There are literally thousands of books, articles and blog posts with examples and information about SQL joins.  Basic syntax structure:

        SELECT <columns>
            FROM <table1>
            INNER JOIN <table2> ON <equality criteria>
            INNER JOIN <table3> ON <equlaity criteria>
            WHERE <search criteria>...

Examples:

        SELECT * FROM make INNER JOIN model ON make.MakeID = model.MakeID;

...a cleaner version:

        SELECT MakeName, ModelName FROM make INNER JOIN model ON make.MakeID = model.MakeID;

...a more detailed version:

        SELECT mk.MakeName, md.ModelName FROM make AS mk INNER JOIN model AS md ON mk.MakeID = md.MakeID;

To isolate a single data type:

        SELECT mk.MakeName, md.ModelName FROM make AS mk INNER JOIN model AS md ON mk.MakeID = md.MakeID WHERE mk.MakeName = "Chevy";