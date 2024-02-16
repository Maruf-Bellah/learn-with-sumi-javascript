// what is RegExp = A regular expression is a sequence of characters that forms a search pattern.

// When you search for data in a text, you can use this search pattern to describe what you are searching for.

// A regular expression can be a single character, or a more complicated pattern.
// Regular expressions can be used to perform all types of text search and text replace operations.

// Using String Methods

// In JavaScript, regular expressions are often used with the two string methods:

// search() and replace().

// The search() method uses an expression to search for a match, and returns the position of the match.

// The replace() method returns a modified string where the pattern is replaced.

let text = "Visit W3Schools!";
let n = text.search("W3Schools"); // search koy number index e ace seta dekhay
console.log(n);

let text1 = "Visit W3Schools!";
let m = text.replace("W3Schools", "Maruf bellah"); // lekha k poribonton kora jay
console.log(m);
