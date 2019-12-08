class Casas{

	constructor(Nombre,Fundador,Mascota,Colores,Alumnos){
		this.Nombre = Nombre;
		this.Fundador = Fundador;
		this.Mascota = Mascota;
		this.Colores = Colores;
		this.Alumnos = Alumnos;
	}

	set AñadirAlumnos(alumno){
		this.Alumnos = push(alumno);
	}
};

class Colegios{

	constructor(Nombre,FechaApertura,Director,Materia,Casas){
		this.Nombre = Nombre;
		this.FechaApertura = FechaApertura;
		this.Director = Director;
		this.Materia = Materia;
		this.Casas = Casas;
	}

	get Colegio(){
		var colegio = [this.Nombre,this.FechaApertura,this.Director,this.Materia,this.Casas];
		return colegio;
	}

	set AñadirCasa(CasasAñadir){
		this.Casas = CasasAñadir;
	}
};





export{Colegios,Casas}