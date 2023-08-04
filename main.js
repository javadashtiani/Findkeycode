let showKeyCode = document.querySelector(".show-keycode");
let eventKey = document.getElementById("event-key");
let eventLocation = document.getElementById("event-location");
let eventWhich = document.getElementById("event-which");
let eventCode = document.getElementById("event-code");
//Event for body
document.body.addEventListener("keydown", (event) => {
  event.preventDefault(); //They can not access to inspect//
  showKeyCode.innerHTML = event.keyCode;
  eventKey.innerHTML = event.key;
  eventLocation.innerHTML = event.location;
  eventWhich.innerHTML = event.which;
  eventCode.innerHTML = event.code;
});
