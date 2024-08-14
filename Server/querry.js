export const loginQuerry =
  "SELECT * FROM login WHERE user = ? AND password = ?";

export const insertMembers = "INSERT INTO members (name, type) VALUES (?, ?)";

export const getMembers = "SELECT * FROM members";

export const getBooks = "SELECT * FROM book";

export const insertBook = "INSERT INTO book (name, count) VALUES (?, ?)";
