import React, { useState, useEffect } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    count: "",
  });
  const [error, setError] = useState("");

  // Fetch all books when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/books/all")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission to add a new book
  const handleAddBook = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.count) {
      setError("Both name and count are required.");
      return;
    }

    fetch("http://localhost:5000/books/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setBooks([...books, data.newBook]); // Update the list with the new book
          setFormData({ name: "", count: "" }); // Clear the form
          setError("");
        } else {
          setError("Failed to add book.");
        }
      })
      .catch((error) => {
        console.error("Error adding book:", error);
        setError("An error occurred while adding the book.");
      });
  };

  return (
    <div id="DashBody">
      <div>
        <div>BOOKS</div>
        <div className="lendform">
          <form onSubmit={handleAddBook}>
            <div>
              <label htmlFor="name">BOOK Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="count">BOOK COUNT:</label>
              <input
                type="number"
                id="count"
                name="count"
                value={formData.count}
                onChange={handleInputChange}
                required
              />
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <button type="submit">ADD BOOK</button>
          </form>
        </div>
      </div>
      <div>
        BOOK LIST:
        <div
          style={{
            height: "58vh",
            overflowY: "auto",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {loading ? (
            <div>Loading...</div>
          ) : books.length > 0 ? (
            books.map((book) => (
              <div
                key={book.id}
                style={{
                  margin: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  width: "80%",
                }}
              >
                <p>
                  <strong>Name:</strong> {book.name}
                </p>
                <p>
                  <strong>Count:</strong> {book.count}
                </p>
              </div>
            ))
          ) : (
            <div>No data yet</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Books;
