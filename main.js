function sendMail(){
let params = {
    from_name:document.getElementById("name").value,
    email_id:document.getElementById("email").value,
    phone_number:document.getElementById("phone").value,
    message:document.getElementById("message").value
}
emailjs.send("service_h0czyyb" , "template_uu1f3qt" , params).then(alert("Message sent !!"))
}
