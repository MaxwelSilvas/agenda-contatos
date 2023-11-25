document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contacts");
  const corpoTabela = document.getElementById("tabela-corpo");
  const quantidadeContatos = document.getElementById("quantidade-contatos");

  const nomes = [];
  const numeros = [];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumeroContato = document.getElementById("numero-contato");

    if (numeros.includes(inputNumeroContato.value)) {
      exibeMensagemErro();
    } else {
      adicionaContato(inputNomeContato.value, inputNumeroContato.value);
      atualizaTabela();
      exibeMensagemSucesso();
    }

    inputNomeContato.value = "";
    inputNumeroContato.value = "";
  });

  function adicionaContato(nome, numero) {
    nomes.push(nome);
    numeros.push(numero);
  }

  function atualizaTabela() {
    corpoTabela.innerHTML = "";

    for (let i = 0; i < nomes.length; i++) {
      const linha = `<tr><td>${nomes[i]}</td><td>${numeros[i]}</td></tr>`;
      corpoTabela.insertAdjacentHTML("beforeend", linha);
    }

    atualizaQuantidadeContatos();
  }

  function atualizaQuantidadeContatos() {
    quantidadeContatos.textContent = numeros.length;
  }

  function exibeMensagemSucesso() {
    const mensagemSucesso = document.getElementById("mensagem-sucesso");
    const botaoSucesso = document.getElementById("fechar-sucesso");

    mensagemSucesso.style.display = "block";

    botaoSucesso.addEventListener("click", function () {
      mensagemSucesso.style.display = "none";
    });

    setTimeout(function () {
      mensagemSucesso.style.display = "none";
    }, 3000);
  }

  function exibeMensagemErro() {
    const mensagemErro = document.getElementById("mensagem-erro");
    const botaoErro = document.getElementById("fechar-erro");

    mensagemErro.style.display = "block";

    botaoErro.addEventListener("click", function () {
      mensagemErro.style.display = "none";
    });

    setTimeout(function () {
      mensagemErro.style.display = "none";
    }, 3000);
  }
});
