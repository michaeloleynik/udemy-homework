let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату и время в формате YYYY-MM-DD: ');

let obligatioryExpenses1 = prompt('Введите обязательную статью расходов в этом месяце: ');
    howMuch1 = prompt('Во сколько обойдется?'),
    obligatioryExpenses2 = prompt('Введите обязательную статью расходов в этом месяце: '),
    howMuch2 = prompt('Во сколько обойдется?');

let appData = {
	budget: money,
	yourTime: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,

};

appData.expenses[obligatioryExpenses1] = howMuch1;
appData.expenses[obligatioryExpenses2] = howMuch2;

alert(appData.budget / 30);
