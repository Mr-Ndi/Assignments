// question 1
function sumArray() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
        
    }
    document.getElementById('answer1').innerHTML = ` The sum of numbers is: ${sum}`;
}

// question 2
function findLargest() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const largest = Math.max(...numbers); // Use 'numbers' instead of 'arr'
    
    document.getElementById('answer2').innerHTML = ` The largest number is: ${largest}`;
}