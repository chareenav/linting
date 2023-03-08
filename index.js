const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

//here's our data for users
var data = require('./data/test.json');

app.get('/', (req, res) => {
  var title = 'Home Page';
  res.render('pages/index', { 'title': title });
});

app.get('/about', (req, res) => {
  var title = 'About Page';
  res.render('pages/about', { 'title': title });
});

app.get('/foodie', (req, res) => {
  var title = 'Yummy Foodie';
  res.render('pages/foodie', { 'title': title });
});

app.get('/coffee', (req, res) => {
  var title = 'Coffeeholic';
  res.render('pages/coffee', { 'title': title });
});

app.get('/dog', (req, res) => {
  var title = 'Doggo Lover';
  res.render('pages/dog', { 'title': title });
});

app.get('/pov', (req, res) => {
  var title = 'Views';
  res.render('pages/pov', { 'title': title });
});

//users index is our list page
app.get('/users', function(req, res) {
  var title = 'Users Page';
  res.render('users/index', {
    title: title,
    users: data
  });
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
  var title = 'User Page';
  var id = req.params.id;
  res.render('users/view', {
    title: title,
    user: data[--id]
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});

