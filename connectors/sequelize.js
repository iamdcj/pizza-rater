import Sequelize, { DataTypes } from "sequelize";

const sequelize = new Sequelize("postgres://localhost:5432/rateyourslice");

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
  try {
    await Rating.sync();
  } catch (error) {
    console.log(error.message);
  }
})();

export default sequelize;
