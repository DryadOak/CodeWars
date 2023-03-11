// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My solution:
function pigIt(str) {
    // Split the input string into an array of words
    const words = str.split(' ');
  
    // Map over the array of words and transform each word
    const transformedWords = words.map((word) => {
      // If the word contains punctuation, return it unchanged
      if (/[\!\?\.]/.test(word)) {
        return word;
      }
  
      // Otherwise, move the first letter to the end of the word and add "ay"
      const [firstLetter, ...rest] = word;
      return `${rest.join('')}${firstLetter}ay`;
    });
  
    // Join the array of transformed words back into a string
    return transformedWords.join(' ');
  
  }