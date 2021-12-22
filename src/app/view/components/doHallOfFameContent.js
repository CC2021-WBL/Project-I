import elementCreator from '../../utils/elementCreator';

const HallOfFame = (mode) => {
  const HOFTextPart = {
    Students: 'Insert 3 winners in Students mode here, sorted',
    Staff: 'Insert 3 winners in Staff mode here, sorted',
    Houses: 'Insert 3 winner in Houses mode here, softed',
  };

  const cupIcon = elementCreator('span', {
    class: 'rules-icon fas fa-graduation-cap',
  });

  const HOFHeader = elementCreator(
    'h2',
    { class: 'game__mode-rules-header' },
    cupIcon,
    'Mode Rules',
  );

  const HOFText = elementCreator(
    'p',
    { class: 'game__mode-rules-text' },
    `${HOFTextPart[mode]} concatenate.`,
  );

  const HOFFullElement = [HOFHeader, HOFText];
  return HOFFullElement;
};

export default HallOfFame;
