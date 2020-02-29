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
    
    var b = [
        'ten',
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
    
    var c = [
        'ten', 
        'twenty', 
        'thirty', 
        'forty', 
        'fifty', 
        'sixty', 
        'seventy', 
        'eighty', 
        'ninety',
        'hundred'
    ]
    
        if(number === 0) {
          return 'zero';
        } else if(number >= 1 && number <= 9) {
            return a[number];
        } else if (number >= 10 &&  number <= 19) {
            return b[number - 10];
        } else if (number >= 20 && number <= 90 && number % 10 === 0) {
            return c[number / 10 - 1];
        } else if (number >= 20 && number <= 99) {
            return c[(number - (number % 10)) / 10 - 1] + " " + a[number % 10];
        } else if (number >= 100 && number <= 999) {

            if(number % 100 === 0) {
              return a[number / 100] + ' hundred';
            } else if(number % 100 <= 19 && number % 100 >= 11){
              return a[(number - number % 100) / 100] + ' hundred ' + b[number % 100 - 10];
            } else if((number - (number - number % 100)) % 10 === 0){
              return a[(number - number % 100) / 100] + ' hundred ' + c[(number - (number - number % 100))/ 10 - 1];
            } else if((number - (number - number % 100)) < 10){
              return a[(number - number % 100) / 100] + ' hundred ' + a[(number % 100) % 10];
            } else {
              return a[(number - number % 100) / 100] + ' hundred ' + c[(number % 100 - ((number % 100) % 10)) / 10 - 1] + ' ' + a[(number % 100) % 10];
            }
          //
      }
    }
