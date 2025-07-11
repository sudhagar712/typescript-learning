let counterValue = 0 ;

function increment() {
  counterValue++
}

function currentValue() {
    return counterValue
}


increment()//1
increment()//2
increment()//3
increment()//4

console.log(counterValue)  