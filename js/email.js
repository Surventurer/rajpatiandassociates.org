function sendMail(){
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById("email").value,
        phoneno: document.getElementById("phoneno").value,
        message: document.getElementById("message").value
    };
    
    if (parms.name && parms.email && parms.phoneno && parms.message) {
        emailjs.send("service_cv2fx1f","template_7zby97m",parms).then(() => alert("Email Sent!!"));
    } else {
        alert("All fields are required.");
    }
}

function sendMail1(){
    let parms1 = {
        name: document.getElementById('name1').value,
        email: document.getElementById("email1").value,
        phoneno: document.getElementById("phoneno1").value,
        message: document.getElementById("message1").value
    };
    
    if (parms1.name && parms1.email && parms1.phoneno && parms1.message) {
        emailjs.send("service_cv2fx1f","template_7zby97m",parms1).then(() => alert("Email Sent!!"));
    } else {
        alert("All fields are required.");
    }
}
