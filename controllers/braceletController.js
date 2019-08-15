const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Bracelet.find(req.query)
            .then(dbBracelet => res.json(dbBracelet))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Bracelet.findById(req.params.id)
            .then(dbBracelet => res.json(dbBracelet))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Bracelet.create(req.body)
            .then(dbBracelet => res.json(dbBracelet))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Bracelet.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbBracelet => res.json(dbBracelet))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Bracelet.findById(req.params.id)
            .then(dbBracelet => dbBracelet.remove())
            .then(dbBracelet => res.json(dbBracelet))
            .catch(err => res.status(422).json(err));
    }
};
