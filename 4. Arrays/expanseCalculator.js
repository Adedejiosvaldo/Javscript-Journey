const account = {
    name: "Joseph",
    expense : [],
    addExpenses : function(description,amount){
        (this.expense.push({Discription:description,
             amount : amount}))
    },
    accountSummary: function(){
        let totalExpenses = 0
        this.expense.forEach(function (expense){
        totalExpenses = totalExpenses + expense.amount
        })
        return totalExpenses
    }
}

account.addExpenses("coffee",20)
account.addExpenses("coffee",20)
account.addExpenses("date",20)

console.log(account.accountSummary())
//console.log(outPut)