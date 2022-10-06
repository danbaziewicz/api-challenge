import Sequelize from "sequelize";

import mysql from "mysql2"

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "challenge_medcloud"
})

// const db = new Sequelize("challenge_medcloud", "root", "123456", {
//     host: 'localhost',
//     dialect: 'mysql'
// });


// db.authenticate()
// .then(()=>{
//     console.log('Conexão com o banco de dados realizada com sucesso')
// }).catch(()=>{
//     console.log('Erro: Conexão com o banco não realizada.')
// })

export default db