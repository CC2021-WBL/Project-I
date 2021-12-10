function elementInjector(parentElement, children) {
  children.forEach((child) => {
    if (typeof child === 'string') {
      parentElement.appendChild(document.createTextNode(child));
    } else {
      parentElement.appendChild(child);
    }
  });
}

export default elementInjector;
