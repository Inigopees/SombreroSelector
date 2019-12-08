export class Casas{

	constructor(Nombre,Fundador,Mascota,Colores,Alumnos){
		this.Nombre = Nombre;
		this.Fundador = Fundador;
		this.Mascota = Mascota;
		this.Colores = Colores;
		this.Alumnos = Alumnos;
	}

	set AñadirAlumnos(alumno){
		this.Alumno = alumno;
	}
};

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



export function arrancar(){
	
	const Gryffindor = new Casas('Gryffindor','Godric Gryffindor','Leon dorado aslan',['Escarlata','dorado'],[]);

	const Hufflepuff = new Casas('Hufflepuff','Helga Hufflepuff','Tejon Negro',['Amarillo','Negro'],[]);
	
	const Slytherin = new Casas('Slytherin','Salazar Slytherin','Serpiente plateada',['verde esmeralda','plata'],[]);

	const Ravenclaw = new Casas('Ravenclaw','Rowena Ravenclaw','Aguila de bronce',['Azul','Bronce'],[]);

	const Hogwarts = new Colegios('Hogwarts',20-1-990,'Albus Dumbledore','Magia y Hechicería',Casas);
}

