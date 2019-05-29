# **SQL**

## **Reporting**

Some ways to handle data:

- Ordering (e.g. sort products alphabetically or by price, movies by year, articles by date, sorting contacts)

- Limiting (e.g. retrieve lastest articles, paging through archive)

- Manipulating Text (e.g. standarizing output: lowercase emails, uppercase last names)

- Aggregation (e.g. count values, sum values, maximum number, minimum number)

- Date (e.g. search using today's date, date calculations)

## **Ordering**

Ordering by a single column criteria:

        SELECT * FROM <table name> ORDER BY <column> [ASC|DESC];

ASC is used to order results in ascending order.  DESC is used to order results in descending order.

Examples:

        SELECT * FROM books ORDER BY title ASC;
        SELECT * FROM products WHERE name = "Sonic T-Shirt" ORDER BY stock_count DESC;
        SELECT * FROM users ORDER BY signed_up_on DESC;
        SELECT * FROM countries ORDER BY population DESC;

Ordering by multiple column criteria:

        SELECT * FROM <table name> ORDER BY <column> [ASC|DESC],
                                            <column 2> [ASC|DESC],
                                            ...,
                                            <column n> [ASC|DESC];

        SELECT * FROM customs ORDER BY first_name ASC, last_name ASC

Ordering is prioritized left to right.

Examples:

        SELECT * FROM books ORDER BY    genre ASC, 
                                        title ASC;

        SELECT * FROM books ORDER BY    genre ASC,
                                        year_published DESC;

        SELECT * FROM users ORDER BY    last_name ASC,
                                        first_name ASC;

## **Limiting**

Databases can store massive amounts of data, and often you don't want to bring back all of the results. It's slow and it affects the performance for other users. In most cases you only want a certain subset of the rows.

SQLite, PostgreSQL and MySQL: To limit the number of results returned, use the LIMIT keyword.

        SELECT <columns> FROM <table> LIMIT <# of rows>;

MS SQL: To limit the number of results returned, use the TOP keyword.

        SELECT TOP <# of rows> <columns> FROM <table>;

Oracle: To limit the number of results returned, use the ROWNUM keyword in a WHERE clause.

        SELECT <columns> FROM <table> WHERE ROWNUM <= <# of rows>;

Limiting just by the top set of results is a fine thing, but let's say you wanted to generate a multi page report. Having a blog archive or listing search results in batches of 50 is where you want paging.

SQLite, PostgreSQL and MySQL: To page through results you can either use the OFFSET keyword in conjunction with the LIMIT keyword or just with LIMIT alone.

        SELECT <columns> FROM <table> LIMIT <# of rows> OFFSET <skipped rows>;
        SELECT <columns> FROM <table> LIMIT <skipped rows>, <# of rows>; 

MS SQL and Oracle: To page through results you can either use the OFFSET keyword in conjunction with the FETCH keyword. Cannot be used with TOP.

        SELECT <columns> FROM <table> OFFSET <skipped rows> ROWS FETCH NEXT <# of rows> ROWS ONLY;

        SELECT * FROM phone_book ORDER BY last_name ASC, first_name ASC LIMIT 20 OFFSET 60;

Example #1:

- Obtain the actor records between the 701st and 720th records using only LIMIT and OFFSET
- N.B Due to actors being removed from the database the 701st row has the id of 702

        SELECT * FROM actors ORDER BY id LIMIT 20 OFFSET 699;

Example #2:

- Obtain the actor records between the 701st and 720th records using only LIMIT and OFFSET
- N.B Due to actors being removed from the database the 701st row has the id of 702

        SELECT * FROM actors ORDER BY id LIMIT 20 OFFSET 699;

Example #3:

- Sort all reviews by username

        SELECT * FROM reviews ORDER BY username ASC;

Example #4:

- Order movies with the most recent movies appearing at the top

        SELECT * FROM movies ORDER BY year_released DESC;

## **Functions**

Keywords: Commands issued to a database. The data presented in queries is unaltered.

Operators: Performs comparisons and simple manipulation

Functions: Presents data differently through more complex manipulation

A function looks like:

        <function name>(<value or column>)

Example:

        UPPER("Andrew Chalkley") 

## **Adding Text Columns Together**

SQLite, PostgreSQL and Oracle
Use the concatenation operator ||.

        SELECT <value or column> || <value or column> || <value or column>  FROM <table>;  

MS SQL
Use the concatenation operator +.

        SELECT <value or column> + <value or column> + <value or column>  FROM <table>;  

MySQL, Postgres and MS SQL
Use the CONCAT() function.

        SELECT CONCAT(<value or column>, <value or column>, <value or column>) FROM <table>;

Example with space:

        SELECT first_name || " " || last_name AS "Full Name", email AS "Email", phone AS "Phone" FROM customers ORDER BY last_name

NOTE: In SQL there's a difference between using single quotes (') and double quotes ("). Single quotes should be used for String literals (e.g. 'lbs'), and double quotes should be used for identifiers like column aliases (e.g. "Max Weight"):

SELECT maximum_weight || 'lbs' AS "Max Weight" FROM ELEVATOR_DATA;

## **Finding the Length of Text**

To obtain the length of a value or column use the LENGTH() function.

        SELECT LENGTH(<value or column>) FROM <tables>;

        SELECT LENGTH(<column>) AS <alias> FROM <table>;

        SELECT <columns> FROM <table> WHERE LENGTH(<column>) <operator> <value>;

Example:

        SELECT username, LENGTH(username) AS length FROM customers;

        SELECT username, LENGTH(username) AS length FROM customers ORDER BY length DESC LIMIT 1;