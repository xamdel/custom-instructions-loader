// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Background script received message:", message);

  // Route messages based on some condition or message type
  if (message.type === "INSERT_INSTRUCTIONS") {
    console.log("Forwarding message to content script");

    // Forward the message to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab && activeTab.id) {
        chrome.tabs.sendMessage(activeTab.id, message, (response) => {
          // Handle the response from the content script
          console.log("Received response from content script:", response);
          sendResponse(response);
        });
      }
    });
  }

  return true;
});

export {};