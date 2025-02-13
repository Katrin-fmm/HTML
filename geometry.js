class Figure {
    #x;
    #y;
 //#- означает приватность 
    constructor(x,y) {
        this.#x = x;
        this.#y=y;
    }

    //метод, возвращающий площадь фигуры 
    square(){
        return undefined;

        //undefined - неопределённое значение, присваивается переменной, если она 
        // объявлена, но не инициализирована или ей не присвоено какое-либо значение
    }
    print(){
        console.log("Площадь фигуры: " + this.square());
    }
}

// наследование класса Figure
class Circle extends Figure {
    #r;

    constructor(x,y,r) {
        super(x,y);
        this.#r=r;
    }

    square() {
        return Math.PI * this.#r**2;
    }

}

class Rectangle extends Figure {
    #h;
    #w;

    constructor(x,y,h,w) {
        super(x,y);
        this.#h=h;
        this.#w=w;
    }

    square() {
        return this.#h * this.#w;
    }

}

const A = new Figure(17,24);
A.print();

const B = new Circle (17, 24, 35);
B.print();

const C = new Rectangle (17, 24, 46, 26);
C.print();