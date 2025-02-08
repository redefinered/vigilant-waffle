import app from "./server.js";

// Health route
app.get('/health', (req, res) => {
  res.json({status: 'Server is up and running!'});
});

const PORT = process.env.PORT || 3000;
export const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
