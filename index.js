// Code your solutions in this file


function writeCards(theirArray) {
    let myArray = [];
    let counter = 0;
    theirArray.forEach(element => {
        myArray[counter] = `Thank you, ${element}, for the wonderful surprise gift!`;
        counter++;
    });
    return myArray;

}

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);

    }


}


/*
const names = (["Guadalupe", "Ollie", "Aki"], "surprise");

function writeCards(names, event) {
    return names.map(names => `Thank you, ${names}, for the wonderful ${event} gift!`)
}

console.log(writeCards(names, "birthday"))




// you write comments in JavaScript with two forward slashes
// i is the integer parameter of your countdown function
// i is passed to countdown when called, i.e. countdown(9)
function countDown(i) {
    // this is an ret string variable that is private to the countdown function
    // you can't access ret from outside of this function
    var ret = "";

    // your loop should include 0 according to your requirements
    while (i >= 0) {
        // here you are appending i to your ret string which you'll return at the end of this function      
        ret += i;// += is a short hand form of saying ret = ret + i

        // you want to append an empty space for every i except the last one (0)
        if (i > 0) {
            ret += " ";
        }
        i--;    // here you are decrementing i
    }
    return ret;
}
// here you are making the actual call to the function with integer 5 
// you are assigning the returned value of your function call to result variable
var result = countDown(10);

// here you are printing your result string variable to the log
console.log(result);
*/


/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); */ 