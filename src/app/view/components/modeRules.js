import elementCreator from '../../utils/elementCreator';

const rulesTextBoiler =
  "You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select"  ";

const rulesModeTexts = {
  
};

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
    `${rulesTextBoiler} from availible options.`,
  );
  const rulesFullElement = [rulesHeader, rulesText];
  return rulesFullElement;
};

export default modeRules;
