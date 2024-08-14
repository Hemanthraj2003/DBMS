import React, { useState, useEffect } from "react";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/members/all")
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.type) {
      setError("Both name and type are required.");
      return;
    }

    fetch("http://localhost:5000/members/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMembers([...members, data.newMember]);
          setFormData({ name: "", type: "" });
          setError("");
        } else {
          setError("Failed to add member.");
        }
      })
      .catch((error) => {
        console.error("Error adding member:", error);
        setError("An error occurred while adding the member.");
      });
  };

  return (
    <div id="DashBody">
      <div>
        <div>MEMBERS</div>
        <div className="lendform">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="type">Type:</label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
              />
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <button type="submit">ADD MEMBER</button>
          </form>
        </div>
      </div>
      <div>
        MEMBERS LIST:
        <div
          style={{
            height: "58vh",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          {loading ? (
            <div>Loading...</div>
          ) : members.length > 0 ? (
            members.map((member) => (
              <div
                key={member.id}
                style={{
                  margin: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  width: "80%",
                }}
              >
                <p>
                  <strong>ID:</strong> {member.id}
                </p>
                <p>
                  <strong>Name:</strong> {member.name}
                </p>
                <p>
                  <strong>Type:</strong> {member.type}
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

export default Members;
