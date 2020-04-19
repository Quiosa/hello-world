
var express = require('express');
const app = express();

var mostrarDados = function(){
  console.log("Servidor Rodando Perfeitamente");
}

app.get("/",function(req,res){
  res.sendFile(__dirname+"/html/index.html");
});

app.get("/sobre",function(req,res){
  res.send("Seja Benvindo a Pagina Sobre");
});

app.get("/contatos",function(req,res){
  res.send("Seja Benvindo a Pagina Contctos");
});

app.get("/projectos/:nome/:local",function(req,res){
  res.send("<h1>Nome do Projecto " +req.params.nome+
  "</h1><p><h1>Local do Projecto: "+req.params.local+"</h1>");
});

app.listen(8081,mostrarDados());
