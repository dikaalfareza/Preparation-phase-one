/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  //code here
  if (equation < 10) return equation.toString();

  let srtNum = equation.toString();
  let firstDigit = srtNum[0];
  let lengthDigit = srtNum.length;

  let num = firstDigit.padEnd(lengthDigit, "0");
  let remainNum = Number(srtNum.slice(1));

  return `${num}+` + parseNumber(remainNum);
  return;
}

console.log(parseNumber(3333)); // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3
