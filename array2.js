// Напишите функцию, принимающую на вход вещественную прямоугольную матрицу и 
// возвращающую одномерный массив, элементами которого будут номера последних 
// отрицательных элементов строк матрицы. 

//если нет такого элемента, то выводим: -1
// индекс считаем с 0


function findLastNegativeElements(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        let lastNegativeIndex = -1;
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] < 0) {
                lastNegativeIndex = j;
            } 
        }
      result.push(lastNegativeIndex);
    }

    return result;
}


const matrix = [
    [1, 2, 3, -7, 4],
    [-1, -2, -3, 5, 11],
    [2, 5, 7, 9, 0],
    [-7, 0, 6, 8, -5]
];


console.log('Матрица:');
console.log(matrix);
console.log('Результат:');
console.log(findLastNegativeElements(matrix));


