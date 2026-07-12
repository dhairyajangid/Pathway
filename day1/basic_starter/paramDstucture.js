
const arr = [2,4,6,3];
let count = 0;
const fun = (...param) =>{
    let mark = 0;
    let valuet = param;
    for(const num of arr){
        mark += num * valuet;
        count++;
    }
    return mark;
}


console.log(fun(10));
console.log(count);

const obj = {
    value: 134,
    value2: 234,
    value3: 345
};

console.log(fun(...Object.values(obj)));

//When you call fun(obj), JavaScript looks inside obj for a property named exactly param.
// Because your object only has keys named value, value2, and value3, it will not find a key named param.Therefore,
//  param becomes undefined, and your math will result in NaN. It does not look at 134, 234, or 345 at all.