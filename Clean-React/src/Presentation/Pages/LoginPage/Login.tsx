// Página de Login
import React from "react";
import "./Login.css";
import Spinner from "../../Components/Spinner/Spinner";

function Login() {
  return (
    <form id="login">
      <h2>Login</h2>

      <section className="form-inputs">
        <input className="" type="email" name="email" placeholder="Digite seu Email" required/>
        <input className="" type="password" name="password" placeholder="Digite sua senha" required/>
      </section>

      <section className="login-inputs">
        <button type="submit">Entrar</button>
        <a href="/">Criar Conta</a>
      </section>

      <section className="status-msg">
        <Spinner className="spinner"/>
        <p>Exemplo de erro</p>
      </section>
    </form>
  );
}

export default Login;