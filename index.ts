import { bootstrap } from './container';

const sayHello = bootstrap(console).$sayHello();

document.getElementById('hello').onclick = () => {
  sayHello('Jakob');
};
