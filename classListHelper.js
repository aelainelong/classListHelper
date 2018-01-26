// Cross-browser Class Methods Function
function classes(elem, action, theClass) {
  if(elem.classList){
    switch(action){
      case 'add':
        elem.classList.add(theClass);
        break;
      case 'remove':
        elem.classList.remove(theClass);
        break;
      case 'toggle':
        elem.classList.toggle(theClass);
        break;
      case 'contains':
        return elem.classList.contains(theClass) ? true : false;
        break;
      default:
        console.log("No class actions matched.");
    }
  } else {
    switch(action){
      case 'add':
        elem.className += ' ' + theClass;
        break;
      case 'remove':
        elem.className = elem.className.replace(new RegExp('(^|\\b)' + theClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        break;
      case 'toggle':
        const classes = elem.className.split(' ');
        const existingIndex = classes.indexOf(theClass);
        existingIndex >= 0 ? classes.splice(existingIndex, 1) : classes.push(theClass);
        elem.className = classes.join(' ');
        break;
      case 'contains':
        return (elem.className.indexOf(theClass) > -1) ? true : false;
        break;
      default:
        console.log("No class actions matched.");
    }
  }
}
