/*

Part #1 logic:

input: none
output: reading all the data (starting from zero index)
---

	Ex1 ()
		results <- []
		index <- 0

		loop starts from page 0 up to the last page:
			results <- attached the page[index] results
			index inc

			if page[index] results < 5
				exit loop

		return results

*/

const Ex1 = () => {
	const results = [];
	let index = 0;

	let keep_searching = true
	while (keep_searching) {
		let temp = getData(index);
		results.push(temp);
		index++;

		if (temp.length < 5)
			keep_searching = false;
		
	}
	return results;
}



const getData = (index) => {
	const array = [["1", "2", "3", "4", "5"],
	["+", "-", "/", "*", "**"], ["Yes", "NO", "Blue", "Green"]];

	return array[index];
}


console.log(Ex1())
