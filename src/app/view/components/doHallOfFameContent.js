import elementCreator from '../../utils/elementCreator';
import hofTable from './modal/hofTable';

const doHallOfFameContent = (mode, level) => {
  console.log('halloffameContent zadzialal');
  const cupIcon = elementCreator('span', {
    class: 'rules-icon fas fa-graduation-cap',
  });

  const hofHeader = elementCreator(
    'h2',
    { class: 'game__mode-rules-header' },
    cupIcon,
    ` ${mode} Mode Ranking - Level ${level}`,
  );

  const hofFullElement = [hofHeader, hofTable()];
  return hofFullElement;
};

export default doHallOfFameContent;
