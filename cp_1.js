//Step 3: Use DOM event listeners
//step 3.1: count characters as users type
const comments = document.getElementById(`comments`);
const counter = document.createElement(`span`);
counter.id = `comments-count`;
counter.textContent = `Characters: 0`;
comments.insertAdjacentElement(`afterend`, counter);
counter.insertAdjacentElement(`afterend`, document.createElement(`br`));

function updateCount() {
    counter.textContent = `Characters: ${comments.value.length}`;
}

comments.addEventListener(`input`, updateCount);
updateCount();


//Step 4: Use evetn bubbling & delegation to manage events of all input fields
//Step 5: Prevent background clicks