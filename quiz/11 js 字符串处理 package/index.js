var bankcode = '6222081812002934027'

bankcode = bankcode.match(/\d{3,4}/g).join(' ')
console.log(bankcode.match(/\d{3,4}/g));


var numberCode = '5702375'

numberCode = numberCode.replace(/\B(?=(\d{3})+\b)/g, ',')
console.log(numberCode);

Number(numberCode).toLocaleString()

// 3.