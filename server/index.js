import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//routes
import postRoute from "./routes/posts.js";
import commentRoute from "./routes/comments.js";
import usersRoute from "./routes/users.js";

app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);
app.use("/api/users", usersRoute);

const Port = 3000;
app.listen(Port, () => {
  console.log(`Server listening on port ${Port}`);
});
