module.exports = function (app) {
    const movementController = require("../controllers/movementController");
    const userController = require("../controllers/userController");



    //////////////////////
    //Movements Controller//
    //////////////////////

    // Lista movimientos
    app.get("/api/movements", movementController.movements);
    //crear producto
    app.post("/api/newmovement", movementController.new);

    //////////////////////
    //User Controller//
    //////////////////////

    // Lista movimientos
    app.get("/api/user", userController.user);
    //crear producto
    app.post("/api/register", userController.new);

}