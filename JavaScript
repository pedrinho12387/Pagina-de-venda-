// script.js
function searchProducts() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const name = product.getAttribute('data-name').toLowerCase();
        if (name.includes(searchQuery)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Função para adicionar o produto ao carrinho
function adicionarAoCarrinho(produtoNome, produtoPreco) {
    // Cria um item no carrinho
    const carrinho = document.getElementById('carrinho');
    const li = document.createElement('li');
    li.textContent = `${produtoNome} - R$ ${produtoPreco}`;
    
    // Adiciona o item ao carrinho
    carrinho.appendChild(li);
}

// Função para ativar o botão de compra
document.getElementById('comprarProduto1').addEventListener('click', function() {
    const produtoNome = "Produto 1";
    const produtoPreco = "99,90";
    
    // Adiciona o produto ao carrinho
    adicionarAoCarrinho(produtoNome, produtoPreco);
    
    // Pode adicionar lógica adicional para finalizar a compra, como redirecionamento para uma página de pagamento
    alert(`${produtoNome} foi adicionado ao carrinho!`);
});
