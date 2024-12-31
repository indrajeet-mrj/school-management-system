function showPage(pageId) {
    const sections = document.querySelectorAll('.card');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function addStudent() {
    const name = document.getElementById('studentName').value;
    const className = document.getElementById('studentClass').value;
    if (name && className) {
        const li = document.createElement('li');
        li.textContent = `${name} - ${className}`;
        document.getElementById('studentList').appendChild(li);
        document.getElementById('studentName').value = '';
        document.getElementById('studentClass').value = '';
    } else {
        alert('Please fill out all fields!');
    }
}

function addTeacher() {
    const name = document.getElementById('teacherName').value;
    const subject = document.getElementById('teacherSubject').value;
    if (name && subject) {
        const li = document.createElement('li');
        li.textContent = `${name} - ${subject}`;
        document.getElementById('teacherList').appendChild(li);
        document.getElementById('teacherName').value = '';
        document.getElementById('teacherSubject').value = '';
    } else {
        alert('Please fill out all fields!');
    }
}

function addClass() {
    const name = document.getElementById('className').value;
    const capacity = document.getElementById('classCapacity').value;
    if (name && capacity) {
        const li = document.createElement('li');
        li.textContent = `${name} - Capacity: ${capacity}`;
        document.getElementById('classList').appendChild(li);
        document.getElementById('className').value = '';
        document.getElementById('classCapacity').value = '';
    } else {
        alert('Please fill out all fields!');
    }
}   
function openHelp() {
    showPage('helpSupport');
}

function contactAdmin() {
    showPage('contactAdmin');
}

function submitContactForm() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    if (name && email && message) {
        alert("Your message has been sent to the admin. We will get back to you soon!");
        showPage('dashboard');
    } else {
        alert("Please fill out all fields!");
    }
}