// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //----------------- Solution 1
  // return str.split('').reverse().join('');
  //----------------- Solution 2
  // let reversed = '';
  // for (let char of str) {
  //   reversed = char + reversed;
  // }
  // return reversed;

  //----------------- Solution 3
  // let reversed = '';
  // for (let i = 0; i < str.length; i++) {
  //   reversed = str[i] + reversed;
  // }
  // return reversed;
  //----------------- Solution 4
  debugger;
  return str.split('').reduce((reversed, char) => char + reversed, '');
}
console.log(reverse('hello'));

module.exports = reverse;
