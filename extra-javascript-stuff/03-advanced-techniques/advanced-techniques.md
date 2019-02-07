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

Default Parameters / Values:

    - Provide defaults within the functon when parameters are missing

    - Useful when one or two parameters are optional 

    - If more than one parameter is optional, certain assumptions must be made if only one is supplied.

Changing to an Object Parameter

    - Use one object parameter instead of multiple native types

    - Objects are just named value pairs

    - Properties of an object are optional by nature

    - The order of object properties does not matter

    - Object parameters are passed by reference.