const express = require('express');
const cors = require('cors');
const path = require('path');

const router = require('./src/routes/index');
 
const { json, urlencoded } = express;

const app = express();

const port = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({extended:false}))
const corsOptions = {
    origin: '*',
    optionalSuccessStatus:200
};

app.use(cors(corsOptions));

app.use(router);

app.listen(port, () =>{
    console.log(`Server run ${port}`);
})
