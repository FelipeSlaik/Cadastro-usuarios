import { useState } from "react";
import { supabase } from "../supabase";

function Cadastro() {
  const [nomeDigitado, setNomeDigitado] = useState("");
  const [emailDigitado, setEmailDigitado] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  async function cadastro(e) {
    e.preventDefault();

    if (!nomeDigitado || !emailDigitado || !senha) {
      setMensagemErro("Preencha todos os campos");
      return;
    } else if (!emailDigitado.includes("@")) {
      setMensagemErro("Email inválido");
      return;
    } else if (senha.length < 6) {
      setMensagemErro("Senha deve ter pelo menos 6 caracteres");
      return;
    } else {
      setMensagemErro("");
      console.log(nomeDigitado, emailDigitado, senha);

      await salvarUsuario();
    }
  }

  async function salvarUsuario() {
    const { error } = await supabase.from("usuarios").insert([
      {
        nome: nomeDigitado,
        email: emailDigitado,
        senha: senha,
      },
    ]);
    if (error) {
      console.log(error);
      setMensagemErro("Erro ao salvar no banco");
    } else {
      console.log("Usuario salvo com sucesso");

      setNomeDigitado("");
      setEmailDigitado("");
      setSenha("");
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
          onFocus={() => setMensagemErro("")}
          onChange={(e) => setNomeDigitado(e.target.value)}
          value={nomeDigitado}
        />

        <input
          className="p-2 rounded-lg border border-lime-900 focus:outline-none focus:ring-2 focus:ring-lime-500 font-medium"
          type="email"
          placeholder="Digite seu E-mail"
          onFocus={() => setMensagemErro("")}
          onChange={(e) => setEmailDigitado(e.target.value)}
          value={emailDigitado}
        />

        <input
          className="p-2 rounded-lg border border-lime-900 focus:outline-none focus:ring-2 focus:ring-lime-500 font-medium"
          type="password"
          placeholder="Digite sua senha"
          onFocus={() => setMensagemErro("")}
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
        />

        {mensagemErro && (
          <p className="text-orange-700 text-sm font-medium">{mensagemErro}</p>
        )}

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
