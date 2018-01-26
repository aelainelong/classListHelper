# classListHelper
This is a lightweight script for adding, removing, toggling and checking class names of DOM elements using cross-browser vanilla JS. 

This works similar to eligrey's [classList.js](https://github.com/eligrey/classList.js) shim, but is lighter-weight and focuses on just 4 classList methods: adding, removing, toggling and checking for a specific class name.

## Usage

Adding an element class:

```javascript
const myElem = document.querySelector(".myElement");
myElem.addClass("myClass");
```

Removing an element class:

```javascript
myElem.removeClass("myClass");
```

Toggling an element class:

```javascript
myElem.toggleClass("myClass");
```

Checking the presence of a specific class on an element:

```javascript
if (myElem.containsClass("myClass")){ // returns a boolean
  // Do something
}
```

## Support

Works in IE8+.

