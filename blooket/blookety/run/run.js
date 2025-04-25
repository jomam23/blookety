(async () => {
    const url = "https://raw.githubusercontent.com/username/repo/branch/script.js"; // Replace with the raw JS file URL
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const script = await response.text();
      eval(script); // Executes the fetched script
    } catch (error) {
      console.error("Failed to load and execute script:", error);
    }
  })();
  