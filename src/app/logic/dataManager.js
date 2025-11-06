import { HOGWART_HOUSES } from '../data/consts.js';

class DataManager {
  constructor(
    resourceAPIadress,
    idOfRightAnswer,
    answerProperty,
    imgSubfolder,
    IDsArray = [],
    filterKey = null,
    filterValue = null,
  ) {
    this.idOfRightAnswer = idOfRightAnswer;
    this.resourceAPIadress = resourceAPIadress;
    this.answerProperty = answerProperty;
    this.imgSubfolder = imgSubfolder;
    this.IDsArray = IDsArray;
    this.filterKey = filterKey;
    this.filterValue = filterValue;
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

    // Use image URL from API if available, otherwise fallback to local
    if (obj.image && obj.image !== '') {
      // Try to fetch and convert to base64
      try {
        const imgFromAPI = await fetch(obj.image);
        const imgBlob = await imgFromAPI.blob();
        this.base64dataImg = await this.blobToBase64(imgBlob);
      } catch (error) {
        console.warn('Failed to fetch image from API, using fallback:', error);
        // Fallback to local image
        const imgFromFile = await fetch(
          `./img/images/${this.imgSubfolder}/${this.idOfRightAnswer}.jpg`,
        );
        const imgBlob = await imgFromFile.blob();
        this.base64dataImg = await this.blobToBase64(imgBlob);
      }
    } else {
      // No image in API, use local
      const imgFromFile = await fetch(
        `./img/images/${this.imgSubfolder}/${this.idOfRightAnswer}.jpg`,
      );
      const imgBlob = await imgFromFile.blob();
      this.base64dataImg = await this.blobToBase64(imgBlob);
    }
  }

  async getDataByAPI() {
    try {
      // Only fetch if we don't have data yet
      if (
        !this.arraywithHPObjects ||
        this.arraywithHPObjects.length === 0
      ) {
        let jsonData;
        try {
          const response = await fetch(this.resourceAPIadress);
          if (!response.ok) {
            throw new Error(`API responded with status ${response.status}`);
          }
          jsonData = await response.json();
        } catch (apiError) {
          console.warn('Failed to fetch from API, using mock data:', apiError);
          // Fallback to mock data
          const mockResponse = await fetch('./src/app/data/characters-mock.json');
          jsonData = await mockResponse.json();
        }

        // Filter data if filterKey and filterValue are provided
        if (this.filterKey && this.filterValue !== null) {
          this.arraywithHPObjects = jsonData.filter(
            (character) => character[this.filterKey] === this.filterValue && character.image && character.image !== ''
          );
          console.log(`Filtered ${this.arraywithHPObjects.length} characters with ${this.filterKey}=${this.filterValue}`);
        } else {
          this.arraywithHPObjects = jsonData.filter(character => character.image && character.image !== '');
          console.log(`Filtered ${this.arraywithHPObjects.length} characters with images`);
        }
      }
    } catch (error) {
      throw Error(`${error}`);
    }
  }
}

export default DataManager;
