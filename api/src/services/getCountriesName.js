const axios = require("axios");
const { Country } = require("../db");
const { Op } = require("sequelize");
const Activity = require("../models/Activity");

const getCountriesName = (name) => {
  return Country.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
    },
  });
};

module.exports = getCountriesName;
