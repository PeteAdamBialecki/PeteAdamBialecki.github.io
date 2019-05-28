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

Ordering is prioritized left to right.

Examples:

        SELECT * FROM books ORDER BY    genre ASC, 
                                        title ASC;

        SELECT * FROM books ORDER BY    genre ASC,
                                        year_published DESC;

        SELECT * FROM users ORDER BY    last_name ASC,
                                        first_name ASC;