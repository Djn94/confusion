const router = require('express').Router();
const necklaceController = require("../../controllers/necklaceController");

router.route("/").get(necklaceController.findAll)
    .post(necklaceController.create);

router.route('/:id').get(necklaceController.findById)
    .put(necklaceController.update).delete(necklaceController.remove);

module.exports = router;