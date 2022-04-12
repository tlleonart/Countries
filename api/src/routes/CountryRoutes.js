const axios = require("axios");
const { Router } = require("express");
const { Activity, Country } = require("../db");
const getCountriesAPI = require("../services/getCountriesAPI");
const getCountriesDb = require("../services/getCountriesDB");
const getCountriesName = require("../services/getCountriesName");
const getCountryId = require("../services/getCountryId");

const router = Router();

router.get("/", async (req, res, next) => {
  let countriesDb = await getCountriesDb();
  const { name } = req.query;

  try {
    if (countriesDb.length == 0) {
      const countriesApi = await getCountriesAPI();
      await Country.bulkCreate(
        countriesApi.map((c) => {
          return {
            name: c.translations.spa.common,
            img: c.flags.png,
            continent: c.continents == undefined ? "-" : c.continents[0],
            capital: c.capital == undefined ? "-" : c.capital[0],
            subregion: c.subregion,
            area: Number(c.area),
            pop: Number(c.population),
          };
        })
      );
    }
    console.log(name);

    let response = name
      ? await getCountriesName(name)
      : await Country.findAll({
          include: [
            {
              model: Activity,
              attribute: "name",
            },
          ],
        });
    res.send(response);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  getCountryId(id)
    .then((r) => res.send(r))
    .catch((e) => next(e));
});

module.exports = router;
