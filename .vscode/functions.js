// 1. Show a random color (basic)
function showColor() {
    let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let random = colors[Math.floor(Math.random() * colors.length)];
    alert('Color: ' + random);
  }
  
  // 2. Simple hello function
  function sayHello() {
    alert('Hello there!');
  }
  
  // 3. Double a number
  function doubleNumber() {
    let num = prompt('Enter a number:');
    alert('Double is: ' + (num * 2));
  }
  
  // 4. Check if number is even
  function checkEven() {
    let num = prompt('Enter a number:');
    if (num % 2 === 0) {
      alert('It is even.');
    } else {
      alert('It is odd.');
    }
  }
  
  // 5. Reverse text
  function reverseText() {
    let text = prompt('Enter text:');
    let reversed = text.split('').reverse().join('');
    alert('Reversed: ' + reversed);
  }