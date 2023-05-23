const router = require("express").Router();
const exerciseRoutes = require("./exerciseRoutes");
const userRoutes = require("./userRoutes");

router.use("/exercise", exerciseRoutes);
router.use("/user", userRoutes);

module.exports = router;