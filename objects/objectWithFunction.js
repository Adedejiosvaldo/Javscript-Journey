let temp = function (frah){
	let celcuisResult = (frah - 32 ) * 5 / 9
	let kelvinResult = (frah - 32 ) * 5 / 9 + 273


	return {
		Fraheniet : `The temp in frah is ${frah} F`,
		celcuis:`Temp in celcius is ${celcuisResult}`,
		kelvin: `Temp in kelvin is ${kelvinResult}`,
	}
}

let celcuisOutput = temp(30)
console.log(celcuisOutput.Fraheniet)
console.log(celcuisOutput.celcuis)
console.log(celcuisOutput.kelvin)

