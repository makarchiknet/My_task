'use strict';

let money, time;

function start() {
   money = +prompt("Ваш бюджет на месяц?", "");
   time = prompt("Введите дату в формате YYYY-MM-DD", "");

   while (isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", "");
   }
}
start();

const appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false
};


function chooseExpenses() {
   for (let i = 0; i < 2; i++) {
      let spending = prompt("Введите обязательную статью расходов в этом месяце", ""),
         amount = prompt("Во сколько обойдется?", "");

      if ((typeof (spending)) != null && (typeof (amount)) != null && spending != "" && amount != "" && spending.length < 50) {
         console.log("good!");
         appData.expenses[spending] = +amount;

      } else {
         console.log("error!");
         i--;
      }
   }
}
chooseExpenses();


function detectDayBudget() {
   appData.moneyPerDay = Math.round(appData.budget / 30);
   console.log(appData.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
   if (appData.moneyPerDay < 600) {
      console.log("Минимальный доход");
   } else if (appData.moneyPerDay >= 600 && appData.moneyPerDay < 1500) {
      console.log("Средний доход");
   } else if (appData.moneyPerDay >= 1500) {
      console.log("Высокий доход");
   } else {
      console.log("Ошибка!");
   }
}
detectLevel();


function checkSavings() {
   if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?", "");
      while (isNaN(save) || save == "" || save == null) {
         save = +prompt("Какова сумма накоплений?", "");
      }

      let percent = +prompt("Какие проценты по кредиту?", "");
      while (isNaN(percent) || percent == "" || percent == null) {
         percent = +prompt("Какие проценты по кредиту?", "");
      }

      appData.monthIncome = +(save / 100 / 12 * percent).toFixed(2);
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
   }

}
checkSavings();

function chooseOptExpenses() {
   for (let i = 0; i < 3; i++) {
      let optExpenses = prompt("Статья необязательных расходов?", "");
      if (typeof (optExpenses) != null && optExpenses != "") {
         appData.optionalExpenses[i + 1] = optExpenses;
      } else {
         i--;
      }
   }
}
chooseOptExpenses();

console.log(appData);