const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();
//const db=require('./utils/database')
const sequelize=require('./utils/database')


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

/* db.execute('select * from products')
.then((result)=>{console.log(result)})
.catch((err)=>{
    console.log(err)
}) */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize.sync().then((result)=>{
   // console.log(result)
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})
