const express= require('express');
const app = express();
const {config}=require('./config/index');
const moviesAPi = require('./routes/rutas.js');
// app.get('/',(req,res) =>{

//     res.send('Hello World');
// });
// app.get('/json',(req,res) =>{

//     res.json({hello:'World'});

// });

moviesAPi(app);
app.listen(config.port,function(){

    console.log(`Listening http://localhost:${config.port}`);
  
});