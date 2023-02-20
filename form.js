function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "bistecformteste@gmail.com",
        Password : "bart7931",
        To : 'guilhermebistec@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Email novo - Formulário de Contato",
        Body : "Testandooooooooooooooooooooooooooooooooooo"
    }).then(
      message => alert(message)
    );
}