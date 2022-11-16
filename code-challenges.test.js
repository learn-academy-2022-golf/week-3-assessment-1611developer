// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacci", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
    const expectedOutput1 = [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    const expectedOutput2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacci(fibLength1)).toEqual(expectedOutput1)
    expect(fibonacci(fibLength2)).toEqual(expectedOutput2)
  })
})

//ReferenceError: fibonacci is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// b) Create the function that makes the test pass.

// Input: number
// Output: array of numbers

// Create a function that takes in a number as a parameter
// Create if/then statement.
// In the else statement, create a for loop
// Return Array
// I honestly have no idea how to do this. I have been trying the logic for two hours. I still don't get it. This is probably simpler than what I am thinking it is.


// const fibLength1 = 6
// const fibLength2 = 10

const fibonacci = (number) => {
  let newArray = [0, 1]
    if (number <= 1) {
      return "pick a number greater 1"
  } else {
      for (let i = 1; i < number; i++) {
        newArray.push(newArray[i] + newArray[i - 1])
      }
  } return newArray
}

// Fail:
//expect(received).toEqual(expected) // deep equality
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total




// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }
// // Expected output: [15, 15, 20, 30, 30, 60, 90]

// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }
// // Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("mySorter", () => {
  it("returns an array of the values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    const expectedOutput1 = [15, 15, 20, 30, 30, 60, 90]
    
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    const expectedOutput2 = [10, 15, 20, 45, 60, 65, 100]
    expect(mySorter(studyMinutesWeek1)).toEqual(expectedOutput1)
    expect(mySorter(studyMinutesWeek2)).toEqual(expectedOutput2)
  })
})

// ReferenceError: mySorter is not defined
// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 2 total

// b) Create the function that makes the test pass.

// Input: an object
// Output: an array

// Create a function that takes in an object as the parameter.
// Create a new variable to hold the new array list sorted from least to greatest.
  // Use Object.values() method and pass in object as parameter.
    // Chain .sort() method to Object.values() method
      // The .sort() method is made to work with strings. Since we are dealing with numbers, we will need to make the .sort() method setup for sorting numbers. You do that by passing in the function (a, b) => a - b  in the .sort() method.
// Return the new array.

const mySorter = (object) => {
  let newArray = Object.values(object).sort((a, b) => a - b)
  return newArray
}

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// const accountTransactions1 = [100, -17, -23, -9]
// // Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96]
// // Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// // Expected output: []

describe("accum", () => {
  it("returns an array of the accumulating sum", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    const expectedOutput1 = [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    const expectedOutput2 = [250, 161, 261, 165]
    const accountTransactions3 = []
    const expectedOutput3 = []
    expect(accum(accountTransactions1)).toEqual(expectedOutput1)
    expect(accum(accountTransactions2)).toEqual(expectedOutput2)
    expect(accum(accountTransactions3)).toEqual(expectedOutput3)
  })
})

// ReferenceError: accum is not defined


// b) Create the function that makes the test pass.


// I again spent hours trying this one. I can't figure out the logic. Brain hurts. I have been able to add up all of the items in the array together but not one by one and adding the sum and putting it into a new array.

// Input: array
// Output: array

// Create a function that takes in an array as parameter
// Use for loop to iterate over array
// Return sums of indexes added together 

// const accum = (array) => {
//   //return array.map((value) => value[i] + value)
//   let sum = []
//   for(let i = 0; i < array.length; i++) {
//     sum.push(array[i] + sum)
//     //sum = sum + array[i]
//   }
//   return sum
// }

const accum = (array) => {
  const newArray = []
  let first = newArray.push(array[0])
  let second = newArray.push(array[0] + array[1]) 
  let third = newArray.push(array[0] + array[1] + array[2])
  let fourth = newArray.push(array[0] + array[1] + array[2] + array[3])
  return newArray
}
// This only works for the first two variables, but not the variable that is empty.

// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 1 passed, 3 total
// expect(received).toEqual(expected) // deep equality