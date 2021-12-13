import elementCreator from '../../utils/elementCreator';

const rulesTextBoiler =
  "You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who is this Hogwart's student You see on the picture, on the left(someone right now) from availible options.";

const modeRules = () => {
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
    `${rulesTextBoiler}`,
  );

  const rulesFullElement = elementCreator(
    'div',
    { class: 'game__mode-rules' },
    rulesHeader,
    rulesText,
  );

  return rulesFullElement;
};

export default modeRules;
