let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату и время в формате YYYY-MM-DD: ');

let obligatioryExpenses = prompt('Введите обязательную статью расходов в этом месяце: ');
let howMuch = prompt('Во сколько обойдется?');

let appData = {
	budget: money,
	yourTime: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,

};

appData.expenses[obligatioryExpenses] = howMuch;

alert(appData.budget / 30);