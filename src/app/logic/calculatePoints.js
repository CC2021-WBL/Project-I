// eslint-disable-next-line import/extensions
import { DIFFICULTY_LEVELS } from '../data/consts.js';

export function calculatePoints(
  correctAnswersScore,
  isAnswerCorrect,
  difficultyLevelsProperty,
) {
  let newScore;

  const isMediumMode =
    difficultyLevelsProperty === DIFFICULTY_LEVELS.medium.level;
  const isHardMode = difficultyLevelsProperty === DIFFICULTY_LEVELS.hard.level;
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
