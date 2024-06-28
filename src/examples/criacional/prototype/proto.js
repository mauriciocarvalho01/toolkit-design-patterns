// Todos os objetos literais possuem um prototype padrão chamado Object.prototype
console.log(Object.prototype)

// Objeto literal
const carPrototype = { model: 'Mustang', engine: 'v8' }; // prototype de car é Object.prototype

console.log(carPrototype.hasOwnProperty('engine')); // true


const mustang = Object.create(carPrototype); // prototype de mustang é carPrototype
mustang.color = 'red';
mustang.model = `${mustang.model} GT R`;


console.log(mustang.engine); // Mustang GT R


// Loja de carros
const carStore = [mustang, { model: 'Ford Fusion', color: 'blue' }];

// Minha garagem
const garage = Object.create(carStore);

const mustangInGarage = garage[0];
const fordFusionInGarage = garage[1];

console.log(`Motor do Mustang na garagem: ${mustangInGarage.engine}`);
console.log(`Motor da Ford Fusion na garagem: ${fordFusionInGarage.engine}`);
