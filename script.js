function searchProducts() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const productCards = document.querySelectorAll("Tênis Adidas Breaknet - Branco");

    productCards.forEach(card => {
        const productName = card.getAttribute("Tênis Adidas Breaknet - Branco").toLowerCase();
        if (productName.includes(searchQuery)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
