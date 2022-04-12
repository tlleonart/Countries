const axios = require("axios");

const getCountriesAPI = () => {
  return axios.get("https://restcountries.com/v3.1/all").then((r) => r.data);
};

module.exports = getCountriesAPI;
