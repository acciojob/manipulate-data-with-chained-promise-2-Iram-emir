//your JS code here. If required.
function manipulateArray() {
    const outputDiv = document.getElementById("output");
    
    // Initial Promise with a 3-second delay
    new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then((arr) => {
        // First transformation: Filter out odd numbers
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = arr.filter(num => num % 2 === 0);
                outputDiv.textContent = evenNumbers.join(", ");
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        // Second transformation: Multiply even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                outputDiv.textContent = multipliedNumbers.join(", ");
                resolve(multipliedNumbers);
            }, 2000);
        });
    });
}


document.addEventListener("DOMContentLoaded", manipulateArray);
