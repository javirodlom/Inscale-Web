export const Contact = () => {
    return `
    <section class="container section contact-section" id="contacto">
      <div class="contact-grid">
        <div class="contact-info">
          <h2 class="section-title" style="text-align: left;">¿Hablamos?</h2>
          <p class="section-description">Te responderemos en menos de 24h. Si encajamos, agendamos una reunión sin compromiso.</p>
          <div class="contact-methods">
            <div class="contact-item">
              <span class="icon">📧</span>
              <span>hola@inscalemedia.com</span>
            </div>
            <div class="contact-item">
              <span class="icon">📞</span>
              <span>+34 XXX XXX XXX</span>
            </div>
          </div>
        </div>
        <form class="contact-form btn-outline">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" placeholder="Tu nombre" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="tu@email.com" required>
          </div>
          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea id="message" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Enviar mensaje</button>
        </form>
      </div>
    </section>
  `;
};
