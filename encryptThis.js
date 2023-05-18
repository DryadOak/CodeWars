// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

// My solution: 
var encryptThis = function(text) {
    if (typeof text !== 'string' || text.trim().length === 0) {
      return ''
    }
  
    const words = text.split(' ')
    const encryptedWords = words.map((word) => {
      const firstCharAscii = word.charCodeAt(0)
      const secondChar = word[1]
      const lastChar = word[word.length - 1]
  
      if (word.length === 1) {
        return firstCharAscii.toString()
      } else if (word.length === 2) {
        return `${firstCharAscii}${lastChar}`
      } else {
        return `${firstCharAscii}${lastChar}${word.slice(2, -1)}${secondChar}`
      }
    })
  
    return encryptedWords.join(' ')
  }