class Model {
  constructor(object) {
    this.title = object.title;
    this.apiBase = object.options.hpApiBaseUrl;
    this.quizMaxTime = object.options.quizMaxTime;
  }

  showEntryInfo() {
    console.log(this.title, this.apiBase, this.quizMaxTime);
  }
}

export default Model;
