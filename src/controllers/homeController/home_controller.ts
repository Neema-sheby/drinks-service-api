import { Request, Response } from "express";
import * as homeService from "../../services/home_service";

export const getHomeMessage = async (req: Request, res: Response) => {
  const homeMessage = homeService.getHomeMessage();
  res.send(homeMessage).status(200);
};
