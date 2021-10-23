const express = require("express")
const app = express();
const cors = require("cors")
PORT = 5000

// middleware
app.use(cors());
app.use(express.json())

/***********************************Routes******************************************/

/**Get all drivers from drivers entity from db */

app.get("/", async (req, res) => {
  // console.log("Backendddddd connected");
  try {
    const allDrivers = await pool.query("SELECT * FROM drivers");
    res.json(allDrivers.rows);
  } catch (err) {
    console.log(err.message);
  }
});


app.listen(PORT, () =>{
  console.log(`Server has started on port ${PORT}`);
})