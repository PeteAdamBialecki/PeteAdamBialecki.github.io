# **SQL**

Here are a few helpful notes on using and working with SQL.

## **Calling Data and Columns**

Select all data in database where "database-name" is the name of the database ( * is short hand for everything):

        SELECT * FROM database-name

To select one column, try the following where "email" is the name of a column:

        SELECT email FROM database-name

To select multiple columns, try the following where "first_name" and "email" are column names:

        SELECT first_name, email FROM database-name

To change the order, try this:

        SELECT first_name, email FROM database-name

## **'AS'**

If you want to call a column and rename it in the report (this does not change the database but merely changes the report), use 'AS.  Rename the column using " " as a string.

        SELECT <column_name> AS "New Name" FROM <table_name>

Another example:

        SELECT first_name as "First Name", last_name as "Last Name", phone "Phone Number" FROM phone_book

        SELECT home_team as "Home Team", home_score as "Home Score", away_team as "Away Team", away_score as "Away Score", played_on as "Date Played" FROM results

## **'WHERE'**

To filter rows of information, use the 'WHERE' keyword:

        SELECT title, author FROM books WHERE first_published = 1997;

or 

        SELECT title, first_published FROM books WHERE author = "J.K. Rowling";

## **Eqaulity Operators**

=

    equality

        "Andrew" = "Andrew"

!=

    inequality

        "Andrew" != "Lauren"

<

    less than

        1 < 40, 39 < 40

<=

    less than or equal to

        1 <= 40, 40 <= 40

>

    greater than

        100 > 40, 100 > 99

>=

    greater than or equal to

        100 >= 99, 100 >= 100

## **Filtering on More than One Condition**

To filter out something using more than one condition (sorting through multiple columns), use the 'AND' keyword:

        SELECT title FROM books WHERE author = "J.K. Rowling" AND first_published < 2000

        SELECT * FROM results WHERE away_team = "Hessle" AND away_score > 18

You can also use the 'OR' keyword instead of the 'AND' to get different results:

        SELECT title, author FROM books WHERE author = "J.K. Rowling" OR author = "Stephen King"

        SELECT * FROM users WHERE last_name = "Hinkley" OR last_name = "Pettit"

## **Filtering by Dates**

Filtering results by date can be handy for finding entries before or after a specific date. These are primarily used to compare numeric and date/time types:

        SELECT <columns> FROM <table> WHERE <column name> < <value>;
        SELECT <columns> FROM <table> WHERE <column name> <= <value>;
        SELECT <columns> FROM <table> WHERE <column name> > <value>;
        SELECT <columns> FROM <table> WHERE <column name> >= <value>;

Examples:

        SELECT first_name, last_name FROM users WHERE date_of_birth < '1998-12-01';
        SELECT title AS "Book Title", author AS Author FROM books WHERE year_released <= 2015;
        SELECT name, description FROM products WHERE price > 9.99;
        SELECT title FROM movies WHERE release_year >= 2000;
        SELECT * FROM results WHERE away_team = "Hessle" AND played_on >= "2015-10-01"

## **IN**

To search multiple values of one condition, use the 'IN' keyword and then list the values that need to be found.  Basic statement structure:

        SELECT <columns> FROM <table> WHERE <column> IN (<value 1>, <value 2>, ...);

Examples:

        SELECT name FROM islands WHERE id IN (4, 8, 15, 16, 23, 42);
        SELECT * FROM products WHERE category IN ("eBooks", "Books", "Comics");
        SELECT title FROM courses WHERE topic IN ("JavaScript", "Databases", "CSS");
        SELECT * FROM campaigns WHERE medium IN ("email", "blog", "ppc");

To find all rows that are not in the set of values you can use NOT IN.

        SELECT <columns> FROM <table> WHERE <column>  NOT IN (<value 1>, <value 2>, ...);

Examples:

        SELECT answer FROM answers WHERE id IN (7, 42);
        SELECT * FROM products WHERE category NOT IN ("Electronics");
        SELECT title FROM courses WHERE topic NOT IN ("SQL", "NoSQL");

## **BETWEEN**

To search for values between a certain range, use the 'BETWEEN' keyword (NOTE: the lower value needs to go first). Basic statement structure:

        SELECT <columns> FROM <table> WHERE <column> BETWEEN <lesser value> AND <greater value>;

Example:

        SELECT * FROM movies WHERE release_year BETWEEN 2000 AND 2010;
        SELECT name, description FROM products WHERE price BETWEEN 9.99 AND 19.99;
        SELECT name, appointment_date FROM appointments WHERE appointment_date BETWEEN "2015-01-01" AND "2015-01-07";