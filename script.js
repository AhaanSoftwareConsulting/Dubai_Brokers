function toggleFaq(id) {
      const faq = document.getElementById(id);
      const isOpen = faq.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-box').forEach(box => {
        box.classList.remove('open');
        const icon = box.querySelector('.toggle-icon');
        if (icon) icon.textContent = '+';
        const answer = box.querySelector('.faq-answer');
        if (answer) answer.style.display = 'none';
      });

      // Open selected if it was closed
      if (!isOpen) {
        faq.classList.add('open');
        const icon = faq.querySelector('.toggle-icon');
        if (icon) icon.textContent = '×';
        const answer = faq.querySelector('.faq-answer');
        if (answer) answer.style.display = 'block';
      }
    }

    // Initial state
    document.querySelectorAll('.faq-answer:not(:first-of-type)').forEach(a => a.style.display = 'none');