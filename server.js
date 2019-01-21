const express = require('express')
const serveStatic = require('serve-static')
const specMenu = require('./data/specMenu.js')
const reviewsData = require('./data/reviewsinfo.js')
const path = require('path')
// create the express app
const app = express()
// create middleware to handle the serving the app
app.use("/", serveStatic ( path.join (__dirname, '/public') ) )
// serve index by default
// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/public/index.html')
// })
// mock api routes
app.get('/api/specmenu', function (req, res) {
  res.json(specMenu);
});

app.get('/api/reviews', function (req, res) {
  res.json(reviewsData);
});
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
// Create default port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)
// Log to feedback that this is actually running
console.log('Server started on port ' + port)
