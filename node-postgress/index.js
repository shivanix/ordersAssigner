const express = require("express")
const app = express();
const cors = require("cors")
PORT = 5000

// middleware
app.use(cors());
app.use(express.json())



app.listen(PORT, () =>{
  console.log(`Server has started on port ${PORT}`);
})