// eslint-disable-next-line import/extensions
import { DIFFICULTY_LEVELS } from '../data/consts.js';

export function calculatePoints(
  correctAnswersScore,
  isAnswerCorrect,
  difficultyLevelsProperty,
) {
  const difficultyLevelsProperties =
    Object.getOwnPropertyNames(DIFFICULTY_LEVELS);
  let newScore;

  const isMediumMode =
    difficultyLevelsProperty === difficultyLevelsProperties[1];
  const isHardMode = difficultyLevelsProperty === difficultyLevelsProperties[2];
  if (!isMediumMode && !isHardMode) {
    throw new Error(
      'wrong difficulty level property or calculatingPoints value',
    );
  }

  if (isMediumMode) {
    newScore = isAnswerCorrect ? correctAnswersScore + 1 : correctAnswersScore;
  }
  if (isHardMode) {
    newScore = isAnswerCorrect
      ? correctAnswersScore + 1
      : correctAnswersScore - 1;
  }
  return newScore;
}
export default calculatePoints;
