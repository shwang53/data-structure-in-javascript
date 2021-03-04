

//new Map
let temp = new Map();
let arr = [1,2,3,4]
console.log(temp);
// temp.set("key", "value");
// temp.set("name", "Suk Min");
temp["key"] = "value";
temp["name"] = "Suk Min";
console.log(temp.get("key"));
console.log(temp);

for (let [key, value] of arr.entries()) {
    console.log(key);
    console.log(value);
    // console.log(value);
}

for (let key in temp) {
    console.log(key);
    console.log(temp[key]);
    // console.log(value);
}


console.log([...temp.keys()]);

const random = (n) => {
    if (n === 1) {
        return;
    } else {
        return 3;
    }
}

console.log(random(1));

console.log(undefined == null)


// let t1 = null;
// let t2 = 3;

const func = () => {
    let t1 = null;
    let t2 = 3;
    return Math.pow( (t1 || t2), 3);
}

console.log(func());


let arr2 = []
arr2.splice(7,0, 4)
arr2.splice(7,0, 5)
arr2.splice(6,0, 1)
console.log(arr2);
console.log(arr2.length)