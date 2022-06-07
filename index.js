// Code your solution in this file!

// declare a function named distanceTravelledInFeet
// define it to accept two parameters, start and destination

function distanceTravelledInFeet(start, destination) {
  // calculate distance travelled in feet between start and destination
  // determine number of blocks travelled
  let blocksTravelled = Math.abs(start - destination);
  let feetTravelled = blocksTravelled * 264;
  return feetTravelled;
}

// declare function accepting 2 parameters
function calculatesFarePrice(start, destination) {
  // calculate the distance travelled in feet
  let feetTravelled = distanceTravelledInFeet(start, destination);
  console.log(feetTravelled);
  // if the distance travelled in feet is less than 400 we want to return 0
  // if the distance is between 400 feet and 2000 multiply feet travelled by .02 - don't include the first 400 feet, those are free
  // if distance travelled is more than 2000 but less than 2500 return 25
  // if distance is over 2500 feet no ride
  if (feetTravelled < 400) {
    return 0;
  } else if (feetTravelled < 2000) {
    return (feetTravelled - 400) * 0.02;
  } else if (feetTravelled < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

calculatesFarePrice;

function distanceFromHqInBlocks(blockNumber) {
  // let blockNumber = 43
  // let blockNumber = 50
  // let blockNumber = 34
  let hq = 42;
  return Math.abs(blockNumber - hq);
  // return Math.abs(blockNumber - 42)
  //   return !!(blockNumber - hq);
  //   if (blockNumber >= hq) {
  //     return blockNumber - hq;
  //   } else {
  //     return hq - blockNumber;
  //   }
}

function distanceFromHqInFeet(blockNumber) {
  // let blockNumber = 43
  // let blockNumber = 50
  // let blockNumber = 34
  //   let hq = 42;
  //   let distanceInBlocks = Math.abs(blockNumber - hq);
  return distanceFromHqInBlocks(blockNumber) * 264;
  // return 1 * 264
  // return 8 * 264
  // return 8 * 264
}

// function declaration
function greeting(name) {
  // let name = "Current"
  // let name = "Marcus"
  console.log(`Hello ${name}`);
}

//invoking function
greeting("Current");
greeting("Marcus");
greeting("Spencer");
greeting;

distanceFromHqInBlocks("Nick");
