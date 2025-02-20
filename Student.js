// 1. Реализуйте функцию для поиска в двух заданных массивах 
// элементов, которые присутствуют в обоих массивах. Используйте Set. 

function findelement(arr1,arr2){
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const res = new Set();
    for (const i of set1) { 
        if (set2.has(i)) {res.add(i);} }
 
    return res;
}

arr1 = [1,2,3,4,1,1,5,7];
arr2 = [1,2,5,6];
console.log("Одинаковые элементы:");
console.log(findelement(arr1,arr2));

//2. Реализуйте функцию, которая подсчитывает количество вхождений каждого элемента в массиве. Используйте Map. 

function Kolvo(arr){
    const map = new Map();
    for (const item of arr) {
     
       if (!map.has(item)) {map.set(item, 1);}
        else {map.set(item, map.get(item) + 1);} 
    }
    return map;
    } 


    
arr = [1,2,3,4,1,1,2,2,3,6,5];
console.log("Количество вхождений каждого элемента:");
console.log(Kolvo(arr));


//3. В массиве студентов подсчитать число обучающихся в самой большой группе. Номер группы – свойство класса Student типа string.

class Student{
    constructor(name, group){
        this.name = name;
        this.group = group;
    }
}



function biggroup(students){
    const map = new Map();
    for (const item of students){
        const group = item.group;
        if (!map.has(group)) {map.set(group, 1);}
        else {map.set(group, map.get(group) + 1);} 
    }
    

let maxgroup = null;
let maxkey = null;

for (const [value, key] of map) {
    if (maxkey<key) {maxkey=key; maxgroup=value}
  }
  return maxkey;
}

const students = [
    st1 = new Student('Ivan','4501'),
    st2 = new Student('Kate','4341'),
    st3 = new Student('Darina','4341'),
    st4 = new Student('Viktoria','4443'),
    st5 = new Student('Max','4341'),
    st6 = new Student('Vlad','4235'),
];


console.log("Количество человек в самой большой группе:");
console.log(biggroup(students));

