module.exports = function toReadable (number) {
  var a = [
  'zero', 
  'one', 
  'two', 
  'three', 
  'four', 
  'five', 
  'six', 
  'seven', 
  'eight', 
  'nine',   
]

var c = [
    'eleven', 
  'twelve', 
  'thirteen', 
  'fourteen', 
  'fifteen', 
  'sixteen', 
  'seventeen', 
  'eighteen', 
  'nineteen'
]

var b = [
    'ten', 
    'twenty', 
    'thirty', 
    'forty', 
    'fifty', 
    'sixty', 
    'seventy', 
    'eighty', 
    'hundred'
]

    if(number >= 0 && number <= 9) {
        return a[number];
    } else if (number >= 11 &&  number <= 19) {
        return c[number];
    } else if (number)
}
