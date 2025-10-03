// EmailJS ile iletişim formu işlemleri
document.addEventListener('DOMContentLoaded', function () {
    // Form ve mesaj alanını seç
    const contactForm = document.getElementById('contact-form');
    const resultMessage = document.getElementById('form-result');

    if (!contactForm) return;

    // EmailJS başlat
    emailjs.init('ny1QhU0f1LuLW6fPR'); // Buraya EmailJS kullanıcı ID'nizi yazın

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Gönderim sırasında kullanıcıya mesaj göster
        if (resultMessage) {
            resultMessage.classList.remove('hidden');
            resultMessage.innerHTML = `
                <div class="flex items-center justify-center space-x-2 text-blue-600">
                    <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Mesajınız gönderiliyor...</span>
                </div>
            `;
        }

        // EmailJS ile formu gönder
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
            .then(() => {
                if (resultMessage) {
                    resultMessage.innerHTML = `
                        <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
                            <div class="flex items-center">
                                <svg class="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                <p>Mesaj başarıyla gönderildi!</p>
                            </div>
                        </div>
                    `;
                }
                contactForm.reset();
                setTimeout(() => {
                    if (resultMessage) resultMessage.classList.add('hidden');
                }, 5000);
            })
            .catch((error) => {
                console.error('EmailJS Hata:', error);
                if (resultMessage) {
                    resultMessage.innerHTML = `
                        <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
                            <div class="flex items-center">
                                <svg class="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                </svg>
                                <p>Bir hata oluştu. Lütfen tekrar deneyin.</p>
                            </div>
                        </div>
                    `;
                }
            });
    });
});
