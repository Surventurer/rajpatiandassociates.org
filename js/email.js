function sendMail(){
    let parms = {
        name : document.getElementById('name').value,
        email : document.getElementById("email").value,
        phoneno : document.getElementById("phoneno").value,
        message : document.getElementById("message").value
    };
    console.log(parms);
    emailjs.send("service_cv2fx1f","template_7zby97m",parms).then(alert("Email Sent!!"));
    
}
function sendMail1(){
    let parms1 = {
        name : document.getElementById('name1').value,
        email : document.getElementById("email1").value,
        phoneno : document.getElementById("phoneno1").value,
        message : document.getElementById("message1").value
    };
    console.log(parms1);
    emailjs.send("service_cv2fx1f","template_7zby97m",parms1).then(alert("Email Sent!!"));
    
}
