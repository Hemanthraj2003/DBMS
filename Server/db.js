import mysql from "mysql2";

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
});
dbConnection.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Connected to MySQL as id " + dbConnection.threadId);
});
dbConnection.query("use library", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  //   console.log(result);
});

export default dbConnection;
