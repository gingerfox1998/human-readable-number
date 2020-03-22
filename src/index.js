module.exports = function toReadable (number) {
  if(number == 0)
      return ('zero');
  var numarr = {
    1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten', 11:'eleven', 12:'twelve', 
    13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen', 20:'twenty', 
    30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety', 100:'one hundred', 200:'two hundred',
    300:'three hundred', 400:'four hundred', 500:'five hundred', 600:'six hundred', 700:'seven hundred', 800:'eight hundred',
    900:'nine hundred'
  }
  var numstrarr = number.toString();
  if(numarr[number]) {
    return numarr[number];
  }
  else if((number > 20) && (number < 100)) {
    var ten = numstrarr[0] * 10;
    var tens = numarr[ten] + ' ' + numarr[numstrarr[1]];
    return tens;
  }
 else if((number > 99) && (number < 1000)) {
    var hundred = numstrarr[0] * 100;
    var hundreds;
    var withouthund = number - hundred;
    var withoutarr = withouthund.toString();
    if(numarr[withouthund]) {
        hundreds = numarr[hundred] + ' ' + numarr[withouthund];
        return hundreds;
    }
    else if((withouthund > 20) && (withouthund < 100)) {
        var tenh = numstrarr[0] * 10;
        hundreds = numarr[hundred] + ' ' + numarr[tenh] + ' ' + numarr[numstrarr[1]];
        return hundreds;
    }
 }
}
