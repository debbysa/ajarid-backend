const Users = require('../model/users')

module.exports = {

    index: function (req, res) {
        Users.findAll().then(function (rows) {
            res.json(rows)
        })
    },

    store: function (req, res) {
        Users.create(req.body).then(function (rows) {
            res.json(rows)
        })
    },
    update: function (req, res) {
        Users.findByPk(req.params.id).then(function (row) {
            row.update(req.body)
            res.json(row)
        })
    },

    destroy: function (req, res) {
        Users.findByPk(req.params.id).then(function (row) {
            row.destroy()
            res.json(row)
        })
    }
}