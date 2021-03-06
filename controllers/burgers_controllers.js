var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers_name: data
    };
    console.log(hbsObject, "WTFFFF2");
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
  req.body.burger_name, req.body.devoured
  ], function(data) {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(data) {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
