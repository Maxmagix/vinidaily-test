module.exports = function (app) {
  app.get('/api/wine', (req, res) => {
    const name = req.query.name;
    if (!name)
      res.error.send('No name provided');
    res.send('GET ' + name + '!');
  })
}