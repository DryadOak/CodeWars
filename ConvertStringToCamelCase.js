// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// My solutions:
// first
function toCamelCase(str){
    if(str == ''){
      return ''
    } else{
   let arr = str.split(/[-:_]/)
   let pascalCase = arr.map(word => word.charAt().toUpperCase() + word.slice(1)).join('')
   let camelCase = pascalCase.charAt().toLowerCase() + pascalCase.slice(1)
    
   return str.charAt() == str.charAt().toUpperCase() ? pascalCase : camelCase 
    }
  }
//   Second
function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }
