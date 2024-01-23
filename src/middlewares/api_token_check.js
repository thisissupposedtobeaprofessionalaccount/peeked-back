require("dotenv").config();

exports.tokenValidatorMiddleware = (req, res, next) => {
  try {
    const userAPIToken = req.headers["peeked-token"];
    if (userAPIToken == undefined) {
      return res.status(400).send();
    }

    const isValid = userAPIToken === process.env.API_TOKEN;

    if (isValid == false) {
      return res.status(401).send();
    }
    next();
  } catch (err) {}
};
