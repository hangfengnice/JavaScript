"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(num, numbers) {

  if (!numbers.includes(num)) {
    numbers = [...numbers, num]
    numbers.sort((a, b) => a - b)
  }
  var num = lotteryNum()

  return numbers
}

var luckyLotteryNumbers = [];
const NUM_COUNT = 6

while (luckyLotteryNumbers.length < NUM_COUNT) {
  luckyLotteryNumbers = pickNumber(lotteryNum(), Object.freeze(luckyLotteryNumbers));

}

console.log(luckyLotteryNumbers);
