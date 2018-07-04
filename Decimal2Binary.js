export function integerD2B(d) {

  function caculate(d, bString) {
    if(parseInt(d / 2) === 0) {
      return `${bString}${d % 2}`
    } else {
      return caculate(parseInt(d / 2), `${bString}${d % 2}`)
    } 
  }
  return caculate(d, '').split('').reverse().join('')
}