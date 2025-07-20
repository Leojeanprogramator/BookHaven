document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.classList.toggle('active');
  });
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Fechar todos os itens
        document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));

        // Abrir o clicado se não estava ativo
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});


