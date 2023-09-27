// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Content script received message:", message);

  // Check if the message is to insert custom instructions
  if (message.type === "INSERT_INSTRUCTIONS") {
    // Use a unique class combination to select the text areas
    const textAreas = document.querySelectorAll(".w-full.resize-none.rounded.p-4");

    console.log(`Found ${textAreas.length} text areas`);

    // Check if both text areas are available
    if (textAreas.length === 2) {
      // Insert instructionOne and instructionTwo
      (textAreas[0] as HTMLTextAreaElement).value = message.instructionOne;
      (textAreas[0] as HTMLTextAreaElement).dispatchEvent(new Event('input', {bubbles: true, cancelable: true}));
      (textAreas[1] as HTMLTextAreaElement).value = message.instructionTwo;
      (textAreas[1] as HTMLTextAreaElement).dispatchEvent(new Event('input', {bubbles: true, cancelable: true}));


      console.log("Instructions inserted successfully");

      // Let the popup know that the insertion was successful
      sendResponse({ status: "success" });
    } else {
      // If the text areas are not found, display an error message in the popup
      console.log("Text areas not found");
      sendResponse({ status: "error", message: "Please open the modal before inserting instructions." });
    }
  }
});

export {};