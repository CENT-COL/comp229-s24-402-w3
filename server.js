// instantiate the connect object
const connect = require('connect');

// create the application object
const app = connect();

// create our first middleware
function logger (req, res, next) {
    console.log(req.method, req.url);
    next();
}

// create a function to respond hello world
const helloWorld = (req, res) => {
    res.end('Hello World');
};

// create a function to respond goodbye world
const goodbyeWorld = (req, res) => {
    res.end('Goodbye World');
};

app.use(logger);
app.use('/goodbye',goodbyeWorld);
app.use('/hello',helloWorld);

app.listen(3000);

console.log('Server running at http://localhost:3000/');