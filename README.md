TypeScript-with-DI
==================
TypeScript modules become stateless and testable because of dependency injection.

This architecture was presented to me by Rasmus - https://github.com/mindplay-dk - https://dev.to/mindplay

## Functional rather than OOP - without global state in modules
The trick is to not just write a function - you write a factory for your function also.

The factories reveals the dependencies of the created functions, so that the dependencies are 
easier to spot - don't look for things!

