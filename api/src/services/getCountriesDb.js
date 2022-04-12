const axios = require("axios");
const { Country, Activity } = require("../db");

const getCountriesDb = async () => {
  return Country.findAll({
    include: [
      {
        model: Activity,
        attribue: "name",
      },
    ],
  });
};

module.exports = getCountriesDb;
