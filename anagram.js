function validAnagram(arr1, arr2){
	if(arr1.length !== arr2.length) {
		return false;		
	};
	let letterCounter1 = {};
	let letterCounter2 = {};
	for(let letter of arr1) {
		letterCounter1[letter] = (letterCounter1[letter]  || 0) + 1;
	}
	for(let letter of arr2) {
		letterCounter2[letter] = (letterCounter2[letter]  || 0) + 1;
	}

	console.log(letterCounter1);
	console.log(letterCounter2);
	for(let key in letterCounter1) {
		if(letterCounter1[key] !== letterCounter2[key]){
			return false;
		}
	}

	return true;
}