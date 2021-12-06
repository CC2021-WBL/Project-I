export class QuestionGenerator {

    //argument argAmountOfId will be relaced by connection to CurrentMode and it's IDs'
    static generateQuestionsForCurrentMode(amountOfId) {
        const amountOfAnswersPerQuestion = 4;
        let generatedIds = [];

        if (amountOfId < amountOfAnswersPerQuestion || typeof(amountOfId) !== `number` ) {
            throw `Check amout of ID's and datatype. amountOfId must be greater or equal ${amountOfAnswersPerQuestion}. Passed value: ${amountOfId}
            Type must be number. Passed type: ${typeof(amountOfId)}`
        }

        for (let index = 0; index < amountOfAnswersPerQuestion; index++) {
            let id;
            do {
                id = generateRandomId(amountOfId)
            }
            while (generatedIds.includes(id) === true);
        
            generatedIds.push(id);
        
        }
        return generatedIds;
    }

    static chooseCorrectAnswer(arrayWithId = []) {
        let IsNumberAsValuetype = true;
        arrayWithId.forEach(element => {
            if (typeof(element) !== 'number') {
                IsNumberAsValuetype = false;
                throw `wrong datatype in array`
        
            }
        });
       
        if (arrayWithId.length !== 4) {
          throw `4 elements needed. That array has ${arrayWithId.length} elements`
        }
        else {
          const minIndex = 0;
          const maxIndex = 3;
          const index = Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex);
          const rightAnswer = arrayWithId[index];
          return rightAnswer; 
        }
        
        
    }
   
}


// ------------------PRIVATE FUNCTIONS----------------------------------------

//internal function just for another functions in that file. No validation here -> validation is in generateQuestionsForCurrentMode funcion
function generateRandomId(amountOfId) {
      const minId = 0;
      return Math.floor(Math.random() * (amountOfId - minId + 1) + minId); 
    
}