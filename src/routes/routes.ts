import express from "express";

import * as coffeeController from "../controllers/coffeeController/coffee_controller";
import * as homeController from "../controllers/homeController/home_controller";
import * as teaController from "../controllers/teaController/tea_controller";

export const router = express.Router();

router.get("/", homeController.getHomeMessage);
router.get("/coffee", coffeeController.getCoffee);
router.get("/coffeelover", coffeeController.getCoffeeLoverMessage);
router.get("/tea", teaController.getTea);
