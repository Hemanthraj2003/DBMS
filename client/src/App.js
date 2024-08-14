import React, { useState } from "react";
import "./Style.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ReturnBook from "./components/ReturnBook";
import Members from "./components/Members";
import Books from "./components/Books";
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [currentTab, setCurrentTab] = useState("members");
  return (
    <div
      style={{
        boxSizing: "border-box",
      }}
    >
      <NavBar
        isLogin={isLogin}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      />
      {!isLogin ? (
        <div className="LoginContainer">
          <Login setIsLogin={setIsLogin} />
        </div>
      ) : (
        <>
          {currentTab === "members" && <Members />}
          {currentTab === "books" && <Books />}
          {currentTab === "return" && <ReturnBook />}
          {currentTab === "dash" && <Dashboard />}
        </>
      )}
    </div>
  );
};

export default App;
