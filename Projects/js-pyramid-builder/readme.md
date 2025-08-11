# 🚀 JS Pyramid Builder

**Create stunning pyramid patterns with JavaScript!**  
A beginner-friendly project to master loops, string manipulation, and arrays — all while having fun building cool shapes! 🎉

---

## 🔍 About

This simple yet powerful script generates pyramid shapes using your chosen character.  
Perfect for practicing essential JavaScript concepts and boosting your coding confidence!

---

## ✨ Features

- Build pyramids of **any size** by adjusting the `count` variable  
- Customize the pyramid symbol easily with the `character` variable  
- Supports **normal** and **inverted** pyramid styles  
- Clean, readable, and beginner-friendly code  

---

## 🛠️ Functions & Methods Used
- `.repeat(n)`

  Repeats a given character or string `n` times.

  Used to build each row’s pattern by repeating the character as many times as needed to form the pyramid shape.

- `push(element)`

  Adds an element to the end of an array.

  Used when building the pyramid from top to bottom (normal order).

- `unshift(element)`

  Adds an element to the start of an array.

  Used for inverted pyramids, so rows build from bottom to top.

- `" ".repeat(n)`

  Used to add spaces for padding on each side of the pyramid row, centering the shape visually.


- `for loop`

  Controls the number of rows and manages how many characters/spaces each row contains.

---

## ⚙️ How to Run

1. Clone or download this repo.  
2. Open your terminal and navigate to the project folder.  
3. Run the script using Node.js:

```bash
node "JS Pyramid Builder.js"

