// class Clock {
// //   constructor() {
// //     // 1. Create a Date object.
// //     let date = new Date();
// //     // 2. Store the hours, minutes, and seconds.
// //     this.hours = date.getHours();
// //     this.minutes = date.getMinutes();
// //     this.seconds = date.getSeconds();
// //     // 3. Call printTime.
// //     this.printTime();
// //     // 4. Schedule the tick at 1 second intervals.
// //     this._tick();
// //   }



// //   printTime() {
// //     // Format the time in HH:MM:SS
// //     let time = `${this.hours}:${this.minutes}:${this.seconds}`;
// //     // Use console.log to print it.
// //     console.log(time);
// //   };

// //   _tick() {
// //     // 1. Increment the time by one second.
// //     // 2. Call printTime.
// //   setTimeout(() => {
// //       this.seconds += 1;
// //       if (this.seconds === 60){
// //         this.seconds = 0;
// //         this.minutes += 1;
// //         if (this.minutes === 60) {
// //           this.minutes = 0;
// //           this.hours += 1
// //           if (this.hours === 24) {
// //             this.hours = 1;
// //           };
// //         };
// //       };
    
// //       this.printTime();
// //       this._tick();
// //     } , 1000);}
// // }


// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback) {
//   if (numsLeft === 0) {
//     completionCallback(sum);
//   };
//   if (numsLeft > 0) {
//     const response = rl.question('Type a number', num => {
//       sum += parseInt(num);
//       console.log(sum);
//       addNumbers(sum, numsLeft - 1, completionCallback);
//     });
//   };
// }

// // addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// //absurdBubbleSort

// function askIfGreaterThan(el1, el2, callback) {
//   const response = rl.question(`Is ${el1} greater than ${el2}? Type 'yes' or 'no'. `, ans => {
//     if (ans === "yes") {
//       callback(true);
//     } else {
//       callback(false);
//     }
//   });
// };

// // askIfGreaterThan(7,6, (el) => console.log(el));

// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//   if (i < arr.length - 1) {
//     askIfGreaterThan(arr[i], arr[i+1], (bool) => {
//       if (bool) {
//         let arr_swap = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = arr_swap;
//         // arr[i], arr[i+1] = arr[i+1], arr[i];
//         madeAnySwaps = true;
//       }
//       innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
//     });
//   }
//   if (i == (arr.length -1)) {
//     outerBubbleSortLoop(madeAnySwaps);
//     // rl.close();
//   }
// }

// // innerBubbleSortLoop([2,1,3], 0, false, () => console.log('In outer bubble sort'))

// function absurdBubbleSort(arr, sortCompletionCallback) {
//   function outerBubbleSortLoop(madeAnySwaps) {
//     if (madeAnySwaps) {
//       innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
//     } else {
//       sortCompletionCallback(arr);
//     };
//   }

//   outerBubbleSortLoop(true);

// }



// const readline = require("readline");

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Write this first.
// function askIfGreaterThan(el1, el2, callback) {
//   // Prompt user to tell us whether el1 > el2; pass true back to the
//   // callback if true; else false.
// }

// // Once you're done testing askIfGreaterThan with dummy arguments, write this.
// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//   // Do an "async loop":
//   // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
//   //    know whether any swap was made.
//   // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
//   //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
//   //    continue the inner loop. You'll want to increment i for the
//   //    next call, and possibly switch madeAnySwaps if you did swap.
// }

// // Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// // Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

// function absurdBubbleSort(arr, sortCompletionCallback) {
//   function outerBubbleSortLoop(madeAnySwaps) {
//     // Begin an inner loop if you made any swaps. Otherwise, call
//     // `sortCompletionCallback`.
//   }

//   // Kick the first outer loop off, starting `madeAnySwaps` as true.
// }

// absurdBubbleSort([3, 2, 1], function(arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   rl.close();
// });


// Function.prototype.myBind = function(context) {
//   return () => {
//     this.apply(context);
//   }
// };


// class Lamp {
//   constructor() {
//     this.name = "a lamp";
//   }
// }

// const turnOn = function() {
//   console.log("Turning on " + this.name);
// };

// const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

/////////////// my Throttle

// Function.prototype.myThrottle = function(interval) {
//   let tooSoon = false;
//   return (...args) => {

//     if (!tooSoon) {

//       tooSoon = true;

//       setTimeout( () => {
//         tooSoon = false;
//       }, interval );

//       this(...args);
//     }
//   }
// }

// class Neuron {
//   constructor() {
//     this.fire = this.fire.myThrottle(500);
//   }

//   fire(str) {
//     console.log(`Firing! ${str}`);
//   }
// }

Function.prototype.myDebounce = function(interval) {
  let timerStarted = false;
  let timerFinished = false;

  return (...args) => {

    
    if (timerFinished) {
      setTimeout(() => {
        if (timerFinished) {
          this(...args);
        }
        timerFinished = true;
      }, interval)
    } else {
      timerFinished = true;
    }
  }
}


class SearchBar {
  constructor() {
    this.query = "";

    this.type = this.type.bind(this);
    this.search = this.search.bind(this);
  }

  type(letter) {
    this.query += letter;
    this.search();
  }

  search() {
    console.log(`searching for ${this.query}`);
  }
}


const searchBar = new SearchBar();

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
};


searchBar.search = searchBar.search.myDebounce(5);
queryForHelloWorld();
