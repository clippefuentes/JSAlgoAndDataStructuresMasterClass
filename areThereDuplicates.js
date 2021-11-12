function areThereDuplicates() {
	const args = [...arguments];
	const argsCounter = {};

	for (let arg of args) {
		if(argsCounter[arg]) {
			return true;
		} else {
			argsCounter[arg] = 1;
		}
	}
	return false;
}