import express from "express";
import dotenv from "dotenv";
import apiRoutes from "./src/routes";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("welcome to the backend");
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", apiRoutes);

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(PORT, () => {
  const isDefaultPort = !process.env.PORT || process.env.PORT === "4000";
  if (isDefaultPort) {
    // eslint-disable-next-line no-console
    console.log("welcome to the backend");
  }
  // eslint-disable-next-line no-console
  console.log(`API listening on http://localhost:${PORT}`);
});


