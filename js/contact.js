// contact.js
(function() {
  // EmailJS public key ile init
  emailjs.init("ny1QhU0f1LuLW6fPR");

  const form = document.getElementById('contact-form');
  const resultDiv = document.getElementById('form-result');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Gönderim öncesi butonu devre dışı bırak
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Gönderiliyor...';

    // Önceki mesajı temizle
    resultDiv.classList.remove('text-green-500', 'text-red-500');
    resultDiv.classList.add('hidden');
    resultDiv.textContent = '';

    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim()
    };

    const serviceID = 'service_8wvyfiq';
    const templateID = 'template_6r9esv1';

    emailjs.send(serviceID, templateID, formData)
      .then(() => {
        // Başarılı mesaj
        resultDiv.textContent = "Mesajınız başarıyla gönderildi!";
        resultDiv.classList.remove('hidden');
        resultDiv.classList.add('text-green-500');

        form.reset();

        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Gönder';
      })
      .catch((error) => {
        console.error('Email gönderim hatası:', error);

        resultDiv.textContent = "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.";
        resultDiv.classList.remove('hidden');
        resultDiv.classList.add('text-red-500');

        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Gönder';
      });
  });
})();
