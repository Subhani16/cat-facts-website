document.addEventListener("DOMContentLoaded", async () => {
  const factText = document.getElementById("cat-fact");
  const fetchFactButton = document.getElementById("fetch-fact");

  // Function to fetch a random cat fact using async-await
  const fetchCatFact = async () => {
    factText.textContent = "Fetching a new fact... 😺"; // Show loading text
    try {
      const response = await fetch("https://catfact.ninja/fact");
      if (!response.ok) throw new Error("Failed to fetch fact");

      const data = await response.json();
      factText.textContent = data.fact; // Update UI with the new fact
    } catch (error) {
      factText.textContent = "Oops! Couldn't fetch a fact. Try again! 😿";
      console.error("Error fetching cat fact:", error);
    }
  };

  await fetchCatFact(); // Fetch a fact on page load

  fetchFactButton.addEventListener("click", fetchCatFact); // Fetch new fact on button click
});
