// // Right Triangle Pattern:
// // Write a program to print a right-angled triangle pattern using asterisks. 
// // For example, if the height is 5, the pattern should look like this:
// // *
// // **
// // ***
// // ****
// // *****

// var height = 5;
// for (let i = 1; i <= height; i++){
//     let asterisks = '';
//     for(let j=1;j<=i;j++) {
//         asterisks += '* ';
//         }
//         console.log(asterisks);
// }

// // Inverted Right Triangle Pattern:
// // Create an inverted right-angled triangle pattern using asterisks. For example, if the height is 4, the pattern should look like this:
// // ****
// // ***
// // **
// // *

// var height = 4;
// for (let i = height; i >= 0; i--){
//     let asterisks = '';
//     for (let j = 1; j <= i ; j++){
//         asterisks = asterisks + '* ';
//     }
//     console.log(asterisks);
// }

// // Pyramid Pattern:
// // Write a program to print a pyramid pattern using asterisks. 
// // For example, if the height is 4, the pattern should look like this:
// // *
// // ***

// var height = 4;
// for (let i = 1; i < height; i++){
//     if (i = 2){
//         continue;
//     }else{
//     let asterisks = '';
//     for (let j = 1; j <= i; j++){
//         asterisks += '*';
//     }
// }
//     console.log(asterisks);
// }


// // 7. **Number Triangle:**
// // Print a number triangle pattern where each row contains numbers in ascending order. For example, if the height is 4, the pattern should look like this:
// // 1
// // 12
// // 123
// // 1234

// function numberTriangle(height) {
//     for (let i = 1; i <= height; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) {
//             row += j;
//         }
//         console.log(row);
//     }
// }

// // Specify the height of the number triangle
// numberTriangle(7);



// // 8. **Alphabetic Pattern:**
// // Print an alphabetic pattern where each row contains letters of the alphabet. For example, if the height is 3, the pattern should look like this:
// // A
// // AB
// // ABC

// function patternAlphabetic (height){
//    for (let i = 1; i <= height; i++){
//     let alphabets = '';
//     for (let j = 1; j <= i; j++){
//         alphabets += String.fromCharCode(64 + j);
//     }
//     console.log(alphabets);
//    }
// }
// patternAlphabetic(10);