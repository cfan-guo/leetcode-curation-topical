/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  if (prices.length < 2) return 0;

  let currentMax = Number.MIN_SAFE_INTEGER;
  let buy = prices[0];
  for (let p of prices) {
    currentMax = Math.max(currentMax, p - buy);
    buy = Math.min(buy, p);
  }
  return currentMax;
};
