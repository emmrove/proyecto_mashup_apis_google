var crea = (function() {
    //var body = document.getElementsByTagName("body")[0];
    var body = document.getElementById("oculto");
    var tiempo_time = "";
    var obtenerTiempo = function(destino){
        //var origin1 = document.getElementById('lugar').value;
        var origin1 = document.getElementById('estoy').textContent;
        //var origin2 = 'Greenwich, England';
        var destinationA = destino;

        var service = new google.maps.DistanceMatrixService;
        
        service.getDistanceMatrix({
          origins : [origin1],
          destinations : [destinationA],
          travelMode: 'DRIVING',
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, function(response, status) {
          if (status !== 'OK') {
            alert('Error was: ' + status);
          } else {
            //document.getElementById('tiempo').innerHTML=response.rows[0].elements[0].duration.text
            //tiempo_time = "";
            //console.log(response.rows[0].elements[0].duration.text);
            tiempo_time = "";
            tiempo_time = response.rows[0].elements[0].duration.text;
            console.log(destino + " "+tiempo_time);
          }
        });    
      }

    var _boton = function(id, Mostrar){
      var boton = document.createElement("button");
      boton.innerText = Mostrar;
      boton.setAttribute("id", id);
      var div = document.createElement("div");
      div.appendChild(boton);
      body.appendChild(div);
    };

    var _parrafo = function(){
      var mensaje = document.createElement("p");
      mensaje.setAttribute("id", "mensaje");
      var div = document.createElement("div");
      div.appendChild(mostrar);
      body.appendChild(mensaje);
    };

    var _text_area = function(){
      var mostrar = document.createElement("textarea");
      mostrar.setAttribute("id", "mostrar_msj");
      var div = document.createElement("div");
      div.appendChild(mostrar);
      body.appendChild(div);
    };

    var _input = function(id, clase){
      var agregar = document.createElement("input");
      agregar.setAttribute("class", clase);
      agregar.setAttribute("id", id);
      var div = document.createElement("div");
      div.appendChild(agregar);
      body.appendChild(div);
    };

    var _label = function(text){
      var etiqueta = document.createElement("label");
      etiqueta.textContent = text;
      var div = document.createElement("div");
      div.appendChild(etiqueta);
      body.appendChild(div);
    };

    var _tabla = function(array, midiv){

      var filas = array[0].length-1;
      var columnas = array.length;

      var _table = document.createElement("table");
      //var _table = document.getElementById(mitabla);
      var _thead = document.createElement("thead");
      var _tbody = document.createElement("tbody");
      for(var i = 0; i < 1; i++){
        var _tr = document.createElement("tr");
          for(var j = 0; j < columnas; j++){
            var _th = document.createElement("th");
            _th.textContent = array[j][0];
            _tr.appendChild(_th);
          }
          //---------boton
          var _th = document.createElement("th");
          _th.textContent = "Tiempo Restante";
          _tr.appendChild(_th);
          //---------
        _thead.appendChild(_tr);
      }
      var t = 1;
      var destino;
      for(var i = 0; i < filas; i++){
        var _tr = document.createElement("tr");
        destino = "";
        for(var j = 0; j < columnas; j++){
          if(j === 3){
            destino = array[j][i+1];
          }
          var _td = document.createElement("td");
          _td.textContent = array[j][i+1];
          _tr.appendChild(_td);
        }
        //-----------botones
          var _td = document.createElement("td");
          obtenerTiempo(destino);
          _td.textContent = tiempo_time;
          _tr.appendChild(_td);
        //-----------
        _tbody.appendChild(_tr);
      }
      _table.appendChild(_thead);
      _table.appendChild(_tbody);
      //body.appendChild(_table);
      _table.setAttribute("border", "black 5px solid");
      _table.setAttribute("cellspacing", "15px");
      //var div = document.createElement("div");
      var div = document.getElementById(midiv);
      div.innerHTML = "";
      div.appendChild(_table);
    };

    var _filtrar_completo = function(json){
      var arre_fstart = ["FECHA INICIO"];
      var arre_fend = ["FECHA FIN"];
      var arre_fcontent = ["TITULO"];
      var arre_floca = ["LUGAR"];
      var arre_fdescrip = ["DESCRIPCION"];
      var tama_events = Object.keys(json["items"]).length;
      for(var i = 0; i < tama_events; i++){
        var aux_in = json["items"][i]["start"]["dateTime"];
        arre_fstart.push(aux_in);
        var aux_fi = json["items"][i]["end"]["dateTime"];
        arre_fend.push(aux_fi);
        var aux_con = json["items"][i]["summary"];
        arre_fcontent.push(aux_con);
        var aux_loca = json["items"][i]["location"];
        arre_floca.push(aux_loca);
        var aux_des = json["items"][i]["description"];
        arre_fdescrip.push(aux_des);
      }
      return [arre_fstart, arre_fend, arre_fcontent, arre_floca, arre_fdescrip];
    };

    var _filtrar = function (elemento){
      var json = JSON.parse(elemento);
      return _filtrar_completo(json);
    };

    var _borrador = function (arre_entrada){
      var time_zone = "America/Mexico_City";
      var salida = new Object();
      salida.summary = arre_entrada[0];
      var start = new Object();
        start.dateTime = arre_entrada[1]+"T"+arre_entrada[2] + "-06:00";
        start.timeZone = time_zone;
      salida.start = start;
      var end = new Object();
        var arre_hora = arre_entrada[2].split(":");
        var r = (parseInt(arre_hora[0]) + 1).toString();
        arre_hora[0] = r;
        var hora_fin = "";
        for(var i = 0; i < arre_hora.length; i++){
          if(i != arre_hora.length-1){
            hora_fin += arre_hora[i] + ":";
          }else{
            hora_fin += arre_hora[i];
          }
        }
        end.dateTime = arre_entrada[1]+"T"+ hora_fin + "-06:00";
        end.timeZone = time_zone;
      salida.end = end;
      salida.location = arre_entrada[3];
      salida.description = arre_entrada[4];
      return JSON.stringify(salida);    
    }

    return{
      "boton": _boton,
      "parrafo": _parrafo,
      "text_area": _text_area,
      "input": _input,
      "label": _label,
      "tabla": _tabla,
      "filtrar": _filtrar,
      "borrador": _borrador
      
    }
  })();