import { HOGWART_HOUSES } from '../data/consts.js';

class DataManager {
  constructor(
    resourceAPIadress,
    idOfRightAnswer,
    answerProperty,
    imgSubfolder,
    IDsArray = [],
  ) {
    this.idOfRightAnswer = idOfRightAnswer;
    this.resourceAPIadress = resourceAPIadress;
    this.answerProperty = answerProperty;
    this.imgSubfolder = imgSubfolder;
    this.IDsArray = IDsArray;
    this.arraywithHPObjects = [];
    this.rightAnswer = '';
    this.base64dataImg = '';
    this.arraywithAnswersForQuestion = [];
  }

  getDataForMode() {
    return this.arraywithHPObjects;
  }

  getDataForIDs(arraywithHPObjects) {
    let arrayWithAnswers = [];
    if (this.answerProperty === 'house') {
      arrayWithAnswers = HOGWART_HOUSES;
    } else {
      this.IDsArray.forEach((element) => {
        const obj = arraywithHPObjects[element];
        const { name } = obj;
        arrayWithAnswers.push(name);
      });
    }

    return arrayWithAnswers;
  }

  async blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  async getDataForCorrectAnswer() {
    const obj = this.arraywithHPObjects[this.idOfRightAnswer];
    if (this.answerProperty === 'house') {
      this.rightAnswer = obj.house;
    } else {
      this.rightAnswer = obj.name;
    }
    const imgFromFile = await fetch(
      `./img/images/${this.imgSubfolder}/${this.idOfRightAnswer}.jpg`,
    );
    const imgBlob = await imgFromFile.blob();

    this.base64dataImg = await this.blobToBase64(imgBlob);
  }

  async getDataByAPI() {
    try {
      if (
        this.arraywithHPObjects !== null &&
        this.arraywithHPObjects !== undefined &&
        this.arraywithHPObjects.length !== 0
      ) {
        this.arraywithAnswersForQuestion = this.getDataForIDs(this.IDsArray);

        await this.getDataForCorrectAnswer();
      } else {
        const response = await fetch(this.resourceAPIadress);
        const jsonData = await response.json();
        this.arraywithHPObjects = jsonData;
        this.arraywithAnswersForQuestion = this.getDataForIDs(
          this.arraywithHPObjects,
        );

        await this.getDataForCorrectAnswer();
      }
    } catch (error) {
      throw Error(`${error}`);
    }
  }
}

export default DataManager;
