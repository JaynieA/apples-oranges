console.log('test');

//longerString takes to strings return the longer one
function longerString(string1, string2) {
  console.log('button clicked - longerString');
  console.log(string1, string2);

  //compare strings

  if(string1.length > string2.length){
    alert(string1 + " is longest");
    return string1;
  } else if  (string1.length === string2.length) {
    alert("strings are equal");
  } else {
    alert(string2 + " is longest");
    return string2;
  }
  // bug: what if they are the same length?
}
