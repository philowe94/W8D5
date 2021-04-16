class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    this._tick();
  }



  printTime() {
    // Format the time in HH:MM:SS
    let time = `${this.hours}:${this.minutes}:${this.seconds}`;
    // Use console.log to print it.
    console.log(time);
  };

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
  setTimeout(() => {
      this.seconds += 1;
      if (this.seconds === 60){
        this.seconds = 0;
        this.minutes += 1;
        if (this.minutes === 60) {
          this.minutes = 0;
          this.hours += 1
          if (this.hours === 24) {
            this.hours = 1;
          };
        };
      };
    
      this.printTime();
      this._tick();
    } , 1000);}
}


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
  }
  if (numsLeft > 0) {
    const response = rl.question('Type a number', num => {
      sum += parseInt('num');
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    })
  }




  // let partialSum = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   console.log(partialSum);
  //   partialSum += nums[i]
  // }
  // return partialSum;
}
