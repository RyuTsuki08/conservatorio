import jwt from "jsonwebtoken";

export function getRoleFromToken(token) {
  try {
    const decoded = jwt.verify(token, "secret_key");
    return decoded.role;
  } catch {
    return null;
  }
}
