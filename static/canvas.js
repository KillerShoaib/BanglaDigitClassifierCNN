
window.addEventListener("load", () => {


  var isMobile = false; //initiate as false
  // device detection
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
  }


  // for pc browsers
  if (isMobile === false) {


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
        console.log("Pc");
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
  }

  // for mobile browsers

  else {
    const canvas = document.querySelector("canvas")
    const context = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 300;
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height);

    //for mouse position
    const touch = {
      x: 0, y: 0,                        // coordinates
      b1: false, b2: false, b3: false,   // buttons
      buttonNames: ["b1", "b2", "b3"],   // named buttons
    }
    function touchEvent(event) {
      var bounds = canvas.getBoundingClientRect();

      touch.x = event.changedTouches[0].pageX - bounds.left - scrollX;
      touch.y = event.changedTouches[0].pageY - bounds.top - scrollY;

      touch.x /= bounds.width;
      touch.y /= bounds.height;

      touch.x *= canvas.width;
      touch.y *= canvas.height;

      if (event.type === "touchstart") {
        console.log(touch.buttonNames[event.which]);
        touch[touch.buttonNames[event.which]] = true;  // start the touch
        context.beginPath();                           // start the a new path when there is a touchstart
      } else if (event.type === "touchend") {
        touch[touch.buttonNames[event.which]] = false; // finish the touch
      }
    }

    function mainLoop(time) {
      if (touch.b1) {  // is touchstarted or touchmoving
        context.lineWidth = 10;
        context.lineCap = "round";
        context.lineTo(touch.x, touch.y);
        context.stroke();
      }
      requestAnimationFrame(mainLoop); // get next frame
    }



    document.addEventListener("touchmove", touchEvent);
    document.addEventListener("touchstart", touchEvent);
    document.addEventListener("touchend", touchEvent);


    // start the app
    requestAnimationFrame(mainLoop);
  }
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