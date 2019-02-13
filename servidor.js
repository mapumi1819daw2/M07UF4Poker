var express = require('express');
var app = express();


/*  0- Cors ♥
    1- Diamants ♦
    2- Piques ♠
    3- Trèbol  ♣
*/


var partida = {
    id : 1,
    
    barallaCartes : [
        [0 ,  ["A","Q","K","J","10","9","8","7","6","5","4","3","2"]], // Cors ♥
        [1, ["A","Q","K","J","10","9","8","7","6","5","4","3","2"]], // Diamants ♦
        [2, ["A","Q","K","J","10","9","8","7","6","5","4","3","2"]], // Piques ♠
        [3 , ["A","Q","K","J","10","9","8","7","6","5","4","3","2"]], // Trèbol  ♣

    ],

    jugadors : Array(

    ),
   
    
};

/* Obtenim aleatòriament una carta de l'array de la baralla de cartes */
function obtenirCarta(){

    var funcio = "[obtenirCarta] ";

    var baralla = 4; //Num de baralles
    var cartes = 13;    //Num de cartes

    var bEscollida = 0;
    var cEscollida = 0;

    var valor = null;

     /* Random de la carta */
    do{

        bEscollida =Math.floor(Math.random()*baralla);
        cEscollida =Math.floor(Math.random()*cartes);

        valor = partida.barallaCartes[bEscollida][1][cEscollida];

    }while(valor == undefined);
   

    delete partida.barallaCartes[bEscollida][1][cEscollida];
   

   console.log(funcio+ "Baralla: "+bEscollida);
   console.log(funcio +"valor: "+valor);

    
    return c = [bEscollida,valor]; // Baralla i carta

   
}


/* Funció inicial per repartir les cartes a cada jugador

    1- idJugador*/
function repartirCartes(idJugador){

    var funcio= "[repatirCartes] ";

    

    var cont =0;

   do{
        
    var carta = obtenirCarta();

    console.log(funcio +"baralla "+ carta[0]);
    console.log(funcio +"carta "+ carta[1]);
   

    /* partida.barallaCartes[bEscollida][1][cEscollida] */

    
    partida.jugadors[idJugador].cartes[carta[0]][1].push(carta[1]);

    cont++;
   }while(cont!=5);
   

    console.log(funcio+ "tostring "+ partida.jugadors[idJugador].cartes.toString());

}





app.get('/iniciarjoc/:id/:nom', function (req, res, next){

    var iniciaJoc = "[IniciaJoc]: ";

        /* var idJugador = req.params.id; */
        var nomJugador = req.params.nom;

        partida.id = 1;
     


        partida.jugadors[nomJugador] ={
            nom : nomJugador,
            cartes : [
                    [0, []],
                    [1, []],
                    [2, []],
                    [3, []],
            ],
            intents : 0, 
            victories : 0,
        };

        repartirCartes(nomJugador);
    
        res.send(JSON.stringify(partida.jugadors[nomJugador]));

       
});


app.get('/obtenirCarta/:codiPartida/:nom', function (req, res, next){

    /* Manca controlar el num de cartes */


    var funcio = "[obtenirCarta] ";
    var carta = obtenirCarta();

    var nomJugador = req.params.nom;

    console.log(funcio +"baralla "+ carta[0]);
    console.log(funcio +"carta "+ carta[1]);

    
    partida.jugadors[nomJugador].cartes[carta[0]][1].push(carta[1]);

    res.send(JSON.stringify(partida.jugadors[nomJugador]));

});

app.get('/mostrarCartes/:codiPartida', function (req, res, next){


    

});

app.put('/tirarCarta/:codiPartida/:idjugador/:baralla/:carta', function (req, res, next){

    var funcio = "[tirarCarta]: ";

    var baralla = req.params.baralla;
    var carta = req.params.carta;

    console.log(funcio+ "baralla "+ baralla+ " carta "+ carta);


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