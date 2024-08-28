const champs = [
  {
    id: 1,
    name: "Thresh",
    habilities: {
      pasive: "Condenación",
      pasiveDescription:
        "Thresh puede cosechar las almas de los enemigos que mueran cerca de él; al hacerlo, obtiene armadura y poder de habilidad permanentes.",
      Q: "Sentencia de muerte",
      qDescription:
        "Thresh atrapa a un enemigo con su cadena y lo atrae hacia él. Si se activa esta habilidad una segunda vez, Thresh se lanza hacia el enemigo.",
      W: "Camino oscuro",
      wDescription:
        "Thresh lanza una linterna que otorga un escudo a los campeones aliados cercanos. Los aliados pueden hacer clic en la linterna para deslizarse hacia Thresh.",
      E: "Despellejar",
      eDescription:
        "Thresh va preparando los ataques, e inflige más daño cuanto más tiempo espere entre ellos. Al activarla, Thresh barre la zona con su cadena y empuja a todos los enemigos impactados en la dirección del golpe.",
      R: "La caja",
      rdescription:
        "Una prisión de muros que ralentizan e infligen daño al romperlos.",
    },
    line: ["support"],
  },
  {
    id: 2,
    name: "Tristana",
    habilities: {
      pasive: "Tiro certero",
      pasiveDescription:
        "Aumenta el alcance de los ataques de Tristana cuando sube de nivel.",
      Q: "Tiro rápido",
      qDescription:
        "Tristana incrementa su velocidad de ataque durante un breve tiempo.",
      W: "Salto misil",
      wDescription:
        "Tristana dispara al suelo para propulsarse hasta un punto lejano. Al aterrizar, dañará y ralentizará durante un breve periodo de tiempo a las unidades circundantes.",
      E: "Carga explosiva",
      eDescription:
        "Cuando Tristana mata a una unidad, sus proyectiles estallan como metralla e infligen daño a los enemigos circundantes. Se puede activar para colocarle una bomba a un enemigo, que explotará al cabo de unos segundos y hará daño a todas las unidades circundantes.",
      R: "Tiro destructor",
      rdescription:
        "Tristana carga una gran bola de cañón en su arma y la dispara a la unidad enemiga, que sufre daño mágico y cae hacia atrás.",
    },
    line: ["adc", "mid"],
  },
  {
    id: 3,
    name: "Lee sin",
    habilities: {
      pasive: "Condenación",
      pasiveDescription:
        "Thresh puede cosechar las almas de los enemigos que mueran cerca de él; al hacerlo, obtiene armadura y poder de habilidad permanentes.",
      Q: "Sentencia de muerte",
      qDescription:
        "Thresh atrapa a un enemigo con su cadena y lo atrae hacia él. Si se activa esta habilidad una segunda vez, Thresh se lanza hacia el enemigo.",
      W: "Camino oscuro",
      wDescription:
        "Thresh lanza una linterna que otorga un escudo a los campeones aliados cercanos. Los aliados pueden hacer clic en la linterna para deslizarse hacia Thresh.",
      E: "",
      eDescription: "",
      R: "",
      rdescription: "",
    },
    line: ["jg,top,sup"],
  },
  {
    id: 4,
    name: "Tham Kench",
    habilities: {
      pasive: "Condenación",
      pasiveDescription:
        "Thresh puede cosechar las almas de los enemigos que mueran cerca de él; al hacerlo, obtiene armadura y poder de habilidad permanentes.",
      Q: "Sentencia de muerte",
      qDescription:
        "Thresh atrapa a un enemigo con su cadena y lo atrae hacia él. Si se activa esta habilidad una segunda vez, Thresh se lanza hacia el enemigo.",
      W: "Camino oscuro",
      wDescription:
        "Thresh lanza una linterna que otorga un escudo a los campeones aliados cercanos. Los aliados pueden hacer clic en la linterna para deslizarse hacia Thresh.",
      E: "",
      eDescription: "",
      R: "",
      rdescription: "",
    },
    line: ["support,top"],
  },
  {
    id: 5,
    name: "Swain",
    habilities: {
      pasive: "Condenación",
      pasiveDescription:
        "Thresh puede cosechar las almas de los enemigos que mueran cerca de él; al hacerlo, obtiene armadura y poder de habilidad permanentes.",
      Q: "Sentencia de muerte",
      qDescription:
        "Thresh atrapa a un enemigo con su cadena y lo atrae hacia él. Si se activa esta habilidad una segunda vez, Thresh se lanza hacia el enemigo.",
      W: "Camino oscuro",
      wDescription:
        "Thresh lanza una linterna que otorga un escudo a los campeones aliados cercanos. Los aliados pueden hacer clic en la linterna para deslizarse hacia Thresh.",
      E: "",
      eDescription: "",
      R: "",
      rdescription: "",
    },
    line: ["support,mid,top"],
  },
];

module.exports = {
  getAllchamps: () => {
    return champs;
  },
  getChampsByName: (champName) => {
    return champs.find((champ) => champ.name === champName);
  },
  getChampsByLine: (line) => {
    return champs.filter((champ) => champ.line.includes(line));
  },
};
