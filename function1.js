const student1 = {
    lastName: 'Иванов',
    firstName: 'Иван',
    marks: [
      { subject: 'Математика', mark: 5 },
      { subject: 'Русский язык', mark: 4 },
      { subject: 'Литература', mark: 3 },
      { subject: 'Физика', mark: 5 },
    ]
  };
  
  // Функция для вывода информации о студенте в консоль
  function printStudentInfo(student) {
    console.log("Студент: " + student.lastName + " " + student.firstName);
    console.log('Оценки:');
    for (let i = 0; i < student.marks.length; i++) {
      const mark = student.marks[i];
      console.log(mark.subject + ": " + mark.mark);
    }
  }
  
  // Вызываем функцию для вывода информации
  printStudentInfo(student1);

  console.log("");

  //2 ЗАДАНИЕ

  class Mark {
    constructor(subject, mark) {
      this.subject = subject;
      this.mark = mark;
    }
  }

  class Student {
    constructor(lastName, firstName, marks) {
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
  

//   // Метод для получения всех оценок по конкретному предмету

getallMarks(name) {
  let arr = []
  for (let i = 0; i < this.marks.length; i++) {
   const mark = this.marks[i];
   if (mark.subject ===name)
    arr.push (this.marks[i].mark)
   }
   return arr;
 }

  
 
 // Метод для добавления новой оценки
   addMark(subject, mark) {
    const newMark = new Mark(subject,mark);
    this.marks.push(newMark);
   }
  

  // // Метод для удаления всех оценок по определенному предмету

  deleteMark (name) {
    for (let i = 0; i < this.marks.length; i++) {
      if (this.marks[i].subject === name)
      delete this.marks[i];
  }
  this.marks=this.marks.filter(Boolean);
  }
}

const marks = [
  new Mark("Математика", 5),
  new Mark("Русский язык", 5),
  new Mark("Литература", 4),
  new Mark("Физика", 3),
  new Mark("Математика", 4),
  new Mark("Математика", 5)
];
   const student = new Student('Богданов', 'Егор', marks);
   student.printInfo();
   console.log("Средняя оценка: " + student.getaverageMark());
   console.log("Математика: " + student.getallMarks("Математика"));
   console.log("Физика: " + student.getallMarks("Физика"));
   console.log("Егор получил 5 по физике");
   student.addMark("Физика", 5);
   console.log("Физика: " + student.getallMarks("Физика"));
   student.deleteMark("Математика");
   console.log("");
   student.printInfo();


 