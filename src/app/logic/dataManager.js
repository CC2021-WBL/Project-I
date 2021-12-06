

export class DataManager {
  constructor(IDsArray = [], resourceAPIadress, idOfRightAnswer) {
    this.idOfRightAnswer = idOfRightAnswer;
    this.resourceAPIadress = resourceAPIadress;
    this.IDsArray = IDsArray;
    this.reader = new FileReader();
    this.arraywithHPObjects;
    this.rightAnswer;
    this.base64dataImgForRightAnswer;
    this.arraywithAnswersForQuestion = [];
  }

  async getDataByAPI() {
    try {
      // Checking if data are download, if yes -->  creating creating array with answers, img and name for correct answer
      if (
        this.arraywithHPObjects !== null &&
        this.arraywithHPObjects !== undefined
      ) {
        this.arraywithAnswersForQuestion = getDataForIDs(IDsArray);

        // data for right answer:
        let rightAnswerValues = await getDataForCorrectAnswer(
          this.idOfRightAnswer,
          this.arraywithHPObjects,
        ).json();
        this.rightAnswer = rightAnswerValues[0];
        this.base64dataImgForRightAnswer = rightAnswerValues[1];
      }
      // Getting data first time and creating array with answers, img and name for correct answer
      else {
        const response = await fetch(this.resourceAPIadress);
        const jsonData = await response.json();
        this.arraywithHPObjects = await jsonData;
        this.arraywithAnswersForQuestion = getDataForIDs(
          this.IDsArray,
          this.arraywithHPObjects,
        );

        //img for right answer:
        let rightAnswerValues = await getDataForCorrectAnswer(
          this.idOfRightAnswer,
          this.arraywithHPObjects,
        );
        this.rightAnswer = rightAnswerValues[0];
        this.base64dataImgForRightAnswer = rightAnswerValues[1];
      }
    } catch (error) {
      console.log(error);
    }
  }
}

// ------------------------------------------- PART FOR JUST FOR TESTING, COMMENTED NOW-------------------------------------------

//const temporaryResourceAPIadressToTest =
//'http://hp-api.herokuapp.com/api/characters';

//const dataManager = new DataManager(
//[0, 1, 2, 3],
//temporaryResourceAPIadressToTest,
//0,
//);

//let something = await dataManager.getDataByAPI();

//----------------------------------------------------------------PRIVATE METHODS-----------------------------------------------------
//1) CREATING ARRAY WITH ANSWERS = NAMES OF HARRY POTTER CHARACTERS

function getDataForIDs(IDsArray = [], arraywithHPObjects) {
  let arrayWithAnswers = [];

  IDsArray.forEach((element) => {
    const obj = arraywithHPObjects[element];
    const name = obj.name;
    arrayWithAnswers.push(name);
  });
  return arrayWithAnswers;
}

//---------- IN PROGRESS-----------------------------------
//2) GETTING NAME OF CHARACTER AND IMAGE FOR CORRECT ANSWER

async function getDataForCorrectAnswer(
  idOfRightAnswer,
  arraywithHPObjects = [],
) {
  let rightAnswer;
  let base64dataImg;

  const obj = arraywithHPObjects[idOfRightAnswer];
  const name = obj.name;
  rightAnswer = name;
  const imgUrl = obj.image;
  //--------------------ACCESS TO FETCH BLOCKED BY CORS POLICY ---------------------------------------
  //const imgFromWeb = await fetch(
  //"https://cors-anywhere.herokuapp.com/http://hp-api.herokuapp.com/images/luna.jpg"
  // );
  //console.log(imgFromWeb);
  //const imgBlob = await imgFromWeb.blob();
  //console.log(imgBlob);
  // reader.readAsDataURL(imgBlob);
  //reader.onloadend = function () {
  //base64dataImg = reader.result;
  //console.log(base64dataImg);
  //};
  base64dataImg = 'base64shouldbehere';

  return [rightAnswer, base64dataImg];
}
