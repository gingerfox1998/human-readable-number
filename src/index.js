module.exports = function toReadable (number) {
  if(number == 0)
      return ('zero');
  var numarr = {
    1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten', 11:'eleven', 12:'twelve', 
    13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen', 20:'twenty', 
    30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety'
  }
  var numstrarr = number.toString();
  if(numarr[number]) {
    return numarr[number];
  }
  else if((number > 20) && (number < 100)) {
    var ten = numstrarr[0] * 10;
    var tens = numarr[ten];
    return tens + numarr[numstrarr[1]];
  }
  if((number > 99) && (number < 1000)) {
    var hundred = numarr[numstrarr[0]] + ' hundred';
        if((number > 0) && (number < 21)) {
            return hundred + numstrarr[0];
        }
        if((number > 20) && (number < 100)) {
            var ten = numstrarr[0] * 10;
            var tens = numarr[ten];
            return hundred + tens + numstrarr[1];
        }
    }
}
