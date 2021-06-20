import express from "express";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";

// dotenv
import "./config/dotenv";

// routes definition
import authRoutes from "./routes/auth.routes";
import privateRoutes from "./routes/private.routes";

// inits
const app = express();

// settings
app.set("port", process.env.PORT || 7000);

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.get("/", (_req, res) => {
  res.send(`🔴 - carmin_api is running at http://localhost:${app.get("port")}`);
});

app.use(authRoutes);
app.use(privateRoutes);

export default app;
