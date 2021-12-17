function createHousesQuestion(
  rightAnswerHouseValue,
  idOfRightAnswer,
  IDsArray = [],
) {
    let answersToSet = HOGWART_HOUSES;
    answersToSet.
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}

function getRandomIndexForCorrectAnswer() {
  const min = 0;
  const max = 3;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* {
  const arrayWithAnswers = [];
  const usedHouses = new Set();
  usedHouses.add(rightAnswerHouseValue);
  let housesIndex = 0;

  for (let index = 0; index < IDsArray.length; index += 1) {
    const element = IDsArray[index];

    if (element === idOfRightAnswer) {
      arrayWithAnswers.push(rightAnswerHouseValue);
    } else {
      do {
        if (!usedHouses.has(HOGWART_HOUSES[housesIndex])) {
          const answer = HOGWART_HOUSES[housesIndex];
          arrayWithAnswers.push(answer);
          usedHouses.add(answer);
          housesIndex += 1;
        }
      } while (arrayWithAnswers.length === index + 2);
    }
  }
  return arrayWithAnswers;
} */

export default createHousesQuestion;
