module.exports = function toReadable(number) {
	const oneDigitNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const secondDeсadeNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const decades = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	const numberStr = String(number);

	if (numberStr.length === 1) {
		const result = oneDigitNumbers[number];
		return result;
	}
	else if (numberStr.length === 2) {
		if (numberStr[0] === '1') {
			const result = secondDeсadeNumbers[Number(numberStr[1])];
			return result;
		}
		else if(numberStr[0] === '0'){
			return (numberStr[1] > 0) ? toReadable(numberStr[1]) : '';
		}
		else {
			const decad = decades[Number(numberStr[0] - 2)];
			const ones = (numberStr[1] > 0) ? ' '+ toReadable(numberStr[1]) : '';
			return decad + ones;
		}
	}
	else if (numberStr.length === 3) {
		const hundreds = toReadable(numberStr[0]) + ' hundred ';
		const other = toReadable(numberStr.substring(1));
		return (hundreds+other).trim();
	}

}

