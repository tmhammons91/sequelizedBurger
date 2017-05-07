var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            var burgerObj = {
                Burger: dbBurger
            }
            res.render("index", burgerObj);
            //console.log(JSON.stringify(dbBurger)); 
        });
    });

    app.post("/", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: false
        }).then(function (dbBurger) {
            res.redirect("/");
        });
    });

    app.put("/:id", function (req, res) {
        db.Burger.update({
            devoured: true
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (dbBurger) {
                res.redirect("/");
            });
    });
};

