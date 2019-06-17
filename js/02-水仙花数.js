// 水仙花数
// 指一个三位数 各个位置上的数子的3次幂等于原来的数
// 例 1^3 + 5^3 + 3^3 = 153 

for( var i = 100; i < 1000; i ++){
  var bai = parseInt(i / 100);
  var shi = parseInt((i - bai * 100) / 10);
  var ge = i % 10;
  if(bai * bai * bai + shi * shi * shi + ge * ge * ge === i){
    console.log(i)
  }
}
