const path = require("path");
const router = require("express").Router();
const necklaceRoutes = require("./necklaces");
// const googleRoutes = require("./google");

// Book routes
router.use("/necklaces", necklaceRoutes);

// // Google Routes
// router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
