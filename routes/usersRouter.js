const express = require("express");
const router = express.Router();
const usersController = require("../controller/usersController");

//route create untuk registrasi
router.post("/", usersController.store);

//router read
router.get("/", usersController.index);

// router read by id
router.get("/:id", usersController.show);

//route update
router.put("/:id", usersController.update);
//route delete
router.delete("/:id", usersController.destroy);

module.exports = router;
