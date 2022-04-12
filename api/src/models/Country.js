const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.FLOAT,
      },
      pop: {
        type: DataTypes.STRING,
      },
    },
    {
      charset: "utf8",
      timestamps: false,
      createdAt: false,
      updateAt: false,
    }
  );
};

/* id: c.cioc,
            name: c.translations.spa.common,
            img: c.flag,
            continent: c.continents[0],
            capital: c.capital[0],
            subregion: c.subregion,
            area: c.area,
            pop: c.population, */
