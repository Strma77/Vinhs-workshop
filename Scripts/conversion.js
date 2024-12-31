const apiUrl = "http://data.fixer.io/api/latest?access_key=3a65662db8e812394917b75e762c2162&symbols=USD";

async function updateUSDPrices() {
    try {
        console.log("Fetching exchange rates...");
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log("Exchange rate data:", data);

        if (!data.success) {
            throw new Error(`API error: ${data.error.info}`);
        }

        const euroToUsdRate = data.rates.USD;
        console.log("EUR to USD rate:", euroToUsdRate);

        document.querySelectorAll(".usd-price").forEach((span) => {
            const euroValue = parseFloat(span.getAttribute("data-euro"));
            const usdValue = (euroValue * euroToUsdRate).toFixed(2);
            span.textContent = `${usdValue}$ USD`;
        });
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
    }
}

// Call the function on page load
updateUSDPrices();