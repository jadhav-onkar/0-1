// Q1 create counter 30 to o
/*
let counter = 30

function count(){
    if (counter < 0){
        clearInterval(myInterval)
    }else{
        console.clear()
        console.log(counter)
        counter = counter-1
    }
    
}
myInterval = setInterval(count, 1000);
*/

// Q2 calculate time time between settimout and inner function actually runnning 
/*
let startTime = performance.now()
setTimeout(sum, 2000)

function sum() {
    let endTIme = performance.now()
    a = 4;
    b = 8;
    console.log(a+b , "::  time between setTImeout and inner function is :: " , endTIme - startTime);
  }
    */
    /*
  let st = performance.now()
  sum = 0
  for(let i=0; i<=1000; i++){
    sum = sum + i
  }
  console.log(sum)
  let et = performance.now()
  console.log(st)
  console.log(et)
  console.log(et-st)

  */


// Q3. create a terminal clock

sec = 50;
min = 59;
hr = 23;

function clock() { 
    console.clear()
    sec = sec+1;
    if (sec == 60){
        sec = 0;
        min = min + 1;
    }
    if (min == 60){
        min = 0;
        hr = hr+1;
    }
    if (hr == 24){
        hr = 0
    }
    console.log(hr,":",min,":",sec)

 }
 let mytimeInterval = setInterval(clock, 1000)


             