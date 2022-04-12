const Country = require("../models/Country");

const createCountry = async (c) => {
  try {
    await Country.create({
      name: c.translations.spa.common,
      img: c.flags[0],
      continent: c.continents[0],
      capital: c.capital[0],
      subregion: c.subregion,
      area: c.area,
      pop: c.population,
    });
  } catch (e) {
    return e;
  }
};

module.exports = createCountry;
