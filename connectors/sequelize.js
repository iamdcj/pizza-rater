import Sequelize, { DataTypes } from "sequelize";

let sequelize = null;

try {
  sequelize = new Sequelize("postgres://localhost:5432/rateyourslice");
} catch (error) {
  console.log(error);
}

export const Rating = sequelize.define(
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

(async function () {
  console.log(1, Rating);

  if (!Rating) {
    return;
  }

  try {
    await Rating.sync();
  } catch (error) {
    console.log("Sync error: ", error.message);
  }
})();

export default sequelize;
