const request = require("supertest");
const mongoose = require("../../config/config.js");
const server = require("../../app.js");
const Book = require("../../src/api/resources/books/books.model.js");

// helpers
beforeEach(async () => {
  await Book.deleteMany({});
});
afterAll(async () => {
  await Book.deleteMany({});
  server.close();
  await mongoose.disconnect();
});

describe("getBooks", () => {
  it("should return status ok and return book", async () => {
    const book = Book.create({ title: "book1" });
    const res = await request(server).get(`api/books/${book.id}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toMatch("book retrieved successfully");
    expect(res.body.data.book).toMatchObject({ title: "book1" });
  });

  it("should return not found ", async () => {
    // send random id not found
    const res = await request(server).get(`api/books/5effaa5662679b5af2c58829`);
    expect(res.status).toBe(404);
  });
});

describe("updateBooks", () => {
  it("should return not found ", async () => {
    // send random id not found
    const res = await request(server).put(`api/books/5effaa5662679b5af2c58829`);
    expect(res.status).toBe(404);
  });
  it("should return status ok and update book", async () => {
    const book = Book.create({ title: "book1" });

    const res = await request(server)
      .put(`api/books/${book.id}`)
      .send({ title: "book1 update" });

    expect(res.status).toBe(200);
    expect(res.body.message).toMatch("book updated successfully");
    expect(res.body.data.book).toMatchObject({ title: "book1 update" });
  });
});

describe("deleteBooks", () => {
    it("should return not found ", async () => {
      // send random id not found
      const res = await request(server).delete(`api/books/5effaa5662679b5af2c58829`);
      expect(res.status).toBe(404);
    });
    it("should return status ok and delete book", async () => {
      =
  
      const res = await request(server)
        .delete(`api/books/${book.id}`);
  
      expect(res.status).toBe(200);
      expect(res.body.message).toMatch("book deleted successfully");
      
    });
  });
