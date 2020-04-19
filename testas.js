let Sequelise = require('sequelize');

var conexao = require("./conexao");


let Postagem = conexao().define(
    'Potagens',{
      titulo:{ type:Sequelise.STRING},
      conteudo: {type:Sequelise.TEXT}
    });


    let Usuario = conexao().define('Usuarios',{
        nome:{type:Sequelise.STRING},
        sobrenome:{type:Sequelise.STRING},
        idade:{type:Sequelise.INTEGER},
        email:{type:Sequelise.STRING}
    })

    let Clente = conexao().define('Clientes',{
        nome:{type:Sequelise.STRING},
        sobreNome:{type:Sequelise.STRING},
        email:{type:Sequelise.STRING},
        telefone:{type:Sequelise.INTEGER}
    })

    Clente.sync({force:true})

   /* Postagem.create({
        titulo:"Hiostoria de Angola",
        conteudo:"Historia Universal"
    })

    
    Usuario.create({
        nome:"Quiosa",
        sobrenome:"Evaristo",
        idade:38,
        email:"quiosa.evaristo@gmail.com"

    })*/