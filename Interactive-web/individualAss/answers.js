// Sample data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ian", "Jack",
               "Kathy", "Liam", "Mia", "Nora", "Oscar", "Paula", "Quinn", "Ryan", "Sophie", "Tom"];

// 1. Sum of all numbers
function sumArray() {
    const sum = numbers.reduce((a, b) => a + b, 0);
    document.getElementById("answer1").textContent = sum;
}

// 2. Largest number
function findLargest() {
    const largest = Math.max(...numbers);
    document.getElementById("answer2").textContent = largest;
}

// 3. Sort array
function sortArray() {
    const sorted = [...numbers].sort((a, b) => a - b);
    document.getElementById("answer3").textContent = sorted.join(", ");
}

// Exercise 4
function displayReversed() {
    document.getElementById("originalReversed").innerText = `Original Array: ${numbers}`;
    const reversed = [...numbers].reverse();
    document.getElementById("reversedArray").innerText = `Reversed Array: ${reversed}`;
}

// 5. Even numbers
function getEvenNumbers() {
    const evens = numbers.filter(num => num % 2 === 0);
    document.getElementById("answer5").textContent = evens.join(", ");
}

// 6. Odd numbers
function getOddNumbers() {
    const odds = numbers.filter(num => num % 2 !== 0);
    document.getElementById("answer6").textContent = odds.join(", ");
}

// 7. Average of numbers
function averageArray() {
    const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    document.getElementById("answer7").textContent = average;
}

// 8. Remove duplicates
function removeDuplicates() {
    const unique = [...new Set(numbers)];
    document.getElementById("answer8").textContent = unique.join(", ");
}

// 9. Median value
function medianArray() {
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    document.getElementById("answer9").textContent = median;
}

// 10. Multiply by 2
function multiplyByTwo() {
    const multiplied = numbers.map(num => num * 2);
    document.getElementById("answer10").textContent = multiplied.join(", ");
}

// 11. Print names
function printNames() {
    document.getElementById("answer11").textContent = names.join("\n");
}

// 12. Sort names
function sortNames() {
    const sortedNames = [...names].sort();
    document.getElementById("answer12").textContent = sortedNames.join(", ");
}

// 13. Check if name exists
function checkName() {
    const nameToCheck = document.getElementById("nameCheck").value;
    const exists = names.includes(nameToCheck);
    document.getElementById("answer13").textContent = exists ? "True" : "False";
}

// 14. Longest name
function findLongestName() {
    const longest = names.reduce((a, b) => a.length > b.length ? a : b);
    document.getElementById("answer14").textContent = longest;
}

// 15. Names starting with a letter
function findNamesStartingWith() {
    const letter = document.getElementById("letterInput").value;
    const filteredNames = names.filter(name => name.startsWith(letter));
    document.getElementById("answer15").textContent = filteredNames.join(", ");
}

// 16. Convert names to uppercase
function convertNamesToUppercase() {
    const uppercased = names.map(name => name.toUpperCase());
    document.getElementById("answer16").textContent = uppercased.join(", ");
}

// 17. Remove a specific name
function removeName() {
    const nameToRemove = document.getElementById("removeNameInput").value;
    const filteredNames = names.filter(name => name !== nameToRemove);
    document.getElementById("answer17").textContent = filteredNames.join(", ");
}

// 18. Count names containing 'a'
function countNamesWithA() {
    const count = names.filter(name => name.includes('a')).length;
    document.getElementById("answer18").textContent = count;
}

// 19. Concatenate names
function concatenateNames() {
    const concatenated = names.join(", ");
    document.getElementById("answer19").textContent = concatenated;
}

// 20. Reverse names
function reverseNames() {
    const reversedNames = [...names].reverse();
    document.getElementById("answer20").textContent = reversedNames.join(", ");
}

// 21. Person object
function createPersonObject() {
    const person = { name: "John", age: 30, occupation: "Developer" };
    document.getElementById("answer21").textContent = JSON.stringify(person);
}

// 22. Format person info
function formatPersonInfo() {
    const person = { name: "John", age: 30, occupation: "Developer" };
    const info = `Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}`;
    document.getElementById("answer22").textContent = info;
}

// 23. Add property
function addProperty() {
    const person = { name: "John", age: 30, occupation: "Developer" };
    person.hobby = "Reading";
    document.getElementById("answer23").textContent = JSON.stringify(person);
}

// 24. Remove property
function removeProperty() {
    const person = { name: "John", age: 30, occupation: "Developer" };
    delete person.occupation;
    document.getElementById("answer24").textContent = JSON.stringify(person);
}

// 25. List properties
function listProperties() {
    const person = { name: "John", age: 30, occupation: "Developer" };
    const properties = Object.entries(person).map(([key, value]) => `${key}: ${value}`).join(", ");
    document.getElementById("answer25").textContent = properties;
}

// 26. Merge objects
function mergeObjects() {
    const obj1 = { name: "John", age: 30 };
    const obj2 = { occupation: "Developer", hobby: "Reading" };
    const merged = { ...obj1, ...obj2 };
    document.getElementById("answer26").textContent = JSON.stringify(merged);
}

// 27. Check property existence
function checkObjectProperty() {
    const person = { name: "John", age: 30, occupation: "Developer" };
    const property = document.getElementById("propertyCheckInput").value;
    const exists = person.hasOwnProperty(property);
    document.getElementById("answer27").textContent = exists ? "True" : "False";
}

// 28. Clone object
function cloneObject() {
    const person = { name: "John", age: 30, occupation: "Developer" };
    const cloned = { ...person };
    document.getElementById("answer28").textContent = JSON.stringify(cloned);
}

// 29. Print specific property of objects
function printObjectProperty() {
    const objects = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
    ];
    const names = objects.map(obj => obj.name).join(", ");
    document.getElementById("answer29").textContent = names;
}

// 30. Update specific property based on user input
function updateProperty() {
    const person = { name: "John", age: 30 };
    const newValue = document.getElementById("updatePropertyInput").value;
    person.age = newValue;
    document.getElementById("answer30").textContent = JSON.stringify(person);
}

// 31. Reverse string
function reverseString() {
    const str = document.getElementById("stringToReverse").value;
    const reversed = str.split("").reverse().join("");
    document.getElementById("answer31").textContent = reversed;
}

// 32. Count vowels
function countVowels() {
    const str = document.getElementById("vowelString").value;
    const count = (str.match(/[aeiou]/gi) || []).length;
    document.getElementById("answer32").textContent = count;
}

// 33. Convert string to uppercase without built-in methods
function convertToUpper() {
    const str = document.getElementById("uppercaseString").value;
    const uppercased = str.split("").map(char => char.toUpperCase()).join("");
    document.getElementById("answer33").textContent = uppercased;
}

// 34. Find string length without .length
function findStringLength() {
    const str = document.getElementById("lengthString").value;
    const length = str.split("").reduce(count => count + 1, 0);
    document.getElementById("answer34").textContent = length;
}

// 35. Replace spaces with hyphens
function replaceSpaces() {
    const str = document.getElementById("hyphenString").value;
    const replaced = str.replace(/ /g, '-');
    document.getElementById("answer35").textContent = replaced;
}

// 36. Extract first 10 characters
function extractFirst10() {
    const str = document.getElementById("extractString").value;
    const extracted = str.substring(0, 10);
    document.getElementById("answer36").textContent = extracted;
}

// 37. Find and replace word
function findAndReplace() {
    const str = document.getElementById("replaceString").value;
    const word = document.getElementById("wordToReplace").value;
    const newWord = document.getElementById("newWord").value;
    const replaced = str.replace(new RegExp(word, 'g'), newWord);
    document.getElementById("answer37").textContent = replaced;
}

// 38. Split string into words
function splitIntoWords() {
    const str = document.getElementById("splitString").value;
    const words = str.split(" ");
    document.getElementById("answer38").textContent = words.join(", ");
}

// 39. Remove all numbers from string
function removeNumbers() {
    const str = document.getElementById("removeNumbersString").value;
    const cleaned = str.replace(/\d+/g, '');
    document.getElementById("answer39").textContent = cleaned;
}

// 40. Insert string at position 7
function insertStringAtPosition() {
    const original = document.getElementById("insertString").value;
    const insert = document.getElementById("stringToInsert").value;
    const modified = original.slice(0, 7) + insert + original.slice(7);
    document.getElementById("answer40").textContent = modified;
}

// 41. Change background color
// function changeBackgroundColor() {
//     document.body.style.backgroundColor = "lightblue";
// }
function changeBackgroundColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
}

// 42. Hide element
function hideElement() {
    document.getElementById("exercises").style.display = "none";
}

// 43. Create paragraph
function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "This is a new paragraph!";
    document.body.appendChild(para);
}

// 44. Remove list items
function removeListItems() {
    const list = document.querySelector("ul");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

// 45. Change text content
function changeTextContent() {
    const newText = document.getElementById("newText").value;
    document.querySelector("h1").textContent = newText;
}

// 46. Toggle CSS class
function toggleCSSClass() {
    document.body.classList.toggle("active");
}

// 47. Count divs
function countDivs() {
    const count = document.querySelectorAll("div").length;
    document.getElementById("answer47").textContent = count;
}

// 48. Display input value
function displayInputValue() {
    const inputValue = document.getElementById("textInput").value;
    document.getElementById("answer48").textContent = inputValue;
}

// 49. Create table
function createTable() {
    const table = document.createElement("table");
    for (let i = 1; i <= 3; i++) {
        const row = table.insertRow();
        for (let j = 1; j <= 3; j++) {
            const cell = row.insertCell();
            cell.textContent = i * j;
        }
    }
    document.body.appendChild(table);
}

// 50. Validate form
function validateForm() {
    const name = prompt("Enter name:");
    const email = prompt("Enter email:");
    const password = prompt("Enter password:");
    
    if (name && email && password) {
        alert("Form is valid!");
    } else {
        alert("Please fill in all fields.");
    }
}
