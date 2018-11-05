function convert() {
	const rom_reg = /[IVXLCDM]/g;
	const dec_reg = /[0-9]/g;
	let res = "";
	let date = document.getElementById("date-data").value.toUpperCase();
	if (rom_reg.test(date))
		res = "Date in decimal numbers:<br>" + RomanNumerals.fromRoman(date);
	else if (dec_reg.test(date)) {
		if (date >= 6000 || date < 0) res = "Wrong input!";
		else res = "Date in roman numerals:<br>" + RomanNumerals.toRoman(date);
	} else res = "Wrong input!";
	document.getElementById("response").innerHTML = res;
}

const RomanNumerals = {
	toRoman: function(year) {
		const numeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
		const roman = [
			"M",
			"CM",
			"D",
			"CD",
			"C",
			"XC",
			"L",
			"XL",
			"X",
			"IX",
			"V",
			"IV",
			"I"
		];

		let roman_year = "";

		for (let i = 0; i < numeral.length; i++) {
			while (numeral[i] <= year) {
				roman_year += roman[i];
				year -= numeral[i];
			}
		}
		return roman_year;
	},

	fromRoman: function(year) {
		let conv = [];
		year.split("").map(value => {
			if (value === "I") conv.push(1);
			else if (value === "V") conv.push(5);
			else if (value === "X") conv.push(10);
			else if (value === "L") conv.push(50);
			else if (value === "C") conv.push(100);
			else if (value === "D") conv.push(500);
			else if (value === "M") conv.push(1000);
		});
		let sum = 0;
		conv.reduce(function(prev, cur, arr, index) {
			if (prev < cur) sum -= prev;
			else sum += prev;
			return cur;
		});
		sum += conv[conv.length - 1];
		return sum;
	}
};
