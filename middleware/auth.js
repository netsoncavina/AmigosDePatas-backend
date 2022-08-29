import jwt from "jsonwebtoken";
import "dotenv/config";

const JWT_SECRET = "42isTheAnswer42";
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, JWT_SECRET);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};

export default auth;
