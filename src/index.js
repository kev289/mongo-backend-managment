// reversa la palabra

const word = "palabra";

let words = word.split('');

let i = 0;
let d = words.length - 1;

while (i<d){
    let temp = words[i];
    words[i] = words[d];
    words[d] = temp;

    i++
    d--
}

console.log(`la palabra es ${word}`);
console.log(`y su reversa es ${words.join('')}`);