// Code your solution in this file!

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
