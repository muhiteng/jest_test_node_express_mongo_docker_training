require("../../config/config.js");
const booksService = require("../../src/api/resources/books/books.service.js");
const Book = require("../../src/api/resources/books/books.model.js");

describe("getbooks", () => {
  it("should return empty array", async () => {
    const books = await booksService.getBooks();

    expect(books.length).toBe(0);
  });
  it("should return 2 books", async () => {
    await Book.insertMany([{ title: "book1" }, { title: "book2" }]);

    const books = await booksService.getBooks();

    expect(books.length).toBe(2);
  });
});
