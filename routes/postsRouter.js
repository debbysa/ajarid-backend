const express = require("express");
const router = express.Router();
const postsController = require("../controller/postsController");

//route create untuk registrasi
router.post("/", postsController.store);

//router read
router.get("/", postsController.index);
//route update
router.put("/:id", postsController.update);

//route delete
router.delete("/:id", postsController.destroy);

module.exports = router;