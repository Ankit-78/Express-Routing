const express= require('express');
const app= express();
const  db = require('./db');
require('dotenv').config();
 //const Person=require('./models/Person')
//const MenuItem = require('./models/MenuItem');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/' , function(req, res) {

      res.send('Welcome to our Hotel ')
});    

/* POST route to add the person

 app.post('/person' , async (req , res) => {
   try {
    const data = req.body;
    const newPerson= new Person(data);
    
    const response = await newPerson.save();
 
       console.log('data saved');

       res.status(200).json(response);
   }

 catch(err) {

    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});

   }

 });

 // GET method to get the person

  app.get('/person' , async(req , res) => {

    try {

         const data = await Person.find();
         console.log('data fetched');
         res.status(200).json(data);

    } catch(err) {

        console.log(err);
        res.status(500).json(response);
    }
  })



  // POST method for Menu Item 
   app.post('/menu' , async(req , res) => {
     try {

         const data = req.body;
         const newMenu=new MenuItem(data);
         const response = await newMenu.save();
         consle.log('data fatched');
         res.send(200).json(response);
     }

      catch (err) {

        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
      }

   });
 
    // to get the menu items
    app.get('/menu' , async(req , res)=> {

         try {

            const data = await MenuItem.find();
            console.log('data fetched');
            res.status(200).json(data);

         }

         catch (err) {

             console.log(err);
             res.status(500).json({error: 'Internal Server Error'})
         }

    }) 


    app.get('/person/:workType' , async(req , res) => {
         try {
        const workType= req.params.workType;

          if(workType=='chef' || workType=='manager' || workType=='waiter') {

              const response = await Person.find({work : workType});
              console.log('respone fetched');
              res.status(200).json(response);
          }
            else {
                 res.status(404).json({error: 'Invalid work type'});
            }

        }
          catch(err) {

             console.log(err);
             res.status(500).json({error: 'Internal Server Error'})
    
        }
    }) */

    // Import the router files


const personRoutes= require('./routes/personRoutes');

const menuItemRoutes = require('./routes/menuItemRoutes');
// use the routers 
app.use('/person' , personRoutes); 

app.use('/menu' , menuItemRoutes);

app.listen(PORT , () => {

     console.log('Listening on port 3000')
 })
   