# classListHelper
This is a lightweight script for adding, removing, toggling and checking class names of DOM elements using cross-browser vanilla JS. 

This works similar to eligrey's [classList.js](https://github.com/eligrey/classList.js) shim, but is lighter-weight and focuses on just 4 classList methods: adding, removing, toggling and checking for a specific class name.

## Usage

```javascript
classes(myElem, action, className);
```

Adding an element class:

```javascript
const myElem = document.querySelectorAll(".myElement");
classes(myElem, "add", "myClass");
```

Removing an element class:

```javascript
const myElem = document.querySelectorAll(".myElement");
classes(myElem, "remove", "myClass");
```

Toggling an element class:

```javascript
const myElem = document.querySelectorAll(".myElement");
classes(myElem, "toggle", "myClass");
```

Checking the presence of a specific class on an element:

```javascript
const myElem = document.querySelectorAll(".myElement");
const elemContainsClass = classes(myElem, "contains", "myClass"); // returns a boolean

if (elemContainsClass){
  // Do something
}
```

## Support

Works in IE8+.

