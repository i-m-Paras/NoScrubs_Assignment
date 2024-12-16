import OAuthClient from "../oauthClient.js";
import {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  AUTH_PROVIDER_URL,
} from "../constants.js";
import { parseQueryParams } from "../utils.js";

const oauthClient = new OAuthClient({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI,
  providerUrl: AUTH_PROVIDER_URL,
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
    document.getElementById("user-info").textContent = userInfo;
  }
})();
