import request from "supertest";
import { app } from "../../app";

describe("test to check /tea endpoint ", () => {
  test("GET request to /tea endpoint will return the correct object with a parameter", async () => {
    const res = await request(app).get("/tea");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ drinkType: "Tea", name: "Black tea" });
  });

  test("GET request to /tea endpoint will return the correct object with default parameter", async () => {
    const res = await request(app).get("/tea").query({ teaName: "Green tea" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ drinkType: "Tea", name: "Green tea" });
  });
});
