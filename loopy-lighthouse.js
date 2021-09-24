
//BEST ANSWER FOR FIZZ BUZZ PROBLEM
var x = 100; // always need to give a starting value to work with
while (x <=200){ // state a while loop when the problem needs to log multiple things at once
  if( x % 3 === 0 && x % 4 === 0 ) { // if statement to set different conditionals 
    console.log("LoopyLighthouse");
  } else if( x % 3 === 0 ) {
    console.log("Loopy");
  } else if( x % 4 === 0 ) {
    console.log("Lighthouse");
  } else {
    console.log(x)
  }
  x++ // increment the number at the end of the while loop
}​

