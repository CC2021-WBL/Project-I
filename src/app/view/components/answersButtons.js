import elementCreator from '../../utils/elementCreator';

function answersButtons(answers) {
  return [
    elementCreator('button', { class: 'answerButton' }, answers[0]),
    elementCreator('button', { class: 'answerButton' }, answers[1]),
    elementCreator('button', { class: 'answerButton' }, answers[2]),
    elementCreator('button', { class: 'answerButton' }, answers[3]),
  ];
}

export default answersButtons;
