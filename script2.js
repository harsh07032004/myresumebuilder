async function testOpenAIAPI() {
    const testPrompt = "Hello, how are you?";

    try {
        const response = await fetch("http://localhost:5001/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: testPrompt })
        });

        const data = await response.json();

        if (data.reply) {
            alert("API is working! Response: " + data.reply);
        } else {
            alert("API failed to return a valid message.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("API request failed.");
    }
}

testOpenAIAPI();
