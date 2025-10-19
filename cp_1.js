//Step 3: Use DOM event listeners
//step 3.1: count characters as users type
const comments = document.getElementById('comments');
const counter = document.createElement('span');
counter.id = 'comments-count';
counter.textContent = 'Characters: 0';
comments.insertAdjacentElement('afterend', counter);
counter.insertAdjacentElement('afterend', document.createElement(`br`));

function updateCount() {
    counter.textContent = `Characters: ${comments.value.length}`;
}

comments.addEventListener('input', updateCount);
updateCount();

//step 3.2: display tooltips on mouseover and hide on mouseout

const fields = [
    document.getElementById('username'),
    document.getElementById('email'),
    document.getElementById('comments'),
]

const tips = {
    username: 'Enter your username.',
    email: 'Enter your email address.',
    comments: 'Share your detailed feedback.',
}

fields.forEach((field) => {
    if (!field) return;
       const hint = tips[field.id] || '';
        if (hint) field.setAttribute('title', hint);
        field.addEventListener('mouseover', () => {
        if (hint) field.setAttribute('title', hint);
    });
    field.addEventListener('mouseout', () => {
    field.removeAttribute('title');
    });
})

//step 3.3: prevent submission if fields are empty & show validation messages
const form = document.getElementById('feedback-form');
const required = ['username', 'email', 'comments'];

form.addEventListener('submit', (e) => {
    document.querySelectorAll('.error-text').forEach(el => el.remove());
    let valid = true;


required.forEach(id => {
    const field = document.getElementById(id);
    if (!field.value.trim()) {
        valid = false;
        const errorMessage = document.createElement('span');
        errorMessage.className = 'error-text';
        errorMessage.textContent = 'Required';
        errorMessage.style.color = '#b00020';
        errorMessage.style.fontSize = '0.9rem';
        field.insertAdjacentElement('afterend', errorMessage);
    }
    });
    if (!valid) e.preventDefault();
})


//Step 4: Use evetn bubbling & delegation to manage events of all input fields
//Step 5: Prevent background clicks