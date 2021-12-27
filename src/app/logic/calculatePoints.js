// eslint-disable-next-line import/extensions
import { DIFFICULTY_LEVELS } from '../data/consts.js';

export function calculatePoints(
  correctAnswersScore,
  isAnswerCorrect,
  difficultyLevelsProperty,
) {
  if (
    DIFFICULTY_LEVELS[difficultyLevelsProperty].calculatingPoints ===
    DIFFICULTY_LEVELS.medium.calculatingPoints
  ) {
    let newCorrectAnswersScore = correctAnswersScore;
    if (isAnswerCorrect) {
      newCorrectAnswersScore = correctAnswersScore + 1;
    }
    return newCorrectAnswersScore;
  }
  if (
    DIFFICULTY_LEVELS[difficultyLevelsProperty].calculatingPoints ===
    DIFFICULTY_LEVELS.hard.calculatingPoints
  ) {
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
