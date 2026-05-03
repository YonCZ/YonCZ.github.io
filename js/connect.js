/**
 * Handles the contact form submission via Formspree API
 */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.connect-form');
  const submitBtn = document.querySelector('.btn-submit');

  if (!form || !submitBtn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const originalText = submitBtn.textContent;
    submitBtn.classList.remove('success', 'error');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        submitBtn.textContent = 'Message sent successfully!';
        submitBtn.classList.add('success');
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      submitBtn.textContent = 'Error – try again';
      submitBtn.classList.add('error');
      submitBtn.disabled = false;
      
      setTimeout(() => {
        if (!submitBtn.classList.contains('success')) {
          submitBtn.textContent = originalText;
          submitBtn.classList.remove('error');
        }
      }, 3000);
    }
  });
});