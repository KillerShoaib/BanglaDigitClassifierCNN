
window.addEventListener("load", () => {

  const canvas = document.querySelector("canvas")
  const context = canvas.getContext("2d");
  canvas.width = 350;
  canvas.height = 350;
  context.fillStyle = "#FFFFFF";
  context.fillRect(0, 0, canvas.width, canvas.height);

  //for mouse position
  const mouse = {
    x: 0, y: 0,                        // coordinates
    lastX: 0, lastY: 0,                // last frames mouse position 
    b1: false, b2: false, b3: false,   // buttons
    buttonNames: ["b1", "b2", "b3"],   // named buttons
  }
  function mouseEvent(event) {
    var bounds = canvas.getBoundingClientRect();
    // get the mouse coordinates, subtract the canvas top left and any scrolling
    mouse.x = event.pageX - bounds.left - scrollX;
    mouse.y = event.pageY - bounds.top - scrollY;

    mouse.x /= bounds.width;
    mouse.y /= bounds.height;

    mouse.x *= canvas.width;
    mouse.y *= canvas.height;

    if (event.type === "mousedown") {
      mouse[mouse.buttonNames[event.which - 1]] = true;  // set the button as down
    } else if (event.type === "mouseup") {
      mouse[mouse.buttonNames[event.which - 1]] = false; // set the button up
    }
  }

  function mainLoop(time) {
    if (mouse.b1) {  // is button 1 down?
      context.lineWidth = 10;
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(mouse.lastX, mouse.lastY);
      context.lineTo(mouse.x, mouse.y);
      context.stroke();
    }


    // save the last known mouse coordinate here not in the mouse event
    mouse.lastX = mouse.x;
    mouse.lastY = mouse.y;
    requestAnimationFrame(mainLoop); // get next frame
  }



  document.addEventListener("mousemove", mouseEvent);
  document.addEventListener("mousedown", mouseEvent);
  document.addEventListener("mouseup", mouseEvent);


  // start the app
  requestAnimationFrame(mainLoop);
});


//clear canvas

function clearcanvas1() {
  document.getElementById("inputField").value = "";
  var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

//uri function

function getURI() {
  const canvas = document.querySelector("canvas");
  const dataURI = canvas.toDataURL();
  console.log(dataURI);
  return dataURI;
}


// xml req

function ajReq() {
  var xml = new XMLHttpRequest();
  xml.open("POST", "/predict", true);
  xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xml.onload = function () {
    var dataReply = JSON.parse(this.responseText);
    document.getElementById("inputField").value = dataReply.prediction;
  };

  URI = getURI();

  dataSend = JSON.stringify(
    {
      'url': URI
    }
  );
  xml.send(dataSend);

}