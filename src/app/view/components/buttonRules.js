import elementCreator from '../../utils/elementCreator';

export default function doButtonRules(text) {
  // eslint-disable-next-line prettier/prettier
  const rulesIcon = elementCreator('span', {
    class: 'rules-icon fas fa-graduation-cap',
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