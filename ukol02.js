let jmeno = prompt('Jméno?');
let vek = Number(prompt('Zadej věk'));

if (vek >= 18) {
  console.log('Jmeno: ' + jmeno + ' věk: ' + vek + ' máte nárok řidit');
} else {
  let rozdil = 18 - vek;
  console.log(
    'Jmeno: ' +
      jmeno +
      ' věk: ' +
      vek +
      ' NEmáte nárok řidit, ' +
      rozdil +
      ' let musíš ještě počkat'
  );
}
