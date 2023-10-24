/*
1. Напишите скрипт, который считает количество секунд в часе.
 */
const secondsInMinute = 60;
const minutesInHour = 60;
const secondsInHour = secondsInMinute * minutesInHour;
console.log(secondsInHour);
/*
2. Создайте три переменные - час, минута, секунда.
С их помощью выведите текущее время в формате 'час:минута:секунда'.
*/
const date = new Date();
const hour = date.getHours();
const minutes  = date.getMinutes();
const seconds = date.getSeconds();
console.log(`${hour+':'}${minutes+':'}${seconds}`);
/*
3. В переменной day лежит какое-то число из интервала от 1 до 31.
 Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
*/
const day= +prompt("Введите число из интервала от 1 до 31");

if(day>=1 && day<=10){
    console.log("Первая декада");
} else if(day>=10 && day<=20)
{
    console.log("Вторая декада");
} else if(day>=20 && day<=31) {
    console.log("Третья декада");
}
/*
В переменной month лежит какое-то число из интервала от 1 до 12.
 Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
*/
const month = +prompt("Введите число месяца: ");
if(month===1 || month===2 || month===12){
    console.log("Зима");
} else if(month===3 || month===4 || month===5){
    console.log("Весна");
}else if(month===6 || month===7 || month===8){
    console.log("Лето");
}else if(month===9 || month===10 || month===11){
    console.log("Осень");
}