# **JavaScript Best Practices: Async Patterns**

## **Callbacks**

- To avoid christmas tree code, use named functions and call them.

- Use Error as a first parameter:

        - function validateUser(err, results) {
            if (err) {
                return done(err, null);
            }
        }

- Use "return" within a error to break out of it.