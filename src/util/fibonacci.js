/**
 * Get sum of all even numbers in a limited fibonacci sequence
 * where the values do not exceed 4000000 (4 million)
 *
 * @param {integer} numberToStayBelow number to stay below, default is 4 million
 * @returns {integer} sum of all even numbers in the sequence
 */
export default function evenSumFib(numberToStayBelow = 4000000) {
  let a = 1, b = 1, evenSum = 0, values = [], temp;

  while (a < numberToStayBelow){
    if (a % 2 == 0) {
      evenSum = evenSum + a;
      values.push(`${a}*`)
    } else {
      values.push(a)
    }
    temp = a;
    a = a + b;
    b = temp;
  }
  return {
    values: values,
    sum: evenSum
  };
}
