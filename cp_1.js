//Step 3: Use DOM event listeners
//step 3.1: count characters as users type
const comments = document.getElementById(`comments`);
const counter = document.createElement(`span`);
counter.id = `comments-count`;
counter.textContent = `Characters: 0`;
comments.insertAdjacentElement(`afterend`, counter);



//Step 4: Use evetn bubbling & delegation to manage events of all input fields
//Step 5: Prevent background clicks