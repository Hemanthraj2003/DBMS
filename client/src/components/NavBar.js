import React from "react";
import "../Style.css";

const NavBar = ({ isLogin, setCurrentTab, currentTab }) => {
  const handleTabChange = (tab) => setCurrentTab(tab);

  return (
    <div className="lightGrey navbar">
      <div className="lightGrey" style={{ color: "white", fontSize: "25px" }}>
        BIT MCA LIBRARY
      </div>
      {!isLogin ? (
        <div className="lightGrey navPart2">
          <div className="lightGrey">About Us</div>
          <div className="lightGrey">Login</div>
        </div>
      ) : (
        <div className="lightGrey navPart2">
          <div
            className="lightGrey"
            onClick={() => handleTabChange("dash")}
            id="dash"
            style={{
              ...(currentTab == "dash" ? { color: "white" } : {}),
              cursor: "pointer",
            }}
          >
            LEND
          </div>
          <div
            className="lightGrey"
            onClick={() => handleTabChange("return")}
            id="return"
            style={{
              ...(currentTab == "return" ? { color: "white" } : {}),
              cursor: "pointer",
            }}
          >
            RETURN
          </div>
          <div
            className="lightGrey"
            onClick={() => handleTabChange("members")}
            id="members"
            style={{
              ...(currentTab == "members" ? { color: "white" } : {}),
              cursor: "pointer",
            }}
          >
            MEMBERS
          </div>
          <div
            className="lightGrey"
            onClick={() => handleTabChange("books")}
            id="books"
            style={{
              ...(currentTab == "books" ? { color: "white" } : {}),
              cursor: "pointer",
            }}
          >
            BOOKS
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
