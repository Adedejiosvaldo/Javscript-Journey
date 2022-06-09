let getTip = function (amount, tipPercent = .2) {
	let result = amount * tipPercent
	return `A ${tipPercent} Tip of ${amount} is ${result}`
}

result = getTip(100)
console.log(result)

result2 = getTip(500,.5)
console.log(result2)