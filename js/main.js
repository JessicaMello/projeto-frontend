function helloWorld() {
    for (let i = 3; i > 0; i-- ) {
    console.log(i);
    }
    console.log('...');
    console.log('Hello World!');
   }
   helloWorld();
   

 // API MAP
 let map;

 function initMap() {
   map = new google.maps.Map(document.getElementById("map"), {
     center: { lat: -19.8837428, lng: -43.9341398 },
     zoom: 8
   });
 }


   /* API Drag and Drop

   function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }*/


