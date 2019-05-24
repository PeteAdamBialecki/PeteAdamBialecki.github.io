# **SQL**

Here are a few helpful notes on using and working with SQL.

## **Calling Data and Columns**

Select all data in database where "database-name" is the name of the database ( * is short hand for everything):

        select * from database-name

To select one column, try the following where "email" is the name of a column:

        select email from database-name

To select multiple columns, try the following where "first_name" and "email" are column names:

        select first_name, email from database-name

To change the order, try this:

        select first_name, email from database-name

## **'AS'**

If you want to call a column and rename it in the report (this does not change the database but merely changes the report), use 'AS.  Rename the column using " " as a string.

        select <column_name> AS "New Name" from <table_name>

Another example:

        select first_name as "First Name", last_name as "Last Name", phone "Phone Number" from phone_book

        select home_team as "Home Team", home_score as "Home Score", away_team as "Away Team", away_score as "Away Score", played_on as "Date Played" from results