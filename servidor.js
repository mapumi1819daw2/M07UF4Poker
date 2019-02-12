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




    
function repartirCartes(jugador){

    var baralla = 4; //Num de baralles
    var cartes = 13;    //Num de cartes


    /* Random de la carta */
   var bEscollida =Math.floor(Math.random()*baralla);
   var cEscollida =Math.floor(Math.random()*cartes);
   
   console.log("Baralla: "+bEscollida);
   console.log("cEscollida: "+cEscollida);


  /*  var bcarta = partida.barallaCartes[bEscollida]; */
   var carta = partida.barallaCartes[bEscollida[1,[cEscollida] ]];

   
   /* partida.barallaCartes[0][1][0]
   
   partida.barallaCartes[bEscollida][1][cEscollida]*/
   console.log("Carta: "+partida.barallaCartes[bEscollida][1][cEscollida]);

    /* jugador.cartes[bcarta][carta]; */

}





app.get('/iniciarjoc/:id/:nom', function (req, res, next){

        partida.id = 1;
        
        var jugadorA = {
            nom: (req.params.nom),
            cartes: [],
            intents: 0,
            victories: 0,
        };

        console.log(jugadorA.cartes);

        repartirCartes(jugadorA);


        res.send("Rebut: "+req.params.nom+ "\n"+req.params.id );
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