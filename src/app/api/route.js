import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  try {
    // Verifica el token (reemplaza "secret_key" con tu clave secreta)
    const decoded = jwt.verify(token, "secret_key");
    const { role } = decoded;

    // Redirige según el rol del usuario
    switch (role) {
      case "admin":
        return res.status(200).json({ redirect: "/admin/page" });
      case "teacher":
        return res.status(200).json({ redirect: "/teacher/page" });
      case "student":
        return res.status(200).json({ redirect: "/student/page" });
      default:
        return res.status(403).json({ error: "Rol no autorizado" });
    }
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
}
