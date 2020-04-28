let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату и время в формате YYYY-MM-DD: ', '');

let appData = {
	budget: money,
	yourTime: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,

};

let i = 0;

for (let i = 0; i < 2; i++) {
	let obligatioryExpenses = prompt('Введите обязательную статью расходов в этом месяце: ', ''),
        howMuch = prompt('Во сколько обойдется?', '');

    

    if (typeof(obligatioryExpenses) === 'string' &&
       typeof(obligatioryExpenses) !== null &&
       obligatioryExpenses.length > 0 && 
       obligatioryExpenses.length < 50 && 
       typeof(howMuch) === 'string' &&
       typeof(howMuch) !== null &&
       howMuch.length > 0 && 
       howMuch.length < 50) {

    	alert('sucsessful!');

    	appData.expenses[obligatioryExpenses] = howMuch;

    } else {
    	alert('bad result');

    	i--;
    }
};

/*
while (i < 2) {
	if (typeof(obligatioryExpenses) === 'string' &&
       typeof(obligatioryExpenses) !== null &&
       obligatioryExpenses.length > 0 && 
       obligatioryExpenses.length < 50 && 
       typeof(howMuch) === 'string' &&
       typeof(howMuch) !== null &&
       howMuch.length > 0 && 
       howMuch.length < 50) {

    	alert('sucsessful!');

    	appData.expenses[obligatioryExpenses] = howMuch;

    } else {
    	alert('bad result');
    	
    	i--;
    }

	i++;
}

do {
	if (typeof(obligatioryExpenses) === 'string' &&
       typeof(obligatioryExpenses) !== null &&
       obligatioryExpenses.length > 0 && 
       obligatioryExpenses.length < 50 && 
       typeof(howMuch) === 'string' &&
       typeof(howMuch) !== null &&
       howMuch.length > 0 && 
       howMuch.length < 50) {

    	alert('sucsessful!');

    	appData.expenses[obligatioryExpenses] = howMuch;

    } else {
    	alert('bad result');
    	
    	i--;
    }

	i++;
} while (i < 2);
*/

appData.moneyPerDay = appData.budget / 30;

alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}
