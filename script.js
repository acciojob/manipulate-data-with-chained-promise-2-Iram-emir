function manipulateArray() {
    // Initial Promise that resolves after 3 seconds with the array [1, 2, 3, 4]
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
                document.getElementById("output").innerText = evenNumbers.join(",");
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        // Second transformation: Multiply even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                document.getElementById("output").innerText = multipliedNumbers.join(",");
                resolve(multipliedNumbers);
            }, 2000);
        });
    });
}

// Call the function when the page loads
manipulateArray();
