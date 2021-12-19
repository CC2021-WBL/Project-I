import elementCreator from '../../utils/elementCreator';

const rulesTextBoiler =
  'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select';

const modeRules = (mode) => {
  const rulesTextPart = {
    students: "the name of the Hogwart's student,",
    staff: "the name of the Hogwart's staff member,",
    houses: 'magic house of the character,',
  };

  const rulesIcon = elementCreator('span', {
    class: 'rules-icon fas fa-graduation-cap',
  });

  const rulesHeader = elementCreator(
    'h2',
    { class: 'game__mode-rules-header' },
    rulesIcon,
    'Mode Rules',
  );

  const rulesText = elementCreator(
    'p',
    { class: 'game__mode-rules-text' },
    `${rulesTextBoiler} ${rulesTextPart[mode]} from available options.`,
  );

  const rulesFullElement = [rulesHeader, rulesText];
  return rulesFullElement;
};

export default modeRules;
