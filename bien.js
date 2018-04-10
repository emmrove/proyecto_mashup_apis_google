
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
						//preguntar si hay : si no 
						//separarlo en 2 y 2 y 
						//agregar los 2 puntos
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