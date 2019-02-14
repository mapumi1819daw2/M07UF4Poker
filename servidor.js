var express = require('express');
var app = express();


/*  0- Cors ♥
    1- Diamants ♦
    2- Piques ♠
    3- Trèbol  ♣
*/


var partida = {
    id : 1,


    mostrarCartes: false,
    
    barallaCartes : [
        [0 ,  ["A","Q","K","J","10","9","8","7","6","5","4","3","2"]], // Cors ♥
        [1, ["A","Q","K","J","10","9","8","7","6","5","4","3","2"]], // Diamants ♦
        [2, ["A","Q","K","J","10","9","8","7","6","5","4","3","2"]], // Piques ♠
        [3 , ["A","Q","K","J","10","9","8","7","6","5","4","3","2"]], // Trèbol  ♣

    ],


    tauler : [
        [0, []],
        [1, []],
        [2, []],
        [3, []],
    ],


    /* fitxes:[
        [0, [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25]],
        [0, [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]],
        [0, [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]],

    ], */

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

/* Funció que assigna les fitxes inicals a cada jugador */
function obtenirFitxes(nomJugador){
    var funcio ="[obtenirFitxes] ";


    partida.jugadors[nomJugador].fitxes = [[25,25], [50, 50], [100, 100]];

}

/* Funció inicial per repartir les cartes a cada jugador

    1- idJugador*/
function repartirCartes(idJugador, opcio){


    /* Opcio == 1    TAULER
        OPcio ==2    Jugador */

    var funcio= "[repatirCartes] ";

    var quantitatCartes = 0;


    /* Quantiat de cartes a repartir */
    if(opcio==1){
        quantitatCartes = 2;
    }
    else{
        quantitatCartes = 5;
    }

    var cont =0;

   do{
        
    var carta = obtenirCarta();

    console.log(funcio +"baralla "+ carta[0]);
    console.log(funcio +"carta "+ carta[1]);
   

    /* partida.barallaCartes[bEscollida][1][cEscollida] */

    /* Afegim les cartes en funció de l'opcio [tauler, jugador] */
    if(opcio==1){
        partida.tauler[carta[0]][1].push(carta[1]);
    }
    
    else{
        partida.jugadors[idJugador].cartes[carta[0]][1].push(carta[1]);
    }
    

    cont++;
   }while(cont!=quantitatCartes);
   

   if(opcio==1){
    console.log(funcio+ "tostring TAULER "+ partida.tauler.toString());
   }

   else{
       console.log(funcio+ "tostring JUGADOR "+ partida.jugadors[idJugador].cartes.toString());
   }
    

}





app.get('/iniciarjoc/:nom', function (req, res, next){

    var iniciaJoc = "[IniciaJoc]: ";

        /* var idJugador = req.params.id; */
        var nomJugador = req.params.nom;

        console.log(iniciaJoc+ "nom : "+nomJugador);

        partida.id = 1;
     


        partida.jugadors[nomJugador] ={
            nom : nomJugador,
            cartes : [
                    [0, []],
                    [1, []],
                    [2, []],
                    [3, []],
            ],
            fitxes : [],
            intents : 0, 
            victories : 0,
            apostat: 0,
        };

        repartirCartes(null, 1);
        repartirCartes(nomJugador, 2);
        obtenirFitxes(nomJugador);

        res.send(JSON.stringify(partida));

       
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

    partida.mostrarCartes = true;

    res.send(JSON.stringify(partida));
    

});

app.post('/tirarCarta', function (req, res, next){
/* :codiPartida/:idjugador/:baralla/:carta */
    var funcio = "[tirarCarta]: ";
    
    var nomJugador = req.body.idJugador;
    var baralla = req.body.baralla;
    var carta = req.body.carta;


    delete partida.jugadors[nomJugador].cartes[baralla][1][carta];
   


    console.log(funcio+ "baralla "+ baralla+ " carta "+ carta);


});

app.post('/moureJugador', function (req, res, next){
    /* /:idJugador/aposta/:quantitat */

    var funcio = "[moureJugador]: ";

    var nomJugador = req.body.idJugador;
    var quantitat = req.body.quantitat;


    c


   

    

});

app.post('/moureJugador/:codiPartida/passa', function (req, res, next){

});

app.delete('acabarJoc/:codiPartida', function (req, res, next){

});

app.listen(3000, function () {
    console.log('Servidor escoltant port 3000');
  });