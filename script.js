function searchProducts() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const productName = card.getAttribute("data-name").toLowerCase();
        if (productName.includes(searchQuery)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
 


let carrinho = [];

function adicionarAoCarrinho(item) {
    // Adiciona o item ao carrinho
    carrinho.push(item);
    atualizarResumoCarrinho();
}

function atualizarResumoCarrinho() {
    // Exibe os itens no carrinho
    const cartSummary = document.getElementById('cart-summary');
    if (carrinho.length > 0) {
        cartSummary.innerHTML = `
            <p>Itens no Carrinho: ${carrinho.join(', ')}</p>
            <button class="cart-button" onclick="finalizarCompra()">Finalizar Compra</button>
        `;
    } else {
        cartSummary.innerHTML = `
            <p>Carrinho: Vazio</p>
            <button class="cart-button" onclick="finalizarCompra()">Finalizar Compra</button>
        `;
    }
}
