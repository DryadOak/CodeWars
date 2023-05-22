// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// My solution:

function capitalize(s){
    const even = s.split('').map((letter, index) => {
        return index % 2 === 0 ? letter.toUpperCase() : letter
    })
    const odd = even.map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase() )
        return [even.join(''), odd.join('')];
  };