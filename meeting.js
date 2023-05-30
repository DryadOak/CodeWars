// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

// My solution:
function meeting(str) {
    const names = str.toUpperCase().split(';')
    
    const guests = names.map(name => {
      const [first, last] = name.split(':')
      return { first: first.trim(), last: last.trim() }
    })
    
    guests.sort((a, b) => {
      const lastNameA = a.last
      const lastNameB = b.last
      
      if (lastNameA < lastNameB) {
        return -1
      } else if (lastNameA > lastNameB) {
        return 1
      } else {
        const firstNameA = a.first
        const firstNameB = b.first
        if (firstNameA < firstNameB) {
          return -1
        } else if (firstNameA > firstNameB) {
          return 1
        } else {
          return 0
        }
      }
    })
    
    const formattedNames = guests.map(({ first, last }) => `(${last}, ${first})`)
    
    return formattedNames.join('')
  }