function setCookie(cname,cvalue,exdays) {
  console.log("start function setCookie(cname="+cname+",cvalue="+cvalue+",exdays="+exdays+")")
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  document.getElementById("deleteUserButton").style.visibility = "visible";
}

function getCookie(cname) {
  console.log("start function getCookie(cname="+cname+")")
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var plsNominate = "Please nominate a username"


function checkCookie_new() {
  console.log("start function checkCookie_new()")
  var user=getCookie("username");
  if (user != "") {
    console.log("function checkCookie_new() - user != ''")
    document.getElementById("username").innerHTML = user;
    document.getElementById("newUserButton").style.visibility = "collapse";
    document.getElementById("users_name").style.visibility = "collapse";
    document.getElementById("deleteUserButton").style.visibility = "visible";
  } else {
    console.log("function checkCookie_new() - user = ''")
    document.getElementById("username").innerHTML = plsNominate;
    document.getElementById("deleteUserButton").style.visibility = "collapse";
  }
}

function deleteCookie() {
  console.log("start function deleteCookie")
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.getElementById("username").innerHTML = plsNominate;
  document.getElementById("users_name").style.visibility = "visible";
  document.getElementById("newUserButton").style.visibility = "visible";
  document.getElementById("deleteUserButton").style.visibility = "collapse";
}

function newUser() {
  console.log("start function newUser")
  var user = document.getElementById("users_name").value
  setCookie("username", user, 30);
  document.getElementById("username").innerHTML = user;
  document.getElementById("users_name").value = ""
  document.getElementById("users_name").style.visibility = "collapse";
  document.getElementById("newUserButton").style.visibility = "collapse";
  console.log("user="+user)
}
