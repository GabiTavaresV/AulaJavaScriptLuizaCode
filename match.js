const texto = 'Meu CPF é 401.774.438-98';

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(texto.match(regex));

// testando