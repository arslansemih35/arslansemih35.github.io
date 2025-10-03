(function() {
  // EmailJS init
  emailjs.init("ny1QhU0f1LuLW6fPR"); // Buraya Public Key'in gelecek

  const form = document.getElementById('contact-form');
  const resultDiv = document.getElementById('form-result');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Butonu devre dışı bırak ve gönderim sırasında "Gönderiliyor..." yap
    submitBtn.disabled = true;
    submitBtn.textContent = "Gönderiliyor...";

    // Önceki mesaj ve renkleri temizle
    resultDiv.classList.remove('text-green-500', 'text-red-500');
    resultDiv.classList.add('hidden');
    resultDiv.textContent = '';

    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    };

    const serviceID = 'service_8wvyfiq';
    const templateID = 'template_6r9esv1';

    emailjs.send(serviceID, templateID, formData)
      .then(() => {
        resultDiv.textContent = "Mesajınız başarıyla gönderildi!";
        resultDiv.classList.remove('hidden');
        resultDiv.classList.add('text-green-500');

        // Formu sıfırla
        form.reset();

        // Butonu eski haline getir
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
