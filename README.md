TypeScript-with-DI
==================
Modules become stateless and testable because of dependency injection.

# Functional rather than OOP - without global state in modules
The trick is to not just write a function - you write a factory for your function also.

The factories reveals the dependencies of the created functions, so that the dependencies are 
easier to spot - don't look for things!

