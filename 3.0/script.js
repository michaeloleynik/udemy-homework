let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату и время в формате YYYY-MM-DD: ', '');
let optExpenses;

let appData = {
	budget: money,
	yourTime: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,

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

function detectDayBudget() { // функция для расчёта бюджета на 1 день
  return appData.moneyPerDay = appData.budget / 30;
}

alert ("Бюджет на 1 день составляет " + detectDayBudget() + "руб.");

function detectLevel() { // функция для расчёта уровня достатка
  if (appData.moneyPerDay < 100) {
      console.log ("Это минимальный уровень достатка!");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log ("Это средний уровень достатка!");
  } else if (appData.moneyPerDay > 2000) {
      console.log ("Это высокий уровень достатка!");
  } else {
      console.log ("Произошла ошибка");
  }
}

detectLevel();

function checkSavings() { // функция для расчёта накоплений под %
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
          percent = +prompt("Под какой процент?");

      appData.monthIncome = save / 100 / 12 * percent;

      alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() { // функция для определения необязательных расходов
  for (let i = 1; i < 4; i++) {
    optExpenses = prompt('Статья необязательных расходов? ', '');
    appData.optionalExpenses[i] = optExpenses;
  }
}

chooseOptExpenses();






