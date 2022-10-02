// let fName = "Majid"
// localStorage.setItem("fName",fName)
// let lName = "Ali"
// localStorage.setItem("lName",lName)
// let age = 223;
// let country = "Pakistan"
// let city = "Chishtian"
// localStorage.setItem("age",age)
// localStorage.setItem("city",city)
// localStorage.setItem("country",country)

// let student = {
//     first_name:"Majid",
//     last_name:"Ali",
//     age:20,
//     skills:["HTML","CSS","Bootstrap","JavaScript"],
//     country:"Pakistan"
// };
// localStorage.setItem("student",JSON.stringify(student))

// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

// let personAccount = {
//     first_name:"Majid",
//     last_name:"Ali",
//     incomes:[2000,5000,1000],
//     expenses:9000,

//     totalIncom(){
//         let finalIncom = 0;
//         for(let a of this.incomes){
//             finalIncom += this.incomes[a];
//         }
//         // return (`The net income is ${2000+5000+1000}`)
//         // return finalIncom;
//         console.log(finalIncom)
//     },
//     totalExpense(){
//         return (`The total expense is ${9000}`)
//     },
//     accountInfo(){
//         return (`${this.first_name} ${this.last_name} has massive income ${this.incomes} and his expenses are ${this.expenses}`)
//     },
//     addIncome(x){
//         this.incomes.push(x)
//     },
//     addExpense(y){
//         this.expenses = this.expenses + y
//     }

// }
// personAccount.addExpense(3000);
// // personAccount.addIncome(5000);

// localStorage.setItem("personAccount",JSON.stringify(personAccount))