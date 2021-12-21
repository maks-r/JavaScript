/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/


function getObject(num) {
    return {
        единицы: parseInt(num % 10),
        десятки: parseInt(num / 10) % 10,
        сотни: parseInt(num / 100),
    }
}


var num = prompt('Введите число от 0 до 999');
if (num < 1000) {
    console.log(getObject(num));
}
else
    console.log('Введено число больше 999!!!');
