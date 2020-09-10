const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} =require('./models');
const config = require('./config/config.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

require('./routes')(app);

sequelize.sync().then(
    ()=> {
        app.listen(process.env.PORT || config.port);
        console.log(`Server started on port ${config.port}`);
    }
)



