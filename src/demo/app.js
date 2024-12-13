import OAuthClient from "../oauthClient.js";
import {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  AUTH_PROVIDER_URL,
} from "../constants.js";
import { parseQueryParams } from "../utils.js";

const oauthClient = new OAuthClient({
  clientId: "iQPPOjNc5GLlvbd1xWOChHiBscYWEdeC",
  clientSecret:
    "Ze4mTF7ZUqvZqn_578K_Vl7mvJ1QY9ydazoulK_7vwKwdNxZicS7iB2HhhXAGsDk",
  redirectUri: "http://127.0.0.1:8080/src/demo/index.html",
  providerUrl: "https://dev-xpzby2z5ey717jrs.us.auth0.com",
});

document.getElementById("login-btn").addEventListener("click", () => {
  window.location.href = oauthClient.startAuthFlow();
});

(async () => {
  const params = parseQueryParams(window.location.search);
  console.log("Hiii", params);
  if (params.code) {
    const tokens = await oauthClient.handleCallback(params);
    const userInfo = `Access Token: ${tokens.access_token}`;
    alert("paras");
    document.getElementById("user-info").textContent = "Paras is great";
  }
})();
