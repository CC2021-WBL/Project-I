import elementCreator from '../../utils/elementCreator';

export default function doButtonRules(text) {
  const rulesIcon = elementCreator('span', {
    class: 'game__button-icon fas fa-graduation-cap',
  });

  const buttonCreator = elementCreator(
    'button',
    {
      class: 'game__button game__button-rules',
    },
    rulesIcon,
    text,
  );
  return buttonCreator;
}
