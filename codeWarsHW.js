// -----------------CODEWARS----------------------------------//
//  -- question 1 --
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]
// loop over each value
// multiply each value x2
// return the result


const doubledArr = (array) => {
    const newArray = []
    // for (let i = 0; i < array i++) {
    //     const doubled = array[i] * 2
    //     array.push(doubled)

    array.forEach((num) => {
        const newNum = num * 2
        newArray.push(newNum)
    })
    return newArray 
}


console.log(doubledArr([1, 2, 3]))

//  -- question 2 --
// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// split the string into words (works just like python)
// reverse the order of the words
// join words back into string
// return new reversed string 

const reverseWords = (string) => {
    const words = string.split(' ')
    // does work like python
    const reverse = words.reverse()
    const reversedString = reverse.join(' ')

    return reversedString
}

//  testString = "The greatest victory is that which requires no battle"
console.log(reverseWords("The greatest victory is that which requires no battle"))
console.log(reverseWords("I'm hella hungry mane, im done now lets eat some beans!"))