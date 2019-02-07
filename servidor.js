var express = require('express');
var app = express();


var partida = {
    id= null,
    
};

app.post('iniciarJoc/:codiPartida', function (req, res, next){

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