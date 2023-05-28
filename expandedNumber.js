// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// My solution:
function expandedForm(num) {
    const numToStr = num.toString();
    const arr = Array.from(numToStr);
    const expanded = arr
      .map((num, index, array) => {
        const count = array.length - index - 1;
        if (num !== '0') {
          return num + '0'.repeat(count);
        } else {
          return null;
        }
      })
      .filter(num => num !== null)
      .join(' + ');
  
    return expanded;
  }
  