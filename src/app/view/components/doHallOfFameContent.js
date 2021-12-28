import elementCreator from '../../utils/elementCreator';
import hofTable from './modal/hofTable';

const hallOfFame = (mode) => {
  const cupIcon = elementCreator('span', {
    class: 'rules-icon fas fa-graduation-cap',
  });

  const hofHeader = elementCreator(
    'h2',
    { class: 'game__mode-rules-header' },
    cupIcon,
    ` ${mode} Mode Ranking  - Level Easy`,
  );

  const hofFullElement = [hofHeader, hofTable()];
  return hofFullElement;
};

export default hallOfFame;
