export function integerB2D(b) {
  const result = b.toString().split('').reverse().reduce((acc, current, index) => {
    return acc + parseInt(current) * Math.pow(2,index)
  }, 0)

  return result
}