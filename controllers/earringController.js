const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Earring.find(req.query)
            .then(dbEarring => res.json(dbEarring))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Earring.findById(req.params.id)
            .then(dbEarring => res.json(dbEarring))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Earring.create(req.body)
            .then(dbEarring => res.json(dbEarring))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Earring.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbEarring => res.json(dbEarring))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Earring.findById(req.params.id)
            .then(dbEarring => dbEarring.remove())
            .then(dbEarring => res.json(dbEarring))
            .catch(err => res.status(422).json(err));
    }
};
