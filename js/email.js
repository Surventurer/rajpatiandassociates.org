function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

function sendMail() {
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById("email").value,
        phoneno: document.getElementById("phoneno").value,
        message: document.getElementById("message").value
    };
    
    if (!parms.name || !parms.email || !parms.phoneno || !parms.message) {
        alert("All fields are required.");
    } else if (!isValidEmail(parms.email)) {
        alert("Please enter a valid email address.");
    } else {
        emailjs.send("service_cv2fx1f", "template_7zby97m", parms).then(alert("Email Sent!!"));
    }
}

function sendMail1() {
    let parms1 = {
        name: document.getElementById('name1').value,
        email: document.getElementById("email1").value,
        phoneno: document.getElementById("phoneno1").value,
        message: document.getElementById("message1").value
    };
    
    if (!parms1.name || !parms1.email || !parms1.phoneno || !parms1.message) {
        alert("All fields are required.");
    } else if (!isValidEmail(parms1.email)) {
        alert("Please enter a valid email address.");
    } else {
        emailjs.send("service_cv2fx1f", "template_7zby97m", parms1).then(alert("Email Sent!!"));
    }
}
