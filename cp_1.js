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
    if (!valid) e.preventDefault();


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

//step 3.4: append valid feedback entries to a container

const feedbackDisplay = document.getElementById('feedback-display');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelectorAll('.error-text').forEach(el => el.remove());
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const commentsValue = comments.value.trim();

    if (!username || !email || !commentsValue) {
        alert('Please complete all fields to submit.');
        return;
    }
    
    const entry = document.createElement('div');
    entry.className = 'feedback-entry';

    entry.innerHTML = `
    <hr><p><strong>${username}</strong></p>
    <p>${email}</p>
    <p>${commentsValue}</p><hr>`;

    feedbackDisplay.appendChild(entry);
    counter.textContent = 'Characters: 0';
});

//Step 4: Use event bubbling & delegation to manage events of all input fields
form.addEventListener('input', (e) => {
    const t = e.target;
    if (e.target.matches('#username, #email, #comments, textarea, input')) {
        e.stopPropagation();
    }
    });

    form.addEventListener('input', (e) => {
        const t = e.target;
        if (!t.matches('#username, #email, #comments')) return;
        const next = t.nextElementSibling;
        if (next && next.classList && next.classList.contains('error-text')) {
        next.remove();
    }
})

//Step 5: Prevent background clicks