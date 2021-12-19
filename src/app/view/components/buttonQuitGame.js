import elementCreator from '../../utils/elementCreator';

function buttonQuitGame(text) {
  const buttonCreator = elementCreator('button', { class: 'buttonPlay' }, text);

  buttonCreator.addEventListener('click', (event) => {
    event.preventDefault();
    const { correctAnswersScore, amountOfAnsweredQuestions } =
      window.app.model.player;
    window.app.view.renderQuitView(
      'Evanesco! YOU HAVE LEFT THE GAME!',
      correctAnswersScore,
      amountOfAnsweredQuestions,
    );
  });

  return buttonCreator;
}
export default buttonQuitGame;
