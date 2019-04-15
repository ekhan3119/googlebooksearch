const router = require("express").Router();
const searchRoutes = require("./search");
const savedRoutes = require("./saved");


// search and saved routes
router.use("/search", searchRoutes);
router.use("/saved", savedRoutes);


module.exports = router;
