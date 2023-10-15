### 1. Set up Project
-[x] Initialize React with TypeScript project
-[x] Set up Webpack for Chrome extension packaging

### 2. Basic Functionality
-[x] Create new custom instructions w/titles, descriptions
-[x] Save new instructions to storage
-[x] Load saved instructions from storage
-[x] Display loaded CIs in a list
-[x] Delete saved instructions from the Popup UI
-[x] Edit instructions
    -[x] Create dynamic form component for create&edit
    -[x] Create EditButton component for passing state to form component
-[] Page for viewing details of single set of instructions

### 3. Content Script
-[x] Implement script to insert instructions into ChatGPT's textareas

### 4. Background Script
-[x] Implement basic background script for extension lifecycle

### Misc
-[x] Display error in popup when text areas not found (modal not open)

### 5. UI
-[] Make it look good

### 6. Extension Options Page
-[x] Create an options/settings page for the extension if needed

### 7. Publishing
-[] Prepare assets like icons and screenshots
-[] Publish the extension to the Chrome Web Store

### Future Features
-[] Replace window.confirms with in-app modals
-[] Make a webpage for sharing CIs, browsing CIs shared by others
    -[] Upvote functionality, trending etc
-[] Enhance UX - prevent the user from needing to click through site menus

### Bugs/Issues
-[x] Existing list items get duplicated after creating a new item
-[] Sometimes inserting doesn't work until refreshing chatGPT page