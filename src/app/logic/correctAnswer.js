const isAnswerCorrect = (correctAnswer, chosenAnswer) => {
  return correctAnswer === chosenAnswer;
};

//Test//
// console.log(isAnswerCorrect("qwe", "qwe")); // true
// console.log(isAnswerCorrect("Qwe", "qwe")); //false
