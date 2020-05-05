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

let spending = prompt("Введите обязательную статью расходов в этом месяце", ""),
   amount = +prompt("Во сколько обойдется?", "");


appData.expenses[spending] = amount;

console.log(appData.budget / 30);