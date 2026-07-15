export interface EmpresaInfo {
  nombre: string;
  tagline: string;
  ciudad: string;
  /** Texto de la sección "Nosotros". Un párrafo por elemento del array. */
  historia: string[];
}

export const empresa: EmpresaInfo = {
  nombre: "Kactus Pub",
  tagline: "La casa de la mejor música de los 80's, 90's y 2000's",
  ciudad: "Iquique, Chile",
  historia: [
    "Con más de 25 años de trayectoria en el rubro, Kactus Pub nació para quienes disfrutan los grandes clásicos de los 80's, 90's y 2000's, en un espacio pensado para vivir la música en vivo cada sábado.",
    "Combinamos un ambiente exclusivo con la cercanía de un lugar donde todos se conocen, y la profesionalidad de un espacio preparado también para eventos privados y corporativos.",
  ],
};
