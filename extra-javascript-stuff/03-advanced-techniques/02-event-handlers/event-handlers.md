# **Advanced Techniques in JavaScript and jQuery**

## **Event Handlers**

Shorthand Methods

- Handling Standard Events

    - Usually use an anonymous function

    - For common events, shorthand methods can be used

        .blur()
        .change()
        .click()
        .dblclick()
        .focus(), focusin(), focusout()
        .hover()
        .keydown(), .keypress(), .keyup()
        .load()
        .mousedown(), .mouseenter(), .mouseleave(), .mousemove(), .mouseout(), .mouseover(), .mouseup()

## **Message Function**

- Centralize message handling

- Use an object parameter

- Explicitly set what "this" references

## **Propagation**

- Events bubble up the DOM until handled

- Ways to cancel even processing

    - Return false from event handler

    - Call preventDefault() on the event

    - Call stopPropagation() on the event

    - Call stopImmediatePropagation() on the event

- Multiple handlers can be attached for the same event

- jQuery provides methods to determine if the state of the event has been changed

        .isPropagationStopped()
        .isImmediatePropagationStopped()
        .isDefaultPrevented()

- jQuery event handling methods without shorthand

        .bind()
        .unbind()
        .live()
        .die()
        .delegate()
        .undelegate()
        .on()
        .off()
        .one()

- Shorthand methods ultimately reference the .on() method

- Events bubble up the DOM from the inner most elements

- .bind(), .live(), and .on() are other ways to attach events

- .on() is the preferred attachement method