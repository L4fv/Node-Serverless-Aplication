class People {
  constructor({
    birth_year = undefined,
    eye_color = undefined,
    films = undefined,
    gender = undefined,
    hair_color = undefined,
    height = undefined,
    homeworld = undefined,
    mass = undefined,
    name = undefined,
    skin_color = undefined,
    created = undefined,
    edited = undefined,
    species = undefined,
    starships = undefined,
    url = undefined,
    vehicles = undefined,
  }) {
    this.cumpleanios = birth_year;
    this.colorOjo = eye_color;
    this.filmacion = films;
    this.genero = gender;
    this.colorCabello = hair_color;
    this.talla = height;
    this.lugarNacimiento = homeworld;
    this.peso = mass;
    this.nombre = name;
    this.colorPiel = skin_color;
    this.creacion = created;
    this.edicion = edited;
    this.especies = species;
    this.naveEstelar = starships;
    this.url = url;
    this.vehiculos = vehicles;
  }
}

module.exports = People;
