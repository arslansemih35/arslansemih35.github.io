// contact.js
(function() {
  // EmailJS init
  emailjs.init("ny1QhU0f1LuLW6fPR"); // Buraya Public Key'in gelecek

  const form = document.getElementById('contact-form');
  const resultDiv = document.getElementById('form-result');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    };

    // Servis ve template ID'nizi buraya girin
    const serviceID = 'service_8wvyfiq';
    const templateID = 'template_6r9esv1';

    emailjs.send(serviceID, templateID, formData)
      .then(() => {
        resultDiv.textContent = "Mesajınız başarıyla gönderildi!";
        resultDiv.classList.remove('hidden');
        resultDiv.classList.add('text-green-500');
        form.reset();
      }, (error) => {
        console.error('FAILED...', error);
        resultDiv.textContent = "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.";
        resultDiv.classList.remove('hidden');
        resultDiv.classList.add('text-red-500');
      });
  });
})();
