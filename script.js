'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
   time = prompt("Введите дату в формате YYYY-MM-DD", "");

const appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false
};



for (let i = 0; i < 2; i++) {
   let spending = prompt("Введите обязательную статью расходов в этом месяце", ""),
      amount = prompt("Во сколько обойдется?", "");
   console.log(spending);
   console.log(amount);

   if ((typeof (spending)) != null && (typeof (amount)) != null && spending != "" && amount != "" && spending.length < 50) {
      console.log("good!");
      appData.expenses[spending] = amount;

   } else {
      console.log("error!");
      i--;
   }
}

appData.moneyPerDay = appData.budget / 30;
console.log(appData);


// let i = 0;
// while (i < 2) {
//    let spending = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       amount = prompt("Во сколько обойдется?", "");
//    console.log(spending);
//    console.log(amount);

//    if ((typeof (spending)) != null && (typeof (amount)) != null && spending != "" && amount != "" && spending.length < 50) {
//       appData.expenses[spending] = amount;
//       console.log("good!");

//    } else {
//       console.log("error!");
//       i--;
//    }
//    i++;
// }




// let i = 0;
// do {
//    let spending = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       amount = prompt("Во сколько обойдется?", "");
//    console.log(spending);
//    console.log(amount);

//    if ((typeof (spending)) != null && (typeof (amount)) != null && spending != "" && amount != "" && spending.length < 50) {
//       appData.expenses[spending] = amount;
//       console.log("good!");

//    } else {
//       console.log("error!");
//       i--;
//    }
//    i++;

// }
// while (i < 2);

