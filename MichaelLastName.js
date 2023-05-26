// Given a text, for example:

// const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

// get an array of last names of people named Michael. The result should be:
// ["Jordan", "Johnson", "Green", "Wood"]

// Notes:

// First name will always be Michael with upper case 'M'.
// There will always be a space character between 'Michael' and last name.
// Last name will always be one word, starting with an upper-case letter and continuing with lower-case letters.
// There will always be at least one 'Micheal' with a valid last name in the input text.

// My Solution: 
function getMichaelLastName(inputText) {
    const lastNames = [];
    const words = inputText.split(' ');
  
    for (let i = 0; i < words.length - 1; i++) {
      const nextIndex = words[i + 1];
      if (
        words[i] === 'Michael' &&
        nextIndex.charAt(0) === nextIndex.charAt(0).toUpperCase()
      ) {
        const punctuation = /[\.,?!]/g;
        const removePunctuation = nextIndex.replace(punctuation, '');
        lastNames.push(removePunctuation);
      }
    }
  
    return lastNames;
  }