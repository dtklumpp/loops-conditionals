console.log('hello milo');
// const catName = prompt("Enter cat name");
// alert("Hello "+catName+"!");

const displayArray = [];

const logit = function(input1){
    console.log(input1);
}

// Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.

for(let i = 1; i<21; i++){
    displayArray.push(i);
}
console.log("Part 1 Solution");
console.log(displayArray);






// Get Even
// 2. Write a for loop that will log only the even numbers in 0 through 200.


displayArray.splice(0, displayArray.length);
for(let i = 0; i<=200; i+=2){
    displayArray.push(i);
}
console.log("Part 2 Solution");
console.log(displayArray);








// // Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

//part1
//console.log("Love me, pet me! HSSSSSSS!".repeat(20));

//part2
//agh gotta make a real loop now

displayArray.splice(0, displayArray.length);
dispray = displayArray; //need a shorter name for this...

//outputs random integer between 0 and n
const randInt = function (n) {
    output = Math.floor(Math.random()*(n+1));
    return output;
}

for(let i = 1; i<=20; i++){
    dispray.push("Love me, pet me! HSSSSSSS!");
    if(i%2===0){
        //decide whether to display each string
        x = randInt(1);
        y = randInt(1);
        z = randInt(1);
        //display each string if xyz var is 1
        if(x){dispray.push("...human...why you taking pictures of me?...");}
        if(y){dispray.push("...the catnip made me do it...");}
        if(z){dispray.push("...why does the red dot always get away...");}
    }
}
console.log("Part 3 Solution");
console.log(dispray);
//hmm, this pushes a lot of ""s to display.....
//ok now fixed





// FIZZ BUZZ the beginning!

dispray.splice(0,dispray.length);

for(let i = 1; i<=100; i++){
    if(i%15===0){
        dispray.push("FizzBuzz");
    }
    else if(i%5===0){
        dispray.push("Buzz");
    }
    else if(i%3===0){
        dispray.push("Fizz");
    }
    else {
        dispray.push(i);
    }
}
logit("Fizz Buzz!");
logit(dispray);



//GETTING TO KNOW YOU

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = 'Gameboy';
jimClark[1]++;
//or
jimClark[1] = jimClark[1] + 1;
ryan[2] = "Gotham City";
reuben.pop();
reuben.push("Chicago");
jimHaff.pop();
jimHaff.push(2,3,5);
jimHaff.splice(2,1);

logit("no requested output for part 6");



// YELL AT THE NINJA TURTLES
const turtles = ["Leonardo", "Donatello", "Raphael", "Michaelangelo"]
for(let i = 0; i<turtles.length; i++){
    turtles[i] = turtles[i].toUpperCase();
}
//part 7
logit(turtles);

//turtle bonus
for(let i = 0; i<turtles.length; i++){
    turtarray = turtles[i].split("");
    for(let j = 0; j<turtarray.length;j++){
        if(j%2===0){
            turtarray[j] = turtarray[j].toLowerCase();
        }
    }
    turtles[i] = turtarray.join("");
}
logit(turtles);








