function fib() {
    // Some variables here
    let i = 0;
    let j = 1;
    function nacci() {
      // do something to those variables here
      const temp = i;   
      console.log(j);
      i = j;
      j += temp;
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"  