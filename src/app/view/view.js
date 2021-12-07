class View {
  constructor() {
    this.gamewrapper = document.querySelector('.game-wrapper');
  }

  _elementFactory(type, attributes) {
    const newElement = document.createElement(type);
    Object.entries(attributes).forEach(([key, value]) => {
      newElement.setAttribute(key, value);
    });
    console.log(newElement);
    return newElement;
  }

  _childInjector(parentElement, ...children) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        parentElement.appendChild(document.createTextNode(child));
      } else {
        parentElement.append(child);
      }
    });
  }
}

export default View;
