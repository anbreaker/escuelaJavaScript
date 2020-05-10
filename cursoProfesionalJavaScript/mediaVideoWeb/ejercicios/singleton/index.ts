import Singleton from './Singleton';

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log('A es igual a B??', a === b);

//http://localhost:...puerto.../ejercicios/singleton/index.html
//Usando Pacel
