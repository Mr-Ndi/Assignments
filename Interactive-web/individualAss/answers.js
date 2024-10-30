// Array of numbers for exercises
const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

// Array of names for exercises
const names = [
    "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah",
    "Ivy", "Jack", "Kathy", "Leo", "Mona", "Nina", "Oscar", "Paul", "Quinn",
    "Rose", "Sam", "Tom"
];

// Array of cars for exercises
const cars = [
    { id: 1, model: "Toyota", price: 20000, manufacturer: "Toyota" },
    { id: 2, model: "Honda", price: 22000, manufacturer: "Honda" },
    { id: 3, model: "Ford", price: 25000, manufacturer: "Ford" },
    { id: 4, model: "Chevrolet", price: 23000, manufacturer: "Chevrolet" },
    { id: 5, model: "BMW", price: 35000, manufacturer: "BMW" },
    { id: 6, model: "Mercedes", price: 40000, manufacturer: "Mercedes" },
    { id: 7, model: "Nissan", price: 24000, manufacturer: "Nissan" },
    { id: 8, model: "Hyundai", price: 21000, manufacturer: "Hyundai" },
];

// Exercise functions

// Exercise 1
function sumArray() {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    document.getElementById("answer1").innerText = sum;
}

// Exercise 2
function findLargest() {
    const largest = Math.max(...numbers);
    document.getElementById("answer2").innerText = largest;
}

// Exercise 3
function displaySortedArray() {
    document.getElementById("originalSorted").innerText = `Original Array: ${numbers}`;
    const sorted = [...numbers].sort((a, b) => a - b);
    document.getElementById("sortedArray").innerText = `Sorted Array: ${sorted}`;
}

// Exercise 4
function displayReversed() {
    document.getElementById("originalReversed").innerText = `Original Array: ${numbers}`;
    const reversed = [...numbers].reverse();
    document.getElementById("reversedArray").innerText = `Reversed Array: ${reversed}`;
}

// Exercise 5
function getEvenNumbers() {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    document.getElementById("evenNumbers").innerText = evenNumbers;
}

// Exercise 6
function getOddNumbers() {
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    document.getElementById("oddNumbers").innerText = oddNumbers;
}

// Exercise 7
function averageArray() {
    const average = sumArray() / numbers.length;
    document.getElementById("average").innerText = average;
}

// Exercise 8
function removeDuplicates() {
    const uniqueNumbers = [...new Set(numbers)];
    document.getElementById("uniqueNumbers").innerText = uniqueNumbers;
}

// Exercise 9
function medianArray() {
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    document.getElementById("medianValue").innerText = median;
}

// Exercise 10
function multiplyByTwo() {
    const multiplied = numbers.map(num => num * 2);
    document.getElementById("multipliedArray").innerText = multiplied;
}

// Exercise 11
function printNames() {
    document.getElementById("namesList").innerText = names.join(", ");
}

// Exercise 12
function sortNames() {
    const sortedNames = [...names].sort();
    document.getElementById("sortedNamesList").innerText = sortedNames.join(", ");
}

// Exercise 13
function checkName() {
    const nameToCheck = document.getElementById("nameCheck").value;
    const exists = names.includes(nameToCheck);
    document.getElementById("nameCheckResult").innerText = exists ? "Name exists" : "Name does not exist";
}

// Exercise 14
function findLongestName() {
    const longestName = names.reduce((longest, current) => current.length > longest.length ? current : longest, "");
    document.getElementById("longestName").innerText = longestName;
}

// Exercise 15
function findNamesStartingWith() {
    const letter = document.getElementById("letterInput").value;
    const filteredNames = names.filter(name => name.startsWith(letter));
    document.getElementById("namesStartingWith").innerText = filteredNames.join(", ");
}

// Exercise 16
function convertNamesToUppercase() {
    const uppercaseNames = names.map(name => name.toUpperCase());
    document.getElementById("uppercaseNames").innerText = uppercaseNames.join(", ");
}

// Exercise 17
function removeName() {
    const nameToRemove = document.getElementById("removeNameInput").value;
    const index = names.indexOf(nameToRemove);
    if (index !== -1) {
        names.splice(index, 1);
        document.getElementById("removedNameResult").innerText = `${nameToRemove} removed.`;
    } else {
        document.getElementById("removedNameResult").innerText = "Name not found.";
    }
}

// Exercise 18
function countNamesWithA() {
    const count = names.filter(name => name.includes("a")).length;
    document.getElementById("countWithA").innerText = count;
}

// Exercise 19
function concatenateNames() {
    const concatenated = names.join(", ");
    document.getElementById("concatenatedNames").innerText = concatenated;
}

// Exercise 20
function reverseNames() {
    const reversed = [...names].reverse();
    document.getElementById("reversedNamesList").innerText = reversed.join(", ");
}

// Exercise 21
function createPersonObject() {
    const person = {
        name: "John Doe",
        age: 30,
        profession: "Software Developer"
    };
    document.getElementById("personObject").innerText = JSON.stringify(person);
}

// Exercise 22
function formatPersonInfo() {
    const person = { name: "Jane Doe", age: 25, profession: "Designer" };
    const formatted = `${person.name}, Age: ${person.age}, Profession: ${person.profession}`;
    document.getElementById("formattedInfo").innerText = formatted;
}

// Exercise 23
function addProperty() {
    const person = { name: "John", age: 30 };
    person.city = "New York";
    document.getElementById("newPropertyResult").innerText = JSON.stringify(person);
}

// Exercise 24
function removeProperty() {
    const person = { name: "John", age: 30, city: "New York" };
    delete person.city;
    document.getElementById("removedPropertyResult").innerText = JSON.stringify(person);
}

// Exercise 25
function listProperties() {
    const person = { name: "John", age: 30, city: "New York" };
    const properties = Object.entries(person).map(([key, value]) => `${key}: ${value}`);
    document.getElementById("propertiesList").innerText = properties.join(", ");
}

// Exercise 26
function mergeObjects() {
    const object1 = { a: 1, b: 2 };
    const object2 = { b: 3, c: 4 };
    const merged = { ...object1, ...object2 };
    document.getElementById("mergedObject").innerText = JSON.stringify(merged);
}

// Exercise 27
function getObjectKeys() {
    const person = { name: "John", age: 30, city: "New York" };
    const keys = Object.keys(person);
    document.getElementById("objectKeys").innerText = keys.join(", ");
}

// Exercise 28
function getObjectValues() {
    const person = { name: "John", age: 30, city: "New York" };
    const values = Object.values(person);
    document.getElementById("objectValues").innerText = values.join(", ");
}

// Exercise 29
function checkObjectProperty() {
    const person = { name: "John", age: 30 };
    const propertyToCheck = document.getElementById("propertyCheckInput").value;
    const exists = person.hasOwnProperty(propertyToCheck);
    document.getElementById("propertyCheckResult").innerText = exists ? "Property exists" : "Property does not exist";
}

// Exercise 30
function copyObject() {
    const person = { name: "John", age: 30 };
    const copiedPerson = { ...person };
    document.getElementById("copiedObject").innerText = JSON.stringify(copiedPerson);
}

// Exercise 31
function deepCopyObject() {
    const person = { name: "John", age: 30, address: { city: "New York" } };
    const deepCopied = JSON.parse(JSON.stringify(person));
    document.getElementById("deepCopiedObject").innerText = JSON.stringify(deepCopied);
}

// Exercise 32
function createCarsArray() {
    const carList = cars.map(car => car.model);
    document.getElementById("carsArray").innerText = carList.join(", ");
}

// Exercise 33
function findCar() {
    const modelToFind = document.getElementById("carSearchInput").value;
    const foundCar = cars.find(car => car.model === modelToFind);
    document.getElementById("foundCar").innerText = foundCar ? JSON.stringify(foundCar) : "Car not found.";
}

// Exercise 34
function getCarModels() {
    const carModels = cars.map(car => car.model);
    document.getElementById("carModelsList").innerText = carModels.join(", ");
}

// Exercise 35
function filterCars() {
    const filteredCars = cars.filter(car => car.price < 30000);
    document.getElementById("filteredCars").innerText = filteredCars.map(car => car.model).join(", ");
}

// Exercise 36
function sortCars() {
    const sortedCars = [...cars].sort((a, b) => a.price - b.price);
    document.getElementById("sortedCars").innerText = sortedCars.map(car => `${car.model} - $${car.price}`).join(", ");
}

// Exercise 37
function averageCarPrice() {
    const total = cars.reduce((acc, car) => acc + car.price, 0);
    const average = total / cars.length;
    document.getElementById("averageCarPrice").innerText = average;
}

// Exercise 38
function findMostExpensiveCar() {
    const mostExpensive = cars.reduce((prev, current) => (prev.price > current.price) ? prev : current);
    document.getElementById("mostExpensiveCar").innerText = JSON.stringify(mostExpensive);
}

// Exercise 39
function countCarsByManufacturer() {
    const counts = cars.reduce((acc, car) => {
        acc[car.manufacturer] = (acc[car.manufacturer] || 0) + 1;
        return acc;
    }, {});
    document.getElementById("countByManufacturer").innerText = JSON.stringify(counts);
}

// Exercise 40
function groupCarsByManufacturer() {
    const grouped = cars.reduce((acc, car) => {
        if (!acc[car.manufacturer]) {
            acc[car.manufacturer] = [];
        }
        acc[car.manufacturer].push(car);
        return acc;
    }, {});
    document.getElementById("groupedCars").innerText = JSON.stringify(grouped);
}

// Exercise 41
function addNewCar() {
    const newCarModel = document.getElementById("newCarInput").value;
    const newCar = { id: cars.length + 1, model: newCarModel, price: 30000, manufacturer: "Unknown" };
    cars.push(newCar);
    document.getElementById("newCarResult").innerText = `${newCarModel} added.`;
}

// Exercise 42
function removeCar() {
    const modelToRemove = document.getElementById("removeCarInput").value;
    const index = cars.findIndex(car => car.model === modelToRemove);
    if (index !== -1) {
        const removedCar = cars.splice(index, 1);
        document.getElementById("removedCarResult").innerText = `${removedCar[0].model} removed.`;
    } else {
        document.getElementById("removedCarResult").innerText = "Car not found.";
    }
}

// Exercise 43
function updateCar() {
    const modelToUpdate = document.getElementById("updateCarInput").value;
    const carToUpdate = cars.find(car => car.model === modelToUpdate);
    if (carToUpdate) {
        carToUpdate.price += 5000; // Example update
        document.getElementById("updatedCarResult").innerText = `${carToUpdate.model} updated.`;
    } else {
        document.getElementById("updatedCarResult").innerText = "Car not found.";
    }
}

// Exercise 44
function listAllCarDetails() {
    const details = cars.map(car => `${car.model} - $${car.price} - ${car.manufacturer}`).join(", ");
    document.getElementById("allCarDetails").innerText = details;
}

// Exercise 45
function findCarById() {
    const idToFind = parseInt(document.getElementById("carIdInput").value);
    const foundCar = cars.find(car => car.id === idToFind);
    document.getElementById("foundCarById").innerText = foundCar ? JSON.stringify(foundCar) : "Car not found.";
}

// Exercise 46
function checkIfCarsAreEqual() {
    const car1Model = document.getElementById("car1Input").value;
    const car2Model = document.getElementById("car2Input").value;
    const car1 = cars.find(car => car.model === car1Model);
    const car2 = cars.find(car => car.model === car2Model);
    const isEqual = car1 && car2 && JSON.stringify(car1) === JSON.stringify(car2);
    document.getElementById("carEqualityResult").innerText = isEqual ? "Cars are equal." : "Cars are not equal.";
}

// Exercise 47
function listUniqueManufacturers() {
    const uniqueManufacturers = [...new Set(cars.map(car => car.manufacturer))];
    document.getElementById("uniqueManufacturers").innerText = uniqueManufacturers.join(", ");
}

// Exercise 48
function checkIfCarExists() {
    const modelToCheck = document.getElementById("specificCarInput").value;
    const exists = cars.some(car => car.model === modelToCheck);
    document.getElementById("carExistenceResult").innerText = exists ? "Car exists" : "Car does not exist.";
}

// Exercise 49
function countTotalCars() {
    const count = cars.length;
    document.getElementById("totalCarsCount").innerText = count;
}

// Exercise 50
function filterCarsByPrice() {
    const priceLimit = parseFloat(document.getElementById("priceInput").value);
    const carsBelowPrice = cars.filter(car => car.price < priceLimit);
    document.getElementById("carsBelowPrice").innerText = carsBelowPrice.map(car => car.model).join(", ");
}
