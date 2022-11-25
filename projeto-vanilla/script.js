const botaoSobreMim = document.getElementById('sobre-mim');

const sobreMim = () => {
  const textoApresentacao = document.getElementById('apresentacao');

  if (textoApresentacao.classList.contains('apareceTexto')) {
    textoApresentacao.classList.remove('apareceTexto');
  } else {
    textoApresentacao.classList.add('apareceTexto');
  }
}

botaoSobreMim.addEventListener("click", sobreMim);
