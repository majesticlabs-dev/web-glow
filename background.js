chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "setModeForDomain") {
    const { domain, mode } = request;
    chrome.storage.local.get(["domainModes"], (result) => {
      const domainModes = result.domainModes || {};
      domainModes[domain] = mode;
      chrome.storage.local.set({ domainModes }, () => {
        // Notify content script to apply mode
        if (sender.tab && sender.tab.id) {
          chrome.tabs.sendMessage(sender.tab.id, { action: "applyMode", mode });
        }
        sendResponse({ success: true });
      });
    });
    return true; // Keep the message channel open for async response
  }

  if (request.action === "getModeForDomain") {
    const { domain } = request;
    chrome.storage.local.get(["domainModes"], (result) => {
      const domainModes = result.domainModes || {};
      const mode = domainModes[domain] || "off";
      sendResponse({ mode });
    });
    return true; // Keep the message channel open for async response
  }
});
