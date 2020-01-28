# Exercise 2 - Deterministic Components and Testing

GitHub URL: [https://github.com/t4d-classes/react-redux-unit-testing_01272020](https://github.com/t4d-classes/react-redux-unit-testing_01272020)

## Steps

1. Create a component named Display Time. The component should produce the following output:

```html
<div>Mon, 27 Jan 2020 12:18:41 GMT</div>
```

Where the date/time is generated using "new Date().toUTCString()". Display the current date/time when the component is rendered.

2. Using tool header as an example, create a snapshot test. Inspect the output of the snapshot test.

3. What is a potential problem with this test? Is the component deterministic or non-deterministic. Why does this matter? In your code comments, please attempt to answer this question.

More Info: [https://en.wikipedia.org/wiki/Deterministic_algorithm](https://en.wikipedia.org/wiki/Deterministic_algorithm)

4. Snapshot testing requires a deterministic component. How can this component be made deterministic? In your code comments, please attempt to answer this question.

5. Use your solution from step 4 to refactor the component and the test. Re-run the snapshot.
