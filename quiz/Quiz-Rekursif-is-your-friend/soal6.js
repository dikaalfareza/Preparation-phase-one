/*

Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/

function palindromeRecursive(sentence) {
  //code here - saran bikin fungsi rekursif didalam sini
  let char = sentence[0];
  let charMirror = sentence[sentence.length - 1];
  let isPalindrome = char === charMirror;

  //lalu bandingkan dengan sentence
  if (!isPalindrome) return false;
  if (sentence.length === 1) {
    return isPalindrome;
  }

  return palindromeRecursive(sentence.slice(1, sentence.length - 1));
}

// TEST CASES
console.log(palindromeRecursive("katak")); // true
console.log(palindromeRecursive("blanket")); // false
console.log(palindromeRecursive("civic")); // true
console.log(palindromeRecursive("kasur rusak")); // true
console.log(palindromeRecursive("mister")); // false
