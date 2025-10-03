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
    
    // Basit validasyon
    if (!formData.name || !formData.email || !formData.message) {
      resultDiv.textContent = "Lütfen tüm zorunlu alanları doldurun.";
      resultDiv.classList.remove('hidden');
      resultDiv.classList.add('text-red-500');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Gönder';
      return;
    }
    
    const serviceID = 'service_zv5t4jq';
    const templateID = 'template_6r9esv1';
    
    emailjs.send(serviceID, templateID, formData)
      .then(() => {
        // Başarılı mesaj
        resultDiv.textContent = "✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.";
        resultDiv.classList.remove('hidden');
        resultDiv.classList.add('text-green-500', 'p-4', 'rounded-md', 'bg-green-500/10');
        form.reset();
        
        // 5 saniye sonra mesajı gizle
        setTimeout(() => {
          resultDiv.classList.add('hidden');
        }, 5000);
      })
      .catch((error) => {
        console.error('Email gönderim hatası:', error);
        resultDiv.textContent = "❌ Mesaj gönderilirken bir hata oluştu. Lütfen doğrudan email ile iletişime geçin: arslansemih328@gmail.com";
        resultDiv.classList.remove('hidden');
        resultDiv.classList.add('text-red-500', 'p-4', 'rounded-md', 'bg-red-500/10');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Gönder';
      });
  });
})();
