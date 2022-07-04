//stop hitting enter to reload page
jQuery(document).on("keypress", 'form', function (e) {
  var code = e.keyCode || e.which;
  if (code == 13) {
    e.preventDefault();
    return false;
  }
});


//Display Console//
function displayConsole() {
  var myDiv = document.getElementById("mydiv");
  if (myDiv.style.display === "none") {
    myDiv.style.display = "block";
  } else {
    myDiv.style.display = "none";
  }
}

//display input field//
function mouseAlert() {
  alert("you clicked the mouse");
  var myDiv = document.getElementById("inputField");
  if (myDiv.style.display === "none") {
    myDiv.style.display = "block";
  } else {
    myDiv.style.display = "none";
  }
}

var button1 = document.getElementById("button");
button1.onclick = mouseAlert;


//inputfield//

const webPages = ["htmls/designJurnal.html", "htmls/projects.html", "htmls/blog.html", "To go to each page type: <br> Design <br> Project <br> Blog <br> Home", "Incorrect Command, please take note of spelling<br> Type help to see commands","index.html"];

function inputFunction() {
  var myInput = document.getElementById("inputField").submit();
  alert(myInput);
}

var input = document.getElementById("myInput");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var consoleContent = document.getElementById("consolContent");
    event.preventDefault();
    if (input.value == "help") {
      
      consoleContent.innerHTML = webPages[3];
      input.value ="";
      return;
    }
    
    var temp = findPage(input.value);   
    if(temp=="na"){
     
      consoleContent.innerHTML = webPages[4];
     
      
      return;
      
    }else{
      window.location.href = temp;
     
    }
   
  }
});

function findPage(sInput) {
  switch (sInput.toUpperCase()) {
    case "DESIGN":
      return webPages[0];
      break;
    case "PROJECTS":
      return webPages[1];
      break
    case "BLOG":
      return webPages[2];
      break;
    case "HOME":
      return webPages[5];
      break;
    default :
      return "na";
  }

}