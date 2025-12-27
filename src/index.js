// require("dotenv").config({ path: "./env" });
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Error in the server:", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB connsection failed !!!", error);
  });

/*

------------- DATA BASE CONNECTION AND SERVER SETUP -------------

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to the database successfully");

    app.on("error", (error) => {
      console.error("Error in the server:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
})();


*/
