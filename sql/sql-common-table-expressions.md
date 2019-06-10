# **Common SQL Table Expressions**

## **What Is A Common Table Expression?**

Benefits to using a CTE:

    - Makes queries easier to read

    - Organizes queries into reusable modules

    - Better matches how you think about data analysis

Example Code: Basic Common Table Expression

        WITH product_details AS (  
            SELECT ProductName, CategoryName, UnitPrice, UnitsInStock
            FROM Products
            JOIN Categories ON PRODUCTS.CategoryId = Categories.Id
            WHERE Products.Discontinued = 0
        ) SELECT * FROM product_details
        ORDER BY 2, 1

Example Code: Basic Common Table Expression Expanded

        WITH product_details AS (  
            SELECT ProductName, CategoryName, UnitPrice, UnitsInStock
            FROM Products
            JOIN Categories ON PRODUCTS.CategoryId = Categories.Id
            WHERE Products.Discontinued = 0
        ) SELECT CategoryName, COUNT(*) AS unique_product_count, SUM(UnitsInStock) AS stock_count
        FROM product_details
        GROUP BY 1
        ORDER BY 2

Expanding on an expression, step 1:

        SELECT ProductName, CategoryName, UnitPrice, UnitsInStock
        FROM Products
        JOIN Categories ON PRODUCTS.CategoryId = Categories.Id
        WHERE Products.Discontinued = 0

Expanding on an expression, step 2:
        WITH product_details AS (
        SELECT ProductName, CategoryName, UnitPrice, UnitsInStock
        FROM Products
        JOIN Categories ON PRODUCTS.CategoryId = Categories.Id
        WHERE Products.Discontinued = 0
        )
        SELECT * FROM product_details
        ORDER BY CategoryName, ProductName;

Expanding on an expression, step 3:

        WITH product_details AS (
        SELECT ProductName, CategoryName, UnitPrice, UnitsInStock
        FROM Products
        JOIN Categories ON PRODUCTS.CategoryId = Categories.Id
        WHERE Products.Discontinued = 0
        )
        SELECT CategoryName, COUNT(*) AS unique_product_count, SUM(UnitsInStock) AS stock_count
        FROM product_details
        GROUP BY CategoryName
        ORDER BY unique_product_count;