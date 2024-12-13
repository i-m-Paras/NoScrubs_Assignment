class OAuthClient {
  constructor({ clientId, clientSecret, redirectUri, providerUrl }) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;
    this.providerUrl = providerUrl;
  }

  startAuthFlow() {
    console.log("hiii", this.redirectUri);
    return `${this.providerUrl}/authorize?response_type=code&client_id=${
      this.clientId
    }&redirect_uri=${encodeURIComponent(this.redirectUri)}`;
  }

  async handleCallback(callbackParams) {
    const { code } = callbackParams;
    const response = await fetch(`${this.providerUrl}/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        redirect_uri: this.redirectUri,
        code,
        grant_type: "authorization_code",
      }),
    });
    return response.json();
  }

  async refreshToken(refreshToken) {
    const response = await fetch(`${this.providerUrl}/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });
    return response.json();
  }
}

export default OAuthClient;
