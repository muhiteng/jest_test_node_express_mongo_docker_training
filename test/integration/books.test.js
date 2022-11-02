require("../../config/config.js");
const booksService = require("../../src/api/resources/books/books.service.js");
const Book = require("../../src/api/resources/books/books.model.js");

//helpers
beforeEach(async () => {
  await Book.deleteMany({});
});
afterAll(async () => {
  await Book.deleteMany({});
});

describe("getBooks", () => {
  it("should return empty array", async () => {
    const books = await booksService.getBooks();

    expect(books.length).toBe(0);
  });
  it("should return 2 books", async () => {
    await Book.insertMany([{ title: "book1" }, { title: "book2" }]);

    const books = await booksService.getBooks();

    expect(books.length).toBe(2);
    expect(books[0]).toMatchObject({ title: "book1" });
    expect(books[1]).toMatchObject({ title: "book2" });
  });
});
