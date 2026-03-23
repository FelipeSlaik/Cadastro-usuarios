# 🚀 Formulário de Cadastro com React

Este projeto é um formulário de cadastro desenvolvido com React, com foco em aprender e aplicar conceitos fundamentais da biblioteca.

---

## 🧠 Objetivo

Praticar:

* Manipulação de estado com `useState`
* Inputs controlados
* Captura de eventos com `onChange`
* Envio de formulário com `onSubmit`
* Validação de campos
* Limpeza de formulário após envio

---

## 🛠️ Tecnologias utilizadas

* React
* JavaScript
* HTML
* CSS (opcional/Tailwind se você usar depois)

---

## 📋 Funcionalidades

* Campo de nome, email e senha
* Validação para impedir envio com campos vazios
* Exibição de dados no console
* Limpeza automática dos campos após envio

---

## ⚙️ Como funciona

1. O usuário preenche os campos
2. Ao clicar em "Enviar" ou pressionar Enter:

   * O formulário é interceptado (`preventDefault`)
   * Os dados são validados
   * Se houver campos vazios → exibe alerta
   * Se estiver tudo correto → exibe no console e limpa os inputs

---

## 📚 Conceitos aplicados

```js
const [valor, setValor] = useState("")
```

* `valor`: estado atual
* `setValor`: função para atualizar o estado

---

## 🧪 Exemplo de validação

```js
if (nomeDigitado === "" || emailDigitado === "" || senha === "") {
  alert("Preencha todos os campos")
}
```

---

## 📌 Melhorias futuras

* Mostrar mensagens de erro na tela (em vez de alert)
* Validação mais avançada de email
* Estilização com Tailwind
* Integração com backend
* Armazenamento com localStorage

---

## 💻 Como rodar o projeto

```bash
npm install
npm run dev
```

---

## ✍️ Autor

Desenvolvido por você 🚀
