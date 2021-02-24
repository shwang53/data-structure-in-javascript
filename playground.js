

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
    