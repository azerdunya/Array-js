let i = 1;
while (i <= 10) {
  let j = 1;
  let row = "";

  while (j <= 10) {
    row += i * j + "\t";
    j++;
  }

  console.log(row);
  i++;
}