
var conexao = ()=>{

    let Sequelise = require('sequelize');
    
    let sequelise = new Sequelise('estudonode','root','',{
        host: "localhost",
        dialect: 'mysql'
    });

    return sequelise;
   
}

module.exports = conexao;