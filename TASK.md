# 🚀 Part 2: OOP Architecture — Abstraction & Polymorphism

## 🧠 Project Story Continued
Great job on Part 1! In real-world software development, you rarely work on code entirely alone. Often, you take over a project from another team, or you need to build upon an existing "gold standard" codebase.

To prepare our Library for future items (like Podcasts and E-Magazines), we are giving you a **Starter Code** repository. It contains a perfectly encapsulated version of Part 1. 

Your task is to refactor this starter code and introduce Advanced OOP Concepts: **Abstraction** and **Polymorphism**.

---

# 👻 Part 11 — Abstraction (The Blueprint)

## 🎯 Story
Nobody reads a generic "Library Item". They read Books or listen to Audiobooks. Therefore, nobody should be able to create a direct instance of `LibraryItem`. We need a blueprint.

## ✅ Requirements
1. Create a new file called `LibraryItem.js`.
2. Create a base class `LibraryItem`.
3. Move shared properties into its constructor: `title` and `author`.
4. **Make it Abstract:** Prevent direct instantiation using `new.target`. 
   *If someone tries to run `new LibraryItem()`, throw an error:* `"Cannot instantiate abstract class LibraryItem directly!"`
5. **Abstract Method:** Create a method `getSummary()`. Inside it, throw an error: 
   `"Method 'getSummary()' must be implemented by child class"`.

---

# 🏗️ Part 12 — Refactoring (Extending the Abstract Class)

## 🎯 Story
Now that we have our blueprint, our existing `Book` must follow the rules of the `LibraryItem`.

## ✅ Requirements
1. Modify `book.js` so the `Book` class `extends LibraryItem`. *(Don't forget to require LibraryItem!)*
2. Update the `super()` call in the `Book` constructor to pass `title` and `author`.
3. **Implement the Abstract Method:** Write the `getSummary()` method inside `Book`.
   - It should return a string: `"Book: [Title] by [Author] - Progress: [X]%"` (use your existing percentage logic).

---

# 🎭 Part 13 — Polymorphism (Overriding Methods)

## 🎯 Story
An `AudioBook` is also a `LibraryItem` (inherited via `Book`). But its progress is calculated differently (minutes instead of pages). We need `AudioBook` to behave differently when asked for a summary.

## ✅ Requirements
1. Inside `audioBook.js`, **override** the `getSummary()` method.
2. It should return a string: `"AudioBook: [Title] by [Author] - Progress: [X] minutes listened"`

## 🧠 Concept Explanation
**Polymorphism** means "many forms". Both child classes share the exact same method name (`getSummary`), but they have entirely different internal logic and string outputs.

---

# 🎛️ Part 14 — Polymorphism in Action (The Dashboard)

## 🎯 Story
The UI team needs to display a mixed list of everything the user is currently reading/listening to. They just want to loop through a list and get summaries, without writing complicated `if/else` checks for each type of media.

## ✅ Requirements
Inside your `index.js`:
1. Create an array called `myLibrary`.
2. Add at least one `Book` object and one `AudioBook` object to this array.
3. Simulate some reading/listening progress for them using `await`.
4. Use a `forEach` loop or `for...of` loop to iterate over `myLibrary`.
5. Inside the loop, call `.getSummary()` on each item and `console.log` the result.

## 🧾 Expected Output Example:
```text
Reading 300 pages...
Current progress: 300/500
Playing audio for 50 minutes...
Listening progress: 50/300 minutes

--- My Library Dashboard ---
Book: Harry Potter by J.K. Rowling - Progress: 60%
AudioBook: Atomic Habits by James Clear - Progress: 50 minutes listened