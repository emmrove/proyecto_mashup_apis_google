var main = function(){
	crea.boton("mostrar", "Muestra");
	evento.mostrar("mostrar");
	/*
	crea.label("TITULO");
	crea.input("titulo", "controls");
	crea.label("FECHA --> año-mes-dia");
	crea.label("ejemplo --> 2017-03-23");
	crea.input("fecha", "controls");
	crea.label("HORA --> hrs:min:seg");
	crea.label("ejemplo --> 14:23");
	crea.input("hora_inicio", "controls");
	//podemos agregar la direccion del maps
	crea.label("LUGAR");
	crea.input("pac-input", "controls");
	crea.label("DESCRIPCION");
	crea.input("descripcion", "controls");
	
	 */
	crea.boton("insert", "Insertar");
	evento.insertar("insert");

	evento.mostrar2("mostrar2");
	evento.limpiar("limpiar");
	console.log("Iniciando eventos");
}