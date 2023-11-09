import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (window.confirm('Você é homem?')) {
      console.log('Homem')
    }
  }, []);

  useEffect(() => {
    console.log(email)
    console.log(password)
  }, [email, password]);

  const handleEntrar = () => {
    console.log(email)
    console.log(password)
  }

  return (
    <div>
      <form>
        <label>
          <span>Email</span>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        </label>

        <label>
          <span>Senha</span>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>

        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>

      <Link to="/dashboard">Página Inicial</Link>
    </div>
  );
};
