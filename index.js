function flatten(arr){
	return arr.reduce(function(accumulator, currentVal){
		if(Array.isArray(currentVal)){
			return accumulator.concat(flatten(currentVal));
		}
		return accumulator.concat(currentVal);
	}, []);
}
