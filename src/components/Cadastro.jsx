import { useState } from "react";

function Cadastro() {
  const [nomeDigitado, setNomeDigitado] = useState("");
  const [emailDigitado, setEmailDigitado] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState('')

  function cadastro(e) {
    e.preventDefault();

    if (!nomeDigitado || !emailDigitado || !senha) {
  setMensagemErro("Preencha todos os campos");
} else if (!emailDigitado.includes("@")) {
  setMensagemErro("Email inválido");
} else if (senha.length < 6) {
  setMensagemErro("Senha deve ter pelo menos 6 caracteres");
} else {
  setMensagemErro("");
  console.log(nomeDigitado, emailDigitado, senha);
}
    
  }
  return (
    <div className="w-full  min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={cadastro}
        className="flex flex-col gap-4 bg-lime-600 p-6 rounded-2xl w-80 h"
      >
        <input
        className="p-2 rounded-lg border border-lime-900 focus:outline-none focus:ring-2 focus:ring-lime-500 font-medium"
          type="text"
          placeholder="Digite seu nome"
          onFocus={() => setMensagemErro('')}
          onChange={(e) => setNomeDigitado(e.target.value)}
          value={nomeDigitado}
        />

        <input
        className="p-2 rounded-lg border border-lime-900 focus:outline-none focus:ring-2 focus:ring-lime-500 font-medium"
          type="email"
          placeholder="Digite seu E-mail"
          onFocus={() => setMensagemErro('')}
          onChange={(e) => setEmailDigitado(e.target.value)}
          value={emailDigitado}
        />

        <input
        className="p-2 rounded-lg border border-lime-900 focus:outline-none focus:ring-2 focus:ring-lime-500 font-medium"
          type="password"
          placeholder="Digite sua senha"
          onFocus={() => setMensagemErro('')}
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
        />

        <p className="text-orange-700 text-1.5xl font-medium">{mensagemErro}</p>

        <button
          className="bg-lime-900 text-white p-2  hover:bg-lime-700 transition cursor-pointer rounded-2xl hover:ring-2 hover:ring-lime-500 font-bold text-lg hover:text-lime-900"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
