function filterArray(numbers, value) {
    const result = [];
    for (const number of numbers) {
    if (number > value) result.push(number);
    }
    return result;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// ======================================================================
// вот как это работает : Начало: result = []

// Итерация 1: number = 1
//   1 > 3? → false, ничего не добавляем
//   result = []
// Итерация 2: number = 2  
//   2 > 3? → false, ничего не добавляем
//   result = []
// Итерация 3: number = 3
//   3 > 3? → false, ничего не добавляем  
//   result = []
// Итерация 4: number = 4
//   4 > 3? → true, добавляем 4
//   result = [4]
// Итерация 5: number = 5
//   5 > 3? → true, добавляем 5
//   result = [4, 5]
// Возвращаем: [4, 5]

// ========================    Альтернативные решения    ================

// function filterArray(numbers, value) {
//     const filteredNumbers = []; 
//     for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//         filteredNumbers.push(numbers[i]);
//         }
//     }
//     return filteredNumbers; 
// }

// ======================   Ещё варпиант    ================================
// function filterArray(numbers, value) {
//   return numbers.filter(number => number > value);
// }

