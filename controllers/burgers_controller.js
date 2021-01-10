const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");


router.get("/", function(req, res) {
  burger.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
    const burgerName = req.body.burger_name;

    if (burgerName.length < 21 && burgerName.length !=0) {
        burger.insertOne["burger_name","devoured"],[burgerName, req.body.devoured],
        function(result) {
            res.json({ id: result.inserId});
        };
        } else {
            console.log (`Burger name exeeds character`)
        }
    });

router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devour: req.body.devour
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
