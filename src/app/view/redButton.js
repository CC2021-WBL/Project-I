export default function ButtonRed(text) {
  const newButtonRed = document.createElement('button');
  newButtonRed.classList.add('game__play');
  newButtonRed.innerText = text;
  return newButtonRed;
}
