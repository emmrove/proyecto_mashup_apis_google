(function() {
  var speechBtn = document.getElementById("speech-btn");
    //SpeechRecognition = window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition || window.webkitSpeechRecognition || window.SpeechRecognition,
    var SpeechRecognition = window.webkitSpeechRecognition;
    var sr;
    var isResult = false;
    var cont = 0;
    var etiq = 0;

  if (SpeechRecognition !== undefined) {
    sr = new SpeechRecognition();
    sr.continuous = true;
    //console.log('sr:' + sr);
    window.onkeypress = function(event) {
      if (event.which === 32) {
        sr.start();
      }
    };

    speechBtn.addEventListener('click', function() {
      sr.start();
    });

    sr.onstart = function(event) {
      isResult = false;
      //console.log('onstart event');
    }

    sr.onaudiostart = function(event) {
      speechBtn.setAttribute('disabled', 'disabled');
      //console.log('onaudiostart event');
    }
    sr.onsoundstart = function(event) {
      //console.log('onsoundstart event');
    }
    sr.onspeechstart = function(event) {
      //console.log('onspeechstart event');
      //speechTranscript.style.backgroundColor = '#a56';
    }

    sr.onspeechend = function(event) {
      //console.log('onspeechend event');
      //speechTranscript.style.backgroundColor = '#323';
    }

    sr.onsoundend = function(event) {
      //console.log('onsoundend event');
    }
    sr.onaudioend = function(event) {
      //console.log('onaudioend event');
    }
    sr.onresult = function(event) {
      var r = 0;

      if (event.results.length > 0) {
        var ele = event.results.length-1;
        if(event.results[0][0].transcript === "iniciar" || event.results[ele][0].transcript === " iniciar"){
          cont = 1;
          r = ele;
        }else{
          if(cont === 0){
            console.log("debes decir 'iniciar'");
            document.getElementById("inic").innerHTML = "Debes decir 'INICIAR' para comenzar";
          }
        }
        if(cont !== 0){
          document.getElementById("inic").innerText = "";
          isResult = true;
          var ultimo = event.results.length-1;
          var salida = event.results[ultimo][0];
          console.log("arreglo[" + ultimo + "]");
          console.log("audio a texto = " + salida.transcript);

          if(etiq === 1){
            document.getElementById("titulo").value = salida.transcript;
            console.log("se agrego titulo");
          }else{
            if(etiq === 2){
              if(salida.transcript.length === 11){
                if(valida.fecha(salida.transcript).length > 0){
                  document.getElementById("fecha").value = valida.fecha(salida.transcript);
                  console.log("se agrego fecha");
                }else{
                  console.log("Formato incorrecto de fecha");
                  etiq--;
                }
              }else{
                console.log("tamaño incorrecto de fecha");
                etiq--;
              }
            }else{
              if(etiq === 3){
                if(salida.transcript.length < 7 ){
                  if(valida.hora(salida.transcript).length > 0){
                    document.getElementById("hora_inicio").value = valida.hora(salida.transcript) + ":00";
                    console.log("se agrego hora");
                  }else{
                    console.log("Formato incorrecto de hora");
                    etiq--;
                  }
                }else{
                  console.log("tamaño incorrecto de hora");
                  etiq--;
                }
              }else{
                if(etiq === 4){
                  document.getElementById("lugar").value = salida.transcript;
                  console.log("se agrego lugar");
                }else{
                  if(etiq === 5){
                    document.getElementById("descripcion").value = salida.transcript;
                    console.log("se agrego descripcion");
                    document.getElementById("reset1").innerText = "Se han agregado los valores";
                    document.getElementById("reset2").innerText = "Di 'REPETIR' si quieres volver a empezar";
                    document.getElementById("reset3").innerText = "Di 'FINALIZAR' si deseas terminar";
                  }else{
                    if(etiq > 5){
                      if(salida.transcript === " repetir"){
                        console.log("entro a repetir");
                        document.getElementById("reset1").innerText = "";
                        document.getElementById("reset2").innerText = "";
                        document.getElementById("reset3").innerText = "";
                        document.getElementById("titulo").value = "";
                        document.getElementById("fecha").value = "";
                        document.getElementById("hora_inicio").value = "";
                        document.getElementById("lugar").value = "";
                        document.getElementById("descripcion").value = "";
                        etiq = 0;
                      }
                    }
                  }
                }
              }         
            }
          }
          
          etiq++;
          
          if(event.results[ultimo][0].transcript === "finalizar" || event.results[ultimo][0].transcript === " finalizar"){
            console.log("entro_a finalizar");
            etiq = 0;
            speechBtn.removeAttribute('enabled');
            sr.stop();
            //return event.results;
          }else{
            console.log("continua");
          }
        }
      } else {
        console.log('No results');
      }
    }

    sr.onnomatch = function(event) {
      //console.log('onnomatch event');
    }
    sr.onerror = function(event) {
      console.log('onerror event: ' + event);
    }

    sr.onend = function(event) {

      if (!isResult) {
        console.log('Sin reconocer, intenta de nuevo (innerTextLog)!');
      }
      speechBtn.removeAttribute('disabled');
      //console.log('onend event');
      sr.stop();

    }

  } else {
    alert('Tu Navegador no Reconoce Web Spech API');
  }

})();
