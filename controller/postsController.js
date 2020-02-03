const Posts = require("../model/posts");
const { calculateLimitAndOffset, paginate } = require("paginate-info");

module.exports = {
  //semua postingan
  index: function(req, res) {
    Posts.findAll().then(function(rows) {
      const total = rows.length;
      const limit = 6;
      const total_page = Math.ceil(total / limit);
      const { page } = req.query;
      // kuncinya disini :
      const offset = (page - 1) * limit;
      const data = rows.slice(offset, offset + limit);
      res.send({ data, page, total_page });
    });
  },

  // postingan berdasarkan id
  show: function(req, res) {
    Posts.findByPk(req.params.id).then(function(row) {
      res.json(row);
    });
  },

  //coba
  showByUserId: function(req, res) {
    Posts.findAll({
      where: {
        user_id: req.params.user_id
      }
    }).then(function(row) {
      console.log(row);
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

const getAll = async (req, res) => {
  try {
    const {
      query: { currentPage, pageSize }
    } = req;
    const { limit, offset } = calculateLimitAndOffset(currentPage, pageSize);
    const { rows, count } = await Posts.findAndCountAll({ limit, offet });
    const meta = paginate(currentPage, count, rows, pageSize);
    return response(res, 200, "success", { rows, meta });
  } catch (error) {
    return response(res, 500, "error", serverError);
  }
};
