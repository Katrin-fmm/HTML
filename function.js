 
console.log("Hello")
 alert ("Данная функция принимает на вход целые числа. Для чётных значений функция возвращает стрелочное выражение возведения в квадрат, а для нечётных - стрелочное выражение возведения в куб!");
  
 const a = Number(prompt('Введите число'));

 const powerFunction = (a) => {
    if(a % 2 === 0) {
    return a**2;
    } 
    else {
    return a**3;
    }
  }
  console.log(powerFunction(a));
  if(a%2==0) {alert("Число " + a + " чётное, квадрат данного числа равен " + powerFunction(a) + "!");}
  else {alert("Число " + a + " нечётное, куб данного числа равен " + powerFunction(a) + "!");}