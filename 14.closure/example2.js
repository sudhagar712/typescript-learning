function createCounter() {
    var countValue = 0;
    return {
        increment: function () {
            countValue++;
        },
        getValue: function () {
            return countValue;
        }
    };
}
var counter1 = createCounter();
var counter2 = createCounter();
counter1.increment();
counter1.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
console.log(counter1.getValue(), "COUNTER1");
console.log(counter2.getValue(), "COUNTER2");
