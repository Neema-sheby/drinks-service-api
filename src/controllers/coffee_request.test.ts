import request from "supertest";
import { app } from "../app";

describe("test to check coffee endpoint", () => {
  test("GET /coffee should return correct object", async () => {
    const res = await request(app)
      .get("/coffee")
      .query({ coffeeName: "Latte" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ drinkType: "Coffee", name: "Latte" });
  });

  test("GET /coffee with default parameter should return correct object", async () => {
    const res = await request(app)
      .get("/coffee")
      .query({ coffeeName: "Latte" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ drinkType: "Coffee", name: "Latte" });
  });

  test("GET /coffee with parameter should return correct object", async () => {
    const res = await request(app)
      .get("/coffee")
      .query({ coffeeName: "Cappuccino" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ drinkType: "Coffee", name: "Cappuccino" });
  });
});
