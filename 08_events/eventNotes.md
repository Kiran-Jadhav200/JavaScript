# Events

Events are actions or occurrences that happen in the browser, such as a user clicking a button or a page finishing loading. In JavaScript, we can listen for these events and respond to them with code.

## Event Types

There are various types of events that can occur in the browser, such as:

- `click`: Triggered when an element is clicked.
- `keydown`: Triggered when a key is pressed down.
- `load`: Triggered when a page finishes loading.
- `mouseover`: Triggered when the mouse pointer moves over an element.

## Timestamp

Each event has a timestamp associated with it, indicating when the event occurred. This can be useful for tracking the order of events or measuring the time between events.

## Default Prevented

Some events have a default behavior associated with them, such as a form submission or a link click. By default, the browser will perform this behavior when the event occurs. However, we can prevent the default behavior from happening by calling the `preventDefault()` method on the event object.

## Event Propagation

When an event occurs on an element, it can also trigger the same event on its parent elements. This is known as event propagation or event bubbling. By default, events bubble up from the target element to its parent elements. However, we can stop the event from propagating further by calling the `stopPropagation()` method on the event object.



## Event Properties

When an event occurs, an event object is created and passed to the event handler function. This object contains various properties that provide information about the event. Some commonly used properties include:

- `target`: The element on which the event occurred.
- `toElement`, `srcElement`: Alternate properties for accessing the target element.
- `currentTarget`: The element that is currently handling the event.

## Event Bubbling

Event bubbling, also known as event propagation, is the process by which an event triggered on a specific element will also trigger the same event on its parent elements. By default, events bubble up from the target element to its parent elements. This means that if you have nested elements, such as a button inside a div, a click event on the button will also trigger a click event on the div.

Event bubbling can be useful in certain scenarios, as it allows you to handle events at different levels of the DOM hierarchy. However, it can also lead to unintended consequences if not properly managed.

To stop an event from propagating further, you can call the `stopPropagation()` method on the event object. This will prevent the event from triggering on parent elements.

## Additional Properties

In addition to the standard event properties, there are some additional properties that can be useful in certain scenarios:

- `clientX`, `clientY`: The coordinates of the mouse pointer relative to the viewport.
- `screenX`, `screenY`: The coordinates of the mouse pointer relative to the screen.
- `altKey`, `ctrlKey`, `shiftKey`: Boolean values indicating whether the Alt, Ctrl, or Shift key was pressed during the event.
- `keyCode`: The code of the key that was pressed during a keyboard event.

These properties can be accessed from the event object to perform specific actions based on the event details.

## Important Interview Questions

- What are events in JavaScript?
    Events in JavaScript are actions or occurrences that happen in the browser, such as a user clicking a button or a page finishing loading. JavaScript allows us to listen for these events and respond to them with code.

- What are some commonly used event types?
    Some commonly used event types in JavaScript include:
    - `click`: Triggered when an element is clicked.
    - `keydown`: Triggered when a key is pressed down.
    - `load`: Triggered when a page finishes loading.
    - `mouseover`: Triggered when the mouse pointer moves over an element.

- How can you prevent the default behavior of an event?
    To prevent the default behavior of an event, you can call the `preventDefault()` method on the event object. This will stop the browser from performing the default behavior associated with the event.

- What are the properties of an event object?
    An event object in JavaScript contains various properties that provide information about the event. Some commonly used properties include:
    - `target`: The element on which the event occurred.
    - `toElement`, `srcElement`: Alternate properties for accessing the target element.
    - `currentTarget`: The element that is currently handling the event.

- How can you access the target element of an event?
    You can access the target element of an event by using the `target` property of the event object. This property refers to the element on which the event occurred.

- What are some additional properties of an event object that can be useful?
    In addition to the standard event properties, there are some additional properties that can be useful in certain scenarios. These include:
    - `clientX`, `clientY`: The coordinates of the mouse pointer relative to the viewport.
    - `screenX`, `screenY`: The coordinates of the mouse pointer relative to the screen.
    - `altKey`, `ctrlKey`, `shiftKey`: Boolean values indicating whether the Alt, Ctrl, or Shift key was pressed during the event.
    - `keyCode`: The code of the key that was pressed during a keyboard event.

- How can you get the coordinates of the mouse pointer during an event?
    To get the coordinates of the mouse pointer during an event, you can use the `clientX` and `clientY` properties of the event object. These properties provide the coordinates relative to the viewport.

- How can you check if a specific key was pressed during a keyboard event?
    You can check if a specific key was pressed during a keyboard event by accessing the `keyCode` property of the event object. The `keyCode` property contains the code of the key that was pressed.

- What is event bubbling in JavaScript?
    Event bubbling, also known as event propagation, is the process by which an event triggered on a specific element will also trigger the same event on its parent elements. By default, events bubble up from the target element to its parent elements. This means that if you have nested elements, such as a button inside a div, a click event on the button will also trigger a click event on the div.

- How can you stop an event from propagating further?
    To stop an event from propagating further, you can call the `stopPropagation()` method on the event object. This will prevent the event from triggering on parent elements.
