function openWhatsApp() {
    const countryCodeSelect = document.getElementById('countryCode');
    const phoneNumberInput = document.getElementById('phoneNumber');

    const countryCode = countryCodeSelect.value.trim();
    const phoneNumber = phoneNumberInput.value.trim();

    if (!phoneNumber) {
        alert('Please enter a phone number.');
        return;
    }

    // Generate the WhatsApp link with country code and phone number
    const formattedPhoneNumber = `${countryCode}${phoneNumber}`;

    // Encode the phone number for URL (replace '+' with '%2B')
    const encodedPhoneNumber = encodeURIComponent(formattedPhoneNumber);

    // Generate the WhatsApp URL
    const whatsappLink = `https://wa.me/${encodedPhoneNumber}`;

    // Open the link in a new tab
    window.open(whatsappLink, '_blank');
}
