import Sequelize, { DataTypes } from "sequelize";

let sequelize = null;
export let Rating = null;

try {
  sequelize = new Sequelize("rateyourslice", {
    host: "localhost",
    dialect: "postgres",
    operatorAliases: false,
  });
} catch (error) {
  console.log(error);
}

if (sequelize) {
  Rating = sequelize.define(
    "Rating",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slice: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      tableName: "ratings",
      timestamps: false,
    }
  );
}

(async function () {
  if (!rating) {
    return;
  }

  try {
    await Rating.sync();
  } catch (error) {
    console.log(error.message);
  }
})();

export default sequelize;
