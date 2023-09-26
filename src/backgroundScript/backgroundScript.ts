// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Route messages based on some condition or message type
  if (message.type === "INSERT_INSTRUCTIONS") {
    // Forward the message to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab && activeTab.id) {
        chrome.tabs.sendMessage(activeTab.id, message, (response) => {
          // Handle the response from the content script
          sendResponse(response);
        });
      }
    });
  }

  return true;
});