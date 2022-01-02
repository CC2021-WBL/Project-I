import elementCreator from '../../utils/elementCreator';

const levelButtons = [
  elementCreator(
    'button',
    { class: 'game__button game__button-lvlSettings' },
    'Easy - unlimited time / no points',
  ),
  elementCreator(
    'button',
    { class: 'game__button game__button-lvlSettings active' },
    'Medium - 1 minute / good answer: 1 point / wrong answer: 0 points',
  ),
  elementCreator(
    'button',
    { class: 'game__button game__button-lvlSettings' },
    'Hard - 30 seconds / good answer: 1 point / wrong answer: -1 point',
  ),
];

export default levelButtons;
