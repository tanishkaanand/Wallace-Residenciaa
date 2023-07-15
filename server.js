//----------------------- I M P O R T S -----------------------
const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const DB = require('./DATABASE/DB');
var cors = require('cors');

var app = module.exports = express();

//----------------------- ----------------------- -----------------------
app.use(cors());
app.engine('.html', require('ejs').__express);      //Register ejs as .html. If we did not call this, we would need to name our views foo.ejs instead of foo.html. The __express method is simply a function that engines use to hook into the Express view system by default, so if we want to change "foo.ejs" to "foo.html" we simply pass _any_ function, in this case `ejs.__express`.
app.set('views', path.join(__dirname, "front", "public"))   // since express defaults to CWD/views
app.use(express.static(path.join(__dirname, 'client', 'src')));  // Path to our public directory
app.set('view engine', 'html')  // Without this you would need to supply the extension to res.render() ex: res.render('users.html').
app.use( bodyParser.urlencoded({ extended : true }) );
app.use(bodyParser.json());

//-------------------------------- COUNTER -----------------------------------------------

app.get("/counter", (req, res) => DB.COUNTER.getCounterList().then( (result) => res.json(result)) );

app.post("/counterondate", (req, res) => DB.COUNTER.getCounterForTheGivenDate( { d: req.body.d, m: req.body.m, y: req.body.y} ).then( (ANS) => res.json(ANS)) );

app.post("/counterbwdates", (req, res) => DB.COUNTER.getCounterBwDates( { d1: req.body.d1, m1: req.body.m1, y1: req.body.y1, d2: req.body.d2, m2: req.body.m2, y2: req.body.y2 } ).then( (ANS) => res.json(ANS)) );

//-------------------------------- BOOKING -----------------------------------------------

app.get("/booking", (req, res) => DB.BOOKING.getBookingList().then( (result) => res.json(result)) );

app.post("/book", (req, res) => DB.BOOKING.addBooking( {
  Name: req.body.Name,
  PhoneNo: req.body.PhoneNo,
  Email: req.body.Email,
  DOB: req.body.DOB,
  Address: req.body.Address,
  ZipCode: req.body.ZipCode,
  Nationality: req.body.Nationality,
  CreditType: req.body.CreditType,
  CreditHolder: req.body.CreditHolder,
  CreditNumber: req.body.CreditNumber,
  CreditExpiration: req.body.CreditExpiration,
  RoomCategory: req.body.RoomCategory,
  CheckIn: req.body.CheckIn,
  CheckOut: req.body.CheckOut
} ).then( () => {
  let x = new Date(req.body.CheckIn);
  DB.COUNTER.INCR({
    d: x.getDate(), 
    m: x.getMonth()+1, 
    y: x.getFullYear(), 
    RoomCategory: req.body.RoomCategory
  })
  res.redirect('/pay');
}));


//-------------------------------- SINGLE ROOM -----------------------------------------------

app.get("/singleroom", (req, res) => DB.SINGLEROOM.getSingleRoomList().then( (result) => res.json(result)) );

app.get('/singleroom/deletion', (req, res) => DB.SINGLEROOM.deleteSingleRoomItem( req.query.delID ).then( () => res.redirect('/rooms')) );

app.post("/singleroom", (req, res) => DB.SINGLEROOM.addSingleRoomItem( { RoomNo : req.body.RoomNo } ).then( () => res.redirect('/rooms')) );

//-------------------------------- TWIN ROOM -----------------------------------------------

app.get("/twinroom", (req, res) => DB.TWINROOM.getTwinRoomList().then( (result) => res.json(result)) );

app.get('/twinroom/deletion', (req, res) => DB.TWINROOM.deleteTwinRoomItem( req.query.delID ).then( () => res.redirect('/rooms')) );

app.post("/twinroom", (req, res) => DB.TWINROOM.addTwinRoomItem( { RoomNo : req.body.RoomNo } ).then( () => res.redirect('/rooms')) );

//-------------------------------- DOUBLE ROOM -----------------------------------------------

app.get("/doubleroom", (req, res) => DB.DOUBLEROOM.getDoubleRoomList().then( (result) => res.json(result)) );

app.get('/doubleroom/deletion', (req, res) => DB.DOUBLEROOM.deleteDoubleRoomItem( req.query.delID ).then( () => res.redirect('/rooms')) );

app.post("/doubleroom", (req, res) => DB.DOUBLEROOM.addDoubleRoomItem( { RoomNo : req.body.RoomNo } ).then( () => res.redirect('/rooms')) );

//-------------------------------- KING ROOM -----------------------------------------------

app.get("/kingroom", (req, res) => DB.KINGROOM.getKingRoomList().then( (result) => res.json(result)) );

app.get('/kingroom/deletion', (req, res) => DB.KINGROOM.deleteKingRoomItem( req.query.delID ).then( () => res.redirect('/rooms')) );

app.post("/kingroom", (req, res) => DB.KINGROOM.addKingRoomItem( { RoomNo : req.body.RoomNo } ).then( () => res.redirect('/rooms')) );


//---------------------------------------- U S E R-----------------------------------------------

app.get("/users", (req, res) => DB.USERS_DB.getUsersList().then( (result) => res.json(result)) );

app.post('/login', async (req, res) =>  {
  let Username = req.body.Username;
  let Password = req.body.Password;
  let CREDENTIALS = {
    Username: Username, 
    Password: Password
  }

  console.log('\n\nLOGIN SERVER --- received');
  console.log(CREDENTIALS);

  await DB.USERS_DB.loginUser(CREDENTIALS)
    .then( (result) => {
      console.log(result);

      let REPLY = {
        isLoggedIn: false,
        isAdmin: false,
        User: ""
      }

      if(result == false) {
        res.send(REPLY)
      }else{
        REPLY.isLoggedIn = true;
        REPLY.isAdmin = (Username === 'admin');
        REPLY.User = Username;
        
        res.send(REPLY)
      } 
  })
  .catch(error => {
    //handle error
    console.log("ERROR");
    console.log(error);
  });
});

app.get('/users/deletion', (req, res) => DB.USERS_DB.deleteUser( req.query.username ).then( () => res.redirect('/users')) );

app.post('/signup', (req, res) =>  {
  let username = req.body.Username;
  let email = req.body.Email;
  let phoneno = req.body.PhoneNo;
  let password = req.body.Password;
  let message = {
    Username: username, 
    PhoneNo: phoneno, 
    Email: email, 
    Password: password
  }

  DB.USERS_DB.singupUser(message)
    .then( (result) => {
      console.log("\n\nFROM SERVER ---- LOGIN")
      console.log(result);
      res.send(result);
  })
});

//---------------------------------------- ------------------------- ----------------------

// app.listen(3001, err => { err ? console.log("ERROR : " + err) : null });

const uri = process.env.MONGODB_URI;

// This route serves the React app
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")));

// Establishing the port
const PORT = process.env.PORT || 3001;
 
// Executing the server on given port number
app.listen(PORT, console.log(
  `Server started on port ${PORT}`));