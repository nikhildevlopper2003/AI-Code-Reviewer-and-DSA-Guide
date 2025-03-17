require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

// ✅ Change "localhost" to "0.0.0.0" for external access
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

