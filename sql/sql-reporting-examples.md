# **SQL**

## **Reporting Examples**

What's Yvette Levy's student ID number?

        SELECT * FROM students WHERE last_name = "Levy" AND first_name = "Yvette";

Generate a list of teachers sorted alphabetically by last name.

        SELECT first_name, last_name FROM teachers
        ORDER BY last_name ASC;

Which students have last names starting with 'A'?

        SELECT * FROM students
        WHERE first_name LIKE 'A%';