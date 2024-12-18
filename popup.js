document.addEventListener("DOMContentLoaded", () => {
  const currentModeElement = document.getElementById("currentMode");
  const options = document.querySelectorAll(".option");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs && tabs[0]) {
      const url = new URL(tabs[0].url);
      const domain = url.hostname;

      chrome.runtime.sendMessage(
        { action: "getModeForDomain", domain },
        (response) => {
          if (response && response.mode) {
            currentModeElement.textContent = response.mode;
            setSelectedOption(response.mode);
          }
        }
      );

      options.forEach((option) => {
        option.addEventListener("click", () => {
          const mode = option.id.replace("Btn", "");
          setMode(mode);
          setSelectedOption(mode);
        });
      });

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

      function setSelectedOption(mode) {
        options.forEach((option) => {
          option.classList.toggle("selected", option.id === `${mode}Btn`);
        });
      }
    }
  });
});
