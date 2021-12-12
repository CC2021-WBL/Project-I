// this will go to the constant folder
export const rankingsTemplate = {
  students: [],
  staff: [],
  houses: [],
};

class LocalStorageService {
  constructor() {}

  static saveRankings(rankings) {
    localStorage.setItem('rankings', JSON.stringify(rankings));
    return rankings;
  }

  static loadRankings() {
    return (
      JSON.parse(localStorage.getItem('rankings')) ||
      this.saveRankings(rankingsTemplate)
    );
  }
}

export default LocalStorageService;
