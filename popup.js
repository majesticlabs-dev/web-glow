document.addEventListener("DOMContentLoaded", () => {
  const currentModeElement = document.getElementById("currentMode");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs && tabs[0]) {
      const url = new URL(tabs[0].url);
      const domain = url.hostname;

      chrome.runtime.sendMessage(
        { action: "getModeForDomain", domain },
        (response) => {
          if (response && response.mode) {
            currentModeElement.textContent = response.mode;
          }
        }
      );

      document
        .getElementById("lightBtn")
        .addEventListener("click", () => setMode("light"));
      document
        .getElementById("darkBtn")
        .addEventListener("click", () => setMode("dark"));
      document
        .getElementById("offBtn")
        .addEventListener("click", () => setMode("off"));

      function setMode(mode) {
        chrome.runtime.sendMessage(
          { action: "setModeForDomain", domain, mode },
          (res) => {
            if (res && res.success) {
              currentModeElement.textContent = mode;
              chrome.tabs.reload(tabs[0].id);
            }
          }
        );
      }
    }
  });
});
