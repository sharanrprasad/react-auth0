const express = require("express");
require("dotenv").config();
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const app = express();

app.use();

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri:
      "https://reactauth-dev-sharanrprasad.auth0.com/.well-known/jwks.json"
  }),
  // Validate the audience and the issuer.
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,

  algorithms: ["RS256"]
});

app.use(jwtCheck);

app.get("/public", function(req, res) {
  res.json({
    message: "Hello from a public"
  });
});

app.get("/private", function(req, res) {
  res.json({
    message: "Hello from private api"
  });
});

app.listen(3001);
