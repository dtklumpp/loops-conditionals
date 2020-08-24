console.log('hello milo');
// const catName = prompt("Enter cat name");
// alert("Hello "+catName+"!");

//note: to keep everything compact in the console, i display
//the output in arrays, not with many individual console.logs
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





//part 7 RETURN OF THE CLOSETS

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

let kristynShoe = kristynsCloset.splice(0,1);
thomsCloset[2].push(kristynShoe[0]);
//logit(thomsCloset);

logit("Kristyn is wearing "+kristynsCloset[0]+", "+kristynsCloset[2]+", and "+kristynsCloset[5]+".");
logit("Thom is wearing "+thomsCloset[0][1]+", "+thomsCloset[1][2]+", and "+thomsCloset[2][3]+".");





//part 8 DIRTY LAUNDRY INVENTORY

for(let i = 0; i<kristynsCloset.length; i++){
    logit("WHIRR: Now washing "+kristynsCloset[i]);
}
for(let i = 0; i<thomsCloset.length; i++){
    logit(thomsCloset[i]);
}





//part 9 MULTIPLES OF 3 AND 5

sumArray = [];
for(let i = 1; i < 1000; i++){
    if(i%5===0){
        sumArray.push(i);
    }
    else if(i%3===0){
        sumArray.push(i);
    }
}
let sumVar = 0;
for(let i = 0; i < sumArray.length; i++){
    sumVar += sumArray[i];
}
logit("problem 9 solution");
logit(sumVar);

//logit(sumArray);









//note: 11pm Sun -- see bottom note in function HW on Hungry probs

//Triangles: basically the same as the chessboard problem
//but without as tricky logic, really
//straightforward double loop?

//Median: gonna sort and take the Math.floor(length/2) element
//ok actually i'll write this one just so i'm not 100% lazy...

const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18,12, 17, 12, 71, 18, 15, 12];

logit("Median Output");
const findMedian = function(array1) {
    array1.sort();
    output1 = array1[Math.floor(array1.length/2)];
    return output1;
}
logit(findMedian(nums));
//logit(nums.sort());
