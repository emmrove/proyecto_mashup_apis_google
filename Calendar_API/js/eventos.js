var evento = (function() {
    var _mostrar = function(id) {
    	var boton = document.getElementById(id);
  		boton.addEventListener('click', 
  									function () {
  										peticion.start("GET");
  									},
  								false);
    }
    var _insertar = function(id) {
      var boton = document.getElementById(id);
      boton.addEventListener('click', 
                    function () {
                      peticion.start("POST");
                    },
                  false);
    }

    var _limpiar = function(id) {
  console.log("limpiar");
      var boton = document.getElementById(id);
      boton.addEventListener('click', 
                    function () {
                      
                      document.getElementById("eventos_parte2").innerHTML="";
                      


                    },
                  false);
    }


    var _mostrar2 = function(id) {
      
      var boton = document.getElementById(id);
      boton.addEventListener('click', 
                    function () {
    var namex=document.getElementById('estoy').textContent;//document.getElementById("pac-input").value; 
    document.getElementById("estado_lugar").innerText = "Lugar: "+ namex;                 
    $(document).ready(function() {
       // var name=document.getElementById("texto").value;
        var token = 'O56SGGQDYUBR2TOKRCMF';

        var $events = $("#events");
        $.get('https://www.eventbriteapi.com/v3/events/search/?location.address='+namex+'&location.within=3000'+'&token='+token+'&expand=venue',   
          function(res) {
            if(res.events.length) {
                var s = "<ul class='eventList'>";
                 document.getElementById("estado_lugar").innerText = "Lugar: "+ namex;
                for(var i=0;i<res.events.length;i++) {
                   // var eventTime = moment(event.start.local).format('M/D/YYYY h:mm A');
                    var event = res.events[i];
                    console.dir(event);
                    s += "<li><a target=_blank href='" + event.url + "'>" + event.name.text + "</a> - " + "</a> -"+ event.venue.address.address_1 +"</a> -"+  "</li>";
                  
                } //event.description.text +
                s += "</ul>";
                //$events.html(s);

                //document.getElementById('eventos_parte2').textContent=;

               document.getElementById("eventos_parte2").innerHTML=s;

            } else {
                $events.html("<p>Lo sentimos, no existen eventos</p>");
            }
        });
        
        
    });
   
                      console.log("hecho");
                    },
                  false);
    }
    return{
      "mostrar": _mostrar,
      "insertar": _insertar,
      "limpiar": _limpiar,
      "mostrar2":_mostrar2
    }
  })();


