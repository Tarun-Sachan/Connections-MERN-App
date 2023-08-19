const express = require("express");
const router = express.Router();

const {
  getAllConnections,
  getConnection,
  createConnection,
  updateConnection,
  deleteConnection,
} = require("../controllers/connections");

router.route("/").post(createConnection).get(getAllConnections);
router
  .route("/:id")
  .get(getConnection)
  .delete(deleteConnection)
  .patch(updateConnection);

module.exports = router;
