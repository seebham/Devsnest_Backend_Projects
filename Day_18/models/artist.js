const { DataTypes: Datatypes } = require("sequelize");
const sequelize = require("../database");

const Artist = sequelize.define(
  "Artist",
  {
    Name: {
      field: "Name",
      type: Datatypes.STRING,
      allowNull: false,
    },
    Nationality: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    Gender: {
      type: Datatypes.STRING,
    },
    "BIRTH YEAR": {
      type: Datatypes.STRING,
      allowNull: false,
    },
    "Death Year": {
      type: Datatypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    indexes: [
      {
        name: "Artist_trigrm",
        concurrently: true,
        using: "GIN",
        fields: [sequelize.literal('"Name" gin_trgm_ops')],
      },
    ],
  }
);

module.exports = Artist;
