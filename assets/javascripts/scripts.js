

function togglePlusMinus(theId) {
  var theElement = document.getElementById(theId);
  if (theElement.innerHTML === "+") {
      theElement.innerHTML = "-";
  } else {
      theElement.innerHTML = "+";
  }
}

function toggleVipInfo(theId) {
  document.getElementById(theId).innerHTML = "";
}

