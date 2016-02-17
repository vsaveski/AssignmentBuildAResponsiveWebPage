function increaseFontSize(){
  alert($('p').css('font-size'));
  var fontSize = parseInt($('p').css('font-size')) + 2;
  $('p').css('font-size', fontSize);
}

function decreaseFontSize(){
  var fontSize = parseInt($('p').css('font-size')) - 2;
  $('p').css('font-size', fontSize);
}
