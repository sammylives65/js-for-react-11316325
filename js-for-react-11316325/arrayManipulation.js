num =
function processArray(num){
    return arr.map(num => {
    if (typeof num == 'number') {
        return num % 2 ===0? num**2 :num * 3;
    }
    })
}

const numbers = [1,2,3,4];
const processednumbers = processArray(numbers);
console.log(processedNumbers);