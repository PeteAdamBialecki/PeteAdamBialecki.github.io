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