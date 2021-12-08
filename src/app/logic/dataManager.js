export class DataManager {
  constructor(IDsArray = [], resourceAPIadress, idOfRightAnswer) {
    this.idOfRightAnswer = idOfRightAnswer;
    this.resourceAPIadress = resourceAPIadress;
    this.IDsArray = IDsArray;
    this.reader = new FileReader();
    this.arraywithHPObjects;
    this.rightAnswer;
    this.urlOfImgRightAnswer;
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
        this.urlOfImgRightAnswer = rightAnswerValues[1];
        
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
        this.urlOfImgRightAnswer = rightAnswerValues[1];
      }
    } catch (error) {
      console.log(error);
    }
  }
}


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

//2) GETTING NAME OF CHARACTER AND URL FOR IMAGE FOR CORRECT ANSWER

async function getDataForCorrectAnswer(
  idOfRightAnswer,
  arraywithHPObjects = [],
) {
  const obj = arraywithHPObjects[idOfRightAnswer];
  const rightAnswer = obj.name;
  const imgUrl = obj.image;

  return [rightAnswer, imgUrl];
}
