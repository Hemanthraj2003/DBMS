import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dbConnection from "./db.js";
import {
  loginQuerry,
  insertMembers,
  getMembers,
  getBooks,
  insertBook,
} from "./querry.js";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  dbConnection();
  res.send("hello world!");
});

app.get("/members/all", (req, res) => {
  dbConnection.query(getMembers, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred while fetching members.");
    }

    res.json(results);
  });
});
app.post("/members/add", (req, res) => {
  const { name, type } = req.body;

  if (!name || !type) {
    return res
      .status(400)
      .json({ success: false, message: "Name and type are required." });
  }

  dbConnection.query(insertMembers, [name, type], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res
        .status(500)
        .json({ success: false, message: "Database error." });
    }

    const newMember = {
      id: result.insertId,
      name,
      type,
    };

    res.status(201).json({ success: true, newMember });
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  dbConnection.query(loginQuerry, [username, password], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.status(200).json({ success: true, message: "Login successful!" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

app.get("/books/all", (req, res) => {
  dbConnection.query(getBooks, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send("An error occurred while fetching members.");
    }
    res.json(results);
  });
});

app.post("/books/add", (req, res) => {
  const { name, count } = req.body;
  if (!name || !count) {
    return res
      .status(400)
      .json({ success: false, message: "Name and type are required." });
  }

  dbConnection.query(insertBook, [name, count], (error, results) => {
    if (error) {
      console.error("Error inserting data:", error);
      return res
        .status(500)
        .json({ success: false, message: "Database error." });
    }
    console.log(results);
    const newBook = {
      id: results.insertId,
      name,
      count,
    };
    res.status(200).json({ success: true, newBook });
  });
});
app.listen(PORT, () => {
  console.log(`server listening on port: localhost:${PORT}`);
});
