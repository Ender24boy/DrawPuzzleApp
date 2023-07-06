var focusedSquare = "rect11"
var ruleLevel = 0

rule1 = "1. The grid must contain atleast one pure yellow square"
rule2 = "1. The grid must contain atleast one pure magenta square"
rule3 = "1. The grid must contain atleast one pure cyan square"
rule4 = "1. The grid must contain atleast one pure black square"

squareList = ["rect00", "rect01", "rect02", "rect10", "rect11", "rect12", "rect20", "rect21", "rect22"]
square1xList = ["rect11"]
square3xList = ["rect00", "rect01", "rect02", "rect10", "rect12", "rect20", "rect21", "rect22"]
ruleList = [rule1, rule2, rule3, rule4]
assignedRules = []

function startingRule(){
  ruleChoice = getRndInteger(0, 3)
  document.getElementById("rule1").innerHTML = ruleList[ruleChoice]
  assignedRules.push(ruleList[ruleChoice])
  
  for (let i = 0; i < squareList.length; i++) {
    document.getElementById(squareList[i]).style.fill = "#ffffff"
  }

}

startingRule()

function checkRules(){
  colorList = []
  for (let i = 0; i < squareList.length; i++) {
   color = document.getElementById(squareList[i]).style.fill
   color = rgbToHex(color)
   colorList.push(color)
  }
  
  
  
  switch (true){
    case (assignedRules[0] == rule1 && colorList.includes("#ffff00")):
      document.getElementById("rule1").style.color = "green";
      ruleLevel = 1
      break;
    case (assignedRules[0] == rule2 && colorList.includes("#ff00ff")):
      document.getElementById("rule1").style.color = "green";
      ruleLevel = 1
      break;
    case (assignedRules[0] == rule3 && colorList.includes("#00ffff")):
      document.getElementById("rule1").style.color = "green";
      ruleLevel = 1
      break;
    case (assignedRules[0] == rule4 && colorList.includes("#000000")):
      document.getElementById("rule1").style.color = "green";
      ruleLevel = 1
      break;
    default:
      document.getElementById("rule1").style.color = "red";
  }
  
  
  
  if (ruleLevel == 1){
    for (let i = 0; i < square3xList.length; i++) {
      document.getElementById(square3xList[i]).style.visibility = "visible"
      document.getElementById(square3xList[i]).style.animation = "fadeIn 5s"
    }
  }
}


function changeColor() {
    var red = document.getElementById("redInput").value
    red = red.toString()
    var green = document.getElementById("greenInput").value
    green = green.toString()
    var blue = document.getElementById("blueInput").value
    blue = blue.toString()

    if (red.length + green.length + blue.length == 6){

    document.getElementById(focusedSquare).style.fill = "#" + red.toString() + green.toString() + blue.toString();
    checkRules(ruleLevel)

    }
  }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function rgbToHex(col)
{
    if(col.charAt(0)=='r')
    {
        col=col.replace('rgb(','').replace(')','').split(',');
        var r=parseInt(col[0], 10).toString(16);
        var g=parseInt(col[1], 10).toString(16);
        var b=parseInt(col[2], 10).toString(16);
        r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
        var colHex='#'+r+g+b;
        return colHex;
    }
}

function setBoxes(col){
  
  if(col.charAt(0)=='r')
  {
      col=col.replace('rgb(','').replace(')','').split(',');
      var r=parseInt(col[0], 10).toString(16);
      var g=parseInt(col[1], 10).toString(16);
      var b=parseInt(col[2], 10).toString(16);
      r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
      document.getElementById("redInput").value = r.toString()
      document.getElementById("greenInput").value = g.toString()
      document.getElementById("blueInput").value = b.toString()
      var colHex='#'+r+g+b;
      console.log(colHex)
  }
}

function setFocus(rect){
  focusedSquare = rect.id
  setBoxes(document.getElementById(focusedSquare).style.fill)
}

