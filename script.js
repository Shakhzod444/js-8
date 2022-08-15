function min_number(num_one, ...num_two) {
   if (typeof num_one === 'number') {
      return Math.min(num_one, ...num_two)
   } else if (Array.isArray(num_one)) {
      return Math.min(...num_one, ...num_two)
   } else if (typeof num_one === 'object') {
      const values = Object.values(num_one)
      return Math.min(...values)

   }
}
console.log(min_number(17, 7));

console.log(min_number([6, 18]));

console.log(min_number({ a: 19, b: 5, c: 20 }));




let numbers = [145, 156, 45, 44, 16222, 254, 542, -4, -3, -13, 152, 445, 22, 3, 11, 222, 352, 1747, 76564, 4543]
let sort_numbers = []
for (; numbers.length;) {
   sort_numbers.push(numbers.splice(numbers.indexOf(Math.min(...numbers)), 1)[0])
}
console.log(sort_numbers)



function procent(num1, num2) {

   console.log(num1 / 100 * num2)
}

procent(150, 10)
