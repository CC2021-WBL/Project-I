import elementCreator from '../../utils/elementCreator';

function loadingScreen() {
  const loadingText = elementCreator(
    'h2',
    { class: 'loading-screen__text' },
    'Get ready!'
  );

  const loadingSubtext = elementCreator(
    'p',
    { class: 'loading-screen__subtext' },
    'Loading your question...'
  );

  return [loadingText, loadingSubtext];
}

export default loadingScreen;
