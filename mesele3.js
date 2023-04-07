const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Bir sayı girin: \n', sayi => {

    if(isNaN(sayi)) {
        console.log("Number olaraq yaz");
        readline.close();
        return
    }
    let toplam = 0;
    while (sayi > 0) {
        toplam += sayi % 10;
        sayi = Math.floor(sayi / 10);
    }
    console.log('Rakamların toplamı: ' + toplam);
    readline.close();
});