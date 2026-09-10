const form = document.getElementById("formContato");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Campos
  const nome = document.getElementById("nome");
  const apelido = document.getElementById("apelido");
  const data = document.getElementById("data");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const mensagem = document.getElementById("mensagem");

  // Erros
  const erroNome = document.getElementById("erroNome");
  const erroApelido = document.getElementById("erroApelido");
  const erroData = document.getElementById("erroData");
  const erroEmail = document.getElementById("erroEmail");
  const erroTelefone = document.getElementById("erroTelefone");
  const erroMensagem = document.getElementById("erroMensagem");
  const sucesso = document.getElementById("sucesso");

  // Reset
  erroNome.textContent = "";
  erroApelido.textContent = "";
  erroData.textContent = "";
  erroEmail.textContent = "";
  erroTelefone.textContent = "";
  erroMensagem.textContent = "";
  sucesso.textContent = "";

  let valido = true;

  // Validação nome
  if (nome.value.trim() === "") {
    erroNome.textContent = "Informe seu nome.";
    valido = false;
  }

  // Validação apelido
  if (apelido.value.trim() === "") {
    erroApelido.textContent = "Informe seu apelido.";
    valido = false;
  }

  // Validação data
  if (data.value.trim() === "") {
    erroData.textContent = "Informe sua data de nascimento.";
    valido = false;
  }

  // Validação telefone
  if (telefone.value.trim() === "") {
    erroTelefone.textContent = "Informe seu telefone.";
    valido = false;
  }
  
  // Validação email
  if (email.value.trim() === "") {
    erroEmail.textContent = "Informe seu e-mail.";
    valido = false;
  } else if (!email.value.includes("@")) {
    erroEmail.textContent = "E-mail inválido.";
    valido = false;
  }

  // Validação mensagem
  if (mensagem.value.trim().length < 10) {
    erroMensagem.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
    valido = false;
  }

  // Sucesso
  if (valido) {
    sucesso.textContent = "Mensagem enviada com sucesso!";
    form.reset();
  }
});
