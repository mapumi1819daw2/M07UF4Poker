var express = require('express');
var app = express();


/*  0- Cors ♥
    1- Diamants ♦
    2- Piques ♠
    3- Trèbol  ♣
*/

var jugador = {
    nom : null,
    intents : 0,

}

/* cartes -> codi baralla i valor */
function jugador(nom, cartes) {
    this.nom = nom;
    this.intents = 0;
    this.cartes = cartes;
    this.victories = victories;
  }

var partida = {
    id= null,
    baralles = Array(
        0,
        1,
        2,
        3
    ),

    barallaCartes = [
        [0 ,  ["A","Q","K","J","10","9","8","7","6","5","4","3","2"]], // Cors ♥
        1, ["A","Q","K","J","10","9","8","7","6","5","4","3","2"], // Diamants ♦
        2, ["A","Q","K","J","10","9","8","7","6","5","4","3","2"], // Piques ♠
        3 = ["A","Q","K","J","10","9","8","7","6","5","4","3","2"], // Trèbol  ♣

    ],

    jugadors = Array(

    ),


    tauler = Array(),

       
    
    
};

app.post('iniciarJoc/:codiPartida/nomJugador/:nom', function (req, res, next){
        res.send("Rebut: "+req.param.nom);
});


app.get('obtenirCarta/:codiPartida', function (req, res, next){

});

app.get('mostrarCartes/:codiPartida', function (req, res, next){

});

app.put('tirarCarta/:codiPartida/:carta', function (req, res, next){

});

app.put('moureJugador/:codiPartida/aposta/quantitat', function (req, res, next){

});

app.put('moureJugador/:codiPartida/passa', function (req, res, next){

});

app.delete('acabarJoc/:codiPartida', function (req, res, next){

});

app.listen(3000, function () {
    console.log('Servidor escoltant port 3000');
  })