# OAuth 2.0 Client Library and Demo Application

## Overview
This repository contains an OAuth 2.0 client library implemented in JavaScript and a demo application that demonstrates how to use the library for authentication purposes. The library is platform-agnostic, capable of running in both server and browser environments, and is compatible with various OAuth providers.

---

## Features
- **OAuth 2.0 Authorization Code Flow**: Supports the complete authorization flow, including token exchange.
- **Cross-Platform Support**: Runs in both server and client environments.
- **Modular Design**: Provides reusable functions for initiating OAuth flows, handling callbacks, and refreshing tokens.
- **Secure Authentication**: Implements best practices for token management.
- **Demo Application**: Demonstrates library usage with a working example.

---

## File Structure
```plaintext
.
├── src
│   ├── oauthClient.js       # OAuth client library
│   ├── demo
│   │   ├── index.html       # Demo application UI
│   │   ├── app.js           # Demo application logic
│   │   └── styles.css       # Demo application styles
│   ├── utils.js             # Utility functions
│   ├── constants.js         # Configuration constants
├── .env                     # Environment variables
├── README.md                # Documentation
├── package.json             # Project metadata
```

---

## Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/oauth-client-demo.git](https://github.com/i-m-Paras/NoScrubs_Assignment.git)
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the `.env` file:
   ```plaintext
   CLIENT_ID=<Your OAuth Client ID>
   CLIENT_SECRET=<Your OAuth Client Secret>
   REDIRECT_URI=http://localhost:8080
   AUTH_PROVIDER_URL=<OAuth Provider Base URL>
   ```

---

## Usage
### Running the Demo Application
1. **Serve the Demo Application:**
   ```bash
   cd src/demo
   python -m http.server 8080
   ```
   Open the application in your browser at `http://localhost:8080`.

2. **Start the OAuth Flow:**
   - Click the **Login with OAuth** button.
   - Log in on the OAuth provider's page.
   - After redirection, the application will display the access token.

### Running with Server-Side Support (Optional)
1. **Start the Node.js server:**
   ```bash
   npm start
   ```

2. Open the application at `http://localhost:3000`.

---

## API Reference
### OAuth Client Methods
- **`startAuthFlow(client: OAuthClient): string`**
  - Returns the authorization URL to initiate the OAuth flow.

- **`handleCallback(client: OAuthClient, callbackParams: object): Promise<TokenResponse>`**
  - Handles the callback to exchange the authorization code for tokens.

- **`refreshToken(client: OAuthClient, refreshToken: string): Promise<TokenResponse>`**
  - Exchanges a refresh token for a new access token.

### Demo Application
- **Login Button:**
  - Initiates the OAuth flow.
- **Callback Handling:**
  - Parses the `code` from the URL and exchanges it for an access token.

---

## Implementation Choices
1. **OAuth Authorization Code Flow**: Selected for its security and compatibility with server-to-server communication.
2. **Platform-Agnostic Design**: The library works in both client and server environments by avoiding browser-specific APIs.
3. **Security Practices**: All sensitive information (e.g., `client_secret`) is sent securely in server-to-server requests.
4. **Demo Application**: Provides a user-friendly way to demonstrate the library and its functionality.

---

## Challenges Faced
1. **Cross-Platform Compatibility**: Ensuring the library worked seamlessly in both server and browser environments required careful design.
2. **Redirect URI Configuration**: Misconfigured redirect URIs led to initial issues during the OAuth flow.
3. **Token Management**: Ensuring secure handling of tokens, particularly on the client side, required extra attention to best practices.

---

## Contact
For questions or feedback, reach out to awasthiparas6@gmail.com.
