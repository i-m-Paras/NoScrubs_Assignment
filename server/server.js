import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/authorize", (req, res) => {
  const authUrl = `${process.env.AUTH_PROVIDER_URL}/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}`;
  res.redirect(authUrl);
});

app.get("/callback", async (req, res) => {
  const { code } = req.query;
  console.log("I m called");

  const response = await fetch(`${process.env.AUTH_PROVIDER_URL}/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: JSON.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: process.env.REDIRECT_URI,
      code,
      grant_type: "authorization_code",
    }),
  });
  const tokens = await response.json();
  console.log("I am called t00", tokens);
  res.json(tokens);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
