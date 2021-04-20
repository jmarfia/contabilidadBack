const { Movement } = require("../data/models");
var ObjectId = require('mongodb').ObjectID;

module.exports = {
    movements(req, res) {
        Movement.find()
            .limit(100)
            .sort("desc -createdAt")
            .exec()
            .then((movements) => {
                res.json(movements);
            });
    },
    new(req, res) {
        newMovement = new Movement({
            name: req.body.name,
            amount: req.body.amount,
            type: req.body.type,
        });
        newMovement.save((err, savedMovement) => {
            if (err) {
                return res.json({
                    error: `Ha ocurrido un error al crear el movimiento. ${err}`,
                });
            }
            return res.json(savedMovement);
        });
    },

    deleteMovement(req, res) {
        let id = req.params.id;
        Movement.findByIdAndRemove( id, function (err, docs) {
            if (err){
                res.status(400)
                res.send("error")
            }
            else{
                res.json({"Removed User": docs});
            }
        } )
      },
}