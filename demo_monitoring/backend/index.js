let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbConfig = require('./database/db')

// express route
const studentRoute = require('../backend/routes/student.route');

// connecting mongodb database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/reactdb', {
    useNewUrlParser: true
}).then(() => {
    console.log('Database successful connected');
},
    error => {
        console.log('could not connect to database: ' + error)

    }
)
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());
app.use('/students', studentRoute);

// port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})


// 404 error
app.use((req, res, next) => {
    next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})

