const jwt = require("jsonwebtoken");

const jwtAuthMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) return res.status(401).json({ message: "Unauthorized" });
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token not found" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

const generateToken = (userData) => {
  return (token = jwt.sign(userData, process.env.JWT_SECRET));
};

module.exports = { jwtAuthMiddleware, generateToken };
