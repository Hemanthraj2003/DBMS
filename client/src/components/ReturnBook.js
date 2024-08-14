import React from "react";
import "./style.css";

const ReturnBook = () => {
  return (
    <div id="DashBody">
      <div>
        <div>RETURN BOOK</div>
        <div className="lendform">
          <form>
            <div>
              <label for="borrowerId">Borrower ID:</label>
              <input type="text" id="borrowerId" name="borrowerId" />
            </div>
            <div>
              <label for="borrowerName">Borrower Name:</label>
              <input type="text" id="borrowerName" name="borrowerName" />
            </div>

            <div>
              <label for="borrowerId">OVER DUE:</label>
              <input type="text" id="borrowerId" name="borrowerId" />
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
      <div>
        BORROWED BOOK:
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

export default ReturnBook;
