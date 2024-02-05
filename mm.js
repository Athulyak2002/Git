app.get("/books", (req, res) => {
    const q = "SELECT * FROM workers";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });
  
  app.post("/books", (req, res) => {
    const q = "INSERT INTO workers(WORKER_ID, FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, DEPARTMENT) VALUES (?)";
  
    const values = [
      req.body.WORKER_ID,
      req.body.FIRST_NAME,
      req.body.LAST_NAME,
      req.body.SALARY,
      req.body.JOINING_DATE,
      req.body.DEPARTMENT
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  app.delete("/workers/:id", (req, res) => {
    const bookId = req.params.id;
    const q = " DELETE FROM workers WHERE id = ? ";
  
    db.query(q, [bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE workers SET WORKER_ID= ?,FIRST_NAME= ?,LAST_NAME= ?,SALARY= ?,JOINING_DATE= ?,DEPARTMENT= ?,WHERE id = ?";
  
    const values = [
      req.body.WORKER_ID,
      req.body.FIRST_NAME,
      req.body.LAST_NAME,
      req.body.SALARY,
      req.body.JOINING_DATE,
      req.body.DEPARTMENT
    ];
  
    db.query(q, [...values,bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });