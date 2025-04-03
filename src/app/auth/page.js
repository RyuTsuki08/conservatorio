"use client";

import { useState } from "react";
import styles from "./auth.module.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.auth}>
      <header className={styles.header}>
        {isLogin ? "Iniciar Sesión" : "Registrarse"}
      </header>
      <div className={styles.container}>
        <form className={styles.form}>
          {!isLogin && (
            <>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" />
            </>
          )}
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />
          <button type="submit">
            {isLogin ? "Iniciar Sesión" : "Registrarse"}
          </button>
        </form>
        <button className={styles.toggle} onClick={toggleForm}>
          {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
        </button>
      </div>
    </div>
  );
}
