// Question 1

function falsyOrTruthy (one, two){
    return (!one) ? one : two
}

console.log(falsyOrTruthy(false, 500))

// Question 2

function arrLength (arr){
    return  arr.length
}

console.log(arrLength([1, 2, 3]))

// Question 3

function lastElement (arr){
    return  arr[arr.length - 1]
}

console.log(lastElement([1, 2, 11]))

// Question 4

function arraySum (arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}

console.log(arraySum([100, 200, 500]))

// Question 5

function progressiveSum (num){
    let sum = 0
    for (let i = 0; i <= num; i++){
        sum = sum + i
    }
    return sum
}

console.log(progressiveSum(4))

// Question 6

function calcTime (num){
    let minutes =  Math.floor (num / 60)
    let seconds = num % 60

    if (minutes.toString().length === 1){
        minutes = "0" + minutes
    }

    return minutes + ':' + seconds
}

console.log(calcTime(70))

// Question 7

function getMax (arr){
    let max = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    
    return max
}

console.log(getMax([2, 100, 0]))

// Question 8

function reverseString (str){
    let reversedString = '';
    for (let i = 0; i < str.length; ++i){
    reversedString = str[i] + reversedString
    }
    
    return reversedString
}

console.log(reverseString('abc'))

// Decrementing For Loop

// let reversedString = '';
//     for (let i = str.length - 1; i >= 0; --i){
//     reversedString += str[i]
//     }
    
//     return reversedString

// Array Reverse Property

// return str.split('').reverse().join('')

// Question 9

function convertTo0(arr){
    return arr.fill (0)
}

console.log(convertTo0([2, 100, 0, 200]))

// For Loop

// let newArr = []
// for (let i = 0; i < arr.length; ++i){
//     newArr[i] = 0
// }

// return newArr

// Map Method

// arr.map(arr => 0)

// Question 10

function removeApples (arr){
    let noApples = []
    for (let i = 0; i < arr.length; ++i){
        if (arr[i] !== 'apple'){
            noApples.push(arr[i])
        }
    }
    return noApples
}

console.log(removeApples(['banana', 'apple', 'orange', 'apple']))

// Filter Method

// return arr.filter(arr => arr !== 'apple')

// Question 11

function filterOutFalsy (arr){
    return arr.filter(elem => !!elem === true)
}

console.log(filterOutFalsy(["tomato", "orange", "banana", false, null, 0, undefined]))

// For Loop

// let truthyArr = []
// for (let i =0; i < arr.length; ++i){
//     if (!!arr[i] === true){
//         truthyArr.push(arr[i])
//     }
//     return truthyArr
// }

// Question 12

function truthyToTrue(arr){
    return arr.map(elem => !!elem)
}

console.log(truthyToTrue([500, 0, 'shivom', '', []]))

// function truthyLoop(arr){
//     let falsyLoop = []
//     for(let i= 0; i < arr.length; ++i){
//         falsyLoop [i] = 
//     }
//     return falsyLoop
// }

// console.log(truthyLoop([500, 0, 'shivom', '', []]))