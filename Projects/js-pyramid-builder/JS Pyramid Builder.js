const character = "*";
const count = 10;
const rows = [];
let inverted = false;
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}


for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count)); //All the rows are added to the front of the array
  } else {
    rows.push(padRow(i, count)); //All the rows are added to the end of the array
  }
}

let result = ""

for (const row of rows) {
  result = result + row + "\n"; //this concatenates each row with a newline character
}

console.log(result);