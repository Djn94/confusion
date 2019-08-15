const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Necklace.find(req.query)
            .then(dbNecklace => res.json(dbNecklace))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Necklace.findById(req.params.id)
            .then(dbNecklace => res.json(dbNecklace))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Necklace.create(req.body)
            .then(dbNecklace => res.json(dbNecklace))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Necklace.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbNecklace => res.json(dbNecklace))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Necklace.findById(req.params.id)
            .then(dbNecklace => dbNecklace.remove())
            .then(dbNecklace => res.json(dbNecklace))
            .catch(err => res.status(422).json(err));
    }
};
