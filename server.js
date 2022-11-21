import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 5000;
const DB_CONNECTION =
  "mongodb+srv://netson:cwxy4Keg4ODkTTRe@cluster0.e3ugm.mongodb.net/projetointegrador?retryWrites=true&w=majority";
mongoose
  .connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message, process.env.JWT_SECRET));
