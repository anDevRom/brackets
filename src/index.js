module.exports = function check(str, bracketsConfig) {
  // your solution
  const arrForCompare = []
  let strForCompare = str

  for (let elemOfBracketsConfig of bracketsConfig) {
    arrForCompare.push(elemOfBracketsConfig.join(""))
  }

  for (let i = 1; i <= Math.floor(str.length / 2); i++) {
    arrForCompare.forEach((el) => {
      if (strForCompare.includes(el)) {
        strForCompare = strForCompare.split(el).join("")
      }
    })
  }

  if (strForCompare === "") {
    return true
  } else {  return false  }
}
