function helloWorld() {
    for (let i = 3; i > 0; i-- ) {
    console.log(i);
    }
    console.log('...');
    console.log('Hello World!');
   }
   helloWorld();


 // API MAP
function getGeolocation(){
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition (onSucess, onError);
  }
  
  else {
    console.log('Não suportado');
  }
}

function onSucess(position) {
  const {latitude, longitude} = position.coords;
  console.log ('Essa é a minha latitude: ', latitude);
  console.log ('Essa é a minha logitude: ', longitude);

}

function onError(error){
  console.log(error);
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


