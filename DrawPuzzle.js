var focusedSquare = "rect00"

function changeColor() {
    var red = document.getElementById("redInput").value
    red = red.toString()
    var green = document.getElementById("greenInput").value
    green = green.toString()
    var blue = document.getElementById("blueInput").value
    blue = blue.toString()

    while (red.length < 2){
      red = red + "0"
    }

    while (green.length < 2){
      green = green + "0"
    }

    while (blue.length < 2){
      blue = blue + "0"
    }


    document.getElementById(focusedSquare).style.fill = "#" + red.toString() + green.toString() + blue.toString();
    console.log("#" + red + green + blue)
  }

function setFocus(rect){
  focusedSquare = rect.id
}