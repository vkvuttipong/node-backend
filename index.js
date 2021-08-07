const express = require ('express'); // ใช้ สร้าง server
const exampleRoutes = require('./routes/employee-route'); // import the routes
const app = express();
var cors = require('cors')
app.use(express.json());
var corsOptions = {
    origin: '*',
    methods: "GET, POST"
}

app.use(cors(corsOptions));
app.use('/employee', exampleRoutes);  

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})
