import express from "express";//api connection
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lamadev123",
  database: "namitha",
});

app.get("/", (req, res) => {
  res.json("hello");
});
app.get("/workers", (req, res) => {
  const q = "SELECT * FROM workers";
  db.query(q, (error, data) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    return res.json(data);
  });
});

app.post("/workers", (req, res) => {
  const q = "INSERT INTO workers(WORKER_ID, FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, DEPARTMENT) VALUES (?)";

  const values = [
    req.body.WORKER_ID,
    req.body.FIRST_NAME,
    req.body.LAST_NAME,
    req.body.SALARY,
    req.body.JOINING_DATE,
    req.body.DEPARTMENT
  ];

  db.query(q, [values], (error, data) => {
    if (error) return res.send(error);
    return res.json(data);
  });
});

app.delete("/workers/:id", (req, res) => {
  const workersId = req.params.id;
  const q = " DELETE FROM workers WHERE id = ? ";

  db.query(q, [workersId], (error, data) => {
    if (error) return res.send(error);
    return res.json(data);
  });
});

app.put("/workers/:id", (req, res) => {
  const workersId = req.params.id;
  const q = "UPDATE workers SET WORKER_ID= ?,FIRST_NAME= ?,LAST_NAME= ?,SALARY= ?,JOINING_DATE= ?,DEPARTMENT= ?,WHERE id = ?";

  const values = [
    req.body.WORKER_ID,
    req.body.FIRST_NAME,
    req.body.LAST_NAME,
    req.body.SALARY,
    req.body.JOINING_DATE,
    req.body.DEPARTMENT
  ];

  db.query(q, [...values,workersId], (error, data) => {
    if (error) return res.send(error);
    return res.json(data);
  });
});

app.listen(8802, () => {
  console.log("Connected to backend.");
});