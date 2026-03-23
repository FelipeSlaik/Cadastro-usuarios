import { useState } from "react";

function Cadastro() {
  const [nomeDigitado, setNomeDigitado] = useState("");
  const [emailDigitado, setEmailDigitado] = useState("");
  const [senha, setSenha] = useState("");

  function cadastro(e) {
    e.preventDefault();

    if (nomeDigitado === "" || emailDigitado === "" || senha === "") {
      alert("Você deixou campos vazios");
    } else {
      console.log(nomeDigitado, emailDigitado, senha);
      setNomeDigitado("");
      setEmailDigitado("");
      setSenha("");
    }
  }
  return (
    <form onSubmit={cadastro} className="flex fle">
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setNomeDigitado(e.target.value)}
        value={nomeDigitado}
      />

      <input
        type="email"
        placeholder="Digite seu E-mail"
        onChange={(e) => setEmailDigitado(e.target.value)}
        value={emailDigitado}
      />

      <input
        type="password"
        placeholder="Digite sua senha"
        onChange={(e) => setSenha(e.target.value)}
        value={senha}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Cadastro;
