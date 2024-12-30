const input = document.querySelector('[autocomplete=verticode');
input.addEventListener('input', () => input.style.setProperty('--_otp-digit', input.selectionStart));