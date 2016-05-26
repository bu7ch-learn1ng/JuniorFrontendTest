function newElement(string){
  return document.createElement(string);
}

function newTextNode(string){
  return document.createTextNode(string);
}

function append(element, string){
  return element.appendChild(string);
}

function presence(comparator, string){
  return comparator !== null ?
    document.createTextNode(comparator) :
    document.createTextNode(string);
}
