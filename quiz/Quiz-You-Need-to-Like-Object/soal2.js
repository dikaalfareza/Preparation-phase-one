/*
=========
HACKATHON
=========

[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.

[EXAMPLE]
"bank account sudah disediakan"

input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]

[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

function economyChangeSummary(tradeActivity) {
  const bankAccount = {
    "Jeff Bezos": { name: "Jeff Bezos", deposit: 100000, owner: "Amazon" },
    "Larry Page": { name: "Larry Page", deposit: 95000, owner: "Google" },
    "Jack Ma": { name: "Jack Ma", deposit: 90000, owner: "Alibaba" },
  };

  const result = [];
  for (let i = 0; i < tradeActivity.length; i++) {
    for (let j = 0; j < tradeActivity[i].length; j++) {
      let transaction = tradeActivity[i][j];
      let name = "";
      let percentage = "";

      for (let k = 0; k < transaction.length; k++) {
        let char = transaction[k];
        if (char === "-") {
          percentage = transaction.substring(k);
          break;
        } else if (char === "+") {
          percentage = transaction.substring(k + 1);
          break;
        } else {
          name += char;
        }
      }

      let percentValue = parseFloat(percentage);
      let currentDeposit = bankAccount[name].deposit;
      let change = (percentValue / 100) * currentDeposit;
      bankAccount[name].deposit += change;

      result.push({
        name: name,
        deposit: bankAccount[name].deposit,
        owner: bankAccount[name].owner,
      });
    }
  }

  return result;
}

console.log(
  economyChangeSummary([
    ["Jeff Bezos+5%", "Larry Page+10%", "Jeff Bezos-3%"],
    ["Larry Page+2%", "Larry Page-1%"],
    ["Jack Ma+4%"],
    ["Larry Page-8%", "Jack Ma+20%", "Jeff Bezos-3%", "Jeff Bezos+8%"],
  ])
);
/* 
  [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 104500, owner: 'Google' },
  { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 106590, owner: 'Google' },
  { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
  { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
  { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
  { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
  { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
  { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
*/
console.log(
  "=============================================================================="
);

console.log(economyChangeSummary([["Jeff Bezos-10%"]]));
// /*
//   [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
// */
