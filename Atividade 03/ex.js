var text = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
function countVowel(str) { 
    const count = str.match(/[aeiou]/gi).length + 1;
    return count;
}
console.log(countVowel(text));
console.log(text.search("humanidade"));

//parte 2
var pares = [];
for(num = 0; num < 100; num ++) {
    if(num % 2 == 0) {
        pares.push(num);
    }
}
console.log(pares.join(" "));
