function prepareDataForDetailsTable(quiz, humanData) {
  const { questions } = quiz;
  const { detailedAnswers: humanAnswers } = humanData;
  const initialAccumulator = {
    rightAnswers: [],
    paths: [],
  };
  const data = questions.reduce(
    (acc, { rightAnswer, image }) => ({
      ...acc,
      rightAnswers: [...acc.rightAnswers, rightAnswer],
      paths: [...acc.paths, image],
    }),
    initialAccumulator,
  );
  return { ...data, humanAnswers };
}
export default prepareDataForDetailsTable;
