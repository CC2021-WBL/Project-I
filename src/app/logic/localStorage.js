function addResult(rankings, gameInfo, amountOfResults) {
  const { name, result, mode } = gameInfo;
  // push gameinfo (only name and result, we don't need mode in this place) into the right mode in
  // rankings
  rankings[mode].push({ name, result });
  // sort in descending order by points
  rankings[mode].sort((a, b) => (a.result < b.result ? 1 : -1));
  // remove last element if there's to many gameinfos in our game ranking
  if (rankings[mode].length > amountOfResults) rankings[mode].pop();
  // update rankings in localStorage
  localStorage.setItem('rankings', JSON.stringify(rankings));
}

/**
 * Pattern of input object:
 * return gameInfo = {
 *   name: String,
 *   result: Number,
 *   mode: String,
 * }
 */

export default addResult;
