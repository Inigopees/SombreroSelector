export class Colegios{

	constructor(Nombre,FechaApertura,Director,Materia,Casas){
		this.Nombre = Nombre;
		this.FechaApertura = FechaApertura;
		this.Director = Director;
		this.Materia = Materia;
		this.Casas = Casas;
	}

	get Colegio(){
		var colegio [this.Nombre,this.FechaApertura,this.Director,this.Materia,this.Casas];
		return colegio;
	}

	set AñadirCasa(CasasAñadir){
		this.Casas = CasasAñadir;
	}
};
