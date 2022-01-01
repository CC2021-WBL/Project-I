function countScore({ questionsAnswered, questionsGuessed }) {
  const areNumbers =
    Number.isInteger(Number(questionsAnswered)) &&
    Number.isInteger(Number(questionsGuessed));
  if (questionsAnswered === 0 || !areNumbers) {
    return 0;
  }
  return questionsGuessed * 2 - (questionsAnswered - questionsGuessed);
}

export default countScore;
