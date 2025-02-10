import app from "./app";
import config from "./config/dotenv";
import connectDB from "./config/database";

const PORT = config.PORT || 3000;

// Connect to Database
connectDB();

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
