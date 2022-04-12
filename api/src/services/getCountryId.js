const { Country, Activity } = require("../db");

const getCountryId = async (countryId) => {
  const countryDetail = await Country.findOne({
    where: {
      id: countryId,
    },
    include: [
      {
        model: Activity,
        through: {
          attributes: [],
        },
      },
    ],
  });
  return countryDetail;
};

module.exports = getCountryId;
