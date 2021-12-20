class QuestionGenerator {
  // argument argAmountOfId will be relaced by connection to CurrentMode and it's IDs'

  static generateRandomId(amountOfId) {
    const minId = 0;
    return Math.floor(Math.random() * (amountOfId - minId + 1) + minId);
  }

  static generateQuestionsForCurrentMode(amountOfId) {
    const amountOfAnswersPerQuestion = 4;
    const generatedIds = [];

    if (
      amountOfId < amountOfAnswersPerQuestion ||
      typeof amountOfId !== `number`
    ) {
      throw Error`Check amout of ID's and datatype. amountOfId must be greater or equal ${amountOfAnswersPerQuestion}. Passed value: ${amountOfId}
            Type must be number. Passed type: ${typeof amountOfId}`;
    }

    for (let index = 0; index < amountOfAnswersPerQuestion; index += 1) {
      let id;
      do {
        id = QuestionGenerator.generateRandomId(amountOfId);
      } while (generatedIds.includes(id) === true);
      generatedIds.push(id);
    }

    return generatedIds;
  }

  static chooseCorrectAnswer(arrayWithId = []) {
    arrayWithId.forEach((element) => {
      if (typeof element !== 'number') {
        throw Error`wrong datatype in array`;
      }
    });

    if (arrayWithId.length !== 4) {
      throw Error`4 elements needed. That array has ${arrayWithId.length} elements`;
    } else {
      const minIndex = 0;
      const maxIndex = 3;
      const index = Math.floor(
        Math.random() * (maxIndex - minIndex + 1) + minIndex,
      );
      const rightAnswer = arrayWithId[index];
      return rightAnswer;
    }
  }
}

export default QuestionGenerator;
