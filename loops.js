function forLoop(array) {
  for(i=0;i<33;i++) {
      array[i] = `I am ${i} strange loop${i===0?'':'s'}.`;
  }  
  
  return array;
}



function whileLoop(n) {
  while (n>0) {
    console.log(--n);
    
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while(array.length>0 && maybeTrue());
}