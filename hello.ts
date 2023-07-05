// We create a Hello "application" where we want to be able to change the way we say hello
export function createSayHello(showMessage: showMessageType) {
  return function sayHello(name: string) {
    showMessage(`Hello ${name}`);
  }
}

type showMessageType = (message: string) => void; // Preferred over: ReturnType<typeof createShowMessage>;

// Say hello in the console
// In this example, we have an external dependency on `Console`, an object that
// we don't have the means of changing - in our own code, we have no excuse, we
// could just refactor that class and break it down to functions, so that we
// can express our exact dependencies. (in this case, just a function.)

export function createShowMessage(console: Pick<Console, "log">): showMessageType {
  return function showMessage(message: string) {
    console.log(message);
  }
}
