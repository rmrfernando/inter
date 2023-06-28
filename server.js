import express from "express";
import cors from "cors";
import connect from "./db/connect.js";
import userRoutes from "./routes/UserRoutes.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "server is started" });
});

const init = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log("server is listening");
    });
  } catch (error) {
    console.log(error);
  }
};

init();
