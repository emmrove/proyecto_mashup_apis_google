var peticion = (function() {
  var inicia = function(tipo_peticion) {

  	//tipo_de peticion y el dato que seria el arreglo que ingresaria desde speech
    var aux;
    var salida;

    var valor = 'Bearer ya29.Gls4BPKjqPDr82XRso6Q2eiWNP3sUU5olL_KDZpKTPP8M9L4bpuxvlczTw_BvobUl9VLsbkcoVaM1vVjmeZmxIRglSlyHz-vZyMhc8eyCez2sekKlIxEKdj9UP6N';
    var cabecera = 'Authorization';

    var url = "https://www.googleapis.com/calendar/v3/calendars/primary/events/";

    var dato;
    //var arre_prueba = ["MI POST", "2017-03-25", "15:00:00","Los Alamos Montoya","Estoy haciendo la tarea de la doc"];
    var arre_prueba = [];
    var titulo = document.getElementById("titulo").value;
    var fecha = document.getElementById("fecha").value;
    var hora_inicio = document.getElementById("hora_inicio").value;
    var lugar = document.getElementById("pac-input").value;
    var description = document.getElementById("descripcion").value;
    arre_prueba.push(titulo, fecha, hora_inicio, lugar, description);

    var xhr = new XMLHttpRequest();

    if(tipo_peticion === "GET"){
      console.log("entro al ggggggget");
      xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          //console.log("entro al get");
          console.log(JSON.stringify(event));
          aux = this.responseText;
          //console.log(JSON.parse(aux));
          salida = crea.filtrar(aux); 
          crea.tabla(salida, "tabla");
          //console.log(salida);
          console.log(crea.borrador(arre_prueba));
          document.getElementById("estado_post").innerText = "GET Ok status " + this.status;
          setTimeout("document.getElementById(\"estado_post\").innerText= \"\"",4000);
        } else {
          document.getElementById("estado_post").innerText = "GET Error status " + this.status;
          setTimeout("document.getElementById(\"estado_post\").innerText= \"\"",4000);
          console.log("Error " + this.status + " " + this.statusText + " - " + this.responseURL);
        }
      } 
    }
      xhr.open("GET", url, true);
      xhr.setRequestHeader(cabecera, valor);
      xhr.send();
    }

    if(tipo_peticion === "POST"){
      xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        console.log("entro a la validacion");
        if (this.status >= 200 && this.status <= 400) {
          console.log(this.status);
          aux = this.responseText;
          document.getElementById("estado_post").innerText = "POST OK status " + this.status;
          setTimeout("document.getElementById(\"estado_post\").innerText= \"\"",4000);
          console.log("entro a el post");
          document.getElementById("reset1").innerText = "";
          document.getElementById("reset2").innerText = "";
          document.getElementById("reset3").innerText = "";
          document.getElementById("titulo").value = "";
          document.getElementById("fecha").value = "";
          document.getElementById("hora_inicio").value = "";
          document.getElementById("lugar").value = "";
          document.getElementById("descripcion").value = "";
        } else {
          document.getElementById("estado_post").innerText = "POST Error status " + this.status;
          setTimeout("document.getElementById(\"estado_post\").innerText= \"\"",4000);
          console.log("Error " + this.status + " " + this.statusText + " - " + this.responseURL);
        }
      } 
    }
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.setRequestHeader(cabecera, valor);
      dato = crea.borrador(arre_prueba);
      xhr.send(dato);
    }
  };
  var auth_gapi = function(){
    console.log("auth_gapi");
  }
  return{
   "start": inicia,
   "autentication_gapi": auth_gapi
  }
})();