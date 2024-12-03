function searchProducts() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const productCards = document.querySelectorAll("Tênis Adidas Breaknet - Branco");

    productCards.forEach(card => {
        const productName = card.getAttribute("https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDQbXBxQqb_ZcJcHXIL_ydnayXDkadT9L-nhe1spFhZ65Z-1dEKPzA1m1VK3ZDiCxO_x3Ir1XsKtdlczrumo1q-7VfKy51Nu89n1Vq0PuenI8erAM--yMSCg&usqp=CAE").toLowerCase();
        if (productName.includes(searchQuery)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
