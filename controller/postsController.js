const Posts = require("../model/posts");

module.exports = {
  //semua postingan
  index: function(req, res) {
    Posts.findAll().then(function(rows) {
      res.json(rows);
    });
  },

  // postingan berdasarkan id
  show: function(req, res) {
    Posts.findByPk(req.params.id).then(function(row) {
      res.json(row);
    });
  },

  store: function(req, res) {
    Posts.create(req.body).then(function(rows) {
      res.json(rows);
    });
  },
  update: function(req, res) {
    Posts.findByPk(req.params.id).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  },

  destroy: function(req, res) {
    Posts.findByPk(req.params.id).then(function(row) {
      row.destroy();
      res.json(row);
    });
  }
};
