# Exercise 1 - First Unit Test

GitHub URL: [https://github.com/t4d-classes/react-redux-unit-testing_01272020](https://github.com/t4d-classes/react-redux-unit-testing_01272020)

## Steps

1. Create a new component named Item List. The Item List component should display an unordered list of strings.

```html
<ul>
  <li>red</li>
  <li>blue</li>
  <li>green</li>
</ul>
```

The list of strings should passed via props.

2. Create a snapshot test for the component.

3. Run the test and review the snapshot file.

4. Modify the list by wrapping the content of each list item in a div element.

```html
<li><div>red</div></li>
```

5. Is the snapshot test still passing? Why or why not? How do you update the snapshot?
