### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a javascript library. it is used when we want to use many repetitive functions without refreshing the entire webpage
- What is Babel?
    it is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript
- What is JSX?
    it is JavaScriptXTML, with which we can have access of html syntax into a javascript file
- How is a Component created in React?
    it is a function that can be used repetitively.
- What are some difference between state and props?
    props value cannot be changed, and state value can be changed
- What does "downward data flow" refer to in React?
    when we divide a big function into smaller components and those smaller components into more smaller component, it is called downward data flow.
- What is a controlled component?
    component whose value can be changed
- What is an uncontrolled component?
    component whose value cannot be changed, e.g. importing a file into our webpage
- What is the purpose of the `key` prop when rendering a list of components?
    to create a relationship between the component and the DOM element
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    because, when array is updated, respective key value pair will be unmatched and the error will be occurred.
- Describe useEffect.  What use cases is it used for in React components?
    useEffect takes places after the first render and it changes if the given dependencies are changed.
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    it acts as a global parameter for that particular component.
- When would you use a ref? When wouldn't you use one?
    in cases where we want to change the value of a child component, without making use of props and all.
- What is a custom hook in React? When would you want to write one?
    when the same useState feature is used multiple times in components, it should be made into a smaller component which is called custom hook 