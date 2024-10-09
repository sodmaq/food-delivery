import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ success: false, message: "No token" });
  }
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = verified.id;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default authMiddleware;
