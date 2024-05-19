# js-for-react-11316325

//task 1
The code function takes an array(original array) and creates a new a array of the same length as the original array
using the map function. the new array is formed by raising the power of the even numbers(in the original array) to two
and odd numbers are multiplied by three(tripling)


//task 2
 The formatArrString function  takes two arguments(stingArr and numArr)
 the map function is used to create a new array of the same length.
 the callback function checks if the corresponding number in numArr is even or odd
 using %.
 it returns a string in uppercase using toUpperCase method if  the number is even.
 it returns a string in lowercase using toLowerCase method if  the number is odd.

 //task 3
 The createUserProfiles function takes two arrays as arguments: names and modifiedNames.
 It uses the map method to create a new array with the same length as the original arrays.
 Inside the callback function, it returns an object with three properties:
 originalName: the original name from the names array.
 modifiedName: the modified name from the modifiedNames array.
 id: an auto-incremented ID starting from 1, using the id++ expression.
