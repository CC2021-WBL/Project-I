import { RANKINGS_TEMPLATE } from '../data/consts';

class LocalStorageService {
  // eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor() {}

  static saveRankings(rankings) {
    localStorage.setItem('rankings', JSON.stringify(rankings));
    return rankings;
  }

  static loadRankings() {
    return (
      JSON.parse(localStorage.getItem('rankings')) ||
      this.saveRankings(RANKINGS_TEMPLATE)
    );
  }
}

export default LocalStorageService;
