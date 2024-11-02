import express from "express";
const app = express();
const port = 3000;
// app.use(cors());
app.use(express.json());
app.post("/api/send", (req, res) => {
  res.status(200).json({ message: "data" });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
