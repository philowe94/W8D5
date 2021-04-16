// class Clock {
//   constructor() {
//     // 1. Create a Date object.
//     let date = new Date();
//     // 2. Store the hours, minutes, and seconds.
//     this.hours = date.getHours();
//     this.minutes = date.getMinutes();
//     this.seconds = date.getSeconds();
//     // 3. Call printTime.
//     this.printTime();
//     // 4. Schedule the tick at 1 second intervals.
//     this._tick();
//   }



//   printTime() {
//     // Format the time in HH:MM:SS
//     let time = `${this.hours}:${this.minutes}:${this.seconds}`;
//     // Use console.log to print it.
//     console.log(time);
//   };

//   _tick() {
//     // 1. Increment the time by one second.
//     // 2. Call printTime.
//   setTimeout(() => {
//       this.seconds += 1;
//       if (this.seconds === 60){
//         this.seconds = 0;
//         this.minutes += 1;
//         if (this.minutes === 60) {
//           this.minutes = 0;
//           this.hours += 1
//           if (this.hours === 24) {
//             this.hours = 1;
//           };
//         };
//       };
    
//       this.printTime();
//       this._tick();
//     } , 1000);}
// }


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
  };
  if (numsLeft > 0) {
    const response = rl.question('Type a number', num => {
      sum += parseInt(num);
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  };
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

//absurdBubbleSort

function askIfGreaterThan(el1, el2, callback) {
  const response = rl.question(`Is ${el1} greater than ${el2}? Type 'yes' or 'no'. `, ans => {
    if (ans === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
};

// askIfGreaterThan(7,6, (el) => console.log(el));

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], (bool) => {
      if (bool) {
        arr[i], arr[i+1] = arr[i+1], arr[i];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
    });
  }
  if (i == (arr.length -1)) {
    outerBubbleSortLoop(madeAnySwaps);
    rl.close();
  }
}

innerBubbleSortLoop([2,1,3], 0, false, () => console.log('In outer bubble sort'))

function absurdBubbleSort(arr, sortCompletionCallback) {

}