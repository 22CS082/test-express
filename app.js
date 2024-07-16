const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"));
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/view/home.html');
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname+'/view/About.html');
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname+'/view/Contact.html');
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname+'/view/login.html');
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})