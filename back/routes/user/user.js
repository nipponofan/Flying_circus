const express = require("express");
const connection = require("../../config/config");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Route = /wild_flying_circus").status(200);
});

//Routes "Get"//

// get all tours//

router.get("/tours", (req, res) => {
  connection.query("SELECT * FROM tour", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la récupération des tournées");
    } else {
      res.json(results);
    }
  });
});

router.get("/representations/:tour_name", (req, res) => {
  const representation = req.params.tour_name;
  connection.query(
    "SELECT * FROM representation where tour_name = ? ",
    [representation],
    (err, results) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send("Erreur lors de la récupération des représentations");
      } else {
        res.json(results);
      }
    }
  );
});

// get all acts from a representation

router.get("/select-representation/:id", (req, res) => {
  const selectRepresentation = req.params.id;
  connection.query(
    "select * from representation_act ra join act a on ra.act_id join representation r on ra.represention_id = r.id where ra.represention_id = ?;",
    [selectRepresentation],
    (err, results) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send(
            "erreur lors de la récupérations des numéros de la représentation"
          );
      } else {
        res.json(results);
      }
    }
  );
});

// get price from a category

router.get("/tarification/:id", (req, res) => {
  const tarificationId = req.params.id;
  connection.query(
    "select price from tarification where id = ?",
    [tarificationId],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de l'affichage des prix");
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
