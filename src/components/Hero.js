export const Hero = (tag, title, ctaText) => {
  return `
    <header class="hero">
      <div class="hero-content">
        <span class="hero-tag">${tag}</span>
        <h1 class="hero-title">
            <span id="type-line-1" class="typing-line"></span>
            <span id="type-line-2" class="typing-line"></span>
        </h1>
        <div class="hero-actions">
          <button class="btn-hero">${ctaText}</button>
        </div>
      </div>
    </header>
  `;
};
