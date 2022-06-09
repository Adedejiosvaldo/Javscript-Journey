let myAccount = {
	name : "Joseph Adewunmi",
	income: 0,
	expenses: 0,
	balance: 0
}

let addExpense = function(account,amount){
	account.expenses = account.expenses + amount
	return `The cost of your coffe was ${amount},Hence total expenses are ${account.expenses}`
}

let addIncome = function (account,income){
	account.income =  income
	return `Your income is ${account.income}`

}

let getAccountSummary = function(account){
 	account.balance = account.income - account.expenses
	return `Your income is ${account.balance}`
}

let resetAccount = function(account){
	return{
	name : "Joseph Adewunmi",
	income: 0,
	expenses: 0,
	balance: 0
	}
}

console.log(myAccount)

let loadAddIncome = addIncome(myAccount,20000)
console.log(loadAddIncome)

let loadAccountExpenses = addExpense(myAccount,200)
console.log(loadAccountExpenses)

let loadAccountExpenes = addExpense(myAccount,200)
console.log(loadAccountExpenses)

let fullAccountSummart = getAccountSummary(myAccount)
console.log(fullAccountSummart)

console.log(myAccount)

let resetAccountToNothing = resetAccount(myAccount)
console.log(resetAccountToNothing)

