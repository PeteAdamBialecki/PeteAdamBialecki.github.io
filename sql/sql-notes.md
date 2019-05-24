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

## **Eqaulit Operators**

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