const connection = require('./connection.js')

const orm = {
  home: (req, res) => {
    res.render('index')
  },
  selectAll: (req, res) => {
    console.log("selectAll route hit")
  },
  insertOne: (req, res) => {
    console.log("insertOne route hit")
  },
  updateOne: (req, res) => {
    console.log("updateOne route hit")
  }
}

module.exports = orm;