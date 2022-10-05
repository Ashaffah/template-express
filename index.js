import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/database.js";
import productRoute from "./routes/product.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected");
} catch (error) {
  console.log("Connection Error", error);
}

app.use(
  cors({
    //use cross origin resource sharing
  })
);

app.get("/", (req, res) => {
  res.send(`
  <div style="text-align:center">
    <div style="font-size: 70px">WELCOME TO</div>
    <div style="font-size: 40px">OUR SERVICE</div>
  </div>
  `);
});
app.use("/product", productRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("server running at port 5000");
});
