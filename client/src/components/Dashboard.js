import React from "react";
import "./style.css";
const Dashboard = () => {
  return (
    <div id="DashBody">
      <div>
        <div>LEND BOOK</div>
        <div className="lendform">
          <form>
            <div>
              <label for="bookName">Book Name:</label>
              <input type="text" id="bookName" name="bookName" />
            </div>
            <div>
              <label for="borrowerName">Borrower Name:</label>
              <input type="text" id="borrowerName" name="borrowerName" />
            </div>
            <div>
              <label for="borrowingDate">Borrowing Date:</label>
              <input type="date" id="borrowingDate" name="borrowingDate" />
            </div>
            <div>
              <label for="submissionDate">Submission Date:</label>
              <input type="date" id="submissionDate" name="submissionDate" />
            </div>
            <div>
              <label for="borrowerId">Borrower ID:</label>
              <input type="text" id="borrowerId" name="borrowerId" />
            </div>
            <button type="submit">ADD</button>
          </form>
        </div>
      </div>
      <div>
        SUMMARY:
        <div
          style={{
            height: "58vh",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          no data yet
        </div>
        <button style={{ marginLeft: "87vw" }}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Dashboard;
