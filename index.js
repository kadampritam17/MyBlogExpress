var express = require('express');
const path = require('path')
const app = express()
const port = 3000

var expHbs = require('express-handlebars');
var hbs = expHbs.create({defaultLayout: 'main'});
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'static'))) //static containing .js and .css file
app.use("/", require(path.join(__dirname, 'routes/blog.js')))
 

app.listen(port, () => {
    console.log(`Blog app listening on port http://localhost:${port}`)
  })