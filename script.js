//modo noturno
const accessibilityButton = document.getElementById('toggle-accessibility')
let accessibilityEnabled = false

accessibilityButton.addEventListener('click', () => {
  accessibilityEnabled = !accessibilityEnabled
  updateAccessibilityStyles()
})

function updateAccessibilityStyles() {
  if (accessibilityEnabled) {
    document.body.classList.add('accessibility-mode');
  } else {
    document.body.classList.remove('accessibility-mode');
  }
}
/////////////////////////////////////////////////////////////

/// imagens rodando inicio
let banner = document.getElementById('banner')
let imagens = ['imagens/Viagem 1.jpg', 'imagens/Viagem 2.jpg', 'imagens/Viagem 3.jpg', 'imagens/Viagem 4.jpg']
let indiceAtual = 0

function mudarFundo() {
  banner.style.backgroundImage = `url('${imagens[indiceAtual]}')`
  indiceAtual = (indiceAtual + 1) % imagens.length
}

setInterval(mudarFundo, 1500)

// SLIDESHOW DOS DESTINOS
let slideIndex = 1

showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
    let i
    const slides = document.getElementsByClassName("destino")

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.margin = "0 auto"
}

///////////////////////////////////////////////////////
function validarReserva() {
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var destinoSelect = document.getElementById('destino')
    var destino = destinoSelect.options[destinoSelect.selectedIndex].value;
    var data = document.getElementById('data').value
    var quantidadePessoas = document.getElementById('quantidadePessoas').value

    if (nome === '' || email === '' || destino === '' || data === '' || quantidadePessoas === '') {
        alert('Por favor, preencha todos os campos.')
        return false
    }

    var precoPorPessoa = parseFloat(destinoSelect.options[destinoSelect.selectedIndex].getAttribute('data-preco'))

    var valorTotal = precoPorPessoa * quantidadePessoas


    alert('Reserva realizada com sucesso!\nNome: ' + nome + '\nEmail: ' + email + '\nDestino: ' + destino + '\nData: ' + data + '\nQuantidade de Pessoas: ' + quantidadePessoas + '\nValor Total: R$ ' + valorTotal.toFixed(2));

    return false;
}

function atualizarValorTotal() {
    var destinoSelect = document.getElementById('destino');
    var precoPorPessoa = parseFloat(destinoSelect.options[destinoSelect.selectedIndex].getAttribute('data-preco'));
    var quantidadePessoas = document.getElementById('quantidadePessoas').value;
    var valorTotal = precoPorPessoa * quantidadePessoas;

    document.getElementById('valorTotal').innerText = 'R$ ' + valorTotal.toFixed(2);
}
