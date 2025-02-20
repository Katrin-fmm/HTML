// 1.Напишите функцию, производящую сортировку в массиве студентов
// по средней оценке. Метод должен реализовывать сортировку Шелла.

class Mark{
    constructor(subject,mark){
        this.subject = subject;
        this.mark = mark;
    }
}

class Student{
    constructor(lastName,firstName,marks){
        this.lastName = lastName;
        this.firstName = firstName;
        this.marks = marks;
    }

    printInfo(){
        console.log("Студент: " + this.lastName + " " + this.firstName);
        console.log("Оценки:");
        for (let i = 0; i < this.marks.length; i++) {
            const mark = this.marks[i];
            console.log(mark.subject + ":  " + mark.mark);
        }
      }

  //Метод для получения средней оценки
  getaverageMark(){
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
     sum += this.marks[i].mark;
    }
    return sum/this.marks.length;
  }
}


// Сортировка Шелла
 function ShellSort(array){
    // Идея метода Шелла состоит в сравнении элементов, стоящих не только рядом, 
    // но и на определённом расстоянии друг от друга. 2 Первоначально это расстояние равняется N/2, где N — общее число компонентов.
    // Постепенно уменьшается до 1.


    let gap = Math.floor(array.length/2);
    while (gap>0) {
        for (let i = gap; i < array.length; i++){
            let j = i;
            let currentStudent = array[i];

            // Пока не достигнуто начало массива и предыдущий элемент больше текущего
            while(j >= gap && array[j - gap].getaverageMark() > currentStudent.getaverageMark()){
                array[j] = array[j - gap]; // Перемещаем элемент на правильное место
                j -= gap;
            }
            array[j] = currentStudent;
        }
        gap = Math.floor(gap/2);
    }
    return array;
}

  

const students = [
    new Student("Иванов", "Матвей", [
        new Mark("Алгебра", 3),
        new Mark("Геометрия", 3),
        new Mark("Физика", 3),
        new Mark("Мат.анализ", 3),
        new Mark("История", 3)
      ]),
      new Student("Корнейчева", "Анастасия", [
        new Mark("Алгебра", 4),
        new Mark("История", 4),
        new Mark("Физика", 4),
        new Mark("Мат.анализ", 4),
        new Mark("Геометрия", 4)
      ]),
      new Student("Самойлов", "Максим", [
        new Mark("История", 5),
        new Mark("Алгебра", 5),
        new Mark("Геометрия", 5),
        new Mark("Мат.анализ", 5),
        new Mark("Геометрия", 5)
      ]),
      new Student("Петрова", "Ксюша", [
        new Mark("История", 2),
        new Mark("Мат.анализ", 2),
        new Mark("Физика", 2),
        new Mark("Алгебра", 2),
        new Mark("Геометрия", 2)
      ]),

      new Student("Солдатова", "Варвара", [
        new Mark("Алгебра", 5),
        new Mark("Мат.анализ", 4),
        new Mark("Физика", 3),
        new Mark("Геометрия", 5),
        new Mark("История", 2)
      ]),


];
console.log(students);


const sortedStudents = ShellSort(students);
console.log(sortedStudents);


