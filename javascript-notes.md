## Declaring Variables

- In JavaScript, variables are declared using the `let` keyword:

  ```javascript
    let variable_name;  // declaration without assignment
  ```

- Initializing a variable with a value:

  ```javascript
    let msg = "Hello";
  ```
- Once declared, you do not use let again to reassign the variable:

  ```javascript
    msg = "Hi!";  // reassigning without 'let
  ```

- Variables declared with let can be reassigned.

- Variables declared with const cannot be reassigned.

---

## Printing Output

- Use console.log() to print output to the console:

  ```javascript
  	  console.log(msg);
  ```

- Printing an uninitialized variable (declared but no value) prints `undefined`.

  - `undefined` is a special data type indicating a variable without a defined value.

---

## Arrays

- Arrays are zero-indexed (start counting at 0), similar in all programming languages.

- Declare arrays using square brackets []:

  ```javascript
    let arr = [1, "two", 3];
  ```
- JavaScript arrays can hold mixed data types (numbers, strings, etc.).

- Common array methods:

 - `.length` — returns the number of elements (property, no parentheses):
  ```javascript
    console.log(arr.length);
  ```

- `.push(element)` — adds an element to the end, returns new array length:
```javascript
    arr.push(4);  // returns 4, new length of the array
```

- `.pop()` — removes the last element and returns it:
```javascript
  let last = arr.pop();  // returns 4, removes it from arr
```
- `.unshift(element)` — Adds an element to the start of the array, shifting existing elements to the right.

- `.shift()` — Removes and returns the first element of the array, shortening its length.
---

## Loops

- Traditional `for` loop syntax: `(initializer; condition; increment)`

- Example — print numbers 0 through 7:
```javascript
  for (let i = 0; i < 8; i++) {
    console.log(i);
  }
```

- `for...of loop` — iterates over iterable values (arrays, strings):
```javascript
for (const value of iterable) {
  console.log(value);
}
```

---

## Functions

Functions allow you to reuse blocks of code by calling them multiple times.

```javascript
function functionName(parameter) {
  // function body
}
```

Note: Any code after a return statement inside a function will not be executed.

---

## If Condition

The if statement works similarly in JavaScript as in other programming languages.

In JavaScript:

Non-empty strings `(e.g. "hello")` are considered **truthy** `(evaluate to true)`.

Empty strings `("")` are considered  **falsy** `(evaluate to false)`.

`==` checks value **equality** (allows type coercion).

`===` checks strict **equality** (value and type must be the same).

