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
//question 3
function displaySortedArray() {
    const numbers = [20, 15, 8, 12, 5, 1, 19, 3, 14, 7, 10, 13, 18, 6, 17, 4, 2, 16, 11, 9]; // Example array
    const originalArray = [...numbers]; 
    numbers.sort((a, b) => a - b);
    
    // Display the original and sorted arrays
    document.getElementById('original').innerHTML = `Original Array: ${originalArray.join(', ')}`;
    document.getElementById('sorted').innerHTML = `Sorted Array: ${numbers.join(', ')}`;
}