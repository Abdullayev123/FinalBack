import express from "express";
import {
  addCars,
  getAllCars,
  getByid,
  searchCars,
  deleteByid,
  updateCars,
} from "../controller/allcarsController.js";

// conreollerden evvel bu yazilir

export const allcarsRoute = express.Router();
allcarsRoute.get("/", getAllCars);
allcarsRoute.get("/search", searchCars);
allcarsRoute.get("/:id", getByid);
// deleted
allcarsRoute.delete("/delete/:id", deleteByid);
allcarsRoute.post("/add", addCars);
// updated
allcarsRoute.put("/update/:id", updateCars);
