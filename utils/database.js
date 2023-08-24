/* const mysql=require('mysql2')

const pool=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'nodejs-course',
    password:'root'
})

module.exports=pool.promise() */

const Sequelize=require('sequelize')
const sequelize=new Sequelize('nodejs-course','root','root',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize