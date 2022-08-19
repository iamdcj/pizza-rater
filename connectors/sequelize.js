import Sequelize, { DataTypes } from "sequelize";

console.log(process.env.DB_CONNECTION);

const sequelize = new Sequelize(process.env.DB_CONNECTION);

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
