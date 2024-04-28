const mongoose = require('mongoose');

require('dotenv').config();
// define the mongodb url
//set up the mongodb connection

const mongoURL=process.env.MONGODB_URL;
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