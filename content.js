let currentMode = "off";
let styleElement = null;

function applyMode(mode) {
  currentMode = mode;
  if (styleElement) {
    styleElement.remove();
    styleElement = null;
  }

  const htmlElement = document.documentElement;

  if (mode === "light") {
    htmlElement.classList.remove("dark");
    styleElement = document.createElement("style");
    styleElement.textContent = `
      html, body {
        background: #ffffff !important;
        color: #000000 !important;
      }
      * {
        background: transparent !important;
        color: inherit !important;
      }
    `;
    document.documentElement.appendChild(styleElement);
  } else if (mode === "dark") {
    htmlElement.classList.add("dark");
    styleElement = document.createElement("style");
    styleElement.textContent = `
      html, body {
        background: #121212 !important;
        color: #ffffff !important;
      }
      * {
        background: transparent !important;
        color: inherit !important;
      }
    `;
    document.documentElement.appendChild(styleElement);
  }
}

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "applyMode" && request.mode) {
    applyMode(request.mode);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // On load, request the current mode for this domain
  const domain = new URL(window.location.href).hostname;
  chrome.runtime.sendMessage(
    { action: "getModeForDomain", domain },
    (response) => {
      if (response && response.mode) {
        applyMode(response.mode);
      }
    }
  );
});
