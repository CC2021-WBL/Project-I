import elementCreator from '../../utils/elementCreator';
import hofTable from './hofTable';

const doHallOfFameContent = (mode, level) => {
  const cupIcon = elementCreator('span', {
    class: 'rules-icon fas fa-trophy',
  });

  const hofHeader = elementCreator(
    'h2',
    { class: 'game__mode-rules-header' },
    cupIcon,
    ` ${mode} Mode Ranking - Level ${level}`,
  );

  const hofFullElement = [hofHeader, hofTable(mode, level)];
  return hofFullElement;
};

export default doHallOfFameContent;
