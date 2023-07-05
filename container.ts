import { createSayHello, createShowMessage } from './hello';

function memoize<T>(create: () => T) {
  let instance: T | undefined;

  return () => {
    if (! instance) {
      instance = create();
    }

    return instance;
  }
}

// returns a "container"
export function bootstrap(console: Console) {
  // "components"
  const $showMessage = memoize(() => createShowMessage(console));
  const $sayHello = memoize(() => createSayHello($showMessage())); 

  return {
    $showMessage,
    $sayHello
  }
}
