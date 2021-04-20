module.exports = function (app) {
    const movementController = require("../controllers/movementController");
    const userController = require("../controllers/userController");
    const authController = require("../controllers/authController");
    const jwtVerify = require("../middlewares/jwtVerify")




    //////////////////////
    //Movements Controller//
    //////////////////////

    // Lista movimientos
    app.get("/api/movements", jwtVerify, movementController.movements);
    //crear movimiento
    app.post("/api/newmovement", jwtVerify, movementController.new);
    //borrar movimiento
    app.delete("/api/deletemovement/:id", movementController.deleteMovement);
    

    //////////////////////
    //User Controller//
    //////////////////////

    // Lista datos de usuario
    app.get("/api/user", userController.user);


    //////////////////////
    //  Auth Controller //
    //////////////////////

    // Login
    app.post("/api/login", authController.login);

    //Register
    app.post("/api/register", authController.register);

    //prueba
    app.get("/api/isAuth", jwtVerify, (req, res) => {
        res.send("u auth! congrats!")

    })
}
