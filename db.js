const mongoose = require('mongoose');
// define the mongodb url
const mongoURL='mongodb://localhost:27017/hotels'  
//set up the mongodb connection 
mongoose.connect(mongoURL , {
    useNewUrlParser:true,
    useUnifiedTopology: true

})
// getting the default connection

 const db = mongoose.connection;

 // define the event listner  for database connection

 db.on('connected' , () => {

     console.log('Connected to MongoDb Server');
 });
 
 db.on('error' , (err) => {

    console.log('MongoDb connection error');
});

db.on('disconnected' , () => {

    console.log(' MongoDb Disconnected');
});

// export the database connection

module.exports=db;