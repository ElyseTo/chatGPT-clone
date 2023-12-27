const apiUrl = "https://api.openai.com/v1/completions";
const apiKey = "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";

// Create a function to send a request to the GPT-3.5 API.
async function generateText(prompt) {
  const requestBody = {
    prompt: prompt,
    model: "text-davinci-003",
    max_tokens: 2000, // Adjust the number of tokens as needed.
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestBody),
  });

  if (response.ok) {
    const data = await response.json();
    return data.choices[0].text;
  } else {
    throw new Error(`Failed to generate text: ${response.statusText}`);
  }
}

var inputElement = document.getElementById("myInput");
var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function () {
  var userPrompt = inputElement.value;
  generateText(userPrompt)
    .then((result) => {
        resultParagraph = document.getElementById("result")
        resultParagraph.innerHTML = result;
      alert(inputElement.value);
    })
    .catch((error) => {
      console.log(error);
    });
});
