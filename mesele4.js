const { log } = require('console');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Bura adinizi yazin\n', ad => {

    if (!isNaN(ad)) {
        console.log("Yalnızca metin girebilirsiniz!");
        readline.close();
        return;
      }
    const char = 'Vu' //axtarilan herf
    let i = 0;
    while(i < ad & ad[i] != char){
        i++
    }
    if(i < ad.length) {
        console.log("True");
    } else {
        console.log("False");
    }

    readline.close();
});