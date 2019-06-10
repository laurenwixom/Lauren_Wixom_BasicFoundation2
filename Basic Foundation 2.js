//1

function biggiesize(arr){
for (var i=0;i<arr.length;i++){
if(arr[i] > 0){
      arr[i] = 'big';
    }
  }
return arr;
}
var x = [-1,3,5,-5];
console.log(biggiesize(x));












//2
function printLowReturnHigh(x){
var lowest = x[0];
var highest = x[0];
for (var i=0;i<x.length;i++){
if (x[i] < lowest){
      lowest = x[i];
    }
if (x[i] > highest){
      highest = x[i]
    }
  }
console.log(lowest);
return highest;
}
var y = [-4, -7, 3, 6];
console.log(printLowReturnHigh(y));






//3
function printAndReturn(x){
console.log(x[x.length-2]);
for (var i=0;i<x.length;i++){
if(x[i] % 2 !==0){
return x[i];
    }
  }
}
var z = [13,50,8,9,100,1];
console.log(printAndReturn(z));







//4
function double(x){
for (var i=0;i<x.length;i++){
    x[i] = x[i]*2;
  }
return x;
}
var x = [1,2,3];
console.log(double(x));



//5
function countPositives(x){
var sum=0;
for (var i=0;i<x.length;i++){
if (x[i] > 0){
      sum++;
    }
  }
  x[x.length-1] = sum;
return x;
}
var x = [-1,1,1,1];
console.log(countPositives(x));






//6
function evenAndOdd(x){
for(var i=0;i<x.length;i++){
if(x[i] % 2 !==0){
if(x[i+1] % 2 !==0){
if(x[i+2] % 2 !==0){
console.log("That's odd!");
        }
      }
    }
if(x[i] % 2 == 0){
if(x[i+1] % 2 == 0){
if(x[i+2] % 2 == 0){
console.log("Even more so!");
        }
      }
    }
  }
}
var x = [0,1,2,3];
evenAndOdd(x);






//7
function incrementSeconds(x){
for (var i=0;i<x.length;i++){
if(i % 2 !==0){
      x[i] = x[i] + 1; 
    }
console.log(x[i]);
  }
return x;
}
var x = [0,4,2,6,-1,-3];
console.log(incrementSeconds(x));



//8
function previousLengths(x){
for (var i=x.length-1;i>0;i--){
	  x[i] = x[i-1].length;
  }
return x;
}
var x = ["hello","dojo","awesome"];
console.log(previousLengths(x));


//9
function addSeven(x){
var newx = [];
for(var i=1;i<x.length;i++){
newx.push(x[i]+7);
  }
return newx;
}
var y = [4,9,1,12];
console.log(addSeven(y));




//10
function reverse(x){
for (var i=0;i<x.length/2;i++){
var temp = x[i];
    x[i] =  x[x.length-1 - i]; 
    x[x.length-1 - i] = temp;
  }
return x;
}
var x = [2,4,6,1,3];
console.log(reverse(x));






//11
function allNegative(x){
var newx = [];
for (var i=0;i<x.length;i++){
newx.push(-Math.abs(x[i]));
    }
return newx;
}
var y = [1,-3,5];
console.log(allNegative(y));







//12
function alwaysHungry(x){
var sum = 0;
for (var i=0;i<x.length;i++){
if (x[i] == "food"){
console.log("yummy");
    }
else{
      sum++;
    }
  }
if(sum == x.length){
console.log("I'm hungry");
  }
}
var x = [1,2,4,6];
var y = [1, "food", 1, "food"];
alwaysHungry(x);
alwaysHungry(y);












//13
var x = [true,42,"Ada",2,"pizza"];
var y = [1,2,3,4,5,6];
function swapTowardCenter(x){
var temp = x[0]; 
  x[0] = x[x.length-1];
  arr[arr.length-1] = temp;
var temp2 = arr[2];
  x[2] = xx[.length-3];
  x[x.length-3] = temp2;
return x;
}
console.log(swapTowardCenter(x));
console.log(swapTowardCenter(y));













//14
function scaleArray(x,y){
for (var i=0;i<x.length;i++){
    x[i] = x[i]*num;
  }
return arr;
}
var x = [1,2,3];
var y = 3;
console.log(scaleArray(x,number));