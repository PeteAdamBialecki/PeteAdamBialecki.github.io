# **Advanced Techniques in JavaScript and jQuery**

## **Advanced Event Handlers**

Named Functions

    - Easy to remove

    - Can be centralized in a library

    - Updating one handler function has global impact

    - Be aware of the order hadler functions are added and removed

    - Be careful of process order assumptions

Namespace

    - Allows grouping of events

    - Provides ability to narrowly target removal of event handlers

    - Multiple namespaces can be included

    - Namespaces are not hierarchial

Delegation

    - Bind event handlers higher in the DOM

    - Centralized processing

Custom Events

    - Create new events for DOM elements

    - Create events for regular objects

    - Initiate a custom event with .trigger()

Event Parameters

    - Additional data can be passed to event handler functions

    - Include data in jQuery .trigger() method

    - Include data in jQuery .on() method

    - Parameter type should be array orobject

Summary

    - .off() method can remove more than we attached

    - Event handlers can be associated with specific event namespaces for easier management and removal

    - Delegation is a good way to reduce the number of attahced event handlers

    - Custom events are processed in the same manner as system events

    - Additional data can be passed to an event handler for either a custom event or a system event