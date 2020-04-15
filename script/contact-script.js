(function(){
   emailjs.init('user_9A2mEC5AEk6M0b0qioBEV');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate the contact number value
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('portfolio_contact', 'contact_form', this);
        alert("Thanks for reaching out. I will get back to you soon.");
    });
}
