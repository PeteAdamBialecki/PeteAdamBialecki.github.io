# **Advanced Techniques in JavaScript and jQuery**

## **Introduction**

Tradition JavaScript Functions:

        function myFunction(text{...}) 

        myFunction = function(text){...}
        // Same as above but may interfere with functions in the global scope.

        var myFunction = function(text){...}
        // Best case scenario that may avoid global scope creep.

        var myObject = {myFunction: function(text){...}}
        // Single object to hold functions.

        myObject = {myFunction: function(text){...}}
        // Namespace (???) Pick meaningful names for functions.

Function Stubs:

        - Rename original function

        - Create new function stub

        - Legacy code calls stub

        - New code calls new function name

        - Confusing interface for new team members