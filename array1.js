
//Напишите функцию, принимающую на вход массив вещественных
//чисел и возвращающую количество элементов, неравных своему
//предыдущему.


function Poick(arr){
    pred = arr[0];
    kol=0;
    for (let i=1; i<arr.length; i++){
        if (arr[i] != pred) {kol += 1;}
        pred = arr[i];
    }
    return kol;
}
arr = [0,0,1,1,1,1,2,3]
console.log(Poick(arr));

arr = [1,2,3,4,4,5,5,5]
console.log(Poick(arr));

arr = [5, 7, 7, 9, 2, 4, 6, 6, 6, 7, 7, 7, 9]
console.log(Poick(arr));