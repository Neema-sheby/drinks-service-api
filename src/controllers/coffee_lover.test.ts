import request from "supertest";
import { app } from "../app";

describe("test to check the coffee endpoint", () => {
  test("GET /coffeelover should return the correct message", async () => {
    const res = await request(app).get("/coffeelover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I like Coffee!");
  });
});
