const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routers
const RefundRequestRoutes = require('./routes/routes');

//app middleware
app.use(bodyParser.json());
app.use(cors());


//app middleware
app.use(RefundRequestRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://new_user01:1234@healthcare.sgm5k.mongodb.net/HealthCareChanneling?retryWrites=true&w=majority';


mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});