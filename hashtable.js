
//Implementing hashtable in javascript

const hashStringToInt = (str, tableSize) => {
	let hash = 13;
	for (let i = 0; i < str.length; i++) {
		hash = hash * str.charCodeAt(0) % tableSize;
	}
	return hash;
}



class HashTable {
	table = new Array (3);
	numItems = 0;
	

	resize = () => {
		const newTable = new Array(this.table.length * 2);
		this.table.forEach(item => {
			if(item) {
				item.forEach(([key, value]) => {
					const idx = hashStringToInt(key, newTable.length);
					if (newTable[idx]) {
						newTable[idx].push([key, value]);
					} else {
						newTable[idx] = [[key, value]];
					}
				});
			}
		});
		this.table = newTable;
	};

	setItem = (key, value) => {
		this.numItems++;
		const loadFactor = this.numItems / this.table.length;

		if (loadFactor > 0.8) {
			this.resize();
		}
		const idx = hashStringToInt(key, this.table.length);
		if (this.table[idx]) {
			this.table[idx].push([key, value]);
		} else {
			this.table[idx] = [[key, value]];
		}
	}

	getItem = (key) => {
		const idx = hashStringToInt(key, this.table.length);
		return this.table[idx].find(x => x[0] === key)[1];
	}

}

const myTable = new HashTable ();
myTable.setItem("ln","hwang");
console.log(myTable.table.length);
myTable.setItem("fn","suk min");
console.log(myTable.table.length);
myTable.setItem("age",5);
console.log(myTable.table.length);
myTable.setItem("dob","07/16");
console.log(myTable.table.length);
myTable.setItem("random","dum dum");
console.log(myTable.table.length);


console.log(myTable.table);
console.log(myTable.table.length);
console.log(myTable.table);
console.log(myTable.getItem("ln"));
console.log(myTable.getItem("fn"));
console.log(myTable.getItem("age"));
console.log(myTable.getItem("dob"));
console.log(myTable.getItem("random"));

