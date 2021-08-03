//ARRAY CARNES//

let asadoAchuras = [
    {
        corte: "Chorizo",
        porcion: 0.15,
        unidad: "g",
        valor: 75,
        id:"chori"
    },
    {
        corte: "Chorizo bombon",
        porcion: 0.15,
        unidad: "g",
        valor: 75,
        id:"choriBombon"
    },
    {
        corte: "Chinchulin",
        porcion: 0.2,
        unidad: "g",
        valor: 60,
        id:"chinchu"
    },
    {
        corte: "Morcilla",
        porcion: 0.125,
        unidad: "g",
        valor: 56,
        id:"morci"
    },
    {
        corte: "Riñon",
        porcion: 0.2,
        unidad: "g",
        valor: 58,
        id:"riñon"
    },
    {
        corte: "Molleja",
        porcion: 0.2,
        unidad: "g",
        valor: 258,
        id:"molleja"
    }
]

let asadoCortes = [
    {
        corte: "Vacio",
        porcion: 0.4,
        unidad: "g",
        valor: 380,
        id:"vacio"
    },
    {
        corte: "Tira de asado",
        porcion: 0.5,
        unidad: "g",
        valor: 448,
        id:"tiraAsado"
    },
    {
        corte: "Tapa de asado",
        porcion: 0.5,
        unidad: "g",
        valor: 448,
        id:"tapaAsado"
    },
    {
        corte: "Bondiola",
        porcion: 0.4,
        unidad: "g",
        valor: 278,
        id:"bondiola"
    },
    {
        corte: "Bife de chorizo",
        porcion: 0.4,
        unidad: "g",
        valor: 556,
        id:"bideDeChorizo"
    },
    {
        corte: "Matambre",
        porcion: 0.4,
        unidad: "g",
        valor: 448,
        id:"matambre"
    },
    {
        corte: "Entraña",
        porcion: 0.4,
        unidad: "g",
        valor: 596,
        id:"entraña"
    }
];

let extraCortes = [
    {
        corte: "Provoleta",
        porcion: 0.250,
        unidad: "g",
        valor: 120,
        proporcion:0.125,
        id:"provoleta"   
    },
    {
        corte: "Chimi churri",
        porcion: 1,
        unidad: "u.",
        valor: 375,
        proporcion: 0.25,
        id:"chimiChurri"   
    },
    {
        corte: "Salsa criolla",
        porcion: 1,
        unidad: "u.",
        valor: 160,
        proporcion:0.25,
        id:"criolla"   
    }    
];
let combustibleAsado= [
    {
        material:"Carbón",
        porcion: 4,
        unidad:"bolsas",
        valor: 260,
        proporcion: 2,
        id:"carbon"
        
    },
    {
        material:"Leña",
        porcion: 1,
        unidad:"atados",
        valor: 230,
        proporcion:1.5,
        id:"leña"
    },
    {
        id:"otro"
    }
]
//CLASES CONSTRUCTORAS//
class CorteCarne{
    constructor(corte,porcion,unidad,valor,id){
        this.corte=corte;
        this.porcion=porcion;
        this.unidad=unidad;
        this.valor=valor;
        this.id=id;
    }
}
class ExtraContruct{
    constructor(corte,porcion,unidad,valor,proporcion,id){
        this.corte=corte;
        this.porcion=porcion;
        this.unidad=unidad;
        this.valor=valor;
        this.proporcion=proporcion;
        this.id=id;
    }
}