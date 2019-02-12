var express = require('express');
var app = express();


/*  0- Cors ♥
    1- Diamants ♦
    2- Piques ♠
    3- Trèbol  ♣
*/



/* cartes -> codi baralla i valor */
function jugador(nom) {
    this.nom = nom;
    this.intents = 0;
    this.victories = victories;
  }

var partida = {
    id : 0,
    baralles : Array(
        0,
        1,
        2,
        3
    ),

    barallaCartes : [
        [0 ,  ["A","Q","K","J","10","9","8","7","6","5","4","3","2"]], // Cors ♥
        [1, ["A","Q","K","J","10","9","8","7","6","5","4","3","2"]], // Diamants ♦
        [2, ["A","Q","K","J","10","9","8","7","6","5","4","3","2"]], // Piques ♠
        [3 , ["A","Q","K","J","10","9","8","7","6","5","4","3","2"]], // Trèbol  ♣



    ],


    

    jugadors : Array(

    ),


    tauler : Array(),

       
    
    
};

function obtenirCarta(){

    var funcio = "[obtenirCarta] ";

    var baralla = 4; //Num de baralles
    var cartes = 13;    //Num de cartes

    var bEscollida = 0;
    var cEscollida = 0;

    var carta = [];

    var valor = null;

    do{

        bEscollida =Math.floor(Math.random()*baralla);
        cEscollida =Math.floor(Math.random()*cartes);

        valor = partida.barallaCartes[bEscollida][1][cEscollida];

    }while(valor == undefined);
    /* Random de la carta */

    delete partida.barallaCartes[bEscollida][1][cEscollida];
   

   console.log(funcio+ "Baralla: "+bEscollida);
   console.log(funcio +"cEscollida: "+cEscollida);
   console.log(funcio +"valor: "+valor);


    /* delete array(1); */
    carta[bEscollida] = valor;
    console.log(funcio +"carta: "+carta);

    
    return c = [bEscollida,carta[bEscollida]]; // Baralla i carta

   
}


    
function repartirCartes(idJugador){

    var funcio= "[repatirCartes] ";

    

    var cont =0;

    var pos =0;

   do{

        
    var carta = obtenirCarta();

    console.log(funcio +"baralla "+ carta[0]);
    console.log(funcio +"carta "+ carta[1]);
   

    /* partida.barallaCartes[bEscollida][1][cEscollida] */
    if(partida.jugadors[idJugador].cartes[carta[0]] == undefined){
        partida.jugadors[idJugador].cartes.push(carta[0]);
    }

   
    partida.jugadors[idJugador].cartes[carta[0]] = carta[0][1][carta[1]];

    cont++;
   }while(cont!=5);

   
   /* partida.barallaCartes[0][1][0]
   
  */
   
    console.log(funcio+ partida.jugadors[idJugador].cartes.toString());

}





app.get('/iniciarjoc/:id/:nom', function (req, res, next){

    var iniciaJoc = "[IniciaJoc]: ";

        partida.id = 1;

        var idJugador = req.params.id;
        var nomJugador = req.params.nom;


        partida.jugadors[idJugador] ={
            nom : nomJugador,
            cartes : [],
            intents : 0, 
            victories : 0,
        };

        repartirCartes(idJugador);
        
        var jugadorA = {
            nom: (req.params.nom),
            cartes: [],
            intents: 0,
            victories: 0,
        };

        /* console.log(jugadorA.cartes); */

        /* repartirCartes(jugadorA); */


        res.send("Rebut: "+partida.jugadors[idJugador].nom+ "\n id"+idJugador+"\n "+partida.jugadors[idJugador].cartes.toString());
        /* res.send("Rebut: "+req.params.id); */
});


app.get('/obtenirCarta/:codiPartida', function (req, res, next){

});

app.get('/mostrarCartes/:codiPartida', function (req, res, next){

});

app.put('/tirarCarta/:codiPartida/:carta', function (req, res, next){

});

app.put('/moureJugador/:codiPartida/aposta/quantitat', function (req, res, next){

});

app.put('/moureJugador/:codiPartida/passa', function (req, res, next){

});

app.delete('acabarJoc/:codiPartida', function (req, res, next){

});

app.listen(3000, function () {
    console.log('Servidor escoltant port 3000');
  })