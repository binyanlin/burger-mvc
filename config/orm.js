const connection = require('./connection.js')

const orm = {
  home: (req, res) => {
    res.render('index')
  },
  selectAll: (req, res) => {
    connection.query(`SELECT * FROM burgers ORDER BY id DESC`, function(err, data) {
      if(err) throw err;
      let uneaten = [];
      let eaten = [];
      data.forEach(burger => {
        if (burger.devoured) {
          eaten.push({id:burger.id, burger:burger.burger_name})
        } else {
          uneaten.push({id:burger.id, burger:burger.burger_name})
        }
      })
      res.render('index', {eaten, uneaten});
    })
  },
  insertOne: (req, res) => {
    let newBurger = req.body.burger;
    connection.query(`INSERT INTO burgers (burger_name) VALUES (?)`, [newBurger], function(err, data) {
      if (err) throw err;
      res.redirect('/select');
    })
  },
  updateOne: (req, res) => {
    let id = req.params.id
    connection.query(`UPDATE burgers SET devoured = 1 WHERE id = ?`,[id], function(err, data) {
      if (err) throw err;
      res.redirect('/select');
    })
  }
}

module.exports = orm;