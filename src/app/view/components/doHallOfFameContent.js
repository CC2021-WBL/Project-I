import elementCreator from '../../utils/elementCreator';

const hallOfFame = (mode) => {
  const hofTextPart = {
    Students: 'Insert 3 winners in Students mode here, sorted',
    Staff: 'Insert 3 winners in Staff mode here, sorted',
    Houses: 'Insert 3 winner in Houses mode here, softed',
  };

  const cupIcon = elementCreator('span', {
    class: 'rules-icon fas fa-graduation-cap',
  });

  const hofHeader = elementCreator(
    'h2',
    { class: 'game__mode-rules-header' },
    cupIcon,
    'Mode Rules',
  );

  const hofText = elementCreator(
    'p',
    { class: 'game__mode-rules-text' },
    `${hofTextPart[mode]} concatenate.`,
  );

  const hofFullElement = [hofHeader, hofText];
  return hofFullElement;
};

export default hallOfFame;
