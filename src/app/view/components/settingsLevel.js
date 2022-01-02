import clearActive from '../../utils/clearActive';
import elementCreator from '../../utils/elementCreator';

const levelButtons = [
  elementCreator(
    'button',
    { class: 'game__button game__button-lvlSettings' },
    'Easy',
  ),
  elementCreator(
    'button',
    { class: 'game__button game__button-lvlSettings' },
    'Medium',
  ),
  elementCreator(
    'button',
    { class: 'game__button game__button-lvlSettings' },
    'Hard',
  ),
];

export default levelButtons;
