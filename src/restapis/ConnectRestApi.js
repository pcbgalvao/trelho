import axios from "axios";
// import { RESTAPI_URL } from "../constants";
const jwt = require("jsonwebtoken");
const accessTokenSecret = require("crypto").randomBytes(64).toString("hex");
const RESTAPI_URL = "http://localhost:5001";
console.log("RESTAPI_URL-", RESTAPI_URL);

const ConnectRestApi = {
  jwt: {},
  init: async function init(urlPath) {
    this.restApiConn = axios.create({
      baseURL: `${RESTAPI_URL}${urlPath}`,
    });

    this.restApiConn.defaults.headers.common = {};
    this.restApiConn.defaults.headers.common.content_type = "application/json";
    this.jwt = {};
  },

  authenticateJWT: function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.split(" ")[1];

      jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }

        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  },
};

export default ConnectRestApi;
