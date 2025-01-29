const btn = document.querySelector(".btnEmj");
const h2 = document.querySelector("h2");
const access_key = "f9c1590ceaa22bf3f58e5b16a4dc444bef47f081";
let result = [];

async function ramdomEmoji() {
  h2.textContent = "Loading emojis...";
  btn.disabled = true;

  try {
    let response = await fetch(`https://emoji-api.com/emojis?access_key=${access_key}`);
    result = await response.json();
    h2.textContent = "Click the button for a random emoji!";
    btn.disabled = false;
  } catch (error) {
    h2.textContent = "Failed to load emojis. Please refresh or try again.";
    console.error("Error fetching emojis:", error);
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * result.length);
}

btn.addEventListener("click", () => {
  if (result.length === 0) {
    h2.textContent = "Emojis are still loading. Please wait.";
    return;
  }
  let n = generateRandomNumber();
  h2.textContent = result[n]?.character || "No emoji available";
});

ramdomEmoji();
