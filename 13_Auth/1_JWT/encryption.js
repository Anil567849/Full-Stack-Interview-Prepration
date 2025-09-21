
/*
1️⃣ Secret Key (HMAC / Symmetric Signing)
Same secret is used to sign and verify the JWT.
*/

// Nodejs 
const jwt = require("jsonwebtoken");

const secretKey = "mySuperSecretKey123";

// Creating (signing) a token
const token1 = jwt.sign({ userId: 1, role: "admin" }, secretKey, { expiresIn: "1h" });

// Verifying the token
try {
  const decoded = jwt.verify(token1, secretKey);
  console.log(decoded); // { userId: 1, role: 'admin', iat: ..., exp: ... }
} catch (err) {
  console.log("Invalid token");
}





/*
2️⃣ Public/Private Key (RSA / Asymmetric Signing)
Private key → used to sign the token.
Public key → used to verify the token.
Useful when multiple services need to verify JWTs without knowing the private key.
*/

// Nodejs
const jwt = require("jsonwebtoken");
const fs = require("fs");

// Load private and public keys
const privateKey = fs.readFileSync("./private.key", "utf8");
const publicKey = fs.readFileSync("./public.key", "utf8");

// Signing token with private key
const token = jwt.sign({ userId: 1, role: "admin" }, privateKey, { algorithm: "RS256", expiresIn: "1h" });

// Verifying token with public key
try {
  const decoded = jwt.verify(token, publicKey, { algorithms: ["RS256"] });
  console.log(decoded);
} catch (err) {
  console.log("Invalid token");
}
