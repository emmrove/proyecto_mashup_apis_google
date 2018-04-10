var main = function(){
	crea.boton("mostrar", "Muestra");
	evento.mostrar("mostrar");
	crea.label("TITULO");
	crea.input("titulo");
	crea.label("FECHA --> año-mes-dia");
	crea.label("ejemplo --> 2017-03-23");
	crea.input("fecha");
	crea.label("HORA --> hrs:min:seg");
	crea.label("ejemplo --> 14:23:00");
	crea.input("hora_inicio");
	//podemos agregar la direccion del maps
	crea.label("LUGAR");
	crea.input("lugar");
	crea.label("DESCRIPCION");
	crea.input("descripcion");
	crea.boton("insert", "Insertar");
	evento.insertar("insert");
}