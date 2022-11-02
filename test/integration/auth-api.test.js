const request = require("supertest");
const mongoose = require("../../config/config.js");
const server = require("../../app.js");

// helpers

afterAll(async () => {
  server.close();
  await mongoose.disconnect();
});

describe("register", () => {
  it("should return 400 if any field is missing ", async () => {
    const emailRes = request(server).post("/api/auth/register");
    expect(emailRes.status).toBe(400);
    expect(emailRes.body.message).toMatch("email is required");

    const passwordRes = request(server)
      .post("/api/auth/register")
      .send({ email: "test@test.com" });
    expect(passwordRes.status).toBe(400);
    expect(passwordRes.body.message).toMatch("password is required");
  });
  it("should return 400 if any password less than 8 characters ", async () => {
    const passwordRes = request(server)
      .post("/api/auth/register")
      .send({ email: "test@test.com", password: "123" });
    expect(passwordRes.status).toBe(400);
    expect(passwordRes.body.message).toMatch("password is too short");
  });
  it("should return 400 if confirm password dosen't match password ", async () => {
    const passwordRes = request(server).post("/api/auth/register").send({
      email: "test@test.com",
      password: "12345678",
      confirmpassword: "123",
    });
    expect(passwordRes.status).toBe(400);
    expect(passwordRes.body.message).toMatch(
      "confirm passord must match password"
    );
  });
  it("should return ok 200 and register the user ", async () => {
    const res = request(server).post("/api/auth/register").send({
      email: "test@test.com",
      password: "12345678",
      confirmpassword: "12345678",
    });
    expect(res.status).toBe(200);
    expect(res.body.message).toMatch("register successfully done");
  });
});
