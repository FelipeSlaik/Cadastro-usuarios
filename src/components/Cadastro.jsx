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
    <div className="w-full  min-h-screen flex justify-center items-center bg-gray-200">
      <form
        onSubmit={cadastro}
        className="flex flex-col gap-4 bg-lime-600 p-6 rounded-2xl w-80"
      >
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

        <button
          className="cursor-pointer bg-amber-700 w-40 p-1.5 rounded-2xl mt-1.5"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
