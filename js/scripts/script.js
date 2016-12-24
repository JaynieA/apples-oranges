$(document).ready(function() {
  init();
}); // end doc ready

var init = function() {
  console.log('in init');
  $('#applesOrangesForm').on('submit', longerString);
}; // end init

//longerString takes two strings, returns the longer one
function longerString() {
  console.log('in longerString');
  //get user input, replace any whitespace
  var string1 = $(".string1").val().replace(/ /g, '');
  var string2 = $(".string2").val().replace(/ /g, '');
  //compare strings, alert user with decision
  if(string1.length > string2.length){
    alert(string1 + " is longest");
    return string1;
  } else if  (string1.length === string2.length) {
    alert("strings are equal");
    return;
  } else {
    alert(string2 + " is longest");
    return string2;
  } // end else
} // end longerString
