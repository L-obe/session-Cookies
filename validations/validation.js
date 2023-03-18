const {check} = require("express-validator");

module.exports = [
    check("name").notEmpty().withMessage("Debe completar este campo"),

    check("color").notEmpty().withMessage("Debe elegir un color"),
    
    check("email").isEmail().withMessage("Debe completar con un email valido")
]