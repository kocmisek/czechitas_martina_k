let a = Number(prompt('zadej číslo:'));
let b = Number(prompt('zadej další číslo:'));
let c = Number(prompt('zadej naposled číslo:'));

if (a > b && a > c) {
  console.log('Vaše číslo: ' + a + ' je největší.');
} else if (b > a && b > c) {
  console.log('Vaše číslo: ' + c + ' je největší.');
} else if (c > b && c > a) {
  console.log('Vaše číslo: ' + c + ' je největší.');
} else {
  console.log('Některé z čísel jsou stejné');
}

// jednoduší zápis

let nejvetsiCislo = Math.max(a, b, c);
console.log(nejvetsiCislo);
