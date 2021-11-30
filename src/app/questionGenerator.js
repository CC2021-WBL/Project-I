class QuestionGenerator {

    //argument argAmountOfId will be relaced by connection to CurrentMode and it's IDs'
    static generateQuestionsForCurrentMode(amountOfId) {
        const amountOfAnswersPerQuestion = 4;
        let generatedIds = [];

        if (amountOfId < amountOfAnswersPerQuestion) {
            throw `amountOfId must be greater or equal ${amountOfAnswersPerQuestion}. Passed value: ${amountOfId}`
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
        const minIndex = 0;
        const maxIndex = 3;
        const index = Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex);
        const rightAnswer = arrayWithId[index];
        return rightAnswer;
        
    }
   
}


// ------------------PRIVATE FUNCTIONS----------------------------------------


function generateRandomId(amountOfId) {
    const minId = 1;
    return Math.floor(Math.random() * (amountOfId - minId + 1) + minId);
}

