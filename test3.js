// Library 1: firstLetterToLower
function firstLetterToLower(name) {
    return name.charAt(0).toLowerCase(); // Fixed the function to return lowercase.
}

// Library 2: displayGreeting
function displayGreeting(name) {
    var firstLetter = firstLetterToLower(name); // Calling the function from Library 1
    if (firstLetter === 'j') {
        console.log("Goodbye " + name);
    } else {
        console.log("Hello " + name);
    }
}

// Array of names
var names = ["John", "Jane", "Jim", "Alice", "Bob"];

// Loop over the names
for (var i = 0; i < names.length; i++) {
    // Get the current name
    var name = names[i];

    // Check if the first letter is 'j'
    if (firstLetterToLower(name) === 'j') {
        // Print "Goodbye" for names starting with 'j'
        console.log("Goodbye " + name);
    } else {
        // Print "Hello" for names starting with any other letter
        console.log("Hello " + name);
    }
}

// Test the function
displayGreeting("John");
