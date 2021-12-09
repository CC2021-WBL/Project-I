import elementCreator from '../../utils/elementCreator';
import elementInjector from '../../utils/elementInjector';

const rules = (mode) => {
  const rulesText = {
    Students: "the name of the Hogwart's student.",
    Staff: "the name of the Hogwart's staff member.",
    Houses: 'magic house of the character.',
  };

  const rulesDOM = elementCreator('div', { class: 'rules' });

  const rulesH1 = elementCreator('h1', { class: 'rules-h1' }, 'Mode Rules');
  const rulesP = elementCreator(
    'p',
    { class: 'rules-text' },
    `You have 30 seconds to answer as` +
      ` many questions as possible. During the game on each questions you need to select ${rulesText[mode]}`,
  );

  elementInjector(rulesDOM, [rulesH1, rulesP]);

  return rulesDOM;
};
export default rules;
