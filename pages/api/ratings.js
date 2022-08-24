import sequelize, { Rating } from "../../connectors/sequelize";

export default async function handler(req, res) {
  let ratings = [];

  try {
    if (!sequelize) {
      throw new Error("No connection establised");
    }



    await sequelize.authenticate();

    const ratingsData = await Rating.findAll();

    ratings = JSON.stringify(ratingsData);
    ratings = JSON.parse(ratings);

    res.status(200).json(ratings);
  } catch (error) {
    console.log(error);

    res.status(400).send("Something went wrong");
  }
}
