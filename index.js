const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
var db = mysql.createConnection({
  port: 4001,
  host: "localhost",
  user: "root",
  password: "",
  database: "movie-database",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
db.connect(function (err) {
  if (err) throw err;
  console.log("connected");
});
app.get("/api/get", (req, res) => {
  const sql = "select * from movie";
  db.query(sql, (err, result) => {
    res.send(result);
  });
});
app.post("/api/insert", (req, res) => {
  const mov_name = req.body.moviename;
  const actor = req.body.actor;
  const actress = req.body.actress;
  const year1 = req.body.year;
  const dir_name = req.body.dir;

  db.query(
    "insert into movie(mov_name,actor,actress,year,dir_name)values(?,?,?,?,?)",
    [mov_name, actor, actress, year1, dir_name],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(4000, () => {
  console.log("running on port 4000");
});
