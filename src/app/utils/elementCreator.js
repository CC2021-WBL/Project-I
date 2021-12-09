import elementInjector from './elementInjector';

function elementCreator(type, attributes, ...children) {
  const newElement = document.createElement(type);
  Object.entries(attributes).forEach(([key, value]) => {
    newElement.setAttribute(key, value);
  });
  elementInjector(newElement, ...children);
  return newElement;
}

export default elementCreator;
