// Your task is to create a function - basic_op().
// The function should take three arguments - operation(string/char), 
// value1(number), value2(number). The function should return result of 
// numbers after applying the chosen operation.

function basicOp(operation, value1, value2)
{
  return Number(eval(value1 + operation + value2));
}