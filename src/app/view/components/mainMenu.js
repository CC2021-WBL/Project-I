import elementCreator from '../../utils/elementCreator';

const modeButtons = [
  elementCreator('button', { class: 'button' }, 'Students'),
  elementCreator('button', { class: 'button' }, 'Houses'),
  elementCreator('button', { class: 'button' }, 'Staff'),
];

export default modeButtons;
