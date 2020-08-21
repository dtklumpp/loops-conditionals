console.log('hello milo');
// const catName = prompt("Enter cat name");
// alert("Hello "+catName+"!");

const displayArray = [];

// Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.

for(let i = 1; i<21; i++){
    displayArray.push(i);
}
console.log(displayArray);

// Get Even
// 2. Write a for loop that will log only the even numbers in 0 through 200.


const array2 = [];
for(let i = 0; i<=200; i+=2){
    displayArray.push(i);
}
console.log(displayArray);


// // Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

console.log("Love me, pet me! HSSSSSSS!".repeat(20));



