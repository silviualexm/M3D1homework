/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const sumOf = function (x, y) {
    if (x === y) {
        let total = (x + y)*3
        console.log(total)
        return total
    } else {
        let total = (x + y)
        console.log(total)
        return total
    }

}
//sumOf (5, 5)
/*

2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const checkIf = function (x, y) {
    if ((x === 50) || (y ===50) || (x + y === 50)) {
        let isTrue = true
        console.log(isTrue)
        return isTrue
    } else {
        let isTrue = false
        console.log(isTrue)
        return isTrue
    }
}
//checkIf(2, 5)

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeChar = function (strg, index) {
let newStr = strg.replace(strg[index], "")
console.log(newStr)
}
//removeChar("abc", 1)

/*

4)
 Create a function to find the largest of three given integers.
*/

const maxOf = function (x, y, z) {
    let big = Math.max(x, y, z)
    console.log(big)
    return big
}
//maxOf(2, 5, 7)

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const check = function (x, y) {
    if (((x>=40)&&(x<=60))&&((y>=40)&&(y<=60))){
        console.log("The numbers are in range 40...60 inclusive")

    } else if (((x>=70)&&(x<=100))&&((y>=70)&&(y<=100))) {
        console.log("The numbers are in range 70...100 inclusive")
    } else {
        console.log("The numbers are not in range 40...60 or in range 70...100 inclusive")
    }
}
//check(41, 52)

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

const xerox = function (str, x) {
    let newString = str.repeat(x)
    console.log(newString)
}
xerox("abcd", 4)

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const displayIf = function (city) {

    if ((city.split(" ")[0] === "Los") ||  (city.split(" ")[0] === "New")) {
        console.log(city)
    } else {
        return []
    }
}
//displayIf("Los Angeles")

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

11)

Create a function to find the longest string from a given array of strings.

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/