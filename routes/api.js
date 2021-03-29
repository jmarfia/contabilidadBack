module.exports = function (app) {
    const movementController = require("../controllers/movementController");


    //////////////////////
    //Movements Controller//
    //////////////////////

    // Lista movimientos
    app.get("/api/movements", movementController.movements);
    //crear producto
    app.post("/api/newmovement", movementController.new);

}