import "./dotenv";

export default {
  JWT_SECRET: process.env.JWT_SECRET || "POTATO_SMASH_PLOP",
  DB: {
    URI: process.env.MONGODB_URI || "mongodb://localhost/carmin_mongo",
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
  },
};
