    async function loadSearchResults() {

    const params = new URLSearchParams(window.location.search);
    const query = params.get("q");

    console.log("Search Query:", query);

    if (!query) return;

    try {

        const response = await fetch(
            `https://dummyjson.com/products/search?q=${query}`
        );

        const data = await response.json();

        console.log(data);

        if (data.products.length > 0) {

            displayProducts(data.products);

        } else {

            document.getElementById("products").innerHTML =
                "<h2>No Products Found 😔</h2>";
        }

    } catch (error) {

        console.error(error);
    }
}

document.addEventListener(
    "DOMContentLoaded",
    loadSearchResults
);