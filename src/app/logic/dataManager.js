class DataManager {
  constructor(
    resourceAPIadress,
    idOfRightAnswer,
    answerProperty,
    gameMode,
    IDsArray = [],
  ) {
    this.idOfRightAnswer = idOfRightAnswer;
    this.resourceAPIadress = resourceAPIadress;
    this.answerProperty = answerProperty;
    // answerProperty should be 'name' for Students Mode or 'house' for Houses mode
    this.gameMode = gameMode;
    // gameMode should be 'students' for Students Mode or 'staff' for Staff Mode, or in future 'houses' for Houses Mode
    this.IDsArray = IDsArray;
    this.arraywithHPObjects = [];
    this.rightAnswer = '';
    this.base64dataImg = '';
    this.arraywithAnswersForQuestion = [];
  }

  getDataForMode() {
    return this.arraywithHPObjects;
  }

  // 1) CREATING ARRAY WITH ANSWERS = NAMES OF HARRY POTTER CHARACTERS
  getDataForIDs(arraywithHPObjects) {
    const arrayWithAnswers = [];
    this.IDsArray.forEach((element) => {
      const obj = arraywithHPObjects[element];
      const { name } = obj;
      arrayWithAnswers.push(name);
    });
    return arrayWithAnswers;
  }

  async blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  // 2) GETTING NAME OF CHARACTER AND URL FOR IMAGE FOR CORRECT ANSWER
  async getDataForCorrectAnswer() {
    const obj = this.arraywithHPObjects[this.idOfRightAnswer];
    if (this.answerProperty === 'house') {
      this.rightAnswer = obj.house;
    } else {
      this.rightAnswer = obj.name;
    }
    const imgFromFile = await fetch(
      `./static/assets/img/images/${this.gameMode}/${this.idOfRightAnswer}.jpg`,
    );
    const imgBlob = await imgFromFile.blob();

    this.base64dataImg = await this.blobToBase64(imgBlob);
  }

  async getDataByAPI() {
    try {
      // Checking if data are download, if yes -->  creating creating array with answers, img and name for correct answer
      if (
        this.arraywithHPObjects !== null &&
        this.arraywithHPObjects !== undefined &&
        this.arraywithHPObjects.length !== 0
      ) {
        this.arraywithAnswersForQuestion = this.getDataForIDs(this.IDsArray);

        // data for right answer:
        await this.getDataForCorrectAnswer();
      }
      // Getting data first time and creating array with answers, img and name for correct answer
      else {
        const response = await fetch(this.resourceAPIadress);
        const jsonData = await response.json();
        this.arraywithHPObjects = jsonData;
        this.arraywithAnswersForQuestion = this.getDataForIDs(
          this.arraywithHPObjects,
        );

        // img for right answer:
        await this.getDataForCorrectAnswer();
      }
    } catch (error) {
      throw Error(`${error}`);
    }
  }
}

export default DataManager;