// eslint-disable-next-line import/extensions
import { DIFFICULTY_LEVELS } from '../data/consts.js';

export function calculatePoints(
  correctAnswersScore,
  isAnswerCorrect,
  difficultyLevelsProperty,
) {
  const difficultyLevelsProperties =
    Object.getOwnPropertyNames(DIFFICULTY_LEVELS);

  const isMediumMode =
    difficultyLevelsProperty === difficultyLevelsProperties[1];
  const isHardMode = difficultyLevelsProperty === difficultyLevelsProperties[2];
  if (!isMediumMode && !isHardMode) {
    throw new Error(
      'wrong difficulty level property or calculatingPoints value',
    );
  }

  if (isMediumMode) {
    let newCorrectAnswersScore = correctAnswersScore;
    if (isAnswerCorrect) {
      newCorrectAnswersScore = correctAnswersScore + 1;
    }
    return newCorrectAnswersScore;
  }
  if (isHardMode) {
    let newCorrectAnswersScore = correctAnswersScore;
    if (isAnswerCorrect) {
      newCorrectAnswersScore += 1;
    } else {
      newCorrectAnswersScore -= 1;
    }
    return newCorrectAnswersScore;
  }
  throw new Error('wrong difficulty level property or calculatingPoints value');
}

export default calculatePoints;
