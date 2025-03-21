
function togglePlusMinus(theId) {
  toggleWithText(theId, "+", "-");
}

function toggleVipInfo(theId) {
  //document.getElementById(theId).innerHTML = "";
  var theElement = document.getElementById(theId);
  if (theElement.innerHTML === "Learn More") {
      theElement.innerHTML = "Done";
  } else {
      theElement.innerHTML = "Learn More";
  }
}


function toggleWithText(theId, original, afterClick) {
  var theElement = document.getElementById(theId);
  if (theElement.innerHTML === original) {
      theElement.innerHTML = afterClick;
  } else {
      theElement.innerHTML = original;
  }
}

