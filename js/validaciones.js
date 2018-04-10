var valida = (function(){
	var _fecha = function(string_fecha){
        var aux = string_fecha.split("");
        var arr=[];
   		var salida = "";
	   for(var i = 0; i < aux.length; i++){
	      if(!isNaN(aux[i])){
	         if(aux[i] != " "){
                arr.push(aux[i]);	
             }
	      }
	   }
        if(arr.length === 8){
            for(var i=0;i<arr.length;i++){
                if(i=== 4){
                  salida += "-"+arr[i];  
                }else{
					if(i=== 6){
                  		salida += "-"+arr[i];  
                	}else{
                  		salida+=arr[i];     
            		}   
                }  
            }
	   }
         if(arr.length === 6){
            for(var i=0;i<arr.length;i++){
                if(i=== 4){
                  salida += "-0"+arr[i];  
                }else{
					if(i=== 5){
                  		salida += "-0"+arr[i];  
					}else{
                      	salida+=arr[i];     
                	}   
                }
            }
	   }
	   return salida;
	};
	var _hora = function(string_hora){
		var aux = string_hora.split(" ");
		if(aux.length === 2){
			if(aux[1].length === 5){
				console.log("entro a 5");
				var n = aux[1].split("");
				if(n[2] === ":"){
					return aux[1];
				}else{
					return "";
				}
			}else{
				if(aux[1].length ===  4){
					console.log("entro a 4");
					if(aux[1][1] === ":"){
						return "0"+aux[1];
					}else{
						if(aux[1][2] === ":"){
							return aux[1][0]+aux[1][1]+":0"+aux[1][3];
						}else{
							var nuevo = "";
							for(var i = 0; i < aux[1].length; i++){
								if(i === 2){
									nuevo += ":";
								}
								nuevo += aux[1][i];
							}
							return nuevo;
						}
					}
				}
			}
		}else{
			console.log("entro a mas de 2");
			console.log(aux);
			var nuevo = " ";
			for(var i = 1; i < aux.length; i++){
				if(i === 2){
					nuevo += ":";
				}
				if(aux[i].length > 1){
					nuevo += aux[i];
				}else{
					nuevo += "0"+aux[i];
				}
			}
			//_hora(nuevo);
			_hora(nuevo);
		}
	}
	return{
		"fecha": _fecha,
		"hora": _hora
	}
})();