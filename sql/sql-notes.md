# **SQL**

Here are a few helpful notes on using and working with SQL.

Select all data in database where "database-name" is the name of the database ( * is short hand for everything):

        select * from database-name

To select one column, try the following where "email" is the name of a column:

        select email from database-name

To select multiple columns, try the following where "first_name" and "email" are column names:

        select first_name, email from database-name

To change the order, try this:

        select first_name, email from database-name