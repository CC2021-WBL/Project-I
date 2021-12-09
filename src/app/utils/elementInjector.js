function elementInjector(parentElement, ...children) {
  children.forEach((child) => {
    if (typeof child === 'string') {
      parentElement.appendChild(document.createTextNode(child));
    } else {
      parentElement.append(child);
    }
  });
}

export default elementInjector;
