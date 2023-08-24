const mysql=require('mysql2')

const pool=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'nodejs-course',
    password:'root'
})

module.exports=pool.promise()