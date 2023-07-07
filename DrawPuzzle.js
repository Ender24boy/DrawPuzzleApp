var focusedSquare = "rect33"


squareList = ["rect00", "rect01", "rect02", "rect03", "rect04", "rect05", "rect06", "rect10", "rect11", "rect12", "rect13", "rect14", "rect15", "rect16", "rect20", "rect21", "rect22", "rect23", "rect24", "rect25", "rect26", "rect30", "rect31", "rect32", "rect33", "rect34", "rect35", "rect36", "rect40", "rect41", "rect42", "rect43", "rect44", "rect45", "rect46", "rect50", "rect51", "rect52", "rect53", "rect54", "rect55", "rect56", "rect60", "rect61", "rect62", "rect63", "rect64", "rect65", "rect66", ]
square1xList = ["rect33"]
square3xList = ["rect22", "rect32","rect42","rect23", "rect43","rect24", "rect34","rect44"]

square5xList = ["rect11", "rect21", "rect31", "rect41", "rect51", "rect12", "rect52", "rect13", "rect53", "rect14", "rect54", "rect15", "rect25", "rect35", "rect45", "rect55"]

square7xList = ["rect00", "rect10", "rect20", "rect30", "rect40", "rect50", "rect60", "rect01", "rect61", "rect02", "rect62", "rect03", "rect63", "rect04", "rect64", "rect05", "rect65", "rect06", "rect16", "rect26", "rect36", "rect46", "rect56", "rect66"]

squarerowList = [["rect00", "rect10", "rect20", "rect30", "rect40", "rect50", "rect60"],
                 ["rect01", "rect11", "rect21", "rect31", "rect41", "rect51", "rect61"],
                 ["rect02", "rect12", "rect22", "rect32", "rect42", "rect52", "rect62"],
                 ["rect03", "rect13", "rect23", "rect33", "rect43", "rect53", "rect63"],
                 ["rect04", "rect14", "rect24", "rect34", "rect44", "rect54", "rect64"],
                 ["rect05", "rect15", "rect25", "rect35", "rect45", "rect55", "rect65"],
                 ["rect06", "rect16", "rect26", "rect36", "rect46", "rect56", "rect66"]]

squarecolumnList = [["rect00", "rect01", "rect02", "rect03", "rect04", "rect05", "rect06"],
                    ["rect10", "rect11", "rect12", "rect13", "rect14", "rect15", "rect16"],
                    ["rect20", "rect21", "rect22", "rect23", "rect24", "rect25", "rect26"],
                    ["rect30", "rect31", "rect32", "rect33", "rect34", "rect35", "rect36"],
                    ["rect40", "rect41", "rect42", "rect43", "rect44", "rect45", "rect46"],
                    ["rect50", "rect51", "rect52", "rect53", "rect54", "rect55", "rect56"],
                    ["rect60", "rect61", "rect62", "rect63", "rect64", "rect65", "rect66"]]


assignedRules = []

class Rule {
  constructor(value, text, boxes, isSolved){
      this.value = value;
      this.text = text;
      this.boxes = boxes;
      this.isSolved = isSolved;
  }
  
  showText() {
    return this.text;
  }
}



const rule01 = new Rule(1, "0. The grid must contain atleast one pure yellow square", squareList, false)
const rule02 = new Rule(2, "0. The grid must contain atleast one pure magenta square", squareList, false)
const rule03 = new Rule(3, "0. The grid must contain atleast one pure cyan square", squareList, false)
const rule04 = new Rule(4, "0. The grid must contain atleast one pure black square", squareList, false)

const rule11 = new Rule(1.1, "1. There must be a pure yellow square in the left half of the grid", squareList, false)
const rule12 = new Rule(1.2, "1. There must be a pure green square in the bottom half of the grid", squareList, false)
const rule13 = new Rule(1.3, "1. There must be a pure red square touching the middle square", squareList, false)
const rule14 = new Rule(1.3, "1. The grid must contain 2 blue squares", squareList, false)



ruleList = [rule01, rule02, rule03, rule04]
rule2List = [rule11, rule12, rule13, rule14]



ruleListList = [ruleList, rule2List]


function startingRule(){
  
  for (let i = 0; i < ruleListList.length; i++) {
    shuffleArray(ruleListList[i])
    assignedRules.push(ruleListList[i][0])
   }
  document.getElementById("rule1").innerHTML = assignedRules[0].showText()
  
  for (let i = 0; i < squareList.length; i++) {
    document.getElementById(squareList[i]).style.fill = "#ffffff"
  }



}

startingRule()

function checkRules(){
  colorList = []
  rowColorList = []
  columnColorList = []

  for (let i = 0; i < squareList.length; i++) {
   color = document.getElementById(squareList[i]).style.fill
   color = rgbToHex(color)
   colorList.push(color)
  }

  columnColorList = [[colorList[0], colorList[1], colorList[2], colorList[3], colorList[4], colorList[5], colorList[6]],
                     [colorList[7], colorList[8], colorList[9], colorList[10], colorList[11], colorList[12], colorList[13]],
                     [colorList[14], colorList[15], colorList[16], colorList[17], colorList[18], colorList[19], colorList[20]],
                     [colorList[21], colorList[22], colorList[23], colorList[24], colorList[25], colorList[26], colorList[27]],
                     [colorList[28], colorList[29], colorList[30], colorList[31], colorList[32], colorList[33], colorList[34]],
                     [colorList[35], colorList[36], colorList[37], colorList[38], colorList[39], colorList[40], colorList[41]],
                     [colorList[42], colorList[43], colorList[44], colorList[45], colorList[46], colorList[47], colorList[48]]]

  rowColorList = [[colorList[0], colorList[7], colorList[14], colorList[21], colorList[28], colorList[35], colorList[42]],
                  [colorList[1], colorList[8], colorList[15], colorList[22], colorList[29], colorList[36], colorList[43]],
                  [colorList[2], colorList[9], colorList[16], colorList[23], colorList[30], colorList[37], colorList[44]],
                  [colorList[3], colorList[10], colorList[17], colorList[24], colorList[31], colorList[38], colorList[45]],
                  [colorList[4], colorList[11], colorList[18], colorList[25], colorList[32], colorList[39], colorList[46]],
                  [colorList[5], colorList[12], colorList[19], colorList[26], colorList[33], colorList[40], colorList[47]],
                  [colorList[6], colorList[13], colorList[20], colorList[27], colorList[34], colorList[41], colorList[48]]]

                  
  x3ColorList = [colorList[16], colorList[23], colorList[30], colorList[17], colorList[31], colorList[18], colorList[25], colorList[32]]




  
  switch (true){
    case (assignedRules[0] == rule01 && colorList.includes("#ffff00")):
      document.getElementById("rule1").style.color = "green";
      assignedRules[0].isSolved = true
      load3x()
      document.getElementById("rule2").innerHTML = assignedRules[1].showText()
      break;
    case (assignedRules[0] == rule02 && colorList.includes("#ff00ff")):
      document.getElementById("rule1").style.color = "green";
      assignedRules[0].isSolved = true
      load3x()
      document.getElementById("rule2").innerHTML = assignedRules[1].showText()
      break;
    case (assignedRules[0] == rule03 && colorList.includes("#00ffff")):
      document.getElementById("rule1").style.color = "green";
      assignedRules[0].isSolved = true
      load3x()
      document.getElementById("rule2").innerHTML = assignedRules[1].showText()
      break;
    case (assignedRules[0] == rule04 && colorList.includes("#000000")):
      document.getElementById("rule1").style.color = "green";
      assignedRules[0].isSolved = true
      load3x()
      document.getElementById("rule2").innerHTML = assignedRules[1].showText()
      break;
    default:
      document.getElementById("rule1").style.color = "red";
  }
  
  
  
  if (assignedRules[0].isSolved){

    blueCount = 0
    for (let i = 0; i < colorList.length; i++) {
      if (colorList[i] == "#0000ff") {
        blueCount++;
      }
    };


    switch (true){
      case (assignedRules[1] == rule11 && columnColorList[0].includes("#ffff00")):
        document.getElementById("rule2").style.color = "green";
        assignedRules[1].isSolved = true
        break;
      case (assignedRules[1] == rule12 && rowColorList[2].includes("#00ff00")):
        document.getElementById("rule2").style.color = "green";
        assignedRules[1].isSolved = true
        break;
      case (assignedRules[1] == rule13 && x3ColorList.includes("#ff0000")):
        document.getElementById("rule2").style.color = "green";
        assignedRules[1].isSolved = true
        break;
      case (assignedRules[1] == rule14 && blueCount >= 2):
        document.getElementById("rule2").style.color = "green";
        assignedRules[1].isSolved = true
        break;
      default:
        document.getElementById("rule2").style.color = "red";
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
  }
}

function setFocus(rect){
  focusedSquare = rect.id
  setBoxes(document.getElementById(focusedSquare).style.fill)
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function load3x(){
  for (let i = 0; i < square3xList.length; i++) {
    document.getElementById(square3xList[i]).style.visibility = "visible"
    document.getElementById(square3xList[i]).style.animation = "fadeIn 2s"
  }
  shuffleArray(rule2List)
  //document.getElementById("rule2Container").style.animation = "slideUp 1s linear forwards"
  document.getElementById("rule2").style.animation = "fadeIn 2s"
  assignedRules.push(rule2List[0])
  assignedRules.push(rule2List[1])
  assignedRules.push(rule2List[2])


}
