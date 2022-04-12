const { Router } = require("express");
const { Activity, Country } = require("../db");

const router = Router();

router.post("/", async (req, res, next) => {
  const { name, dificulty, duration, season, countries } = req.body;
  console.log(req.body);
  try {
    const [newActivity, boolean] = await Activity.findOrCreate({
      where: {
        name,
      },
      defaults: {
        dificulty,
        duration,
        season,
      },
    });

    boolean &&
      countries.map(async (c) => {
        const country = await Country.findOne({
          where: {
            name: c,
          },
        });
        country.addActivity(newActivity);
      });

    res.send("done");
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const activities = await Activity.findAll();
    res.send(activities);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
