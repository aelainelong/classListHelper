/*
  * classListHelper.js - A light-weight cross-browser script for adding, removing, toggling and checking element class names.
  * v2.0 - by AElaineLong
  * https://github.com/aelainelong/classListHelper
*/
(function(){
  "use strict";

  // Add a class
  Node.prototype.addClass = function(myClass){
    this.classList ? this.classList.add(myClass) : this.className += ' ' + myClass;
  }
  // Remove a class
  Node.prototype.removeClass = function(myClass){
    this.classList ? this.classList.remove(myClass) : this.className = elem.className.replace(new RegExp('(^|\\b)' + myClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
  // Toggle a class
  Node.prototype.toggleClass = function(myClass){
    if (this.classList) {
      this.classList.toggle(myClass);
    } else {
      var classes = this.className.split(' ');
      var existingIndex = classes.indexOf(myClass);
      existingIndex >= 0 ? classes.splice(existingIndex, 1) : classes.push(myClass);
      this.className = classes.join(' ');
    }
  }
  // Check if element contains a class, returns boolean
  Node.prototype.containsClass = function(myClass){
    if (this.classList) {
      return this.classList.contains(myClass) ? true : false;
    } else {
      return (this.className.indexOf(myClass) > -1) ? true : false;
    }
  }
})();
