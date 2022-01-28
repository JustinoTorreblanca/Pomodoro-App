JS (ES6)

1.What is an arrow function? What are all its uses? How it differs from a normal function?
    -A new way of declaring funtion, helps us to write cleaner and more readable code.
    -Are useful for declaring functional components, callbacks, methods such as: map(), reduce(), forEach()
    -Differs in the syntax and the 'this' keyword that depends on the context where the function was 
     created

2.What is an generator function?
    A special function that returns an object Generator, and uses the yield keyword for partialy returning
     a value every time the generator functiion is called.

3.What is hoisting in JS?
    An internal process in JS that initializes functions and variables to the top of their scope, thats why we are able to
     invoke a function before its declared.

4.What is a callback hell?
    Multiple nested callbacks, maybe they work but it's repetitive and difficult to read.

5.What is an event loop?
    Part of the JS engine that continually checks if the callback queue is empty and ready to receive new tasks, when a task id fulfilled is sent to the call stack.

ReactJS

1.What is ReactDOM and what is the difference between ReactDOM and React?
    ReactDOM is a package with different methods that allow us to modify or render specific elements in the DOM. 
    While React is the main entrance to the library, where we are able to create components, classes, elements, bind props, etc.

2.What are the differences between a class component and functional component?
    Of course, the syntax, the way 'this' behaves, class components have a complex writing, while functional components are more
     self-explanatory and more readable. Another difference is the state handle, with functional components we can use Hooks.

3.What is the difference between state and props?
    Props are drilled to the component, the state is handled within the component