function searchProducts() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const Tênis Adidas Breaknet - Branco = card.getAttribute("Tênis Adidas Breaknet - Branco").toLowerCase();
        if (Tênis Adidas Breaknet - Branco.includes(searchQuery)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
 