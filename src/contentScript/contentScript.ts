

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Check if the message is to insert custom instructions
    if (message.type === "INSERT_INSTRUCTIONS") {
      // Use a unique class combination to select the text areas
      const textAreas = document.querySelectorAll(".w-full.resize-none.rounded.p-4");
  
      // Check if both text areas are available
      if (textAreas.length === 2) {
        // Insert instructionOne and instructionTwo
        (textAreas[0] as HTMLTextAreaElement).value = message.instructionOne;
        (textAreas[1] as HTMLTextAreaElement).value = message.instructionTwo;
  
        // Let the popup know that the insertion was successful
        sendResponse({ status: "success" });
      } else {
        // If the text areas are not found, display an error message in the popup
        sendResponse({ status: "error", message: "Please open the modal before inserting instructions." });
      }
    }
  });